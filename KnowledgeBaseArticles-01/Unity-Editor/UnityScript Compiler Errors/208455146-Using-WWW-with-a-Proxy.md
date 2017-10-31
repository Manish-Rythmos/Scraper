**Symptoms**  
- I want to use WWW with a Proxy in players (runtime), but it does not work. (Not WebPlayer)

**Cause** 
If you use WWW with a Proxy in players (runntime, not WebPlayer) it may fail.  

**Resolution** 
WebPlayer takes the Proxy settings from the browser automatically. Other players (runtime) work differently and cannot use a Proxy. Therefore you can use this workaround with the WebClient and WebProxy classes and still use the Proxy:
```
string yourURL = "http://yourURL.com";
WebClient client = new WebClient();

WebProxy proxy = new WebProxy("yourproxyserver.com"); // you can use yourproxyserver.com:port
// check proxy.Credentials property and NetworkCredential class if you proxy uses user/password

client.Proxy = proxy;
```


With this code, you can use WebProxy.Credentials and the NetworkCredential class to set user/password info.

**More Information**
- [WebClient](https://msdn.microsoft.com/en-us/library/system.net.webclient.proxy(v=vs.110).aspx) Documentation.
- [WebProxy](https://msdn.microsoft.com/en-us/library/system.net.webproxy(v=vs.110).aspx) Documentation.

