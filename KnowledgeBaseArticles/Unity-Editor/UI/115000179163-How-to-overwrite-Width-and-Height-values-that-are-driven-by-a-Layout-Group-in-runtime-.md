
        

**Symptoms** 

*   I am adding items dynamically into a Layout Group and I cannot set a correct Spacing.
*   I cannot modify the Width and Height values since they are grayed out and they are driven by Layout Group.  
![](/hc/en-us/article_attachments/115000373543/Img1.png)  

**Cause** 

When UI items are children of a parent GameObject that has a Layout Group component, this component prevents the Width and Height properties of the UI Items from being modified via the Inspector, in order to be driven by the Layout Group in runtime.

**Resolution** 

You can override the Width and Height values by adding a Layout Element component in your item. Next, override automatic values set by the Layout Group with the values that you need.  

![](/hc/en-us/article_attachments/115000366846/Img2.png)

**More Information** 

[https://docs.unity3d.com/Manual/script-LayoutElement.html](https://docs.unity3d.com/Manual/script-LayoutElement.html)

This article applies to Unity versions 5.0+

      