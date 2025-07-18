import React from "react";
import s from "./CompaniesCons.module.css";
import clsx from "clsx";

const CompaniesCons = () => {
  return (
    <div className={s.div}>
      <ul className={s.ul}>
        <li className={s.li}>
          <p className={s.statistic}>32,000 +</p>
          <p className={s.explanation}>Experienced tutors</p>
        </li>
        <li className={s.li}>
          <p className={s.statistic}>300,000 +</p>
          <p className={s.explanation}>5-star tutor reviews</p>
        </li>
        <li className={s.li}>
          <p className={s.statistic}>120 +</p>
          <p className={clsx(s.explanation, s.widthSubject)}>Subjects taught</p>
        </li>
        <li className={s.li}>
          <p className={s.statistic}>200 +</p>
          <p className={s.explanation}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
};

export default CompaniesCons;
