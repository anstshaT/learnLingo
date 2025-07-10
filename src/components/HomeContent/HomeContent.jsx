import React from "react";
import s from "./HomeContent.module.css";
import homePict from "../../assets/home.jpg";
import { useNavigate } from "react-router";

const HomeContent = () => {
  const navigate = useNavigate();
  return (
    <div className={s.div}>
      <div className={s.mainText}>
        <h1 className={s.title}>
          {" "}
          Unlock your potential with the best{" "}
          <span className={s.langSpan}>language</span> tutors
        </h1>
        <p className={s.text}>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <button
          className={s.btn}
          onClick={() => {
            navigate("/teachers");
          }}
        >
          Get started
        </button>
      </div>
      <img
        src={homePict}
        alt="Emojie with computer"
        width={568}
        height={530}
        className={s.img}
      />
    </div>
  );
};

export default HomeContent;
