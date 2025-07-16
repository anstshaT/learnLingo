import React from "react";
import { useParams } from "react-router";

const TeacherMoreInfo = () => {
  const { teacherId } = useParams();
  return (
    <div>
      <h1>More info</h1>
    </div>
  );
};

export default TeacherMoreInfo;
