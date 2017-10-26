
        

**Symptoms** 

*   I wish to use receipt validation to make it harder for hackers to access content without paying for it
*   I have In App Purchases in my app and require Receipt validation

**Cause** 

When a user purchases products in your game, such as DLC or extra downloadable content, you will have the option to use receipt validation. This allows the server to verify if the user's purchase is valid. This will then check any In App Purchases that require an external download.

**Resolution** 

Currently, yes it is possible to add validation for purchase receipts locally and remotely.

Unity IAP provides additional local support for iOS and Google Play receipt validation, with instructions [here](http://docs.unity3d.com/Manual/UnityIAPValidatingReceipts.html).

For other store platforms, the complexity varies by platform and receipt verification details are not covered here. Generally though, you can extract the receipt for a given product and pass it through cryptographic verification. Access platform specific receipts by first accessing the Unity IAP Product’s [receipt field](http://docs.unity3d.com/ScriptReference/Purchasing.Product-receipt.html) and then accessing its payload for the platform [specific receipt](http://docs.unity3d.com/Manual/UnityIAPPurchaseReceipts.html).

**More Information** 

      