import React from "react";
import ReactDOM from "react-dom";

// const reactheading = React.createElement(
//   "h1",
//   { id: "test" },
//   "hello from react"
// );
// React.createElement();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactheading);

// // if we want some structure like this
// {
//   /* <div id="parent">
//   <div id="child">
//     <h1>Hello I am first child</h1>
//     <h2>Hello from 2 child</h2>
//   </div>
// </div> */
// }

// // const heading = React.createElement(
// //   "div",
// //   { id: "parent" },
// //   React.createElement("div", { id: "child" }, [
// //     React.createElement("h1", {}, "Hello I am first child"),
// //     React.createElement("h1", {}, "Hello I am second child"),
// //   ])
// // );
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);

// // const jsxHeading = <h1> this is jsx heading </h1>;
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(jsxHeading);

// // functional component
// // const component1 = () => {
// //   return <h1>Hello from COMPONENT 1 </h1>;
// // };

// // const component2 = () => <h1>Hello from COMPONENT 2 </h1>;

// // //jsx can be nested also
// // const HeadingComponent = () => (
// //   <div id="container">
// //     <h1>Hello from COMPONENT 1 </h1>;
// //   </div>
// // );

// // // react element - if we remove arrow functiona size then it is a react component
// // const component4 = (
// //   <div id="container">
// //     <h1>Hello from COMPONENT 1 </h1>;
// //   </div>
// // );

// // const title = <h1> Namaste React</h1>;

// // const MainHeading = () => <h1>hiiiii</h1>;
// // //<Title />
// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<MainHeading />);
// // const header = () => React.createElement(<div class="logo">
// // <img src="Good-food-logo-design-on-transparent-background-PNG.png"/>
// // </div>
// // <div>

// // </div>

// // )

// // ;
// const title = <h1>This is page title</h1>;
// const HeadingComponent = () => {
//   return <h1>Hello</h1>;
// };
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);
const title = <h1>This is page title</h1>;
const HeadingComponent = () => {
  return <div>"Hello" </div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
