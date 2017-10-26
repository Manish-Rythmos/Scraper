
        

**Symptoms** 

*   Integrating Unity IAP result in compiler errors
*   I am getting the error “CS0246: The type or namespace name `IPurchaseReceipt' could not be found”

**Cause** 

You are receiving Errors including "CS0246: The type or namespace name `IPurchaseReceipt' could not be found ... System.Reflection.ReflectionTypeLoadException ... UnityPurchasing/Bin/Stores.dll ... UnityEngine.Purchasing". 

These errors indicate Unity IAP has been disabled from the Unity Cloud Services window, or that you are disconnected from the Internet.

**Resolution**   
Please try reconnecting to your Internet, then sign into Unity Services and enable Unity IAP, or if necessary Reload (or Close and Reopen) the Services window. See also [Setting up Unity IAP](http://docs.unity3d.com/Manual/UnityIAPSettingUp.html).

      