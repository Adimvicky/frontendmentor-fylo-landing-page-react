import React from 'react';

function Footer(){
  return (
    <footer class="footer">
      <div class="footer__logo my-xs">
        <img src="./images/logo-white.svg" />
      </div>
      <div className="footer__text">
        <div className="footer__text__contact">
          <p className="p2 my-xs"><img src="./images/icon-phone.svg"/> Phone: +1-543-123-4567</p>
          <p className="p2"><img src="./images/icon-email.svg"/> example@fylo.com</p>
        </div>
        <ul className="footer__links">
          <li><a href=""></a>About Us</li>
          <li><a href=""></a>Jobs</li>
          <li><a href=""></a>Press</li>
          <li><a href=""></a>Blog</li>
        </ul>
        <ul className="footer__links">
          <li><a href=""></a>Contact Us</li>
          <li><a href=""></a>Terms</li>
          <li><a href=""></a>Privacy</li>
        </ul>
        <ul className="footer__socials">
          <li><a href=""><i className="fa fa-facebook"></i></a></li>
          <li><a href=""><i className="fa fa-twitter"></i></a></li>
          <li><a href=""><i className="fa fa-instagram"></i></a></li>
        </ul>
      </div>
      <p class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://adimvicky.github.io">Adim</a>.
      </p>
    </footer>
  )
}

export default Footer;