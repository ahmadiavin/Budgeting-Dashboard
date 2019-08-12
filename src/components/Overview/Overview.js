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
<<<<<<< HEAD
import "./_overview.scss";
import PieChart from "./Charts/PieChart";
import CategoryBox from "./Charts/CategoryBox";
import Loading from '../Loading/Loading'
import Background from '../Loading/Background'

=======
import './_overview.scss'
>>>>>>> 5ad182433139c3fdfb533054e87894cfb1b49bad
class Overview extends Component {
  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }
    const { purchases } = this.props.expense;

    return (
<<<<<<< HEAD
      <Background>
      {this.props.budget === true ? <Loading /> : null}
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
            <CategoryBox purchases={purchases} />
            <PieChart purchases={purchases} />
            <h4>All Transactions</h4>
          </div>
          
        <div className="addPurchase">
          
          <AddPurchase
            removePurchase={this.props.removePurchase}
            addPurchase={this.props.addPurchase}
            purchases={purchases}
          />
        </div>
=======
      <div className='mainview'>
        <div className='sideview'>
          <h1>Welcome {this.props.auth.username}</h1>
          <h1>your email is : {this.props.auth.email}</h1>
        </div>
        <h3>All transaction</h3>
        <AddPurchase
          removePurchase={this.props.removePurchase}
          addPurchase={this.props.addPurchase}
          purchases={purchases}
        />
>>>>>>> 5ad182433139c3fdfb533054e87894cfb1b49bad
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
