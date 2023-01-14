https://medium.com/swlh/cookies-vs-localstorage-whats-the-difference-d99f0eb09b44



 HTML5 appeared on the scene and introduced ```LocalStorage``` as another data storage option.  
This new Javascript object (along with SessionStorage) boasted a much large storage capacity than cookies at a whopping 5MB  


```Cookies:```
what are cookies? they are small text files that are placed on a user’s computer by a website.   
They hold a very small amount of data at a maximum capacity of 4KB.   
 Cookies are used in different ways, such as in storing the pages visited on a site or a user’s login information.  
 They are limited in that they can only store strings.

LocalStorage — A More Permanent Solution
---
 One of the most important differences is that unlike with cookies, data does not have to be sent back and forth with every HTTP request.  
 This reduces the overall traffic between the client and the server and the amount of wasted bandwidth.   
This is because data is stored on the user’s local disk and is not destroyed or cleared by the loss of an internet connection.  
 Also, as mentioned before, LocalStorage can hold up to 5MB of information.  
 This is a whole lot more than the 4KB that cookies hold.

Data is not automatically destroyed unless it is cleared through Javascript code. This can be good for larger bits of data that need to be stored for longer periods of time. Also, with LocalStorage you can not only store strings but also Javascript primitives and objects.


