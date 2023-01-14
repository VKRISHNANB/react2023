Reference url
---
https://hashnode.com/post/understanding-the-react-useeffect-hook-cktk5rc8f0414o8s11rtmf5qy

https://medium.com/@dev_abhi/useeffect-what-when-and-how-95045bcf0f32


What are the side effects in a react component?
-----
The job of react is to ```render and re-render UI``` whenever needed (after changing state, props).   
Other than this any other task like:   

        1. sending http requests to the backend server,   
        2. updating global variables inside the component,   
        3. saving or updating caches etc.   
        
are considered as side effects.   


 React.useEffect
---
```useEffect``` is one of the most popular Hooks because it allows you to perform side effects in function components

Think of the useEffect Hook as a partial replacement for <strong>React lifecycle events</strong>.  
The useEffect Hook can replicate the behavior of ```componentDidMount```, ```componentDidUpdate```, and ```componentWillUnmount``` methods.  
 you can respond to changes in any component that contains the useEffect Hook.

<h1>Syntax</h1>
---

```javascript
    useEffect(() => {  
    
                // some code  
    
    }, [someProp, someState]);
```

        
</code>

The first argument is a ```callback function``` that by default runs after every render.

The second argument is an ```optional Dependency``` array that tells the Hook to only callback if there is a change in a target state. The Hook compares the previous and current state value of each dependency.

eslint-plugin-react-hooks 
---
URL: https://www.npmjs.com/package/eslint-plugin-react-hooks  

If the dependencies for the useEffect() is not properly done, the user may lose data.
In an effort to help you avoid making mistakes here, the React team has created an ```ESLint plugin``` called <strong>eslint-plugin-react-hooks</strong> which you can use to not only ensure that the dependency array is kept up-to-date, but keep it up-to-date automatically for you using ESLint's fix feature.

The rule that will help you with this is the ```exhaustive-deps rule```, and I strongly advise that you use this tool and follow that rule.

