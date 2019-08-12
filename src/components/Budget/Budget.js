import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getExpenses, editBudget } from "../../Redux/expenseReducer";
import Chart1 from "../Overview/Charts/Chart1";
import Chart2 from "../Overview/Charts/Chart2";
import "./_budget.scss";
class Budget extends Component {
  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }
    const { purchases, budgetLimit } = this.props.expense;

    return (
      <div className="budget-cont">
        <Chart1 editBudget={editBudget} purchases={purchases} budgetLimit={budgetLimit} />
        <Chart2 purchases={purchases} budgetLimit={budgetLimit} />
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
  { getExpenses, editBudget }
)(Budget);
