import React from "react";
import * as style from "./CopyRight.module.css";

const CopyRight = () => {
  return (
    <footer className={style.copyright}>
      <p>
        &copy; <time dateTime={new Date().getFullYear()}>{new Date().getFullYear()}</time>{" "}
        <a
          href="https://www.linkedin.com/in/mohamedhashem/"
          target="_blank"
          rel="noreferrer noopener" // for security
          title="Linkedin Profile for Mohamed Hashem"
        >
          Mohamed Hashem
        </a>
      </p>
    </footer>
  );
};

export default CopyRight;
