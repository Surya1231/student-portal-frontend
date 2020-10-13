import React, { Component } from 'react';
import ItemBox from './ItemBox';
import Modal from '../common/Modal';
import BuyItem from './BuyItem';

class ItemsDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moreInfoModal: false,
      buyModal: false,
      name: '',
      category: '',
      quotedPrice: '',
      image: '',
      timeUsed: '',
      otherDetails: '',
      seller: '',
      sellerContact: '',
      postedOn: '',
    };
  }

  openModal = (
    modal,
    name,
    category,
    quotedPrice,
    image,
    timeUsed,
    otherDetails,
    seller,
    sellerContact,
    postedOn,
  ) => {
    this.setState({
      [modal]: true,
      name,
      category,
      quotedPrice,
      image,
      timeUsed,
      otherDetails,
      seller,
      sellerContact,
      postedOn,
    });
  };

  closeModal = (modal) => {
    this.setState({
      [modal]: false,
      name: '',
      category: '',
      quotedPrice: '',
      image: '',
      timeUsed: '',
      otherDetails: '',
      seller: '',
      sellerContact: '',
      postedOn: '',
    });
  };

  render() {
    const { name, category, quotedPrice, image, timeUsed, otherDetails } = this.state;
    const { seller, sellerContact, postedOn } = this.state;
    const { moreInfoModal, buyModal } = this.state;
    const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div>
        <div className="item-display">
          <h3 className="text-center text-primary pt-2">Items on Sale Currently</h3>
          <hr />
          <div className="card-columns">
            {a.map((i) => (
              <div key={i} className="">
                <ItemBox
                  name="Cooler"
                  category="Electronics"
                  quotedPrice="3000"
                  timeUsed="6 months"
                  image="https://tiimg.tistatic.com/fp/1/006/244/single-phase-desert-air-cooler-095.jpg"
                  otherDetails="Very good working condition........"
                  postedOn="12/10/20"
                  seller="Dhruv Golani"
                  sellerContact="99999999"
                  openModal={this.openModal}
                />
              </div>
            ))}
          </div>
        </div>

        <Modal
          title="Item Detailed Information"
          show={moreInfoModal}
          handleClose={() => this.closeModal('moreInfoModal')}
        >
          <div>
            <p>
              <b>Name</b> : {name}{' '}
            </p>
            <p>
              <b>Category</b> : {category}{' '}
            </p>
            <p>
              <b>Quoted Price</b> : {quotedPrice}{' '}
            </p>
            <p>
              <b>Time Used</b> : {timeUsed}{' '}
            </p>
            <p>
              <b>Additional Info</b> : {otherDetails}{' '}
            </p>
            <p>
              <b>Seller</b> : {seller}{' '}
            </p>
            <p>
              <b>Seller Contact Number</b> : {sellerContact}{' '}
            </p>
            <p>
              <b>Posted On</b> : {postedOn}{' '}
            </p>
            <img src={image} alt="Item" />
          </div>
          <div className="sell-footer w-100">Contact Seller for more info.</div>
        </Modal>

        <Modal title="Buy Item" show={buyModal} handleClose={() => this.closeModal('buyModal')}>
          <BuyItem show={buyModal} />
          <div className="sell-footer w-100">Contact Seller for more info.</div>
        </Modal>
      </div>
    );
  }
}

export default ItemsDisplay;
