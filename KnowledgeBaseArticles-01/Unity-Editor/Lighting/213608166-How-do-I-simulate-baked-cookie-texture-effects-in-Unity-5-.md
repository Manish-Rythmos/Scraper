

**Symptoms**


- I have a nice baked cookie texture that I was using in Unity 4. I have now upgraded to Unity 5 and do not have baked cookie textures supported in the lighting system, but I still want the same effect.



**Cause**



Unity 5 as of Unity 5.5 does not contain support for cookie textures on lights when using baked lighting, this may change in future releases, but if you are using a version of Unity between 5.0 and 5.5 it is not supported. The dropped support for baked cookie textures was due to a change in the system Unity uses for lighting. Unfortunately part of this system change means not all the old feature set was supported in the new system. Please see the blog post in More Information about the new system and why we moved to it.



**Resolution**



If you can use real time lighting, consider doing so, as we still support cookie textures for real time lights in Unity 5. If this is not an option for you may want to consider using geometry to block out light in the pattern that you need for your effect. You can use shadow only geometry if you do not want the geometry creating the effect to be visible in your scene. Additionally when combined with a clever material that adds other characteristics to the shadow you may be able to achieve a similar result.



For example take a look at this cookie texture effect:



![](/hc/en-us/article_attachments/208552043/Unity4.png)



You will see the yellow spotlight has a very nice "grate" cookie texture creating the black lines on the ground. This effect can easily be achieved using shadows only geometry placed in front of the spot light accordingly.



Now take a look at the similar results created in Unity 5.4:



![](/hc/en-us/article_attachments/208586846/Unity5.png)



Next open the attachment "LightBakingExample.zip", to find the Unity 5 project reproducing the same effect using Shadow Only Geomerty. In this project you will find four game objects under the "Spotlight" object creating the shadows on the "Floor".



A few things to note about the LightBakingExample Project:


- The shadow geometry renderer has "Shadows Only" selected but it is not required.
- The yellow light is a baked spotlight and the scene is using baked ambient GI.
- I have added a shader and material that uses transparency to get the blended color effect of the black lines.
- Note one effect missing here is the softness of the edges of the shadows, this can be achieved by making a more advanced transparency texture that has some "dirtiness" alpha scaled out from the center of the texture.



**More Information**



For more information see the links below:



[https://blogs.unity3d.com/2014/09/18/global-illumination-in-unity-5/ ](https://blogs.unity3d.com/2014/09/18/global-illumination-in-unity-5/%20)



[https://docs.unity3d.com/Manual/Cookies.html ](https://docs.unity3d.com/Manual/Cookies.html)



[https://docs.unity3d.com/Manual/HOWTO-LightCookie.html](https://docs.unity3d.com/Manual/HOWTO-LightCookie.html)



This article applies to Unity versions between 5.0 and 5.5. (Baked cookie texture support may have been added after the time of this writing.)

