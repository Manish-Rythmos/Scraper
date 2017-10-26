
        

**Symptoms**  

*   We had implemented support for Emoji characters (from the standard Unity keyboard) and now, using Unity 5.3+, they seem to be stripped out of the string that is exposed for use in Unity.
*   We would like to enable the filter out of Emoji characters for our iOS app.
*   We would like to disable the filter out of Emoji characters for our iOS app.
*   Emoji characters are not supported by Unity, but we have our custom solution using a plug-in.  Now our solution is failing because Unity is filtering out the emoji characters.  We want to remove the filtering.

**Cause** 

Unity currently supports code points in the Basic Multilingual Plane (U+0000 - U+FFFF), but cannot handle code points in any of the Supplemental Planes (U+10000 - U+10FFFF). So, Emoji is not supported in Unity at the moment. Support for Emoji is in the Unity roadmap, but we do not yet have an estimated release date yet.

**Resolution** 

To enable/disable filter out of Emojis, please go to the trampoline code, file **Keyboard.mm** and change the value for the macro **FILTER_EMOJIS_IOS_KEYBOARD** to 0 for enabling, 1 for disabling.

**More Information** 

For more information, please check the patch release notes for Unity 5.3.4p1.

[http://unity3d.com/unity/qa/patch-releases/5.3.4p1](http://unity3d.com/unity/qa/patch-releases/5.3.4p1)

      