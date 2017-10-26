
        

**Symptoms** 

*   The root canvas in my Scene has an Aspect Ratio Fitter added onto it, which is causing my Scene to be marked as dirty.

![](/hc/en-us/article_attachments/209265946/Screen_Shot_2016-10-20_at_12.40.55_copy.jpg)

**Cause** 

The Scene becomes dirty because of the canvas wanting to set the size of its **RectTransform** . Due to the Aspect Ratio Fitter also changing the size during the initialization, the Scene becomes dirty and leads to an unsaved change. 

**Resolution** 

You can still use the Aspect Ratio Fitter but need to place a new, empty GameObject below the canvas group. Moving the Aspect Ratio Fitter from the root canvas group to the new, empty GameObject will stop the Scene from being marked as dirty.

![](/hc/en-us/article_attachments/209235163/Screen_Shot_2016-10-20_at_14.34.32.png) 

**More Information** 

For more information, consult the Unity [Aspect Ratio Fitter documentation](https://docs.unity3d.com/Manual/script-AspectRatioFitter.html). 

      