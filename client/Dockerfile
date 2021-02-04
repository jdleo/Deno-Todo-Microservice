# get alpine image for builder
FROM mhart/alpine-node:12 AS builder

# set working directory
WORKDIR /app

# copy everything from /client to working directory
COPY /client .

# install react-scripts silently with npm
RUN npm install react-scripts -g --silent

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