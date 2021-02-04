# get alpine image for builder
FROM mhart/alpine-node:12 AS builder

# set working directory
WORKDIR /app

# copy package.json
COPY /client/package.json .

# install react-scripts silently with npm
RUN npm install react-scripts -g --silent

# copy everything from /client to working directory
COPY /client .

# install all other deps
RUN yarn install

# build
RUN yarn run build

# get alpine image for serving
FROM mhart/alpine-node

# add server
RUN yarn global add serve

# set working directory
WORKDIR /app

# copy build folder
COPY --from=builder /app/build .

# server
CMD ["serve", "-p", "80", "-s", "."]