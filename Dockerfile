#BuildPhase
FROM node:18-alpine as builder

WORKDIR /app

COPY ./ ./

RUN npm install

RUN npm run build 

#RunPhase 
FROM nginx
COPY --from=builder /app/dist/slot-booking-application /usr/share/nginx/html
