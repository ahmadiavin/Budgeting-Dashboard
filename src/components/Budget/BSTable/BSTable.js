import React from "react";
import { connect } from "react-redux";
import { getExpenses } from "../../../Redux/expenseReducer";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import './_bstable.scss'
// import '../../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class BSTable extends React.Component {
  componentDidMount() {
    this.props.getExpenses();
  }
  customSortStyle = (order, dataField) => {
    if (order === 'desc') {
      return 'sort-desc';
    }
    return 'sort-asc';
  }

  render() {
    let { purchases } = this.props;



    return (
      <div className="bootStrapTable">
        <BootstrapTable  data={ purchases }>
          <TableHeaderColumn dataField='id' isKey hidden autoValue={true}></TableHeaderColumn>
          <TableHeaderColumn dataField='category' dataSort sortHeaderColumnClassName={ this.customSortStyle }>Category</TableHeaderColumn>
          <TableHeaderColumn dataField='description' dataSort sortHeaderColumnClassName={ this.customSortStyle }>Description</TableHeaderColumn>
          <TableHeaderColumn dataField='price' dataSort sortHeaderColumnClassName={ this.customSortStyle }>Price</TableHeaderColumn>
          <TableHeaderColumn dataField='date' dataSort sortHeaderColumnClassName={ this.customSortStyle }>Date</TableHeaderColumn>
      
        </BootstrapTable>
      </div>
    );
  }
}

export default connect(
  undefined,
  { getExpenses }
)(BSTable);
