
        

**Symptoms** 

*   A piece of code that is throwing a MissingReferenceException in the Editor is throwing a NullReferenceException when running on mobile devices.

**Cause** 

The following example will throw different exceptions depending on where it is executed (in either the Editor or Player):

using UnityEngine;
    using System.Collections;
    
public class TestExceptions : MonoBehaviour {
    
    GameObject myGameObject = null;
    
    void Start ()
        {
            myGameObject = new GameObject("MyGameObject");
            Destroy(myGameObject);
            StartCoroutine(Test());
        }
    
    IEnumerator Test()
        {
            yield return new WaitForSeconds(2);
            Debug.Log(myGameObject.name);    // MissingReferenceException / NullReferenceException
        }
    }

In this case, a MissingReferenceException is only thrown in the Editor and a NullReferenceException in the Player. The is because Unity is a C/C++ engine, and all the actual information about this **myGameObject** is in the C++ side.

The only thing that the C# object has is a pointer to the native object, so **Destroy(myGameObject)** destroys the native object but the managed object in the C# side still exists, and is destroyed when it's no longer referenced and is collected by the garbage collector.

Similarly, when a MonoBehaviour in the Editor has fields, Unity doesn’t set those fields to a "real" null value but instead a "fake" null object. This allows Unity to store information that gives you more contextual information when you invoke a method on it, or when you ask the object for a property.

Without this approach, you only get a NullReferenceException and have no idea which GameObject has the MonoBehaviour with the null field. With this fake null approach, Unity highlights the GameObject in the Inspector and also gives you more direction about the source of the problem (in this case by throwing an MissingReferenceException).

Unity doesn’t keep this information in the Player because it should be optimized to run as fast as possible without negatively affecting performance or memory consumption.   

**Resolution** 

This is an intended behavior.

**More Information** 

For more information, take a look at the following:

*   [What is a NullReferenceException?](https://docs.unity3d.com/Manual/NullReferenceException.html)
*   [Custom = = operator, should we keep it?](https://blogs.unity3d.com/2014/05/16/custom-operator-should-we-keep-it/) 
      