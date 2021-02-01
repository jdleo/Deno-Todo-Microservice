# use node image
FROM node:10

# set working dir
WORKDIR /usr/src/app

# copy package.json and package-lock
COPY package*.json ./

# install node packages
RUN yarn

# copy everything else
COPY . .

# expose port
EXPOSE 3000

# run react app
CMD ["yarn", "start"]