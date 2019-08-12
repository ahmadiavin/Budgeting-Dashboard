import React, { Component } from "react";
import "./_categorylist.scss";
import { connect } from "react-redux";
import { getExpenses } from "../../../Redux/expenseReducer";

class CategoryList extends Component {
  componentDidMount() {
    this.props.getExpenses();
  }
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
      <div className='category-div'>
        <h3>Spending by Category</h3>
        <ul className="legend" key={purchases.id}>
          <li>
            <div className="color1" />
            <p className="category">
              <span>{labels[0]}</span>
            </p>
            <p className="price">{amtSpentByCategory[0]}</p>
          </li>
          <li>
            <div className="color2" />
            <p className="category">
              <span>{labels[1]}</span>
            </p>
            <p className="price">{amtSpentByCategory[1]}</p>
          </li>
          <li>
            <div className="color3" />
            <p className="category">
              <span>{labels[2]}</span>
            </p>
            <p className="price">{amtSpentByCategory[2]}</p>
          </li>
          <li>
            <div className="color4" />
            <p className="category">
              <span>{labels[3]}</span>
            </p>
            <p className="price">{amtSpentByCategory[3]}</p>
          </li>
          <li>
            <div className="color5" />
            <p className="category">
              <span>{labels[4]}</span>
            </p>
            <p className="price">{amtSpentByCategory[4]}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  undefined,
  { getExpenses }
)(CategoryList);
