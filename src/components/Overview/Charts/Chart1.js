import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import {FaRegEdit} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'

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
    console.log(purchases, "what is going on with purchases on the chart");
    const moneySpent = purchases.reduce((total, purchase) => {
      return total + purchase.price;
    }, 0);
    const remainingBudget =
      budgetLimit - moneySpent >= 0 ? budgetLimit - moneySpent : 0;
    return (
      <div className="chart1-cont">
        <h3>Budget: ${budgetLimit} <button
          className="editButton"
          onClick={() => this.setState({ editable: !this.state.editable })}
        >
           <FaRegEdit/>
        </button></h3>
        
        {this.state.editable === true ? (
          <div className="hidden-input">
            <input type='money' placeholder='Edit your budget'></input><button onClick={() => this.props.editBudget()}><FaCheck/></button>
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
