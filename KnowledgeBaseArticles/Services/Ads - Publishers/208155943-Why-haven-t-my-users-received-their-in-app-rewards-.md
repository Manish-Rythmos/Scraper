
        

**Symptoms** 

*   I am a Publisher using Unity Ads in my apps to generate revenue
*   My users are not immediately receiving their in app rewards as part of Unity Ads

**Causes** 

You are using server-to-server callbacks. You are therefore, waiting for the callback to arrive before you reward the users.

**Resolutions** 

We originally recommended that Publishers should not wait for this callback before rewarding users. This is because it interrupts the game flow due to the fact that the callbacks may arrive many seconds - sometimes even minutes later due to traffic/workload in our servers.

To ensure your players have a smooth experience without any interruptions or delays, the best way to use S2S callbacks is by rewarding the user immediately.

You can the use the callbacks merely as sanity checks for detecting whether the players are cheating.

So to recap: it is best to reward your users immediately and verify the players when the callbacks finally arrive.

**More Information** 

Please see the Unity Ads [FAQ](http://unityads.unity3d.com/help/index%20) pages for more information.

      