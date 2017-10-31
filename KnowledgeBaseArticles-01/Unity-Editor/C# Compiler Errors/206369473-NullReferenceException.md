

**Symptoms**


- I am getting the error below appearing in my console:


```
NullReferenceException: Object reference not set to an instance of an object
```


**Cause**



This error is caused when an object is trying to be used by a script but does not refer to an instance of an object.



![](/hc/en-us/article_attachments/201997873/NullReferenceException_a.png)



**Resolution**



To fix this example we can acquire a reference to an instance of the script using [GameObject.Find](http://docs.unity3d.com/ScriptReference/GameObject.Find.html) to find the object it is attached to. We then use [GetComponent](http://docs.unity3d.com/ScriptReference/GameObject.GetComponent.html) to find the script component we want a reference to.



![](/hc/en-us/article_attachments/201840336/NullReferenceException_b.png)



You can also double click the error to take you to the line of script where the error is occurring.



From there you can trace each object back to where they are assigned (if they have been assigned).



**More Information**

