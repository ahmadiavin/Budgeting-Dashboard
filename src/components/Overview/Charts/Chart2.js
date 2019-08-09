import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class Chart2 extends Component {

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
        <Bar
          data={{
            labels: ["Inflow", "Outflow"],
            datasets: [
              {
                data: [moneySpent, remainingBudget],
                backgroundColor: ["#05eeb4", "#05a4ee"],
                hoverBackgroundColor: ["#deee05", "#ee0505"],
                borderColor: ["#b1b1b1"]
              }
            ]
          }}
        />
      </div>
    );
  }
}

//  background: #05eeb4,
//  background: #05a4ee,
//  background: #deee05,
//  background: #ee0505,
