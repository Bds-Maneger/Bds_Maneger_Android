FROM beevelop/cordova:latest
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    apt-get -y install sudo curl wget git zsh libnss3 libatk-bridge2.0-0 gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils libgbm-dev
RUN wget https://github.com/cli/cli/releases/download/v1.6.0-pre.3/gh_1.6.0-pre.3_linux_amd64.deb -O /tmp/gh.deb && \
    dpkg -i /tmp/gh.deb && \
    rm -rfv /tmp/gh.deb
RUN curl https://deb.nodesource.com/setup_current.x | bash && \
    apt install nodejs gcc g++ make -y

ARG USERNAME=node
ARG USER_UID=1000
ARG USER_GID=$USER_UID

COPY scripts/ /tmp/library-scripts/
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive && \
    apt-get purge -y imagemagick imagemagick-6-common && \
    bash /tmp/library-scripts/common-debian.sh "true" "${USERNAME}" "${USER_UID}" "${USER_GID}" "true" && \
    npm install -g eslint && \
    npm cache clean --force > /dev/null 2>&1 && \
    apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/* /root/.gnupg /tmp/library-scripts