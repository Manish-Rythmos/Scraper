

**Symptoms**


- I am getting the following error when I start up Unity in Windows:



![](/hc/en-us/article_attachments/202037533/MROVN.png)



**Cause**



You have downloaded and reinstalled Unity after reformatting/re-imaging your Windows machine and you are trying to start up Unity in order to reactivate your license.



When you open your Unity Editor, it crashes with the error "Failed to initialize unity graphics". This prevents you from opening the Editor to create an empty project. This error happens when Direct3D Acceleration is not enabled in the DirectX Features on your Windows machine.



**Resolution**



To check that Direct3D Acceleration is enabled:


- Type  *"dxdiag"*  into the  **Start**  menu bar.
- Click  **Run**  to open your DirectX Diagnostic Tool.
- Check  **Display**  - All three options should be enabled.



Alternatively this can also be found in:



*C:\Users\(username)\AppData\Local\Unity\Editor.*



Please note that AppData is a hidden folder so you need to enable *“Show hidden files”*  from the Folder Options.



To fix this error:


1. Make sure you are running Unity directly on your machine (not through Remote Desktop Connection or in a virtual machine)
2. Update the graphic card drivers
3. Start Unity in OpenGL mode by using the  ***"-force-opengl command"*** . Instructions can be found [here](http://docs.unity3d.com/Manual/CommandLineArguments.html).



**More Information**



Please be aware that Unity is not actively testing OpenGL mode and some instability can be expected.

