use axum::Json;

use crate::{core::error::server_error_response::ServerResult, responses::message::Message};

pub struct MessageController;

impl MessageController {
    pub async fn get_hello_message() -> ServerResult<Json<Message>> {
        let response = Message {
            message: "Hello from API!".to_string(),
        };

        Ok(Json::from(response))
    }
}
