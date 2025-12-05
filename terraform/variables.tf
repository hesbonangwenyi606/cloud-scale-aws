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
