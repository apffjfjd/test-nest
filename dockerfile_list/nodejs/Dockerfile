# 멀티 스테이지 빌드 - 첫 번째 스테이지 (Node.js 애플리케이션 빌드)
FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm run build
COPY . .

# 빌드를 수행하거나 애플리케이션을 빌드하는 명령을 추가해주세요
# 예: npm run build
EXPOSE 80
CMD ["npm", "start"]