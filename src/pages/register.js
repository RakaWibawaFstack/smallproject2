import Navbar from './navbar';
import footerImage from "../image/Group.png";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";


  const Register = () => {
    return (
      <div className="Layout">
        <Navbar></Navbar>
        <div className="row g-3">
          <div className="col-md-4">
            <label for="validationDefault01" className="form-label">First Name</label>
            <input type="text" className="form-control" id="validationDefault01" value="Raka" required></input>
          </div>

          <div className="col-md-4">
            <label for="validationDefault01" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="validationDefault01" value="Wibawa" required></input>
          </div>

          <div className="col-md-4">
            <label for="validationDefault01" className="form-label"> Email</label>
            <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required></input>
          </div>

          <div className="col-12">
            <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required></input>
            <label className="form-check-label" for="dropdownCheck">Remember Me</label>
            </div>
         </div>

          <div className="col-12">
          <button class="btn btn-primary" type="submit">Submit form</button>
          </div>
          </div>
          <footer>
              <div className="img4">
                <div className="menuimg">
                  <img src={footerImage} text-align="center" />
                </div>
              </div>
            </footer>
          </div>
    )
  }

  export {Register}