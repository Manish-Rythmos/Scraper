
        

**Symptoms** 

When trying to do the Space-Shooter tutorial, several issues were raised. Some of them are listed here with their solutions:

*Issue 1* 

*    The asteroid is not rotating with the rotator script

*Issue 2* 

*    The boundary is not working properly. 

*Issue 3* 

*    In order to fire bolts, I am told to write I *nput.GetButton("Fire1").* 

*Issue 4* 

*   I already did the space ship, background and lights in the tutorial. I made the script to move the space ship as I was told, but  decided to test this script. My spaceship moved, but it returns to its original position and cannot move after a certain distance. 

*Issue 5* 

*   *UnassignedReferenceException: The variable scoreText of GameController has not been assigned. You probably need to assign the scoreText variable of the GameController script in the inspector.* 

*Issue 6* 

*   Game Object deleted from scene but not from the hierarchy.

*Issue 7* 

*   "The content was stopped because a fatal content error has been detected" when building the Webplayer.

*Issue 8* 

*   Unity keeps freezing everytime I enter playmode.

**Cause** 

*Issue 1* 

*    Didn't take to account Unity is case sensitive when scripting and wrote an Unity API function without capital letter or had a typo, missed a semicolon etc. (e.g wrote the  *start*  function with 's' while is  *Start*  with capital 'S' or wrote  *onTriggerExit*  with no capital 'o')

*Issue 2* 

*   The boundary box is not high enough; bolts didn't start inside the box. 

*Issue 3* 

*    You do not know where or what is  *"Fire1". * 

*Issue 4* 

*   You did not remember to change the boundary values.

*Issue 5* 

*   You are using a legacy component like  *GUIText.* 

*Issue 6* 

*   Not deleting the object with Destroy or there is a collider added wrong (collider in the child instead of the parent)

*Issue 7* 

*   In the Graphic section of the Project Settings, you only have one shader (Diffuse) while you need to have as well 'UI/Default' and 'UI/Default Font'. 

*Issue 8* 

*   There is an infinite loop occurring. 

**Resolution** 

*Issue 1* 

*   Fix the case sensitive problem or typo. (e.g write the  *Start*  function with capital 'S' , OnTriggerExit with capital 'O')

*Issue 2* 

*   Scale the box in the direction it needs to be scale  (e.g 'Y' direction) to correct the error. 

*Issue 3* 

*   "Fire1" is a preset configuration set in Unity to reference some buttons that are used to fire shots. In other words, this string is mapped to some buttons already by Unity by default. To check this, please go do Edit->Project Settings ->Input to check the different preset configurations regarding Input. 

*Issue 4* 

*   Reset the boundary in the inspector. 

*Issue 5* 

*   Change the attribute declaration from  *GUIText scoreText* , to  *Text scoreText* . Add in the  *Start*  function a line of code to reference this text element:  *scoreText = GetComponent<Text>()* . If later you get an error that states that the text is not set to an object then just remove this last line in the  *Start*  function. 

*Issue 6* 

*   Move the collider from the child object to the parent. 

*Issue 7* 

*   Go to Edit -> Project Settings -> Graphics and add the 'UI/Default' and 'UI/Default Font' shaders manually or just click in the gear icon and "reset" to also add these shaders. 

*Issue 8* 

*   Find the While (true) loop, or any other loop that can be iterating infinitely and fix it. 

**More Information** 

See the links below:

[http://docs.unity3d.com/Manual/ConventionalGameInput.html](http://docs.unity3d.com/Manual/ConventionalGameInput.html)

[http://docs.unity3d.com/Manual/class-InputManager.html](http://docs.unity3d.com/Manual/class-InputManager.html)

[http://docs.unity3d.com/ScriptReference/Input.html](http://docs.unity3d.com/ScriptReference/Input.html)

[http://stackoverflow.com/questions/27912745/unity-webplayer-crashes-with-ui-text-new-canvas-text](http://stackoverflow.com/questions/27912745/unity-webplayer-crashes-with-ui-text-new-canvas-text)

This article applies to Unity versions 5.x

      