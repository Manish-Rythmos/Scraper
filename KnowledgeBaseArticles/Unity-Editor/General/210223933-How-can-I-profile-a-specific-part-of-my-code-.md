**Symptoms**
- Not all of the user code is shown in the Profiler and Deep Profiling slows down my application.

**Cause** The built-in [profiler](http://docs.unity3d.com/Manual/Profiler.html) is not profiling all method calls. Also, Deep Profiling causes large overhead that will significantly slow down your application execution and it even may not be possible to perform the profiling activity at all (Unity can run out of memory).  **Resolution** Profiler Sample is a block of code that starts with [Profiler.BeginSample()](https://docs.unity3d.com/ScriptReference/Profiling.Profiler.BeginSample.html) and ends with [Profiler.EndSample()](https://docs.unity3d.com/ScriptReference/Profiling.Profiler.EndSample.html) calls. Just like this:
```
using UnityEngine;public class NeedsProfiling : MonoBehaviour {    void Update() {        Profiling.Profiler.BeginSample("My Sample");        Debug.Log("This code is being profiled");        Profiling.Profiler.EndSample();    }}
```


You would put it before and after the chunk of code that you want to be profiled. Profiler Sample will record the execution time for you and it will be displayed in the Profiler window without the need to use Deep Profiling *.*



![](/hc/en-us/article_attachments/203701646/profiler.png)



As you can see, there is a new entry in the Profiler Hierarchy.



Of course you can add as many Profiler Samples as you want. Don’t worry about adding too many samples. These calls have zero overhead when they are deployed in non-development build.

**More Information**  [http://docs.unity3d.com/Manual/MobileProfiling.html](http://docs.unity3d.com/Manual/MobileProfiling.html)[http://docs.unity3d.com/ScriptReference/Profiling.Profiler.BeginSample.html](http://docs.unity3d.com/ScriptReference/Profiling.Profiler.BeginSample.html)[http://docs.unity3d.com/ScriptReference/Profiling.Profiler.EndSample.html](http://docs.unity3d.com/ScriptReference/Profiling.Profiler.EndSample.html)[http://blog.theknightsofunity.com/profiling-unity-application-profiler-samples/](http://blog.theknightsofunity.com/profiling-unity-application-profiler-samples/)