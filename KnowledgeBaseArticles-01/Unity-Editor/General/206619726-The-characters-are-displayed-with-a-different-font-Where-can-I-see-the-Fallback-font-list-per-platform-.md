

**Symptoms**


- There is a different font displayed when rendering text between platforms.
- Some characters are visible in one platform and missing or different in another platform.
- There are strange characters showing where text should be.



**Cause**


- The font used is marked as a dynamic font, and the characters generated dynamically are not the expected ones.
- It is a custom/imported font that does not have the checkbox  *Incl. Font Data* marked in the Inspector's Import Font Settings. When Unity tries to find the characters from the font it cannot find them, because the font asset was not included and the font is not installed on the device/computer.
- The font does not include the requested glyph.
- Some targeted platforms like WebGL and various consoles do not use the OS's default fonts that Unity can access for rendering text.



**Resolution**



If the font asset does not have the checkbox  *Incl. Font Data* marked, mark it.  *Incl. Font Data* includes the custom font in the output build and the character data in the Font will be available in the built application.



If Unity cannot find the needed font or glyph, it would search for it and will try each of the fonts listed in the  *Font Names*  field to see if it can find a font matching the font name in the project, or installed on the user machine which has the requested glyph. The  *Font Names* field in each of the fonts in the project refers to all the specific fallback fonts that are going to be used in the project.
If none of the fallback fonts (and the requested glyphs) needed for the project are present, Unity will fallback to a hard-coded global list of fallback fonts installed on the current platform (Depends in which platform you're building for).
It is then recommended that you include all the fonts in the project needed as fallbacks as well as including the fallback font in the *Font Names* field of the font being used. (e.g font1, font2, font3), and when possible, include the font data.



**More Information**



See the links below:


- [http://docs.unity3d.com/Manual/class-Font.html](http://docs.unity3d.com/Manual/NativePlugins.html)
- [http://forum.unity3d.com/threads/thai-font-fallback-for-unity-android.225197/](http://forum.unity3d.com/threads/thai-font-fallback-for-unity-android.225197/)
- [http://answers.unity3d.com/questions/974498/how-do-you-make-fallback-fonts-work.html](http://answers.unity3d.com/questions/974498/how-do-you-make-fallback-fonts-work.html)









