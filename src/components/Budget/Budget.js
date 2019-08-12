import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getExpenses, editBudget, getBudget } from "../../Redux/expenseReducer";
import Chart1 from "../Overview/Charts/Chart1";
import Chart2 from "../Overview/Charts/Chart2";
import BarChart from "../Overview/Charts/BarChart";

import "./_budget.scss";
class Budget extends Component {
  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }

    const { purchases, budgetLimit } = this.props.expense;
    const { username } = this.props.auth;

    return (
      <div className="budget-cont">
        <Chart1
          editBudget={editBudget}
          purchases={purchases}
          budgetLimit={budgetLimit}
          username={username}
          getBudget={getBudget}
        />
        <Chart2 purchases={purchases} budgetLimit={budgetLimit} />
        <BarChart purchases={purchases} />
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
  { getExpenses, editBudget, getBudget }
)(Budget);
