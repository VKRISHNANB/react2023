Refs and the DOM
---
Refs provide a way to access DOM nodes or React elements created in the render method.


In the typical ```React dataflow```, <span style="color:lime"><strong>props</strong></span> are the only way that parent components interact with their children.  

 To modify a child, you ```re-render``` it with new props.  

 However, there are a few cases where you need to imperatively modify a child ```outside``` of the typical dataflow.   

The child to be modified could be an instance of a ```React component```, or it could be a ```DOM element```. 

Creating Refs
---
Refs are created using React.createRef() and attached to React elements via the ```ref attribute```.  

Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.

```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
```




Vanilla-tilt takes a DOM node and makes it react to when the user mouses over that DOM node.

We need React to give us the DOM node that creates for this particular React element so we can wire it up to vanilla-tilt.  

 To do this, we're going to use a ```ref prop``` and we need to pass a ref which is an object that has a mutable current property.