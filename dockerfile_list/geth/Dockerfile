# 두 번째 스테이지 (Ethereum 클라이언트 빌드)
FROM ethereum/client-go:v1.10.1

WORKDIR /app

ARG ACCOUNT_PASSWORD

COPY genesis.json /tmp 

RUN geth init /tmp/genesis.json \
    && rm -f ~/.ethereum/geth/nodekey \ 
    && echo ${ACCOUNT_PASSWORD} > /tmp/password \
    && geth account new --password /tmp/password \
    && rm -f /tmp/password

ENTRYPOINT ["geth"]