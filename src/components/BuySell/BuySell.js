import React, { Component } from 'react';
import ItemsForm from './ItemsForm';
import SellItem from './SellItem';
import { getItemsFromServer } from '../../server/server';
import { LoadingFadeIn } from '../common/Loading';
import ItemsDisplay from './ItemsDisplay';
import { ErrorMessage } from '../common/Common';

class BuySell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      error: '',
    };
  }

  getItems = async () => {
    this.setState({ loading: true, error: null });

    const res = await getItemsFromServer('cooler', {});
    // const data = res;
    const { success } = res;

    if (success) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: false, error: 'Some Error occurred!!' });
    }
  };

  render() {
    const { loading, error } = this.state;
    return (
      <div className="buySell">
        <div className="row">
          <div className="col-md-3 px-4 py-3">
            <SellItem />
            <hr />
            <ItemsForm onSubmit={this.getItems} />
          </div>

          <div className="col-md-9 height-rscreen border-left bg-light">
            {loading && (
              <div className="pos-center">
                <LoadingFadeIn />
              </div>
            )}
            {error && <ErrorMessage message={error} />}
            {!loading && !error && <ItemsDisplay />}
          </div>
        </div>
      </div>
    );
  }
}

export default BuySell;
