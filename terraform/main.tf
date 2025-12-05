terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.region
}

variable "region" {
  default = "us-east-1"
}

variable "lambda_auth_zip" {
  default = "../dist/auth.zip"
}

variable "lambda_api_zip" {
  default = "../dist/api.zip"
}

variable "users_table_name" {
  default = "users"
}

variable "data_table_name" {
  default = "data"
}

# DynamoDB: Users
resource "aws_dynamodb_table" "users" {
  name           = var.users_table_name
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "email"

  attribute {
    name = "email"
    type = "S"
  }
}

# DynamoDB: Data
resource "aws_dynamodb_table" "data" {
  name           = var.data_table_name
  billing_mode   = "PAY_PER_REQUEST"
  hash_key       = "owner"
  range_key      = "id"

  attribute {
    name = "owner"
    type = "S"
  }

  attribute {
    name = "id"
    type = "S"
  }
}

# IAM role for Lambda
resource "aws_iam_role" "lambda_exec" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action = "sts:AssumeRole",
      Effect = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_iam_role_policy_attachment" "lambda_dynamodb" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess"
}

# Auth Lambda
resource "aws_lambda_function" "auth" {
  filename         = var.lambda_auth_zip
  function_name    = "auth-lambda"
  role             = aws_iam_role.lambda_exec.arn
  handler          = "index.handler"
  runtime          = "nodejs18.x"
  source_code_hash = filebase64sha256(var.lambda_auth_zip)
  environment {
    variables = {
      USERS_TABLE = aws_dynamodb_table.users.name
      JWT_SECRET  = "change-this-secret"
    }
  }
}

# API Lambda
resource "aws_lambda_function" "api" {
  filename         = var.lambda_api_zip
  function_name    = "api-lambda"
  role             = aws_iam_role.lambda_exec.arn
  handler          = "index.handler"
  runtime          = "nodejs18.x"
  source_code_hash = filebase64sha256(var.lambda_api_zip)
  environment {
    variables = {
      DATA_TABLE  = aws_dynamodb_table.data.name
      JWT_SECRET  = "change-this-secret"
    }
  }
}

# API Gateway
resource "aws_apigatewayv2_api" "api_gateway" {
  name          = "cloud-scale-api"
  protocol_type = "HTTP"
}

# Lambda integration
resource "aws_apigatewayv2_integration" "auth_integration" {
  api_id           = aws_apigatewayv2_api.api_gateway.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.auth.invoke_arn
}

resource "aws_apigatewayv2_integration" "api_integration" {
  api_id           = aws_apigatewayv2_api.api_gateway.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.api.invoke_arn
}

# Lambda permissions to be invoked by API Gateway
resource "aws_lambda_permission" "auth_api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.auth.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api_gateway.execution_arn}/*/*"
}

resource "aws_lambda_permission" "api_api_gateway" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.api.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.api_gateway.execution_arn}/*/*"
}

# Routes
resource "aws_apigatewayv2_route" "auth_route" {
  api_id    = aws_apigatewayv2_api.api_gateway.id
  route_key = "POST /auth"
  target    = "integrations/${aws_apigatewayv2_integration.auth_integration.id}"
}

resource "aws_apigatewayv2_route" "api_route" {
  api_id    = aws_apigatewayv2_api.api_gateway.id
  route_key = "ANY /data"
  target    = "integrations/${aws_apigatewayv2_integration.api_integration.id}"
}

# Deployment
resource "aws_apigatewayv2_stage" "api_stage" {
  api_id      = aws_apigatewayv2_api.api_gateway.id
  name        = "prod"
  auto_deploy = true
}
