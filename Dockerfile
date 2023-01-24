FROM node:18.8.0 

LABEL maintainer="Cael Dutson" 

LABEL description="Using a container as a server" 

LABEL cohort="I don't know propbably 4" 

LABEL animal="Cougar"

WORKDIR /app 

COPY . . 

EXPOSE 8080 

RUN npm install 

CMD ["npm", "start"]