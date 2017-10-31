

**Symptoms**


- I am receiving an error in my console stating that I have 2 Audio Listeners in the scene
- I want to know how to disable Audio Listeners



**Cause**



You are creating a scene in Unity. You have the following components included in your scene:


- Main Camera
- First Person Controller



When you test your game in  *Playmode*  you receive the following error in your console window in the bottom left of the Editor:



**![](/hc/en-us/article_attachments/201817456/2.png)**



**Resolution**



**Audio Listeners**  are the ears of your player and is a component found on each Camera featured in the scene. This means you have more than one component in your scene which is responsible for receiving sounds played within the scene.



Your  **Main Camera**  will have an  **Audio Listener**  activated by default however, your  **First Person Controller**  will include two children;  **Graphics**  and  **Camera** . This  **Camera**  also contains its own  **Audio Listener** . You will need to make sure only one  **Audio Listener**  component is active at a time. You can disable the  **Audio Listener**  by unchecking the tick box in the Inspector:



![](/hc/en-us/article_attachments/201975373/3.png)



You can disable the Audio Listener on either of your  **Camera’s**  at any point in development as long as only one  **Audio Listener**  is active at the time.



**More Information**





