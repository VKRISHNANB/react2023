Lifting State Up
---

A common question from React developers is how to share state between two sibling components.  
Often, several components need to reflect the same changing data.  
 The answer is to <span style="color:lime">Lift the state</span> which basically amounts to finding the lowest common parent (ancestor) shared between the two components and placing the state management there, and  
 then passing the state and a mechanism for updating that state down into the components that need it.

