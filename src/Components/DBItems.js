import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DBItems extends Component {
  render() {
    return (
      <li className="DBItem">
        <strong>{this.props.dbitem.title}</strong>
      </li>
    );
  }
}

DBItems.propTypes = {
  dbitem: PropTypes.object
}

export default DBItems;
