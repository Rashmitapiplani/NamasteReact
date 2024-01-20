// const reactheading = React.createElement(
//   "h1",
//   { id: "test" },
//   "hello from react"
// );
// React.createElement();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(reactheading);

// if we want some structure like this
{
  /* <div id="parent">
  <div id="child">
    <h1>Hello I am first child</h1>
    <h2>Hello from 2 child</h2>
  </div>
</div> */
}

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am first child"),
    React.createElement("h1", {}, "Hello I am second child"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
