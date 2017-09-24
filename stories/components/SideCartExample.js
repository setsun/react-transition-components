import React from 'react';
import PropTypes from 'prop-types';

import CSSAnimationListener from '../../src/decorators/listeners/CSSAnimationListener';

class AnimatedProgressBar extends React.Component {
  render() {
    return <div className="animated-progress" />;
  }
}
const AnimatedProgressBarWithListener = CSSAnimationListener(
  AnimatedProgressBar
);

class FreeShippingBar extends React.Component {
  static propTypes = {
    onAnimationStart: PropTypes.func,
    onAnimationEnd: PropTypes.func,
  };

  render() {
    return (
      <div className="free-shipping-bar">
        <h5 style={{ margin: '1rem' }}>You've earned FREE shipping!</h5>
        <div
          className="flex-container align-center space-between"
          style={{ margin: '1rem' }}
        >
          <div>$0</div>
          <div className="progress-bar" style={{ margin: '0 0.5rem' }}>
            <AnimatedProgressBarWithListener
              onAnimationStart={this.props.onAnimationStart}
              onAnimationEnd={this.props.onAnimationEnd}
            />
          </div>
          <div>$35</div>
        </div>
      </div>
    );
  }
}

class CartProductTile extends React.Component {
  render() {
    return (
      <div className="cart-product-tile">
        <div>18</div>
        <img src="https://i.imgur.com/tTud1ef.jpg" />
        <h4 className="price">$39.56</h4>
      </div>
    );
  }
}
const CartProductTileWithListener = CSSAnimationListener(CartProductTile);

class CartPriceSummary extends React.Component {
  render() {
    return (
      <div className="cart-price-summary">
        <div className="price-row savings">
          <span>Extra Savings: </span>
          <span>-$0.55</span>
        </div>
        <div className="price-row subtotal">
          <span>Subtotal: </span>
          <span>$9001.32</span>
        </div>
        <button className="view-cart-button">View Cart</button>
      </div>
    );
  }
}
const CartPriceSummaryWithListener = CSSAnimationListener(CartPriceSummary);

const MAX_CART_TILES_TO_SHOW = 3;

class SideCartExample extends React.Component {
  constructor() {
    super();
    this.state = {
      showCartProductTiles: false,
      showCartPriceSummary: false,
      cartTilesShown: 1,
    };
    this.renderCartTiles = this.renderCartTiles.bind(this);
  }

  renderCartTiles() {
    return Array.from({ length: this.state.cartTilesShown }).map((_, index) => {
      return (
        <CartProductTileWithListener
          key={index}
          onAnimationStart={() => {
            console.log('CartProductTitle Animation Started');
            if (this.state.cartTilesShown < MAX_CART_TILES_TO_SHOW) {
              setTimeout(() => {
                this.setState(state => ({
                  cartTilesShown: state.cartTilesShown + 1,
                }));
              }, 300);
            }
          }}
          onAnimationEnd={() => {
            if (this.state.cartTilesShown === MAX_CART_TILES_TO_SHOW) {
              this.setState(() => ({
                showCartPriceSummary: true,
              }));
            }
          }}
        />
      );
    });
  }

  render() {
    return (
      <div className="side-cart">
        <FreeShippingBar
          onAnimationStart={() => console.log('Progress Animation Started')}
          onAnimationEnd={() => {
            this.setState(() => ({
              showCartProductTiles: true,
            }));
          }}
        />
        {this.state.showCartProductTiles && this.renderCartTiles()}
        {this.state.showCartPriceSummary && (
          <CartPriceSummaryWithListener
            onAnimationStart={() =>
              console.log('CartPriceSummary Animation Started')}
            onAnimationEnd={() =>
              console.log('CartPriceSummary Animation Ended')}
          />
        )}
      </div>
    );
  }
}

export default SideCartExample;
