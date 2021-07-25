import React from "react";
import "./PrimaryFooter.css";
import logo from "./logo.png";

export default function primaryFooter() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-display">
          <img src={logo} alt="logo" />
        </div>
        <div class="row">
          <div class="col-1">
            <h3>column 1</h3>
            <ul>
              <li>
                Web design kjbjk b kjwfjk cjkb kwne fjkb kwenf jkb kjbwckljb
                wkejb kj
              </li>
            </ul>
          </div>
          <div class="col-2">
            <h3>column 2</h3>
            <ul>
              <li>
                Company dlankjd njkan fjna jnfn jf lknfwqkl nlfwe
                lnalsnklnfknflksnd{" "}
              </li>
            </ul>
          </div>
          <div class="col-3">
            <h3>column 3</h3>
            <ul>
              <li>
                Company dlkan kj fns jk lqfj k kjbfj kbkb jk wjkb jkbwkjf kj
                jkweb kjb jkwbkjfb{" "}
              </li>
            </ul>
          </div>
        </div>
        <div className="container-bottom">
          <div className="text-bottom">
            <p>copy rights 2021-itworkx-all Rights Reserved</p>
          </div>
          <div className="bottom-subs">
            <p>Subscribe To Our News Letters</p>
            <input type="text" name="subs" placeholder="example@gmail.com" />
            <button type="submit" className="button">
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
