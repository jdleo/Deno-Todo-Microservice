# use node image
FROM node:10

# set working dir
WORKDIR /app

# copy package.json and package-lock
COPY /client/package*.json ./

# install node packages
RUN yarn

# copy everything else
COPY /client .

# expose port
EXPOSE 3000

# run react app
CMD ["yarn", "start"]