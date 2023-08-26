// Cross origin Resource Sharing
/*
When we want to access data (text,images,video) from one origin say a.com, we can easily do it
Now Let say we want to access data of b.com from a.com so this is cross origin access
Its important that on the request we send header and method. header should say that cross origin access is allowed to a.com to access resources from b.com
When we make a request, first a copy request is made from the browser we call it pre-flight
In the pre-flight, we send header and method
In the b.com side, header should have cross origin access to a.com or should have * which means allow all domains to share cross origin in b.com
Acess control allow method should mention which methods to allow get,post,put,delete
After pre-flight request, actual request is made and we get the response
Access control allow origin: a.com or *
Access control allow method: Get/Put/Update/Delete
In Postman there is no pre-flight request so no CORS error but when we send request from browser pre-floght request is made and CORS error comes

*/
