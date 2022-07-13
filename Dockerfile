#FROM 10.9.55.8:5000/sce-oms-fe-portal-parent:0.0.1 as builder

#ENV HOME=/home/usr/app
#
#RUN mkdir -p $HOME
#
#WORKDIR $HOME
#
#ADD . $HOME

#COPY public/ $HOME/public
#COPY src/ $HOME/src
#COPY package.json $HOME/package.json
#
#RUN npm install
#
#RUN npm run build

FROM 10.9.55.8:5000/sce-oms-webapp-server:0.0.14

RUN mkdir /webapp

COPY build/ /webapp