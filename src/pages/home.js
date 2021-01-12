import footerImage from '../image/menu-icon.jpg';
import cartImage from '../image/cart.png';

const Home = () => {

      return (
        <div className="bg-grey">
          <div className="container">
            <div className="headline d-flex1">
              <div className="title" id="title">
                <p>
                  Choose <b className="bold">as you want</b>
                </p>
                <p>
                  Pay <b className="bold">as you can</b>
                </p>
              </div>
              <div className="category">
                <ul className="list-container">
                  <li className="li-style-none"><a className="link-buttonb" href="./index">LATEST</a></li>
                  <li className="li-style-none"><a className="link-buttonb" href="./shop">ALL</a></li>
                  <li className="li-style-none">.</li>
                </ul>
              </div>
            </div>
            <div className="d-flex semboyan-container">
              <div className="btn-container">
                <button className="btn-shop">
                  <a className="link-button" href="./shop">Shop Now</a>
                </button>
              </div>
              <div className="semboyan">
                <p>
                  <b>New Concept</b> of Online Shopping
                </p>
              </div>
            </div> 
            <div className="text-kanan">
              <p>Lorem Ipsum will go here. Lorem <br /> Ipsum will go here. Lorem Ipsum <br /> will go here. Lorem Ipsum will go <br /> here.
              </p>
              <div className="picture d-flex">
                <div className="img1 img-text">
                  <h5>KEYNOTE</h5>
                  <p>SUBTITLE</p>
                </div>
                <div className="img2 img-text">
                  <h5>ACTIVITY</h5>
                  <p>SUBTITLE</p>
                </div>
                <div className="img3 img-text">
                  <h5>GALLERY</h5>
                  <p>SUBTITLE</p>
                </div>
                <div className="celar" />
              </div>
            </div>
            <footer>
              <div className="img4">
                <div className="menuimg">
                  <img src={footerImage} width="45px" height="45px" text-align="center" />
                </div>
              </div>
            </footer>
          </div></div>
      );
    }
  
  export { Home } 