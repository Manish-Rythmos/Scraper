
        

**Symptoms** 

*   I am unable to change the Store that Unity IAP targets.
*   I would like to switch (for example) from Google Play to Amazon Appstore?

**Cause** 

You wish to use the correct app store when using the IAP service within your game.

**Resolution** 

***Manually** * set the Android store (aka “Android Flavor”) using the Window > Unity IAP > Android > Target Amazon menu item.

![](/hc/en-us/article_attachments/206585186/image001.png)

Or ***programmatically** * call UnityPurchasingEditor.TargetAndroidStore(): 

using UnityEngine;

using System.Collections;

using UnityEngine.Purchasing;

public class Example : MonoBehaviour {

        void SetAndroidStoreTarget ()

    {

        UnityPurchasingEditor.TargetAndroidStore(AndroidStore.AmazonAppStore);

    }

} 

      