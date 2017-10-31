**Symptoms**

- Unity has a functionality called Coroutines that can be a substitution for Threads in some cases.

**Cause**  
Unity Coroutines use concurrency and Threads use parallelism.  

**Resolution**  
The Unity API is not Thread-safe and you are allowed to create Threads without any practical limitations. Unfortunately however, the Unity API should be called from the main thread.

***Why create threads when there are coroutines?***



Coroutines have nothing to do with Threads. Coroutine methods can be executed piece by piece over time, but all processes are still done by a single main Thread. If a Coroutine attempts to execute time-consuming operation, the whole application freezes for the time being.



Threads are different. The execution of separate Threads is managed by the operating system (this actually depends on the .NET implementation). If you have more than one logical CPU, many threads are executed on different CPUs. Thanks to that, any expensive operation will not freeze your game, but it might slow it down a little.



***When Threads are suboptimal, Coroutines may be preferable:***



Creating a Thread is an expensive operation. If you use a Thread polling design pattern, you have to synchronize your computed data to the main thread. This is a very individual thing, so you have to consider this very carefully. It may even be necessary to perform some performance tests, because synchronization might be more expensive operation than computing your data in the main thread in the first place.

Threads are dangerous, so you have to be very careful when synchronizing things back! You also need to remember that Unity API is not Thread-safe, so all calls to Unity API should be done from the main Thread.  ***When threads are useful to use:***   When you are computing some expensive and/or long-term operations, Threads can still be useful. Examples of this are:

- AI
- Pathfinding
- Network communication
- Files operations

**More Information**  
[http://blog.theknightsofunity.com/myths-and-facts-of-unity-game-engine/](http://blog.theknightsofunity.com/myths-and-facts-of-unity-game-engine/)
[http://blog.theknightsofunity.com/using-threads-unity/](http://blog.theknightsofunity.com/using-threads-unity/)[http://stackoverflow.com/questions/1934715/difference-between-a-coroutine-and-a-thread](http://stackoverflow.com/questions/1934715/difference-between-a-coroutine-and-a-thread)       