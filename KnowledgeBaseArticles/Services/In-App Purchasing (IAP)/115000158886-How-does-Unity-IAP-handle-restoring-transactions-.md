
        

**Symptoms** 

*   I would like to know what code I need to put into my game to show that a user owns previously purchased products.

**Cause** 

You feel that you need to be able to detect and restore purchases via the code in your game if required.

**Resolution** 

App stores maintain a permanent record of each user’s Non-Consumable and Subscription products that Unity IAP can retrieve, and as such no further action is required.

Once product restoration has started (either automatically on Unity IAP initialization for Google Play or after the RestoreTransactions method has been called for iOS), Unity IAP's backend process will call the [ProcessPurchase](http://docs.unity3d.com/ScriptReference/Purchasing.IStoreListener.ProcessPurchase.html) method via the [IStoreListener](http://docs.unity3d.com/ScriptReference/Purchasing.IStoreListener.html) on each item being restored. This means that, whatever code the app has for the first time a purchase is made, this code will be executed again for the purchases being restored.

On Apple platforms users must enter their password to retrieve previous transactions, so your application must provide users with a button allowing them to do so. During this process, the [ProcessPurchase](https://docs.unity3d.com/ScriptReference/Purchasing.IStoreListener.ProcessPurchase.html) method of your [IStoreListener](https://docs.unity3d.com/ScriptReference/Purchasing.IStoreListener.html) will be invoked for any items the user already owns.

      