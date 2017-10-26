
        

**Symptoms** 

*   I want to add torque to a Rigidbody that has a complex shape (different that simply a box primitive, or a Rigidbody that has its center of gravity perfectly aligned along one of the body's local x,y,z axis.) and use AddRelativeTorque, but the Rigidbody is sent spinning around another unexpected axis. 

**Cause** 

AddRelativeTorque adds torque according to its Inertia Tensors. Therefore, the desired angular velocity must be transformed according to the Inertia Tensor, to get the required Torque.

**Resolution** 

If you want to spin the object at a specific angular velocity, and you want it to rotate through the principal axes then you can use a code like this:

// Rotate about Y principal axis  
Vector3 desiredAngularVelInY = new Vector3(0, Mathf.PI, 0); //  1/2 revs per second   
Vector3 torque = rigidbodyCached.inertiaTensorRotation * Vector3.Scale(rigidbodyCached.inertiaTensor, desiredAngularVelInY);  
rigidbody.AddRelativeTorque(torque, ForceMode.Impulse);  

Please note that this solution only works for single Rigidbodies, including GameObjects having multiple colliders in the same GameObject. It does not work for multiple Rigidbodies connected with Joints. 

**More Information** 

For more information see this [Answers post](http://answers.unity3d.com/questions/48836/determining-the-torque-needed-to-rotate-an-object.html).

This article applies to Unity versions 5.x

      