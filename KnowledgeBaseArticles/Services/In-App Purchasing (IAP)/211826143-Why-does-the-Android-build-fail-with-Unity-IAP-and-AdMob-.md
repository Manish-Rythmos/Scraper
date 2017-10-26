
        

**Symptoms** 

*   My Android build is failing
*   I am using both Unity IAP and AdMob.

**Cause** 

Both Unity IAP and AdMob include the ***in-app-billing-service-aidl.jar** * , resulting in two copies of the file. The Android build fails since it is unable to resolve the duplication.

**Resolution** 

Delete one of the copies of the file " ***in-app-billing-service-aidl.jar* ** " from your project and the build should work.

**More Information** 

      