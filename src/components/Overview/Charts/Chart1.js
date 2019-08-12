import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import {connect} from 'react-redux'
import {getBudget} from '../../../Redux/expenseReducer'

class Chart1 extends Component {
  constructor() {
    super();
    this.state = {
      editable: false,
      editBudgetInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.getBudget()
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
   
    let { purchases, budgetLimit } = this.props;
    purchases = purchases || [];
    const moneySpent = purchases.reduce((total, purchase) => {
      return total + purchase.price;
    }, 0);
    const remainingBudget =
      budgetLimit - moneySpent >= 0 ? budgetLimit - moneySpent : 0;
    return (
      <div className="chart1-cont">
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
                  this.props.username,
                  this.state.editBudgetInput
                )
              }
            >
              <FaCheck />
            </button>
          </div>
        ) : null}
        <Doughnut
          data={{
            labels: ["Total Spent", "Remaining"],
            datasets: [
              {
                data: [moneySpent, remainingBudget],
                backgroundColor: ["rgb(184, 37, 37)", "rgb(49, 184, 37)"],
                hoverBackgroundColor: ["rgb(184, 37, 37)", "rgb(49, 184, 37)"],
                borderColor: ["#b1b1b1"]
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default connect(undefined, {getBudget}) (Chart1);
