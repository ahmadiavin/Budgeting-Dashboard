import React, { Component } from "react";
import './_addpurchase.scss'
class AddPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      category: "other",
      description: "",
      price: ""
    };
  }

  add() {
    let { price, category, description, date } = this.state;
    let { addPurchase } = this.props;
    let num = parseInt(price);
    if (num < 0) return alert("Price cannot be less than zero.");
    if (!Number.isNaN(num) && typeof num === "number") {
      if (num && category && description && date) {
        addPurchase(num, description, category, date);
        this.setState({
          category: "other",
          description: "",
          price: "",
          date: Date.now() | date("Y-m-d")
        });
      }
    }
  }

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
        <tbody>
          <tr>
            <td>
              <div>category</div>
            </td>
            <td>
              <div>description</div>
            </td>
            <td>
              <div>price</div>
            </td>
            <td>
              <div>date</div>
            </td>
          </tr>
        </tbody>
        <tfoot className="tfoot-cont">
          <tr>
            <td>
              <form>
                <div className='tf-category'>
                  <select
                    value={category}
                    onChange={e => this.setState({ category: e.target.value })}
                  >
                    <option defaultValue value="Other">
                      Other
                    </option>
                    <option value="Rent">Rent</option>
                    <option value="Groceries">Food</option>
                    <option value="Gas">Gas</option>
                    <option value="Entertainment">Entertainment</option>
                  </select>
                </div>
                <div className='tf-description'>
                  <input
                    value={description}
                    onChange={e =>
                      this.setState({ description: e.target.value })
                    }
                    placeholder="Description"
                    type="text"
                  />
                </div>
                <div className='tf-price'>
                  <input
                    placeholder="Price"
                    min={1}
                    value={price}
                    type="number"
                    onChange={e => this.setState({ price: e.target.value })}
                  />
                </div>
                <div className='tf-date'>
                  <input
                    type="date"
                    id="aDate"
                    name="aDate"
                    value={date}
                    onChange={e => this.setState({ date: e.target.value })}
                    placeholder="Date"
                  />
                </div>
                <div>
                  <button onClick={() => this.add()}>Add</button>
                </div>
              </form>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default AddPurchase;
