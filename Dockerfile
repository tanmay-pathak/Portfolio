FROM node:alpine

# Create app directory
WORKDIR /app

COPY ./portfolio/package*.json ./

RUN npm install

ADD . /app/

COPY ./portfolio .

RUN npm run build

EXPOSE 3000

# For production
CMD ["npm","run","start"]

# For development
# CMD ["npm","run","dev"]