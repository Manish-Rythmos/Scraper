
        

**Symptoms** 

*   I want to encrypt my C# code to protect it from potential hackers.

**Cause** 

You want to protect your C# code with obfuscation for privacy or security purposes and you are looking for tools in Unity to do this.

**Resolution** 

Unity does not promote obfuscation as a security solution, since it can introduce runtime errors and can also affect performance. It is also not possible to prevent a user with access to the software from trying to decompile it. If your concern is related to multiplayer games, make sure not to trust any of the data received from connected clients and always verify the data is valid.

If you do want to obfuscate your source code you should not change the following:

*   Class names 
*   Unity callback names 
*   Public field names
*   Any methods that are called through string/reflection or via SendMessage, Invoke, StartCoroutine, RPC and similar functions.

You could also find third party obfuscation tools on the Asset Store.

**More Information** 

      