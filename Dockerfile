FROM mhart/alpine-node
RUN mkdir -p /usr/html
WORKDIR /usr/html
COPY package.json .
RUN npm install --production 
COPY . .
CMD ["npm", "start", "--production"]