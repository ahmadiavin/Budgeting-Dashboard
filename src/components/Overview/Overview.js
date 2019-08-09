import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddPurchase from "./AddPurchases/AddPurchase";
import {
  getExpenses,
  addPurchase,
  removePurchase
} from "../../Redux/expenseReducer";
import { updateEmail, updateUsername } from "../../Redux/auth/authReducer";
import './_overview.scss'
class Overview extends Component {
  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }
    const { purchases } = this.props.expense;

    return (
      <div className='mainview'>
        <div className='sideview'>
          <h1>Welcome {this.props.auth.username}</h1>
          <h1>your email is : {this.props.auth.email}</h1>
        </div>
        <h3>All transaction</h3>
        <AddPurchase
          removePurchase={this.props.removePurchase}
          addPurchase={this.props.addPurchase}
          purchases={purchases}
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    expense: state.expense
  };
}

export default connect(
  mapStateToProps,
  { getExpenses, addPurchase, removePurchase, updateEmail, updateUsername }
)(Overview);
