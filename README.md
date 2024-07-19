# hub
export $(grep -v '^#' .env | xargs)
nvm use 18.17.0
npm run dev