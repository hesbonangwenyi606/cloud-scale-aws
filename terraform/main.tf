terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  access_key = "test"       # dummy value for LocalStack
  secret_key = "test"       # dummy value for LocalStack
  region     = var.region

  endpoints {
    apigateway = "http://localhost:4566"
    lambda     = "http://localhost:4566"
    dynamodb   = "http://localhost:4566"
  }
}
