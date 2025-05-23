use anyhow::Error;
use dotenv::dotenv;
use std::env;

use super::app::AppResult;

#[derive(Debug)]
pub enum AppEnv {
    Dev,
    Prod,
}

impl AppEnv {
    pub fn from_string(string: String) -> AppResult<Self> {
        if string == "Dev" || string == "dev" {
            return Ok(AppEnv::Dev);
        }

        if string == "Prod" || string == "prod" {
            return Ok(AppEnv::Prod);
        }

        return Err(Error::msg(format!(
            "Failed to create ENV.\n{} is not a vaild AppEnv.",
            string
        )));
    }
}

#[derive(Debug)]
pub struct Env {
    pub database_url: String,
    pub app_env: AppEnv,
}

impl Env {
    pub fn new() -> AppResult<Self> {
        dotenv().ok();

        let database_url = env::var("DATABASE_URL")?;
        let app_env = env::var("APP_ENV")?;

        Ok(Self {
            database_url,
            app_env: AppEnv::from_string(app_env)?,
        })
    }

    pub fn is_dev_mode(&self) -> bool {
        match self.app_env {
            AppEnv::Dev => true,
            AppEnv::Prod => false,
        }
    }
}
