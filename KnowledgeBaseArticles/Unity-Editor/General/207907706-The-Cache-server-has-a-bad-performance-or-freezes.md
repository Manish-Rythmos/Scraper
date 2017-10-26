
         **Symptoms** 

*   The Cache server has a bad performance or freezes.

 **Cause** 
With big projects and multiple computers connected at the same time to the Cache Server, the server console is spammed with the debug messages and those messages can kill the performance (and sometimes crash the process).
 **Resolution** 

Modify the files CacheServer.js and LegacyCacheServer.js and set the value LOG_LEVEL to 2. Set this value to 2, it will show only errors and warnings but not the debug information. 


 **More Information** 
[https://support.unity3d.com/hc/en-us/articles/207020786-How-can-I-debug-Unity-s-Cache-Server- ](/hc/en-us/articles/207020786-How-can-I-debug-Unity-s-Cache-Server-)

      