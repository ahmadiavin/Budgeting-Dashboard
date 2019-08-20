import React, { Component } from "react";
import _ from "lodash";
import axios from "axios";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Loading from "../../Loading/Loading";
import SearchBar from "./SearchBar";
import StockList from "./StockList";
import Plot from "react-plotly.js";
import './_stockcheck.scss'
require("dotenv").config();
// import StockChart from "./StockChart/StockChart";

class StockCheck extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],
      term: null,
      value: "",
      stockChartXValues: [],
      stockChartYValues: []
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getStock = this.getStock.bind(this);
  }

  getStock() {
    //   e.preventDefault()
    const pointerToThis = this;
    const API_KEY = process.env.REACT_APP_APIKEY;
    let StockSymbol = this.state.value;
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

    fetch(API_Call)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        // console.log(data);
        for (var key in data[`Time Series (Daily)`]) {
          stockChartXValuesFunction.push(key);
          stockChartYValuesFunction.push(
            data["Time Series (Daily)"][key][`1. open`]
          );
        }
        pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction
        });
      });
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    if (e) e.preventDefault();
    this.getStock();
    this.setState({
      value: "",
      term: this.state.value
    });

    let term = this.state.value;
    const key = process.env.REACT_APP_APIKEY;
    const url = `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${term}&apikey=${key}`;

    axios
      .get(url)
      .then(res => {
        //   console.log(res.data);
        let stocks = _.flattenDeep(
          Array.from(res.data["Stock Quotes"]).map(stock => [
            {
              symbol: stock["1. symbol"],
              price: stock["2. price"],
              volume: stock["3. volume"],
              timestamp: stock["4. timestamp"]
            }
          ])
        );
        //   console.log(stocks);
        this.setState((state, props) => {
          return {
            ...state,
            stocks
          };
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.props.auth.username === "") {
      return <Redirect to="/" />;
    }
    // let stocks = this.state.stocks;
    const value = this.state.value;

    return (
      <div className="StockCheck">
        {this.props.auth.loading ? <Loading /> : null}
        <header>
        <h1 className="StockCheck__Title">Stock Search</h1>
        </header>
        <SearchBar
          value={value}
          onChange={this.handleChange}
          onClick={this.handleClick}
        />
        <StockList stockItems={this.state.stocks} />
        <br/>
        <div className="stock-cont">
          <Plot
            data={[
              {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: "scatter",
                mode: "lines+markers",
                marker: { color: "$primary" }
              }
            ]}
            layout={{
              width: 720,
              height: 440,
              title: "Daily Open Price for latest 100 data points"
            }}
          />
        </div>
      </div>
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
  {}
)(StockCheck);
