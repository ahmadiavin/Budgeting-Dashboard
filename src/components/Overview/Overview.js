import React, { Component } from "react";
import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
import AddPurchase from "./AddPurchase";
import { addPurchase } from "../../Redux/expenseReducer";

class Overview extends Component {

  render() {
     

    return (
      <div>
        it's the Overview page!!!
        <AddPurchase addPurchase={this.props.addPurchase} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    username: state.username,
    budget: state.budget
  };
}

export default connect(mapStateToProps, addPurchase)(Overview);
