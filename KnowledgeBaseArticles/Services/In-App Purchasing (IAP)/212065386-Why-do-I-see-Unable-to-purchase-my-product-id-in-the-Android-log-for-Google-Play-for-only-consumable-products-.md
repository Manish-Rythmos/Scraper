
        

**Symptoms** 

*   I am getting the error “Unable to purchase <my-product-id>”.

**Cause** 

You are receiving the error “Unable to purchase <my-product-id>” when attempting to purchase a consumable product via Unity IAP and Google Play. One reason you may see this message for consumables after some consumable purchase(s) is if the game does not consume the consumable by returning PurchaseProcessingResult.Complete after a purchase.  

**Resolution**   

Please ensure that PurchaseProcessingResult.Complete is called after a purchase is made successfully. 

      