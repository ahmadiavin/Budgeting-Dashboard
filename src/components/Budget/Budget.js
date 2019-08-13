import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { getExpenses, editBudget, getBudget } from "../../Redux/expenseReducer";
import Chart1 from "../Overview/Charts/Chart1";
import Chart2 from "../Overview/Charts/Chart2";
import BarChart from "../Overview/Charts/BarChart";
import "./_budget.scss";
import Loading from "../Loading/Loading";
import Background from "../Loading/Background";

class Budget extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
      editBudgetInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getBudget();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }

    const { purchases, budgetLimit } = this.props.expense;
    const { username } = this.props.auth;

    return (
      <Background>
        {this.props.expense.loading ? <Loading /> : null}
        <div className="budget-cont">
          <h3>
            Budget: ${budgetLimit}
            <button
              className="editButton"
              onClick={() => this.setState({ editable: !this.state.editable })}
            >
              <FaRegEdit />
            </button>
          </h3>

          {this.state.editable === true ? (
            <div className="hidden-input">
              <input
                name="editBudgetInput"
                type="text"
                placeholder="Edit your budget"
                onChange={this.handleChange}
              />
              <button
                onClick={() =>
                  this.props.editBudget(
                    this.props.auth.username,
                    this.state.editBudgetInput
                  )
                }
              >
                <FaCheck />
              </button>
            </div>
          ) : null}
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
      </Background>
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
