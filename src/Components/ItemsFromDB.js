import React, { Component } from 'react';
import DBItems from './DBItems';
import PropTypes from 'prop-types';

class ItemsFromDB extends Component {
  render() {
    let dbItems;
    if(this.props.dbItems){
      dbItems = this.props.dbItems.map(dbitem => {
        //console.log(project);
        return (
          <DBItems key={dbItems.title} dbitem={dbitem} />
        );
      });
    }
    return (
      <div className="dbItems">
        <h3>DB List</h3>
        {dbItems}
      </div>
    );
  }
}

ItemsFromDB.propTypes = {
  ItemsFromDB: PropTypes.array
}

export default ItemsFromDB;
