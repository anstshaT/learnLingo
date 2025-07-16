import s from "./TeacherItem.module.css";
import book from "../../assets/book-open.svg";
import star from "../../assets/star.svg";
import heart from "../../assets/heart.svg";
import activeStatus from "../../assets/active-status.svg";
import { NavLink, Outlet } from "react-router";
import clsx from "clsx";

const TeacherItem = ({ teacher }) => {
  if (!teacher) {
    return;
  }

  const {
    avatar_url,
    lessons_done,
    rating,
    price_per_hour,
    name,
    surname,
    languages,
    lesson_info,
    conditions,
    levels,
    id,
  } = teacher;

  console.log("Teacher info", teacher);

  return (
    <div className={s.itemDiv}>
      <div className={s.avatarWrapper}>
        <img
          src={avatar_url}
          alt="Teachers photo"
          width={96}
          height={96}
          className={s.avatar}
        />
        <img src={activeStatus} className={s.activeStatus} />
      </div>

      <div className={s.aboutTeacher}>
        <div className={s.topLine}>
          <p className={s.span}>Languages</p>

          <div className={s.topLineInfo}>
            <div className={s.lessonsType}>
              <img src={book} />
              <p className={s.text}>Lessons online</p>
            </div>

            <p className={s.text}>Lessons done: {lessons_done}</p>

            <div className={s.rattingWrapper}>
              <img src={star} />
              <p className={s.text}>Rating: {rating}</p>
            </div>

            <p className={s.text}>
              Price / 1 hour: <span className={s.price}>{price_per_hour}$</span>
            </p>
          </div>

          <button type="button" className={s.heartBtn}>
            <img src={heart} className={s.heartSvg} />
          </button>
        </div>

        <p className={s.name}>
          {name} {surname}
        </p>

        <div className={s.shortDetails}>
          <p className={clsx(s.text, s.langWrapper)}>
            <span className={s.span}>Speaks:</span>{" "}
            {languages.map((i) => (
              <p className={clsx(s.text, s.languages)}>{i}</p>
            ))}
          </p>

          <p className={s.text}>
            <span className={s.span}>Lesson Info:</span> {lesson_info}
          </p>

          <p className={s.text}>
            <span className={s.span}>Conditions:</span>{" "}
            {conditions.map((i) => (
              <span className={s.text}>{i}</span>
            ))}
          </p>
        </div>

        <NavLink to={`/teachers/${id}`} className={s.navLink}>
          Read more
        </NavLink>

        <ul className={s.levelsList}>
          {levels.map((i) => (
            <li className={s.levelLi}>#{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeacherItem;
