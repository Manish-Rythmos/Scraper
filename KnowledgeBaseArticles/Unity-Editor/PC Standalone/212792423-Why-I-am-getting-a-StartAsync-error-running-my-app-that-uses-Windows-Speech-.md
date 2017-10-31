**Symptoms**
- I am testing out the Windows.Speech APIs and I am getting an error.
- The code is similar to the [DictationRecognizer](https://docs.unity3d.com/540/Documentation/ScriptReference/Windows.Speech.DictationRecognizer.html) and the following error shows up on Start():

*ERROR: StartAsync on the continuous recognition session failed unexpectedly! [Operation has failed with error 0x80045509: (null)]*

**Cause**  The policy for the Speech system needs to be changed to allow the system access this feature.  **Resolution** Go to  ***System Settings -> Privacy***  and select on the left panel the option " ***Speech, inking & typing*** ". ![](/hc/en-us/article_attachments/205978063/Screen_Shot_2016-08-03_at_13.56.23.png) Change the policy option to enable the speech feature. ![](/hc/en-us/article_attachments/205926886/Screen_Shot_2016-08-03_at_13.15.40.png) Restart Unity and run your game using the Speech feature correctly.  **More Information**  [https://msdn.microsoft.com/en-us/library/windows/apps/jj662934(v=vs.105).aspx](https://msdn.microsoft.com/en-us/library/windows/apps/jj662934(v=vs.105).aspx)       