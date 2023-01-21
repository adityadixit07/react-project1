import React from "react";
import "../styles/footer.scss";
import "../styles/mediaQuery.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>SS clothing</h1>
        <p>@all right reserved</p>
      </div>
      <div>
        <h5>Follow us on</h5>
        <div>
          <a href="https://www.google.com/" target={"blank"}>Instagram</a>
          <a href="#" target={"blank"}>Facebook</a>
          <a href="#" target={"blank"}>Github</a>
          <a href="#" target={"blank"}>Youtube</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
