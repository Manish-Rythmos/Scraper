
        

**Symptoms** 

*   I would like to understand the fundamental workings of In App Purchasing
*   I would like to know how Unity IAP purchasing works

**Cause** 

It is sometimes not enough to just know how to follow a step by step guide. You may be curious as to how In App Purchasing (IAP) works!

**Resolution** 

*<u>Initialization:</u>* 

In the initialization stage, we create a new instance of the "ConfigurationBuilder" class. This is the class that will help define the products that you are selling in your game.

*Define the products:* 

We then add products and specify their Store-identifiers. The identifiers are strings that refer to the different products.

If you are using different stores, and your products have different identifiers in each store, then this is here you can define each one’s identifier.

Please take a look at the [documentation](https://docs.unity3d.com/Manual/UnityIAPDefiningProducts.html) for more information.

*Listen for Responses:* 

Next, we have Unity IAP listen to responses by using the "IStoreListener" interface. You should initialize the IStoreListener after the products have been defined using the "UnityPurchasing" class.

*Process the purchase:* 

Finally, we create a method that is invoked when the listener detects a purchase by the user. The method takes a string (the product's identifier) and checks if this product exists and is ready to be sold. If the product exists and is ready to be sold, then we supply the product to the customer.

**More Information** 

      