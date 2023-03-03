FROM raspbian/stretch

# ENTRYPOINT [ "/bin/bash" ]
RUN apt-get update && apt-get dist-upgrade -y
RUN apt-get -y install curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install nodejs -y

RUN echo node -v

WORKDIR /home/node/app

COPY . ./

# RUN npm i --only=production
# RUN npm run build:client