FROM node:14

RUN mkdir /front
WORKDIR /front
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 8000
CMD [ "yarn", "start" ]