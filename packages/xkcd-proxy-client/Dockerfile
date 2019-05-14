FROM node:latest
# Copy app
COPY . /home/digithinkit/xkcd-proxy-client
WORKDIR /home/digithinkit/
RUN cd xkcd-proxy-client \
    && npm install \
    && npm run build

FROM nginx:latest
COPY --from=0 /home/digithinkit/xkcd-proxy-client/dist /var/www/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
