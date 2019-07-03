import React from 'react';
import { Link } from 'react-navi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div id="navbar" className="navbar-menu">
      <div className="navbar-start">
        <span className="navbar-item">
          <FontAwesomeIcon icon={['fab', 'apple']} />
        </span>
        <Link href="/" className="navbar-item"><h1><button className="button is-white is-large" type="button">Home</button></h1></Link>
        <Link href="/about" className="navbar-item"><button className="button is-white is-large" type="button">About</button></Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-primary is-large" type="button">
              <strong>Sign up</strong>
            </button>
            <button className="button is-light is-large" type="button">
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
