
        

**Symptoms** 

*   Calling the screen orientation changes from portrait to landscape mode, even if the project is set to use portrait mode only

**Cause** 

If you are using the iOS presentation controller, this could override your orientation constraints. 

**Resolution** 

As a workaround, you can modify the iOS trampoline code to use only the portrait mode.

Build for iOS and open UnityAppController.mm and replace supportedInterfaceOrientationsForWindow with the provided code:

- (NSUInteger)application:(UIApplication*)application supportedInterfaceOrientationsForWindow:(UIWindow*)window
    {
        return (1 << UIInterfaceOrientationPortrait) |   
           (0 << UIInterfaceOrientationPortraitUpsideDown) |   
           (0 << UIInterfaceOrientationLandscapeRight) |   
           (0 << UIInterfaceOrientationLandscapeLeft);  
}

This article applies to Unity versions 5.3.4p3 and higher

      