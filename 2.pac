function FindProxyForURL(url, host) {
	
    if (    
        dnsDomainIs(host, "115.com")||
        dnsDomainIs(host, "126.com")||
        dnsDomainIs(host, "126.net")||
        dnsDomainIs(host, "163.com")||
        dnsDomainIs(host, "aliyuncs.com")||
        dnsDomainIs(host, "jegotrip.cn")||
        dnsDomainIs(host, "iqiyi.com")||
        dnsDomainIs(host, "waqi.info")||
        dnsDomainIs(host, "rdimg.com")||
        dnsDomainIs(host, "plex.direct")||
        dnsDomainIs(host, "plex.tv")||
        dnsDomainIs(host, "cdntips.net")||
        dnsDomainIs(host, "189store.com")||
        dnsDomainIs(host, "digicert.com")||
        dnsDomainIs(host, "lencr.org")||
        dnsDomainIs(host, "jegotrip.com.cn")||
        dnsDomainIs(host, "qlogo.cn")||
        dnsDomainIs(host, "qpic.cn ")||
        dnsDomainIs(host, "right.com.cn")||
        dnsDomainIs(host, "alipay.com")||
        dnsDomainIs(host, "taobao.com")||
        dnsDomainIs(host, "alicdn.com")||
        dnsDomainIs(host, "aliyun.com")||
        dnsDomainIs(host, "tmall.com")||
        dnsDomainIs(host, "baidu.com")||
        dnsDomainIs(host, "aaplimg.com")||
        dnsDomainIs(host, "apple.co")||
        dnsDomainIs(host, "apple.com")||
        dnsDomainIs(host, "apple.com.cn")||
        dnsDomainIs(host, "apple-livephotoskit.com")||
        dnsDomainIs(host, "apple-mapkit.com")||
        dnsDomainIs(host, "applemusic.com")||
        dnsDomainIs(host, "appstore.com")||
        dnsDomainIs(host, "apzones.com")||
        dnsDomainIs(host, "cdn-apple.com")||
        dnsDomainIs(host, "me.com")||
        dnsDomainIs(host, "mzstatic.com")||
        dnsDomainIs(host, "akadns.net")||
        dnsDomainIs(host, "edgekey.net")||
        dnsDomainIs(host, "caiyunapp.com")||
        dnsDomainIs(host, "smzdm.com")||
        dnsDomainIs(host, "dapenti.com")||
        dnsDomainIs(host, "bdstatic.com")||
        dnsDomainIs(host, "baidu.com")||
        dnsDomainIs(host, "qq.com")||
        dnsDomainIs(host, "alipayobjects.com")||
        dnsDomainIs(host, "abchina.com")||
        dnsDomainIs(host, "abchina.com.cn")||
        dnsDomainIs(host, "360buyimg.com")||
        dnsDomainIs(host, "95516.com")||
        dnsDomainIs(host, "mmstat.com")||
        dnsDomainIs(host, "autonavi.com")||
        dnsDomainIs(host, "bestpay.cn")||
        dnsDomainIs(host, "bestpay.com.cn")||
        dnsDomainIs(host, "cmbchina.com")||
        dnsDomainIs(host, "cmbimg.com")||
        dnsDomainIs(host, "mi.com")||
        dnsDomainIs(host, "uzero.cn")||
        dnsDomainIs(host, "xiaomiyoupin.com")||
        dnsDomainIs(host, "xiaomi.net")||
        dnsDomainIs(host, "go189.cn")||
        dnsDomainIs(host, "189.cn")||
        dnsDomainIs(host, "10086.cn")||
        dnsDomainIs(host, "miguvideo.com")||
        dnsDomainIs(host, "starbucks.com.cn")||
        dnsDomainIs(host, "dmall.com")||
        dnsDomainIs(host, "dmallcdn.com")||
        dnsDomainIs(host, "ele.me")||
        dnsDomainIs(host, "ccb.com")||
        dnsDomainIs(host, "sgcc.com.cn")||
        dnsDomainIs(host, "qcloud.com")||
        dnsDomainIs(host, "xf-yun.com")||
        dnsDomainIs(host, "amap.com")||
        dnsDomainIs(host, "jd.com")||
        dnsDomainIs(host, "ruanmei.com")||
        dnsDomainIs(host, "ithome.com")||
        dnsDomainIs(host, "geekpark.net")||
        dnsDomainIs(host, "gov.cn")||
        dnsDomainIs(host, "internetofcity.cn")||
        dnsDomainIs(host, "servicewechat.com")||
        dnsDomainIs(host, "wechat.com")||
        dnsDomainIs(host, "weixin.com")||
        dnsDomainIs(host, "tenpay.com")||
        dnsDomainIs(host, "gtimg.com")||
        dnsDomainIs(host, "qpic.cn")||
        dnsDomainIs(host, "qlogo.cn")||
        dnsDomainIs(host, "iot-tencent.com")||
        dnsDomainIs(host, "edge.api.myqnapcloud.com")||
        isInNet(host, "0.0.0.0", "255.0.0.0")||
	      isInNet(host, "10.0.0.0", "255.0.0.0")|| 
        isInNet(host, "127.0.0.0", "255.255.255.0")|| 
	      isInNet(host, "169.254.0.0", "255.255.0.0")|| 
        isInNet(host, "192.168.0.0", "255.255.0.0")|| 
        isInNet(host, "172.16.0.0", "255.240.0.0")|| 
        isInNet(host, "202.113.16.0", "255.255.240.0")|| 
        isInNet(host, "202.113.224.0", "255.255.240.0")|| 
        isInNet(host, "224.0.0.0", "224.0.0.0")||
	      isInNet(host, "240.0.0.0", "240.0.0.0")||
        isInNet(host, "222.30.61.0", "255.255.225.0")
    ) 
	{
        return "DIRECT";
      }


    return "SOCKS 10.0.0.8:7891";

}
