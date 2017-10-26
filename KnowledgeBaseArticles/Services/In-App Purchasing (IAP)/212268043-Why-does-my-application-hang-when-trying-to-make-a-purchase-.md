
        

**Symptoms** 

*   My application hangs after making a purchase
*   My app hangs if I try to make a purchase after not completing a previous purchase (via returning c.Complete from ProcessPurchase).

**Cause** 

This is caused when a purchase has not yet been completed and is still pending. 

**Resolution** 

StoreKit will not send the Application any more transaction events for a product whilse there is an open transaction outstanding.

**More Information** 

Please see the [Documentation](https://docs.unity3d.com/ScriptReference/Purchasing.IStoreListener.ProcessPurchase.html) for more information.

      