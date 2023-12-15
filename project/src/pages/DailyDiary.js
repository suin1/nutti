import { Link } from "react-router-dom";
import DailyList from "../components/diary/DailyList";
import Header from "../components/Header";
import diaryStyle from "../components/diary/diary.module.css";

const DailyDiary = () => {
  return (
    <div className={diaryStyle.diaryConteiner}>
      <Header />
      <DailyList />
    </div>
  );
};

export default DailyDiary;
