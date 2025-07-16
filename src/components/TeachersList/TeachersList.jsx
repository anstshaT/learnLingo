import React from "react";
import TeacherItem from "../TeacherItem/TeacherItem";
import s from "./TeachersList.module.css";

const TeachersList = ({ teachers }) => {
  if (!teachers) {
    return;
  }

  return (
    <div>
      <ul className={s.ul}>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <TeacherItem teacher={teacher} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachersList;
