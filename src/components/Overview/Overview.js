import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddPurchase from "./AddPurchases/AddPurchase";
import { getExpenses, addPurchase } from "../../Redux/expenseReducer";
import { updateEmail, updateUsername } from "../../Redux/auth/authReducer";
// import LineChart from "./LineChart";

class Overview extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    console.log(this.props);
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }
    const { purchases } = this.props.expense;

    return (
      <div>
        <div>
          <h1>Welcome {this.props.auth.username}</h1>
          <h1>your email is : {this.props.auth.email}</h1>
        </div>
        it's the Overview page!!!
        <AddPurchase
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
  { getExpenses, addPurchase, updateEmail, updateUsername }
)(Overview);
