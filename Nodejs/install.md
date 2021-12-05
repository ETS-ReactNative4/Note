## install Node.js on CentOS 8
For example, to install [Node.js 12:](https://nodejs.org/en/download/package-manager/#centos-fedora-and-red-hat-enterprise-linux)
```
dnf module install nodejs:12
```

## [上边的方法不怎么方便](https://cloudwafer.com/blog/installing-nodejs-on-centos7/)
Updating System Packages on CentOS
```
sudo yum update
```

Step 1: Install Build Tools and Add Node.js Yum Repository
```
sudo yum install -y gcc-c++ make
sudo curl -sL https://rpm.nodesource.com/setup_12.x | sudo -E bash -
```


sudo yum install -y nodej

## [最好的方法先安装nvm](../Nodejs/Node-Version-Manage/nvm/command.md)
