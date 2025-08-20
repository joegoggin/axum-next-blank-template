# API
rm -rf ./api/.env

echo "APP_ENV=\"dev\"" >>./api/.env

# Client
rm -rf ./client/.env

echo "NEXT_PUBLIC_API_URL=\"http://localhost:8000\"" >>./client/.env

# Posting
rm -rf ./.posting/.env

echo "API_URL=\"http://localhost:8000\"" >>./.posting/.env
