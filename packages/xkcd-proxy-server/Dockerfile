FROM node:latest
# Copy app
COPY . /home/digithinkit/xkcd-proxy
WORKDIR /home/digithinkit/
RUN cd xkcd-proxy \
    && npm install \
    && npm run prestart:prod \
    && rm -fr node_modules \
    && npm install --only=production

FROM node:slim
# Setup docker-entrypoint
COPY docker/docker-entrypoint.sh usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh / # backwards compat

# Add non root user
RUN useradd -ms /bin/bash digithinkit
WORKDIR /home/digithinkit/xkcd-proxy
COPY --from=0 /home/digithinkit/xkcd-proxy .

RUN chown -R digithinkit:digithinkit /home/digithinkit

# set project directory
WORKDIR /home/digithinkit/xkcd-proxy

# Expose port
EXPOSE 8000

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["start"]