import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          count:0,
          count1:1,};
    }
  render() {
    const {name,location}=this.props;
    return (
      <div className="user-card">
        <h1>count:{this.state.count}</h1>
        <button onClick={()=>{
//Never update state variables directly
this.setState({
  count:this.state.count + 1,
})
        }}>Count Increase</button>
        <h1>Name:{name}</h1>
        <h2>Location: {location}</h2>
        <h3>Contact: @samrat224 (X)</h3>
      </div>
    );
  }
}

export default UserClass;
