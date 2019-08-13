import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AddPurchase from "./AddPurchases/AddPurchase";
import {
  getExpenses,
  addPurchase,
  removePurchase
} from "../../Redux/expenseReducer";
import { updateEmail, updateUsername } from "../../Redux/auth/authReducer";
import "./_overview.scss";
import PieChart from "./Charts/PieChart";
import Loading from "../Loading/Loading";
import Background from "../Loading/Background";
import CategoryList from "./Charts/CategoryList";

class Overview extends Component {
  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }
    const { purchases } = this.props.expense;

    return (
      <Background>
        {this.props.expense.loading  ? <Loading /> : null}
        <div className="mainview">
          <header className="overviewHeader">
            <h3>Budgeting Dashboard</h3>
          </header>
          <div className="sideview">
            <h5>Welcome {this.props.auth.username}</h5>
            <h5> Email: {this.props.auth.email}</h5>
          </div>
          <br />
          <div className="charts">
          <CategoryList purchases={purchases}/>
           
            <PieChart purchases={purchases} />
          </div>
          <br />

          {/* <div className="addPurchase"> */}
            
            <AddPurchase
              removePurchase={this.props.removePurchase}
              addPurchase={this.props.addPurchase}
              purchases={purchases}
            />
          {/* </div> */}
          <br/>
        </div>
      </Background>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
    expense: state.expense
  };
}

export default connect(
  mapStateToProps,
  { getExpenses, addPurchase, removePurchase, updateEmail, updateUsername }
)(Overview);
