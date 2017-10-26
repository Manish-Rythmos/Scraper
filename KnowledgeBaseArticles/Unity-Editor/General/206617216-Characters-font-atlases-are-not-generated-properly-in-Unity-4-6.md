
        

**Symptoms** 

*   Characters that are used in the UI are missing from the texture atlas. 

**Cause** 

There is a bug known prior to version Unity 4.6.7 Patch 1 that causes this issue. Normally when a new character is added to a font, Unity calls all delegates added to the Font.textureRebuildCallback (textureRebuilt in Unity 5).

In that callback, if you are building your own UI, you are expected to update it with the new character information. The Unity UI should handle that automatically, but due due to the bug this does not happen.

**Resolution** 

Update with Patch Release 4.6.7 Patch 1, or to the latest Unity 4.7 version. 

**More Information** 

This article applies to Unity version 4.6

      