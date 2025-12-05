variable "region" {
  description = "AWS region to deploy"
  default     = "us-east-1"
}

variable "lambda_auth_zip" {
  description = "Path to auth Lambda zip"
  default     = "../dist/auth.zip"
}

variable "lambda_api_zip" {
  description = "Path to API Lambda zip"
  default     = "../dist/api.zip"
}
