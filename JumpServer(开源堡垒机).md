# JumpServer(开源堡垒机)
[官网地址](https://www.jumpserver.org/)

[官方文档](https://docs.jumpserver.org/zh/v4/)

介绍：通过网页可访问配置好的多台服务器，可单独配置数据库、网页、服务器页面/命令行，并可回看操作记录

优点：

1、一个页面可以管理多台机器以及服务，无需再次开启多个终端

2、可以留下操作记录，会看命令运行记录

3、权限控制比较多，可以限制上传文件、下载文件、剪贴板使用

缺点：

1、在网页中剪贴板很难用

2、上传文件过程比较麻烦，大文件无法上传



<h2 id="Z3qdH">安装步骤（更新于2025.2.12）</h2>
> 推荐使用离线安装
>

1. 在官网下载离线包
2. 解压 

```sql
tar -xf jumpserver-ce-v4.6.0-x86_64.tar.gz 
```

3. 修改配置文件(按需修改，可以跳过)

```sql
vim config-example.txt
```

4. 安装&启动

```sql
# 安装
./jmsctl.sh install

# 启动
./jmsctl.sh start
```

> **<font style="color:rgba(0, 0, 0, 0.87);">安装完成后 JumpServer 配置文件路径为： /opt/jumpserver/config/config.txt</font>**

# 相关命令

```
# 启动
./jmsctl.sh start

# 停止
./jmsctl.sh down

# 卸载
./jmsctl.sh uninstall

# 帮助
./jmsctl.sh -h
```

# 环境访问
```shell
地址: http://<JumpServer服务器IP地址>:<服务运行端口>
用户名: admin
密码: ChangeMe
```

