import React from 'react';

function Header(){
  return (
    <header class="header">
      <nav class="header__nav">
        <div class="header__logo">
          <img src="/images/logo.svg"></img>
        </div>
        <ul class="header__list">
          <li className="header__list-item"><a href="#">Features</a></li>
          <li className="header__list-item"><a href="#">Team</a></li>
          <li className="header__list-item"><a href="#">Sign in</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;