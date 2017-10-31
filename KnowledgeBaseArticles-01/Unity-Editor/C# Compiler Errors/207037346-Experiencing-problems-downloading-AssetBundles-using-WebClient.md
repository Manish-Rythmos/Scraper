

**Symptoms**


- Download speed while using WebClient is pretty slow.



**Cause**


- WebClient, which uses WebRequest, is slow when downloading AssetBundles since the AssetBundles are made to be downloaded by the WWW class.



**Resolution**



This is a potential workaround: Declare the WebClient's proxy to null (webClient.Proxy=null) since the Request is configured to auto detect proxies. If this is declared, it will avoid an initial delay. Also, there are three suggestions to speed up working with WebClient:


- Increase  *DefaultConnectionLimit*
- If it needs a proxy (e.g don't use webClient.Proxy = null) and its                                              settings are known, just establish the settings manually by script (e.g  s`tring &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0; &#xA0;&#xA0;``proxyUrl =``&quot;proxy.myproxy.com&quot;``;&#xA0;``int` `proxyPort = 8080;)`
- Deactivate  *Expect100Continue*



Another possible resolution is to use the [WWW](http://docs.unity3d.com/ScriptReference/WWW.html) class. In Unity 5.2, if you use the [WWW.LoadFromCacheOrDownload ](http://docs.unity3d.com/ScriptReference/WWW.LoadFromCacheOrDownload.html)method,  the file will be saved uncompressed in small chunks to disk as it is being download. It will not all be loaded into memory when it is downloaded. In Unity 5.3 there is an option to store the file compressed in cache with the new support for LZ4 compression added to this release.



**More Information**



For more information see the links below:



[http://stackoverflow.com/questions/754333/why-is-this-webrequest-code-slow](http://stackoverflow.com/questions/754333/why-is-this-webrequest-code-slow)



[http://www.scriptscoop.net/t/1f2d4a8a2004/c-webrequest-slow-even-with-null-proxy.html](http://www.scriptscoop.net/t/1f2d4a8a2004/c-webrequest-slow-even-with-null-proxy.html)



[http://en.code-bude.net/2013/01/21/3-things-you-should-know-to-speed-up-httpwebrequest/](http://en.code-bude.net/2013/01/21/3-things-you-should-know-to-speed-up-httpwebrequest/)



[https://holyhoehle.wordpress.com/2010/01/12/webrequest-slow/](https://holyhoehle.wordpress.com/2010/01/12/webrequest-slow/)



[http://stackoverflow.com/questions/2519655/httpwebrequest-is-extremely-slow](http://stackoverflow.com/questions/2519655/httpwebrequest-is-extremely-slow)



This article applies to Unity versions 5.x





