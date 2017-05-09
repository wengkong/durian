FROM node:6.10.3

RUN apt-get update

#RUN useradd jenkins --shell /bin/bash --create-home

USER jenkins
