

**Symptoms**


- I have two identical character rigs in my scene. I multiply the  *Transform.localScale.X*  by -1 for characters that appear on the right side of the screen and leave the other with a positive scale. This is to make sure rotating them 180 degrees does not make them face the opposite side of the camera. When I examine  *transform.eulerAngles* though, what I see in Unity 5.4 is different to what is reported in Unity 5.3.



**Cause**



There were multiple fixes that went into the transformation systems in Unity between Unity 5.3 and Unity 5.4. This has caused some issues for people migrating between versions who built on top of the broken functionality present in Unity 5.3. One example of this was the incorrect rotation behaviour when an object was parented to a GameObject with a negative scale. When the Child object (the cube in the gif below) was then rotated using the global rotation, it would rotate in the reverse of the rotation (this has since been fixed in Unity 5.4 and newer versions):



![Rotate5.3.gif](/hc/article_attachments/115005124046/Rotate5.3.gif)



Unity 5.3 also reports the  *Transform.rotation*  without taking into account the negative scale of the parent. This makes the  *Transform.rotation*  appear to be the same as if there was no negative scale in the parent (see picture below). In Unity 5.4 (and newer versions), an object's  *Transform.rotation* takes into account any negative scaling of itself and its parents. Due to this, you will see different results when using  *transform.eulerAngles* in 5.3 vs 5.4 and above.



![Rotations.jpg](/hc/article_attachments/115005125386/Rotations.jpg)







**Resolution**



If you wish to still reproduce the same Unity 5.3 results that were found from calling  *transform.eulerAngles* , inside Unity 5.4 and above, you can use the attached scripts on this article. These will:


- **RotationFix.cs**  updates the  *m\_LocalEulerAnglesHint*  where needed and that results in the correct rotation values being displayed in the editor inspector.
- **RotationTools.cs**  contains a static function that should be used where  *eulerAngles*  are required to match the 5.3 values. So where you would get the eulerAngles before like  *transform.eulerAngles*  you would now call  *RotationTools.GetRotationWith53Behaviour(transform).eulerAngles.*



**More information**



This article applies to Unity version 5.4 and above.





