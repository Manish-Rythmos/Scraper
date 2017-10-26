
        

**Symptoms** 

When trying to do the Roll-a-ball tutorial, several issues were raised. Some of them are listed below:

        *Issue 1* 

*    Get a  *NullReferenceException.*  

**       Issue 2*  * 

*    Script error in the console window (Yellow triangle : *The referenced script on this Behaviour is missing!)*  

*       Issue 3* 

*   Want to add multiple levels to the game   

        *Issue 4* 

*   The sphere is not collecting the collectables, it goes through the cubes. 

**Cause**  

*Issue 1-2* 

*   You have written the  *Start()*  function without capital 'S' for the  *NullExceptionError*  or  *FixedUpdate*  without capital 'F' for the  *The referenced script on this Behaviour*  error.  When you get a  *NullExceptionError* , it means that there is a variable that is not being assigned. This is correct because the Start function is written incorrectly, therefore any variable supposed to be assigned in this function is not being called.

![](/hc/en-us/article_attachments/202141046/Screen_Shot_2015-12-04_at_4.20.48_PM.png)

*Issue 2* 

*   You don't have a script assigned in the Script component.![](/hc/en-us/article_attachments/202309253/Screen_Shot_2015-12-04_at_4.09.04_PM.png)

*Issue 3* 

*   You are not aware of how to add levels to a game. 

*Issue 4* 

*   The OnTriggerEnter function is written wrong. 

**Resolution** 

*Issue 1-2-4* 

*   If you wrote the  *Start()*  function without capital 'S', then just change the 's' to a capital 'S'. It is that simple! If it happened to the  *FixedUpdate*  function, just do the same as with the * Start() function.*  When you are programming, you have to be careful with typos and case is important. Also, please ensure that you write a semi colon (';) at the end of each line. On the other hand, if you wrote onTriggerEnter, just change it to OnTriggerEnter.

*Issue 2* 

*   Click the circle next to the right of the text field ( *Missing (Mono Script))*  and below the gear icon and select the  *GameController*  script.

*Issue 3* 

*   Think of levels as Scenes. Therefore if you want to add a level, just create a new Scene. (Remember to save the one you were using before moving to the new scene). Before a level will load, you need to add it to the list of levels used in the game by using:  *File --> Build Settings * and add the current scene to the build. Afterwards just add the following line of code to when you want to load the level:

             ![](/hc/en-us/article_attachments/202155746/Screen_Shot_2015-12-07_at_11.43.35_AM.png)

**More Information** 

 [http://docs.unity3d.com/ScriptReference/Application.LoadLevel.html](http://docs.unity3d.com/ScriptReference/Application.LoadLevel.html)

This article applies to Unity versions 5.x

      