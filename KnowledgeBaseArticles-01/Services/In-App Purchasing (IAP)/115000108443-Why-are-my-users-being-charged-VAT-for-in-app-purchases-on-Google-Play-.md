

**Symptoms**


- I've implemented an in-app purchase store in my game with Unity, but in some countries the price that I've defined is different from what users are being charged.



**Cause**



This can be an issue with the app store's VAT settings, meaning the store is adding tax to the price that you determined and is thus causing it to be higher than your game states.



**Resolution**



You will need to let the store know that your price includes VAT - see [Google Play's documentation on tax rates and VAT](https://support.google.com/googleplay/android-developer/answer/138000) for more information.





