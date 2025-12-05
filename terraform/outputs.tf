output "api_invoke_url" {
  value = aws_apigatewayv2_stage.api_stage.invoke_url
  description = "The invoke URL for the API Gateway"
}
