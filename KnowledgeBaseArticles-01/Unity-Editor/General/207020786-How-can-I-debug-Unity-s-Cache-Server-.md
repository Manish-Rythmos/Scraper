

**Symptoms**


- I do not know how to debug the cache server.
- Cache server runs in my local machine making it difficult to identify problems.



**Cause**


- Multiple clients are running the cache server and are making it unresponsive.
- You need to debug the cache server.



**Resolution**



The Cache Server is a set of javascript scripts, run using Node.js. There is a tool, which allows debugging Node.js scripts, called Node Inspector. To the debug the Cache Server with this tool, there are several steps to follow:


1. Install Node.js: Get the latest build of Node.js here: [https://nodejs.org/en/download.](https://nodejs.org/en/download.) Once Node.js is installed, it should be added to your "/usr/bin/" path. This will add the extra tools needed for debugging.
2. Install the Node inspector: ' *npm install -g node-inspector* ' (Run this through the terminal).   &ast;MAC: If by any chance you get an error stating " *This is most likely a problem with the v8-profiler package, not with npm itself.*  " a workaround for this is to write ' *sudo npm install -g node-inspector --unsafe-perm'                          &ast;WINDOWS: Your Node.js application should be stored in  C:\Program Files\nodejs, thus  using the Command Line write : cd C:\Program Files\nodejs npm install -g node-inspector.*
3. Modify the script that launches Node.js to use "node-debug". This script can be found in the  folder where you stored the Cache Sever. On OS X, the script is " *RunOSX.command* ", while on Linux it is " *RunLinux.sh* " and in Windows it is " *RunWin.cmd"* . (See the images below).
4. Replace this obsolete method in the cache server scripts (LegacyCacheServer.js and CacheServer.js) "path.existsSync --> fs.existsSync"
5. Once you execute the script according to your platform, this will use "node-debug", which should launch Google Chrome and allow you to debug the Cache Server code. (You need to have Google Chrome installed).                                    *&ast;WINDOWS: You have to do something different here. You need to execute the main.js script in the command prompt like this "node-debug C:...\CacheServer-5.3.0f4\CacheServer\main.js"*







*Mac:*



![](/hc/en-us/article_attachments/202298376/Mac.png)



*Windows:*



![](/hc/en-us/article_attachments/202298426/Windows.png)



*Linux:*



![](/hc/en-us/article_attachments/202298456/Linux.png)



**More Information**



[http://docs.unity3d.com/Manual/CacheServer.html](http://docs.unity3d.com/Manual/CacheServer.html)



[https://github.com/node-inspector/node-inspector#quick-start](https://github.com/node-inspector/node-inspector#quick-start)



[https://nodejs.org/en/about/](https://nodejs.org/en/about/)



This article applies to Unity versions 5.x





