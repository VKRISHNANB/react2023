

// ES5 

// HelloComponent - class

// let HelloWorld=React.createClass({
//     render:function(){
//         let element=React.createElement('div',null,"Hello - Welcome to react");
//         return element;
//     }
// })


// let helloWorld=React.createElement(HelloWorld,null,null); // instance

// ReactDOM.render(helloWorld,document.getElementById("root"))

//-----------------------------------------------------------------

// ES5 with JSX

// let HelloWorld=React.createClass({
//     render:function(){
//         let element=(<div>Hello, Welcome</div>)
//         return element;
//     }
// })


// let helloWorld=<HelloWorld />

// ReactDOM.render(helloWorld,document.getElementById("root"))

//-----------------------------------------------------------------

// ES6


class HelloComponent extends React.Component {
    render() {
        return (
            <div className="alert alert-info">
                <h1>HelloComponent</h1>
            </div>
        )
    }
}

// let hello = <HelloComponent />

ReactDOM.render(<HelloComponent />, document.getElementById("root"))

