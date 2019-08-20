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

    const options = {
      clearSearch: true,
      searchField: this.createCustomSearchField
    };

    return (
      <div className="bootStrapTable">
        {/* <SearchField
        className='my-custom-class'
        defaultValue={ purchases.defaultSearch }
        placeholder={ purchases.searchPlaceholder }/> */}
        <BootstrapTable width='15' options={options} data={ purchases } search>
          <TableHeaderColumn dataField='id' isKey hidden autoValue={true}></TableHeaderColumn>
          <TableHeaderColumn  dataField='category' sortHeaderColumnClassName={ this.customSortStyle } dataSort >Category</TableHeaderColumn>
          <TableHeaderColumn  dataField='description' sortHeaderColumnClassName={ this.customSortStyle } dataSort >Description</TableHeaderColumn>
          <TableHeaderColumn   dataField='price'  sortHeaderColumnClassName={ this.customSortStyle } dataSort >Price</TableHeaderColumn>
          <TableHeaderColumn   dataField='date'sortHeaderColumnClassName={ this.customSortStyle } F dataSort >Date</TableHeaderColumn>
      
        </BootstrapTable>
      </div>
    );
  }
}

export default connect(
  undefined,
  { getExpenses }
)(BSTable);
