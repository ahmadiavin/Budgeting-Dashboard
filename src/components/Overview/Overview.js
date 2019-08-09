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
import "./_overview.scss";
import PieChart from "./Charts/PieChart";
class Overview extends Component {
  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }
    const { purchases } = this.props.expense;

    return (
      <div className="mainview">
        <header className="overviewHeader">
          <h3>All transactions</h3>
        </header>
        <div className="sideview">
          <h5>Welcome {this.props.auth.username}</h5>
          <h5> Email: {this.props.auth.email}</h5>
        </div>
        <br />

        <div className="addPurchase">
          <PieChart purchases={purchases} />
          <AddPurchase
            removePurchase={this.props.removePurchase}
            addPurchase={this.props.addPurchase}
            purchases={purchases}
          />
        </div>
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
