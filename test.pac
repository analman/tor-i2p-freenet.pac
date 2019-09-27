function FindProxyForURL(url, host)
{
  var TOR = "SOCKS5 127.0.0.1:9150; PROXY 127.0.0.1:9150; DIRECT"
  var I2P = "SOCKS5 127.0.0.1:4447; PROXY 127.0.0.1:4444; DIRECT"

  if (dnsDomainIs(host, ".onion")) return TOR;
  if (dnsDomainIs(host, ".i2p")) return I2P;

  }
  return "DIRECT";
}
