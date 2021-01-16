import footerImage from "../image/Group.png";
import cartImage from '../image/cart.png';
import Navbar from './navbar';
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

const Shop = () => {

      return (
        <div>
        <Navbar></Navbar>
        <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width. initial=scale=1.0" />
        <title>Cilsy Fashionlution</title>
        <link rel="stylesheet" href="./shop.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <div className="container">
          <div className="headline1">
           
            <div className="category">
              <a className="link-buttonb" href="./">GO BACK</a>
            </div>
            <br />
          </div>
          <div className="headline d-flex">
            <div className="logo-cart">
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <ul className="list-containerb">
                <li className="li-style-none"><b>FEATURED CATEGORY</b></li>
                <li className="li-style-none"><b>CATEGORY 1</b></li>
                <li className="li-style-none"><b>CATEGORY 2</b></li>
                <li className="li-style-none"><b>CATEGORY 3</b></li>
                <li className="li-style-none"><b>CATEGORY 4</b></li>
                <li className="li-style-none"><b>CATEGORY 5</b></li>
              </ul>
            </div>
            
            <div className="picture d-flexindex">
              <div className="img1a img-center">
              <Link to="./index">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="img2a img-center">
              <Link to="./index1">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="img3a img-center">
              <Link to="./index2">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="celar" />
              <div className="img4a img-center">
              <Link to="./index3">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="img1a img-center">
              <Link to="./index">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="img2a img-center">
              <Link to="./index1">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="img3a img-center">
              <Link to="./index2">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="celar" />
              <div className="img4a img-center">
              <Link to="./index3">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="img1a img-center">
              <Link to="./index">
                <h5>TITLE HERE</h5>
                <p>CATEGORY</p>
                </Link>
              </div>
              <div className="celar" />
              <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item active">
      <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item"><a class="page-link" href="#">4</a></li>
    <li class="page-item"><a class="page-link" href="#">5</a></li>
    <li class="page-item"><a class="page-link" href="#">6</a></li>
    <li class="page-item"><a class="page-link" href="#">7</a></li>
    <li class="page-item"><a class="page-link" href="#">8</a></li>
    <li class="page-item"><a class="page-link" href="#">9</a></li>
    <li class="page-item"><a class="page-link" href="#">10</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
            </div>
            <div className="category">
              <br />
              <br />
              <br />
              <ul className="list-container">
                <li className="li-style-none"><b>ALL FILTERS</b></li>
                <li className="li-style-none"><b>FILTER 1</b></li>
                <li className="li-style-none"><b>FILTER 2</b></li>
                <li className="li-style-none"><b>FILTER 3</b></li>
                <li className="li-style-none"><b>FILTER 4</b></li>
                <li className="li-style-none"><b>FILTER 5</b></li>
              </ul>
              </div>
                <div className="celar" />
              </div>
              </div>

              <footer>
              <div className="img4">
                <div className="menuimg">
                  <img src={footerImage} text-align="center" />
                </div>
              </div>
            </footer>
          </div></div>
      );
    }
  
  export { Shop } 