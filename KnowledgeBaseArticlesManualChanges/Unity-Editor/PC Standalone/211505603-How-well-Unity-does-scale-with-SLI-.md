**Symptoms**

- I have SLI working, but there is no performance improvement.

**Cause**  
If your content is using results of a previous frame, then SLI will not be faster.  

**Resolution**  
Firstly, Unity is not tested under these environments.

Secondly, to Unity (or any other 3d app) Crossfire and SLI configurations are presented as a single GPU. You can follow the best practices to possible improve performance using SLI/CrossFire are described by nVidia and ATI in these guides: [Programming for Crossfire](http://developer.amd.com/media/gpu_assets/Programming_for_CrossFire.pdf)[SLI Best Practices](http://developer.download.nvidia.com/whitepapers/2011/SLI_Best_Practices_2011_Feb.pdf)

In general, if your content uses results from a previous frame, then SLI will not be faster. The best advice would be to make sure to render everything you need in the same frame. To clarify, you should not render some textures in one frame and use them in another frame. Specifically from the Image Effects package, the "motion blur" effect uses a render texture from the previous frame.

If you are not rendering textures in one frame and using them in another, it is difficult to say whether SLI will be faster. SLI is transparent to the programmer and nothing has to be done explicitly from the code for it to be used, which is a problem because there is little control over how it works. In the worst case scenario, you will not get a performance boost.  

**More Information**

[http://developer.amd.com/media/gpu\_assets/Programming\_for\_CrossFire.pdf](http://developer.amd.com/media/gpu_assets/Programming_for_CrossFire.pdf)
[http://developer.download.nvidia.com/whitepapers/2011/SLI\_Best\_Practices\_2011\_Feb.pdf](http://developer.download.nvidia.com/whitepapers/2011/SLI_Best_Practices_2011_Feb.pdf)
[http://answers.unity3d.com/questions/298732/does-unity-support-crossfire-or-sli.html](http://answers.unity3d.com/questions/298732/does-unity-support-crossfire-or-sli.html)       