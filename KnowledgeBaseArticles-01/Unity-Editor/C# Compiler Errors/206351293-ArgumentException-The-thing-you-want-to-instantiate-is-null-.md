

**Symptoms**


- I am getting the error below appearing in my console:


```
error ArgumentException: The thing that you want to instantiate is null. Unity Engine.Object.CheckNullArgument (System.Object arg, System.String.Message)
```


**Cause**



This error is caused when you use a script to instantiate a GameObject that does not reference a prefab.



**Resolution**



You will need to assign a reference to the GameObject that you wish to instantiate via the inspector or a script.



Via the inspector:



![](/hc/en-us/article_attachments/201915643/Script_Empty.png)



![](/hc/en-us/article_attachments/201761306/Script_Full.png)



Create reference via a script:



![](/hc/en-us/article_attachments/201761286/Script_assignAtRuntime.png)



**More Information**

