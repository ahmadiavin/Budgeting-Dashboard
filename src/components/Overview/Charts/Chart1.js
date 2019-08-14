import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import { getBudget } from "../../../Redux/expenseReducer";
import './_chart1.scss'
class Chart1 extends Component {
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

export default connect(
  undefined,
  { getBudget }
)(Chart1);
