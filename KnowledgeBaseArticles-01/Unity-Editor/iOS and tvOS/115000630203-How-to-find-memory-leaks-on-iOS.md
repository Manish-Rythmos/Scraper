

**Symptoms**


- You need to profile the memory allocated on an iOS device.
- Your app crashes after running out of memory.
- You are getting memory warnings.



**Resolution**



You must attempt to identify any memory leaks.



The code below analyzes the memory of the Player for iOS or OSX with Xcode and the Instruments allocation tool.



For the purpose of this example, some AssetBundles are being loaded but the WWW object is not unloaded.


```
for (int i = 0; i < 100; i++) 
{
WWW www = new WWW (bundleURL);
yield return www;
AssetBundle bundle = www.assetBundle;
bundle.LoadAllAssets ();
bundle.Unload (true);
}

```


To try and identify the issue:



1. Build and run the Project.



2. Open the  **Debug Navigator**  in the  **Navigators**  area and then click on  **Memory**  to display the memory graphs.



![](/hc/en-us/article_attachments/115001591603/1.png)



The graph in blue above shows that there are two memory peaks, but it doesn't show which functions are using this memory. Instruments can be used to see the methods that allocated the memory.



2. In Xcode, select  **Product/Profile**  (Cmd+I).



![](/hc/en-us/article_attachments/115001591623/2.png)



3. Select the allocation tool ( **Allocations** ), which will provide you with detailed information on all created objects and the memory they are using.



![](/hc/en-us/article_attachments/115001591643/3.png)



4. Click the  **record**  button to start the the application on the device and record the session.



5. On the Detail Panel, select  **Call Trees** .



6. Pause the game and in the Track panel select part of the graph and check the hierarchy of the call tree. This will show you how much memory was allocated for the selected piece of the graph, and if you go down in the hierarchy you will find the memory allocation.



**Finding a possible memory leak**



A memory leak happens when you allocate memory but it is not returned to the operating system or reused.



Common reasons for memory leaks include:


- WWW objects that have not been unloaded
- Static references
- Problems with between Scenes
- Objects not being unloaded correctly
- Render Textures not being unloaded correctly
- AssetBundles not being unloaded correctly



![](/hc/en-us/article_attachments/115001643366/A.png)



1. Tick the  **Discard events for freed memory**  checkbox so you can analyze only the memory that is not de-allocated.



2. Run the game for an extended period of time and check if there is a peak on the graph that doesn't get deleted after some time or recurs after several runs of the game.



Below is an example of a memory leak caused by the WWW object not being unloaded:



![](/hc/en-us/article_attachments/115001603166/4.png)



In this example, some of the memory peaks that represent the allocations are released but some persist.



3. Pause and select the peak on the graph to open the calls tree, and check to see if the memory is allocated from the same function each time.



![](/hc/en-us/article_attachments/115001603186/5.png)



**Mark generation**



The second test to find a memory leak is to use the mark generation tool.



![](/hc/en-us/article_attachments/115001643406/B.png)



1. In the Inspector panel, click the  **Display Settings**  button and then the button labelled  **Mark Generation** .



2. Create some mark generations using this button. When a mark is generated, you will see a red flag appear in the track.



3. Check that the memory does not continue to grow while repeatedly performing the same set of operations, and note that each generation includes a list of allocations that has occurred since the previous generation.



4. Take samples when you load a new Scene or destroy objects to check if you have objects that remain in memory.



![](/hc/en-us/article_attachments/115001603246/6.png)



You need you do several runs and let the game run for some time as the memory allocated can be released or reused later.



You also need to build in development mode and enable the generation of dSYM in Xcode to read the call stack properly.



![](/hc/en-us/article_attachments/115001603286/7.png)



Another useful tool for inspecting memory usage is the [Unity Memory Profiler](https://bitbucket.org/Unity-Technologies/memoryprofiler). After you game have been running for some time, you can load an empty Scene and use the Memory Profiler take a memory snapshot and check what objects are still in memory.



**More Information**



For more information, consult the following:


- [Apple documentation on the Allocations instrument](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/Instrument-Allocations.html)
- [Apple documentation on tracking memory usage](https://developer.apple.com/library/content/documentation/Performance/Conceptual/ManagingMemory/Articles/FindingPatterns.html)
- [Unity blog on profiling with Instruments](https://blogs.unity3d.com/2016/02/01/profiling-with-instruments/)
- [Memory Profiler documentation](https://docs.unity3d.com/Manual/ProfilerMemory.html)
- [Unity Memory Profiler on Bitbucket](https://bitbucket.org/Unity-Technologies/memoryprofiler)
- [Apple documentation on finding abandoned memory](https://developer.apple.com/library/content/documentation/DeveloperTools/Conceptual/InstrumentsUserGuide/FindingAbandonedMemory.html)
- [Article on iOs runtime memory tracking](https://support.unity3d.com/hc/en-us/articles/115000172606)

