import React from "react";
import logo from "../images/triangle.png";

export const Header = () => {
  const show = () => {
    document.getElementById("submenu").classList.toggle("show");
  }

  window.onclick = function(e) {
    if (!e.target.matches('.dropdown__btn')) {
      let submenu = document.getElementById("submenu");
      if (submenu.classList.contains('show')) {
        submenu.classList.remove('show');
      }
    }
  }

  return (
    <div className="header">
      <div className="header__logo">
        <img className="logo__img" src={logo} alt="logo" />
        <h1 className="header__title">penrose</h1>
      </div>
      <div className="header__nav">
        <div className="nav__list">
          <a className="link home-link" href="/">HOME</a>
          <a className="link nav-link" href="/#">NEW COLLECTIONS</a>
          <div className="nav__dropdown">
            <button onClick={show} className="dropdown__btn">STORE<i className="icofont-simple-down dropdown__icon"></i></button>
            <div className="dropdown__content" id="submenu">
              <ul className="list">
                <a className="link dropdown-link" href="/#">Women</a>
                <a className="link dropdown-link" href="/#">Men</a>
                <a className="link dropdown-link" href="/#">Kids</a>
              </ul>
            </div>
          </div>
          <a className="link nav-link" href="/#">CONTACTS</a>
        </div>
        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <li><a className="menu__item home-link" href="/">HOME</a></li>
            <li><a className="menu__item" href="/#">NEW COLLECTIONS</a></li>
            <li><a className="menu__item" href="/#">CONTACTS</a></li>
            <li><a className="menu__item" href="/#">STORE</a>
              <ul className="item__submenu">
                <a className="link dropdown-link" href="/#">Women</a>
                <a  className="link dropdown-link" href="/#">Men</a>
                <a  className="link dropdown-link" href="/#">Kids</a>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}