import footerImage from "../image/Group.png";
import primeImage from "../image/fashion1.jpg";
import primeImage2 from "../image/fashion2.png";
import primeImage3 from "../image/fashion3.jpg";
import primeImage4 from "../image/fashion4.jpg";
import cartImage from "../image/cart.png";
import { useState } from "react";
import { connect } from "react-redux";
import Navbar from './navbar';

const Index = ({ products, counter, tambahSatu, addCart, carts }) => {
  console.log(carts)
  //const [products, setProducts] = useState(listProducts);
  const [productIndex, setProductIndex] = useState(0);
  return (
    <div>
        <Navbar></Navbar>
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width. initial=scale=1.0" />
      <title>Cilsy Fashionlution</title>
      <link rel="stylesheet" href="./index.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <div className="headline d-flex">
          <div className="logo-cart">
            <div className="title" id="title">
              <img
                src={
                  productIndex === 0
                    ? primeImage
                    : productIndex === 1
                    ? primeImage2
                    : productIndex === 2
                    ? primeImage3
                    : primeImage4
                }
                width="523px"
                height="567px"
                text-align="right"
              />
            </div>
            <div>
              {productIndex !== 0 && (
                <button className="btn-shopB">
                  <a
                    className="link-button"
                    onClick={() => setProductIndex(productIndex - 1)}
                  >
                    Previous
                  </a>
                </button>
              )}
              {productIndex !== products.length - 1 && ( <button className="btn-shopC">
                <a
                  className="link-button"
                  onClick={() => setProductIndex(productIndex + 1)}
                >
                  Next
                </a>
              </button>)}
             

            </div>
          </div>
          <div className="category">
          
            <ul className="list-container">
              <li className="li-style-none"> </li>
              <a className="link-buttonb" href="./">
                GO BACK
              </a>
              <li className="li-style-none">.</li>
            </ul>
            <div className="headline1">
              <p>{products[productIndex].productColor}</p>
              <p>
                <b>{products[productIndex].productTitle}</b>
              </p>
              <br />
            </div>
            <div className="headline2">
              <p>${products[productIndex].productPrice}</p>
              <p>
                <b className="discount">
                  <strike>{products[productIndex].productDiscount}</strike>
                </b>
              </p>
            </div>
            <div className="headline3">
              <br />
              <p>{products[productIndex].productName}</p> <br />
              <p>{products[productIndex].productDescription}</p>
            </div>
            <div className="headline4">
              <br />
              <br />
              <p className="desc4">
                Size:{" "}
                <select value={products[productIndex].productSize}>
                  <option value="S">Small</option>
                  <option value="M">Medium</option>
                  <option value="L">Large</option>
                  <option value="XL">Extra Large</option>
                </select>
              </p>
              <br />
              <p className="desc4b">{products[productIndex].productSex}</p>
              <p className="desc4b">{products[productIndex].productMaterial}</p>
              <div className="btn-container">
                <button className="btn-shop">
                  <a className="link-button" onClick={() => {
                    tambahSatu()
                    addCart(products[productIndex])
                  }}>
                    Add To Cart
                  </a>
                </button>
                <div style={{ fontSize: 32 }}>Tambah {counter} Item</div>
                {
                  carts.map(cart => {
                    return (
                      <h4>{cart.productTitle}: ${cart.productPrice} {cart.productSize}</h4>
                    )
                  })
                }
                <br />
                <p className="desc4">
                Bank:{" "}
                <select value={products[productIndex].productPayment}>
                  <option value="BCA">BCA</option>
                  <option value="Mandiri">Mandiri</option>
                  <option>BRI</option>
                  <option>Bank Mega</option>
                  <option>BNI</option>
                </select>
              </p>
              <button className="btn-shop">
              <a className="link-button" onClick={() => {
                    tambahSatu()
                    addCart(products[productIndex])
                  }}>
                    Checkout 
                  </a>
                  </button>
              </div>
            </div>
          </div>
        </div>
        </div>
        <footer>
          <div className="img4">
            <div className="menuimg">
              <img
                src={footerImage}
                text-align="center"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    counter: state.counterReducer.counter,
    carts: state.counterReducer.carts
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    tambahSatu: () => dispatch({
      type: 'INC_COUNTER'
    }),
    addCart: (product) => dispatch({
      type: 'ADD_CART',
      product: product
    }),
  }
}

const ListProducts = connect(mapStateToProps, mapDispatchtoProps)(Index);
export { ListProducts };
