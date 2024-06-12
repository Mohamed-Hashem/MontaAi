import React from "react";
import monta from "../../assets/monta.svg";
import * as style from "./BusinessInfo.module.css";

const BusinessInfo = () => {
  return (
    <p className={style.info} style={{ display: "flex", alignItems: "center" }}>
      Elevating Your Business with
      <a href="https://www.monta.ai/" target="_blank" rel="noreferrer noopener">
        Monta AI
      </a>
      <img width={32} height={32} src={monta} alt="Monta AI logo" />
    </p>
  );
};

export default BusinessInfo;
