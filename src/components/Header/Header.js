import React from "react";

import resumeSvg from "../../assets/resume.svg";
import resumeimage from "../../assets/png-clipart-resume-curriculum-vitae-template-moto-highway-racing-computer-icons-resume-blue-text-removebg-preview.png";

import styles from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.head}>Resume Builder</div>
        <div className={styles.info}>
          <div className={styles.left}>
            <p className={styles.heading}>
              A <span>Resume</span> that stands out!
            </p>
            <p className={styles.heading}>
              Make your own resume. <span>It's free</span>
            </p>
          </div>
          <div className={styles.right}>
            <img src={resumeimage} alt="Resume" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
