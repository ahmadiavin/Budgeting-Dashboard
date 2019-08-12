import React, { Component } from "react";
import { HorizontalBar } from "react-chartjs-2";


class CategoryBox extends Component {
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
      <div>
        <HorizontalBar
          data={{
            labels,
            datasets: [
              {
                data: amtSpentByCategory,
                backgroundColor: ["#05eeb4", "#05a4ee", "#deee05", "#ee0505"],
                hoverBackgroundColor: ["#05e4ee", "#de9e05", "#ee1505", "#ee0500"]
              }
            ]
          }}
        />
      </div>
    );
  }
}

export default CategoryBox;
