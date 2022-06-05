import React from "react";
import { Link } from "react-router-dom";
import styles from "../style.module.css";

const Footer = () => {
  return (
    <div className={styles.footdiv}>
      <Link to={"/"}>
        <img
          src=
       "https://e7.pngegg.com/pngimages/833/276/png-clipart-e-commerce-shopify-logo-web-design-magento-shopping-cart-grass-business.png"
          alt=""
          width={"50px"}
        />
      </Link>
      <Link to="/"><span className="material-symbols-outlined">Home</span>Home</Link>
      <Link to="/clothes"><span className="material-symbols-outlined">styler</span>Clothes</Link>
      <Link to="/electronics"><span className="material-symbols-outlined">iron</span>Electronics</Link>
      <Link to="/grocery"><span className="material-symbols-outlined">local_convenience_store</span>Grocery</Link>
      <Link to="/footwere"><span className="material-symbols-outlined">do_not_step</span>Footwere</Link>
      <Link to="/faq"><span className="material-symbols-outlined">quiz</span>FAQ's</Link>
      <Link to="/aboutus"><span className="material-symbols-outlined">info</span>About Us</Link>
      <Link to="/contactus"><span className="material-symbols-outlined">contact_page</span>Contact Us</Link>
    </div>
  );
};

export default Footer;
