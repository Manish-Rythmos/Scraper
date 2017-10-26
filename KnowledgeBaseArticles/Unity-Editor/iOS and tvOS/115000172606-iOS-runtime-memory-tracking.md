
        

**Symptoms** 

*   You need to get the runtime memory reported by iOS.
*   Your app crashes after running out of memory.
*   You are getting memory warnings.

**Resolution** 

You can get the value for all the memory reserved by the application via scripting and send it back to your managed code.

Using Xcode’s **Instruments > Activity Monitor** , you can find the memory reserved by the application in the **Real Memory** column.

![](/hc/en-us/article_attachments/115000734046/Screenshot.png)

Use this information to analyze your memory on runtime in all the game’s Scenes and on different devices.

You can also implement a native plugin to send this information to your server and analyze the memory from the user’s gameplay session.

Follow the steps below to get the memory information to Unity:

1. Create a native plugin with a function that sends the information back to managed C# code. Place this file under **Assets/Plugins/iOS** to be included in the Project.

#include <mach/mach.h>
    extern "C"
    {
        int Report_memory(void)
        {
            struct task_basic_info info;
            mach_msg_type_number_t size = sizeof(info);
            kern_return_t kerr = task_info(mach_task_self(),
                                           TASK_BASIC_INFO,
                                           (task_info_t)&info,
                                           &size);
    
        if( kerr == KERN_SUCCESS )
            {
                return (int)info.resident_size/1024/1024;
            }
            else
            {
                return 0;
            }
        }
    }

2. Create a MonoBehaviour script that calls the native iOS plugins to get the memory report.

float deviceRealMemory
    [DllImport ("__Internal")]
    private static extern int Report_memory();
    IEnumerator GetMemoryIOS()
    {
            deviceRealMemory = Report_memory ();
    }

**More Information** 

For more information, see the following documentation:

*   [Low-level native plugin interface documentation](https://docs.unity3d.com/Manual/NativePluginInterface.html)
*   [Profiler script reference documentation](https://docs.unity3d.com/ScriptReference/Profiling.Profiler.html)
*   [How to programmatically retrieve memory usage on iPhone](http://stackoverflow.com/questions/787160/programmatically-retrieve-memory-usage-on-iphone)
      