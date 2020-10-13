/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import '../../styles/scss/items.scss';

class ItemBox extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { name, category, quotedPrice, image, timeUsed, otherDetails } = this.props;
    const { seller, sellerContact, postedOn } = this.props;
    const { openModal } = this.props;
    return (
      <div>
        <div className="px-3 py-3 w-100 h-25">
          <div className="card">
            <img className="card-img-top" src={image} alt="Item" />
            <div className="card-body">
              <h4 className="card-title">{name}</h4>
              <p className="card-text">{category}</p>
              <p>
                <span>
                  <kbd>Rs.{quotedPrice}</kbd>
                </span>
                <span> </span>
                <span>
                  <kbd>Used - {timeUsed} </kbd>
                </span>
              </p>
              <div className="form-group pt-2">
                <button
                  type="button"
                  className="btn btn-sm btn-info"
                  onClick={() =>
                    openModal(
                      'moreInfoModal',
                      name,
                      category,
                      quotedPrice,
                      image,
                      timeUsed,
                      otherDetails,
                      seller,
                      sellerContact,
                      postedOn,
                    )
                  }
                >
                  More Info
                </button>

                <button
                  type="button"
                  className="btn btn-sm btn-success ml-3"
                  onClick={() => openModal('buyModal')}
                >
                  Buy
                </button>
              </div>
            </div>
            <div className="card-footer">
              <small className="text-muted">Posted - {postedOn} </small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemBox;
