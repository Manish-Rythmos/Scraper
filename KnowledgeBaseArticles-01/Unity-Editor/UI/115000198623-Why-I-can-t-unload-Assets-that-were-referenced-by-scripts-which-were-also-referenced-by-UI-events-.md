

**Symptoms**



I am destroying a GameObject and calling  **Resources.UnloadUnusedAssets()**  to unload Assets but I can see that the Assets remain in memory.



**Cause**



UI events hold strong references to objects. This means they will prevent the object they reference from being garbage collected.



For example, if you have a GameObject with the following script (which holds a reference to a Texture):


```
using UnityEngine;

public class MyScript : MonoBehaviour {

     public Texture2D texture;

     public void Foo()
     {

     }
}

```


And you have a button that uses an on-click event to trigger a function in  **MyScript**  (as shown below), you must then destroy the GameObject using [**GameObject.Destroy(gameObject)** ](https://docs.unity3d.com/ScriptReference/Object.Destroy.html) and call  **[Resources](https://docs.unity3d.com/ScriptReference/Resources.html).[UnloadUnusedAssets](https://docs.unity3d.com/ScriptReference/Resources.UnloadUnusedAssets.html)** .



![](/hc/en-us/article_attachments/115000721243/Screenshot.png)



If you check the Memory Profiler you will see that, after calling  **Resources.UnloadUnusedAssets** , the Texture remains in memory. This is because the UI event holds a reference to the script and prevents the Texture from being released.



**Resolution**



A simple solution to this problem is to set the reference to  **null**  in a DestroySelf function that can be called to destroy the GameObject as shown below:


```
   void DestroySelf()
   {
        texture = null;  // remove the reference
        GameObject.Destroy(gameObject);
   }

```


Then, after calling  **Resources.UnloadUnusedAssets** , the Texture should be released.



**More Information**



You may find the following documentation helpful:


- [Documentation on Resources.UnloadUnusedAssets](https://docs.unity3d.com/ScriptReference/Resources.UnloadUnusedAssets.html)
- [Documentation on Resources.UnloadAsset](https://docs.unity3d.com/ScriptReference/Resources.UnloadAsset.html)
- [Documentation on EventTrigger](https://docs.unity3d.com/ScriptReference/EventSystems.EventTrigger.html)
- [Documentation on Event System](https://docs.unity3d.com/Manual/EventSystem.html)



Additionally, you may also find the below tutorials useful:


- [Tutorial on UI buttons](https://unity3d.com/learn/tutorials/topics/user-interface-ui/ui-button?playlist=17111)
- [Tutorial on UI events and event triggers](https://unity3d.com/learn/tutorials/topics/user-interface-ui/ui-events-and-event-triggers)

