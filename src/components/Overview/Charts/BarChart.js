import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";
import './_barchart.scss'

class BarChart extends Component {
  render() {
    let { purchases } = this.props;
    purchases = purchases || [];
    const labels = purchases
      .map(purchase => purchase.category)
      .filter((purchase, i, arr) => i === arr.indexOf(purchase))
      .sort();
    const amtSpentByCategory = labels.map(label => {
      return purchases
        .filter(p => p.category === label)
        .reduce((total, p) => total + p.price, 0);
    });

    return (
      <div className='barChart'>
        <HorizontalBar
          data={{
            labels,
            datasets: [
              {
                label: "Expenses by Category",
                data: amtSpentByCategory,
                backgroundColor: [" #61c9aa", "#a36fa6", "#d67d67", "#dea65b","#5391ba"],
                hoverBackgroundColor: ["#1fc291"]
              }
            ]
          }}
        />
        <p>Total expenses by category listed in a horizontal bar chart. </p>
      </div>
    );
  }
}

export default BarChart;
