# 使用Node.js 20.13作为基础镜像
FROM node:20.13 as builder

# 设置工作目录
WORKDIR /app

# 复制package.json和yarn.lock
COPY package.json yarn.lock ./

# 安装Yarn
RUN npm install -g yarn

# 安装依赖并构建项目
COPY . .
RUN yarn install --frozen-lockfile && yarn build

# 第二阶段：使用Nginx提供静态文件服务
FROM nginx:alpine

# 删除Nginx默认配置
RUN rm -rf /usr/share/nginx/html/*

# 将构建产物复制到Nginx的静态资源目录
COPY --from=builder /app/out /usr/share/nginx/html

# 暴露80端口
EXPOSE 80

# 启动Nginx
CMD ["nginx", "-g", "daemon off;"]