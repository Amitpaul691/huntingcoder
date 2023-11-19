import React from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Link href={"/blogpost/learn-javascript"}>
            <h3 className={styles.blogitemh3}>
              How to learn javascript in 2022
            </h3>
          </Link>
          <p>Javascript is the lang. used to design logic for the web</p>
        </div>
        <div className="blogitem">
          <h3>How to learn javascript in 2022</h3>
          <p>Javascript is the lang. used to design logic for the web</p>
        </div>
        <div className="blogitem">
          <h3>How to learn javascript in 2022</h3>
          <p>Javascript is the lang. used to design logic for the web</p>
        </div>
      </main>
    </div>
  );
};

export default blog;
