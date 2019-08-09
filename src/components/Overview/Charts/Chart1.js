import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

export default class Chart1 extends Component {
  constructor() {
    super();
    this.state = {
      editable: false
    };
  }
  render() {
    let { purchases, budgetLimit } = this.props;
    purchases = purchases || [];
    console.log(purchases, "DUDE");
    const moneySpent = purchases.reduce((total, purchase) => {
      return total + purchase.price;
    }, 0);
    const remainingBudget =
      budgetLimit - moneySpent >= 0 ? budgetLimit - moneySpent : 0;
    return (
      <div className="chart1-cont">
        <h3>Budget: ${budgetLimit}</h3>
        <button
          className="editButton"
          onClick={() => this.setState({ editable: !this.state.editable })}
        >
           Edit
        </button>
        {this.state.editable === true ? (
          <div className="hidden-input">
            <input></input>
          </div>
        ) : null}
        <Doughnut
          data={{
            labels: ["Total Spent", "Remaining"],
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
