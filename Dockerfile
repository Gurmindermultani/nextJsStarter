FROM node:14


# define build arguments
ARG SSH_PUBLIC_KEY
ARG SSH_PRIVATE_KEY

ENV NODE_ENV=production \
  PROJECT_HOME=/usr/app \
  BUILD_DEPS="git python openssh-server build-essential"

# configure SSH
RUN mkdir -p /root/.ssh \
  && touch /root/.ssh/id_rsa \
  && touch /root/.ssh/id_rsa.pub

COPY ssh/config /root/.ssh/config

# copy SSH keys
RUN echo "$SSH_PRIVATE_KEY" >> /root/.ssh/id_rsa \
  && echo "$SSH_PUBLIC_KEY" >> /root/.ssh/id_rsa.pub

# fix the permissions for SSH private key
RUN chmod 600 /root/.ssh/id_rsa \
  && chmod 600 /root/.ssh/config

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Copying source files
COPY . .

# Building app
RUN npm run build

# Running the app
CMD [ "npm", "start" ]