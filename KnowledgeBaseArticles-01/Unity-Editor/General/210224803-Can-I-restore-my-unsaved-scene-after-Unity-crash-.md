**Symptoms**

- Unity Editor crashed after pressing the Play button and all my changes are unsaved.

**Cause** 
Unity saves your scene each time when you hit the Play button. It is not saved over the original scene file, instead it is saved in the project’s Temp directory.  

**Resolution**  
If you want to restore your scene file, you cannot re-launch Unity Editor after the crash. If you do, you will lose the scene file and all your progress with it! If you want to restore your crashed scene, you have to go to your project’s directory (this is the folder that also contains the Assets directory) then enter the Temp/\_\_Backupscenes directory. You will find the 0.backup file within. This is your saved scene file.  Now all you have to do is to copy this file and replace your previous scene file with the copy. You will need to set the file extension to  *unity*  in order to make this file recognizable as Unity scene file. Please remember to backup your project folder before making this kind of changes. If you make any mistake, you can easily go back and try again.  

**More Information**  
Please also see this [Blog Post](http://blog.theknightsofunity.com/can-restore-unsaved-scene-unity-crash/%20).       