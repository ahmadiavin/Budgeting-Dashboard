import React, { Component } from "react";
import "./_addpurchase.scss";
// import {connect} from 'react-redux'
// import {addPurchase} from '../../Redux/expenseReducer'
import PurchaseList from './PurchaseList'
class AddPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      category: "",
      description: "",
      price: ""
    };
  }

  add = e => {
    e.preventDefault();

    const { price, category, description, date } = this.state;
    const { addPurchase } = this.props;
    let num = parseInt(price);
    if (num < 0) return alert("Price cannot be less than zero.");
    if (!Number.isNaN(num) && typeof num === "number") {
      if (num && category && description && date) {
        addPurchase(num, description, category, date);
        this.setState({
          category: "",
          description: "",
          price: "",
          date: ""
        });
      }
    }
  };

  render() {
    const { price, category, description, date } = this.state;
   
    

    return (
      <table>
        <thead>
          <tr>
            <th>category</th>
            <th>description</th>
            <th>price</th>
            <th>date</th>
          </tr>
        </thead>
         <PurchaseList/>  
        <tfoot className="tfoot-cont">
          <tr>
            <td>
              <form>
                <div className="tf-category">
                  <select
                    value={category}
                    onChange={e => this.setState({ category: e.target.value })}
                  >
                    <option defaultValue="Misc" value="Misc">
                      Misc
                    </option>
                    <option value="Travel">Travel</option>
                    <option value="Rent">Rent</option>
                    <option value="Food">Food</option>
                    <option value="Gas">Gas</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>
                </div>
                <div className="tf-description">
                  <input
                    value={description}
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                    placeholder="Description"
                    type="text"
                  />
                </div>
                <div className="tf-price">
                  <input
                    placeholder="Price"
                    min={1}
                    value={price}
                    type="number"
                    onChange={e => this.setState({ price: e.target.value })}
                  />
                </div>
                <div className="tf-date">
                  <input
                    type="date"
                    value={date}
                    onChange={e => this.setState({ date: e.target.value })}
                    placeholder="Date"
                  />
                </div>
                <div>
                  <button onClick={e => this.add(e)}>Add</button>
                </div>
              </form>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
// const mapStateToProps = reduxState => {
//   return {
//     expense: reduxState.expense
//   }
// }
export default AddPurchase;

// write a functional component for a row.
