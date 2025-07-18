import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTeachers } from "../../service/teachers";
import s from "./TeacherMoreInfo.module.css";
import star from "../../assets/star.svg";
import toast from "react-hot-toast";

const TeacherMoreInfo = () => {
  const { teacherId } = useParams();
  const [teachers, setTeachers] = useState(null);

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await getTeachers("teachers");

        const dataWithId = data.map((teacher, index) => ({
          id: index,
          ...teacher,
        }));

        setTeachers(dataWithId);
      };

      getData();
    } catch (e) {
      toast.error(e.message);
    }
  }, []);

  if (!teachers) {
    return <p>Loading...</p>;
  }

  const teacherById = teachers && teachers[teacherId];

  const { levels, reviews, experience } = teacherById;

  return (
    <div className={s.addInfoWrapper}>
      <div className={s.experience}>{experience}</div>

      <div className={s.feedbacksWrapper}>
        <ul className={s.reviewsList}>
          {reviews.map((i) => (
            <li className={s.reviewLi}>
              <div className={s.nameAndRatingWrapper}>
                <p className={s.reviewName}>{i.reviewer_name}</p>

                <div className={s.ratingWrapper}>
                  <img src={star} />

                  <p className={s.ratingNumber}>{i.reviewer_rating}</p>
                </div>
              </div>

              <p className={s.comment}>{i.comment}</p>
            </li>
          ))}
        </ul>
      </div>

      <ul className={s.levelsList}>
        {levels.map((i) => (
          <li className={s.levelLi}>#{i}</li>
        ))}
      </ul>

      <button className={s.btn} type="button">
        Book trial lesson
      </button>
    </div>
  );
};

export default TeacherMoreInfo;
