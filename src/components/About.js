import React, { Component } from "react";
// const About = () => {
//   return (
//     <>
//       <h1>About Page</h1>
//     </>
//   );
// };
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.log("Component Did Mount");
  }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("did update called");
  //   if (prevState.count !== this.state.count) {
  //     this.setState((prevState) => ({ count: prevState.count + 5 }));
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   console.log("did update called");
  //   if (prevState.count !== this.state.count) {
  //     this.setState({ count: this.state.count + 5 });
  //   }
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log("did update called");
    console.log(prevState.count);
    console.log(this.state.count);
    // if (prevState.count !== this.state.count) {
    //   this.setState({ count: this.state.count + 5 });
    // }
    if (
      prevState.count !== this.state.count &&
      prevState.count !== this.state.count + 5
    ) {
      console.log(prevState.count);
      console.log(this.state.count);
      console.log("hhh");
      this.setState({ count: this.state.count + 5 });
    }
  }

  registerClick = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.registerClick}>Click Me</button>
      </>
    );
  }
}
export default About;
