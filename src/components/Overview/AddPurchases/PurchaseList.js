import React from "react";
import "./_purchaselist.scss";
import { connect } from "react-redux";
import { getExpenses } from "../../../Redux/expenseReducer";

class PurchaseList extends React.Component {
  componentDidMount() {
    this.props.getExpenses();
  }

  render() {
    let { purchases } = this.props;

    return (
      <div className="list-cont">
        {purchases.map(purchase => {
          return (
            <table>
              <tbody>
                <tr key={purchases.id}>
                  <td>{purchase.category}</td>
                  <td>{purchase.description}</td>
                  <td>{purchase.price}</td>
                  <td>{purchase.date}</td>
                  <button
                    className="close"
                    onClick={() => this.props.removePurchase(purchase.id)}
                  >
                    X
                  </button>
                </tr>
              </tbody>
            </table>
          );
        })}
      </div>
    );
  }
}

export default connect(
  undefined,
  { getExpenses }
)(PurchaseList);
