
        

**Symptoms** 

*   I use Camera.main many times in scripts and I want to optimize my game performance.

**Cause** 

Camera.main takes more time to execute than you might expect. If you use it many times per game loop, you will be wasting time unnecessarily.

Below you can see the cost reported by the profiler Camer.main (Camer.get_main() in the profiler) when being called 100000 times in this extreme example.

![](/hc/en-us/article_attachments/115001472026/Screen_Shot_2017-01-30_at_11.25.39.png)

**Resolution** 

You should store a reference to each of your Cameras once in the lifetime of that Camera, and then use that stored reference in the rest of the code. For example:

<table>
<tbody>
<tr>
<td>

**// Initialization code for scene** 

**Camera mainCamera = Camera.main;** 

**// Game code, executed once per frame or more** 

**Vector3 pos = mainCamera.transform.position;** 

</td>
</tr>
</tbody>
</table>

![](/hc/en-us/article_attachments/115001472066/Screen_Shot_2017-01-30_at_11.26.06.png)

Below is the same test as above but using the Camera MainCamera = Camera.main reference instead of calling Camer.main. You can see the time spent in Update() is considerably lower.

**More Information** 

Camera.main returns the first Camera in the scene tagged "MainCamera", so it may be slower if you have additional Cameras that are tagged differently. Even for a single Camera, the tag checking means it will always be slower than a direct reference.

Script Reference page: [https://docs.unity3d.com/ScriptReference/Camera-main.html](https://docs.unity3d.com/ScriptReference/Camera-main.html)

      