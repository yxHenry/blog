(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{542:function(s,t,n){"use strict";n.r(t);var e=n(2),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"title"}),n("p",[s._v("大部分网页都已用上了 https 协议，小程序的开发更是必须使用 https 接口，本文旨在迅速开启域名的 https 协议敏捷开发")])]),s._v(" "),n("h2",{attrs:{id:"部署-let-s-encrypt-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#部署-let-s-encrypt-证书"}},[s._v("#")]),s._v(" 部署 Let's Encrypt 证书")]),s._v(" "),n("h3",{attrs:{id:"检查服务器是否安装-python-与-git"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#检查服务器是否安装-python-与-git"}},[s._v("#")]),s._v(" 检查服务器是否安装 Python 与 Git")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("python -v\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" --version\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h3",{attrs:{id:"快速获取-let-s-encrypt-免费-ssl-证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#快速获取-let-s-encrypt-免费-ssl-证书"}},[s._v("#")]),s._v(" 快速获取 Let's Encrypt 免费 SSL 证书")]),s._v(" "),n("p",[s._v("Let's Encrypt 考虑到推广 HTTPS 的普及型会让用户简单的获取和部署 SSL 证书，所以可以采用下面简单的一键部署获取证书")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#获取letsencrypt")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/letsencrypt/letsencrypt\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入letsencrypt目录")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" letsencrypt\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#生成证书  --email后填写自己的邮箱   -d 后面填写需要配置证书的域名（支持多个哦）")]),s._v("\n./letsencrypt-auto certonly --standalone --email xx@xx.com -d "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("域名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h3",{attrs:{id:"let-s-encrypt-免费-ssl-证书获取与应用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let-s-encrypt-免费-ssl-证书获取与应用"}},[s._v("#")]),s._v(" Let's Encrypt 免费 SSL 证书获取与应用")]),s._v(" "),n("p",[s._v('在完成 Let\'s Encrypt 证书的生成之后，我们会在"/etc/letsencrypt/live/{域名}/"域名目录下有 4 个文件就是生成的密钥证书文件。')]),s._v(" "),n("ul",[n("li",[s._v("cert.pem - Apache 服务器端证书")]),s._v(" "),n("li",[s._v("chain.pem - Apache 根证书和中继证书")]),s._v(" "),n("li",[s._v("fullchain.pem - Nginx 所需要 ssl_certificate 文件")]),s._v(" "),n("li",[s._v("privkey.pem - 安全证书 KEY 文件\n以下是 nginx 的配置")])]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(" ssl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        server_name  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("域名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        root         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("文件夹指向"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        ssl_certificate "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/letsencrypt/live/{域名}/fullchain.pem"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_certificate_key "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/etc/letsencrypt/live/{域名}/privkey.pem"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_session_cache shared:SSL:1m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_session_timeout  5m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_ciphers HIGH:"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("aNULL:"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("MD5"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        ssl_prefer_server_ciphers on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#80端口跳转到Https")]),s._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name w3cschool.cn www.w3cschool.cn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("return")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("301")]),s._v(" https://www.zhimiyun.com"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[n("strong",[s._v("Let's Encrypt 证书是有效期 90 天的，需要我们自己手工更新续期才可以")])]),s._v(" "),n("h3",{attrs:{id:"let-s-encrypt-证书自动续期-实现真正的永久免费使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let-s-encrypt-证书自动续期-实现真正的永久免费使用"}},[s._v("#")]),s._v(" Let's Encrypt 证书自动续期，实现真正的永久免费使用")]),s._v(" "),n("h4",{attrs:{id:"编写-shell-脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写-shell-脚本"}},[s._v("#")]),s._v(" 编写 shell 脚本")]),s._v(" "),n("p",[s._v('执行以下命令，在"/etc/letsencrypt/live/{域名}/"域名目录下创建脚本，方便管理\n'),n("code",[s._v("vim /etc/letsencrypt/live/{域名}/updatessl.sh //创建一个名字为updatessl的脚本")]),s._v("\n然后在脚本里添加如下代码")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n/root/letsencrypt/certbot-auto renew --force-renew --pre-hook "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"service nginx stop"')]),s._v(" --post-hook "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"service nginx start"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第一行是指此脚本使用/bin/sh 来执行")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#第二行中--force-renew参数代表强制更新")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("给脚本添加可执行权限\n// 这里的文件路径填写你自己的文件路径\nchmod +x updatessl.sh")]),s._v(" "),n("h4",{attrs:{id:"创建定时任务"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建定时任务"}},[s._v("#")]),s._v(" 创建定时任务")]),s._v(" "),n("p",[s._v("打开 crontab 文件\n"),n("code",[s._v("crontab -e")]),s._v("\n然后在文件末尾添加一行以下内容\n"),n("code",[s._v("0 0 28 * * root /etc/letsencrypt/live/{域名}/updatessl.sh")]),s._v("\n我这里代表每月 28 号更新一次证书文件，文件路径填写你自己的文件路径\n重启 crontab 服务\n"),n("code",[s._v("service crond restart")])])])}),[],!1,null,null,null);t.default=a.exports}}]);