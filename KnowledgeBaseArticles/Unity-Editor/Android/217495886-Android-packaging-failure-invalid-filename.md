
        

**Symptoms** 

*   When building to Android, a message like the following is displayed in the console (where  **FILENAME**  is the name of your Project):  

CommandInvokationFailure: Android Asset Packaging Tool failed. See the Console for details. 

*   

Stderr[  
<FILENAME>: error: Invalid filename. Unable to add.  
]

**Cause** 

There is a [known limitation](https://code.google.com/p/android/issues/detail?id=36316) in the Android Asset Packaging Tool meaning that filenames of Assets cannot exceed 100 characters.

Files that have a name longer than 100 characters will fail the invocation of the Android Asset Packaging Tool.

**Resolution** 

Rename all the offending files so their filenames are under 100 characters.

You can see a list of all files causing this error message in the console.

      