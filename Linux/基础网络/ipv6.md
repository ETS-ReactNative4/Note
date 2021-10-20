[如何获得机器的可ping通的IPv6地址？](https://qastack.cn/unix/423534/how-do-i-get-the-pingable-ipv6-address-of-my-machine)

## No route to host
➜  ~ ping6 -I awdl0 2001:19f0:5:3958:5400:03ff:fea2:a39a
PING6(56=40+8+8 bytes) fe80::6018:7cff:fe1b:fc99%awdl0 --> 2001:19f0:5:3958:5400:3ff:fea2:a39a
ping6: sendmsg: No route to host

上面的问题可能是因为：
IP forwarding was not activated for IPV6 on my router. The following command activate it temporarily :
