import React from "react";
import {Link} from "react-router-dom"
import styles from '../style.module.css'

const Navbar = () => {
  return (
    <div className={styles.navdiv}>
      <img
        src="
        https://e7.pngegg.com/pngimages/833/276/png-clipart-e-commerce-shopify-logo-web-design-magento-shopping-cart-grass-business.png"
        alt=""
      />
      <Link to="/">Home</Link>
      <Link to="/clothes">Clothes</Link>
      <Link to="/electronics">Electronics</Link>
      <Link to="/grocery">Grocery</Link>
      <Link to="/footwere">Footwere</Link>
    </div>
  );
};

export default Navbar;
