import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Index.scss';

const Index = () => (
  <div className="Index">
    <img
      src="https://s3-us-west-2.amazonaws.com/cleverbeagle-assets/graphics/email-icon.png"
      alt="Clever Beagle"
    />
    <h1>List of Local Area Stored</h1>
    <p>Browser the stores and products</p>
    <div>
      <Link className="btn bg-warning" to="/shops">Shop</Link>
    </div>
    <footer>
      <p>Need help and want to stay accountable building your product? <a href="https://cleverbeagle.com?utm_source=pupappindex&utm_medium=app&utm_campaign=oss">Check out Clever Beagle</a>.</p>
    </footer>
  </div>
);

export default Index;
