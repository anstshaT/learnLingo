import { useEffect, useState } from "react";
import { getTeachers } from "../../service/teachers";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../components/Header/Header";
import TeachersList from "../../components/TeachersList/TeachersList";
import Filter from "../../components/Filter/Filter";
import s from "./TeachersPage.module.css";

const TeachersPage = () => {
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
        console.log("All teachers", dataWithId);
      };

      getData();
    } catch (e) {
      toast.error(e.message);
    }
  }, []);

  return (
    <div className={s.body}>
      <div className={s.header}>
        <Header />
      </div>
      <Filter />
      <TeachersList teachers={teachers} />
      <Toaster />
    </div>
  );
};

export default TeachersPage;
