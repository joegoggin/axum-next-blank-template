use axum::{
    Extension, Router,
    http::{HeaderName, Method},
    middleware,
    routing::get,
};
use tower_http::cors::{Any, CorsLayer};

use crate::{
    controllers::message::MessageController,
    core::{env::Env, logger::Logger},
};

pub struct MainRouter;

pub type EvnExt = Extension<Env>;

impl MainRouter {
    pub fn new(env: Env) -> Router {
        let cors = CorsLayer::new()
            .allow_methods([Method::POST, Method::GET, Method::PUT, Method::DELETE])
            .allow_origin(Any)
            .allow_headers([
                HeaderName::from_static("content-type"),
                HeaderName::from_static("authorization"),
            ]);

        Router::new()
            .route("/", get(MessageController::get_hello_message))
            .layer(Extension(env))
            .layer(cors)
            .layer(middleware::from_fn(Logger::log_request_and_response))
    }
}
