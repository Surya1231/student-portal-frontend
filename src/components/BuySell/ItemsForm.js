/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../styles/scss/items.scss';

class ItemsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchItem: '',
      checkedItems: new Map(),
    };
  }

  handleCheckboxChange = (e) => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevState) => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (event) => {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit();
  };

  render() {
    const { itemCategories } = this.props;
    const { searchItem, checkedItems } = this.state;

    return (
      <div className="itemsForm">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="searchItem">Search for Item</label>
            <input
              type="text"
              name="searchItem"
              value={searchItem}
              onChange={this.handleChange}
              className="form-control"
              placeholder="Extension board, table, etc"
            />
          </div>
          <div className="form-group">
            <label htmlFor="filter">Filter By Category</label>
            {itemCategories &&
              itemCategories.map((category) => (
                <div key={category.key}>
                  <label>
                    <input
                      type="checkbox"
                      name={category.name}
                      checked={checkedItems.get(category.name)}
                      onChange={this.handleCheckboxChange}
                    />
                    {category.label}
                  </label>
                </div>
              ))}
          </div>
          <hr />
          <div className="form-group pt-2">
            <button type="submit" className="btn btn-primary">
              Filter
            </button>

            <button type="button" className="btn btn-danger ml-3">
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  itemCategories: state.items && state.items.itemCategories,
});

export default connect(mapStateToProps, null)(ItemsForm);
