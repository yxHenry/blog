---
title: 服务器配置https
date: 2020-05-27
sidebar: "auto"
categories:
  - 服务器端
tags:
  - https
  - Nginx
  - Let's Encrypt
---

::: tip
大部分网页都已用上了https协议，小程序的开发更是必须使用https接口，本文旨在迅速开启域名的https协议敏捷开发
:::

<!-- more -->

## 部署 Let's Encrypt 证书

### 检查服务器是否安装 Python 与 Git

```shell
python -v
git --version
```

### 快速获取 Let's Encrypt 免费 SSL 证书

Let's Encrypt 考虑到推广 HTTPS 的普及型会让用户简单的获取和部署 SSL 证书，所以可以采用下面简单的一键部署获取证书

```shell
#获取letsencrypt
git clone https://github.com/letsencrypt/letsencrypt
#进入letsencrypt目录
cd letsencrypt
#生成证书  --email后填写自己的邮箱   -d 后面填写需要配置证书的域名（支持多个哦）
./letsencrypt-auto certonly --standalone --email xx@xx.com -d {域名}
```

### Let's Encrypt 免费 SSL 证书获取与应用

在完成 Let's Encrypt 证书的生成之后，我们会在"/etc/letsencrypt/live/{域名}/"域名目录下有 4 个文件就是生成的密钥证书文件。

- cert.pem - Apache 服务器端证书
- chain.pem - Apache 根证书和中继证书
- fullchain.pem - Nginx 所需要 ssl_certificate 文件
- privkey.pem - 安全证书 KEY 文件
  以下是 nginx 的配置

```shell
server {
        listen       443;
        server_name  {域名};
        ssl on;
        root         /usr/share/nginx/html;

        ssl_certificate "/etc/letsencrypt/live/{域名}/fullchain.pem";
        ssl_certificate_key "/etc/letsencrypt/live/{域名}/privkey.pem";
        ssl_session_cache shared:SSL:1m;
        ssl_session_timeout  5m;
        ssl_protocols SSLv2 SSLv3 TLSv1;
        ssl_ciphers HIGH:!aNULL:!MD5;
        ssl_prefer_server_ciphers on;

        location / {
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
```

**Let's Encrypt 证书是有效期 90 天的，需要我们自己手工更新续期才可以**

### Let's Encrypt 证书自动续期，实现真正的永久免费使用

#### 编写 shell 脚本

执行以下命令，在"/etc/letsencrypt/live/{域名}/"域名目录下创建脚本，方便管理
`vim /etc/letsencrypt/live/{域名}/updatessl.sh //创建一个名字为updatessl的脚本`
然后在脚本里添加如下代码

```shell
#!/bin/sh
/usr/local/src/Python-2.7.12/letsencrypt/certbot-auto renew --force-renew --pre-hook "service nginx stop" --post-hook "service nginx start"
#第一行是指此脚本使用/bin/sh 来执行
#第二行中--force-renew参数代表强制更新
```

给脚本添加可执行权限
// 这里的文件路径填写你自己的文件路径
chmod +x updatessl.sh

#### 创建定时任务

打开 crontab 文件
`crontab -e`
然后在文件末尾添加一行以下内容
`0 0 28 * * root /etc/letsencrypt/live/{域名}/updatessl.sh //我这里代表每月28号更新一次证书文件，文件路径填写你自己的文件路径`
重启 crontab 服务
