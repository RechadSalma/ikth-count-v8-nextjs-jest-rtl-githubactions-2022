# create node & alpine
FROM node:16.14-alpine3.15

# set directory to work within
WORKDIR /iKnextApp

# copy package.json file
COPY ./package.json .

# npm install
RUN npm run ikupdate

# copy all files over
COPY . .

# test file with jest & React-Testing-Library
# RUN npm run testout

# build
RUN npm run build

# CMD to start server
CMD npm run start