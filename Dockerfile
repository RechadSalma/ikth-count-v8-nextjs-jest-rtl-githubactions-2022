# create node & alpine
FROM node:16.14-alpine3.15

# set directory to work within
WORKDIR /iKnextApp

# copying both package.json & package-lock-json file
COPY ./package.json .
COPY ./package-lock.json .

# npm install, must have package-lock-json file to install successfully
RUN npm ci

# copy all files over
COPY . .

# test file with jest & React-Testing-Library
RUN echo 'IK TESTING' && npm run testout

# build
RUN npm run build

# CMD to start server
CMD npm run start