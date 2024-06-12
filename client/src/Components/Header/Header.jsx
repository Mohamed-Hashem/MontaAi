import React from "react";
import logoHorizontal from "./../../assets/logoHorizontal.svg";
import * as style from "./Header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logoHorizontal} alt="Monta Ai Logo" width={100} height={100} />
    </header>
  );
};

export default Header;
