FROM node:lts-buster

RUN apt-get update && apt-get upgrade -y
RUN apt-get install -y ffmpeg imagemagick webp
RUN npm install pm2 -g && rm -rf /var/lib/apt/lists/*
COPY package.json .
RUN yarn install --frozen-lockfile
COPY . .
CMD ['pm2-runtime', '.']
