use axum::serve;
use tokio::net::TcpListener;

use crate::routes::main::MainRouter;

use super::{app::AppResult, env::Env, logger::Logger};

pub struct Server {
    env: Env,
}

impl Server {
    pub fn new(env: Env) -> Self {
        Self { env }
    }

    pub async fn start(&self) -> AppResult<()> {
        let listener = TcpListener::bind("0.0.0.0:8000").await?;
        let router = MainRouter::new(self.env.clone());

        Logger::log_success("Server Running On Port 8000");
        serve(listener, router).await?;

        Ok(())
    }
}
