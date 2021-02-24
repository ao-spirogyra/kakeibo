FROM node:14.15.5
WORKDIR /kakeibo/client
COPY package.json /kakeibo/client/package.json
RUN npm install
COPY . /kakeibo/client
ENV CHOKIDAR_USEPOLLING=true
EXPOSE 3000
CMD [ "npm", "start" ]