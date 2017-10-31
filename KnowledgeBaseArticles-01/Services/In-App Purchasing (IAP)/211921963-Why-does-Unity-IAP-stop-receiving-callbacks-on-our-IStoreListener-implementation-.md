

**Symptoms**


- Unity IAP stops receiving callbacks on our IStoreListener implementation



**Cause**



Unity IAP’s StandardPurchasingModule relies upon a persistent GameObject named “IAPUtil”. This hidden, “DontDestroyOnLoad”-configured object can be destroyed by a game script which cleans GameObjects from the scene hierarchy (potentially useful for scene transitions). This results in Unity IAP no longer working as expected.



**Resolution**



To fix, add an exception in the app’s hierarchy cleanup script for the “IAPUtil” GameObject.



**More Information**

