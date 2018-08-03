# Email sender service by creative fls

# requirement
- node v8
- mongo 3.6
- pm2 for production `npm install pm2`

# How to install
- clone
- `npm install`
- `cp .env.example .env`
- edit `.env` sesuaikan
- run dev : `npm run dev`
- run prod : `pm2 start .bin/www --name email-sender`
