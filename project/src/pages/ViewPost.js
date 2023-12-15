import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import profileDB from "../db/profileDB";
import viewPostStyle from "../components/post/viewPost.module.css";
import ViewPostModal from "../components/post/ViewPostModal";

const ViewPost = () => {
  const { postId, updatePostId } = useParams();
  const postList = useSelector((state) => state.post.postList);
  const selectedPost = postList && postList[postId];

  // 메뉴 모달창
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  // 프로필 이미지
  const path = process.env.PUBLIC_URL;
  const data = profileDB;

  const randomIndex = Math.floor(Math.random() * data.length);
  const randomProfile = data[randomIndex];
  const randomProfileImage = randomProfile ? path + randomProfile.image : null;

  const { date, title, content } = selectedPost || {};

  return (
    <section className={viewPostStyle.ViewPostWrapper}>
      <div className={viewPostStyle.ViewPostContent}>
        {randomProfileImage && (
          <div>
            <img src={randomProfileImage} alt={randomProfile.name} />
            <h3>{randomProfile.name}</h3>
          </div>
        )}
        <span className={viewPostStyle.ViewPostContentDate}>{date}</span>
        <span className={viewPostStyle.ViewPostContentCon}>
          <h2>{title}</h2>
          <p>{content}</p>
        </span>
      </div>

      <Link to="/dailyList" className={viewPostStyle.ViewPostBackBtn}>
        <button>일기 목록</button>
        <span></span>
      </Link>

      <button className={viewPostStyle.ViewPostMenuBtn} onClick={onOpen}>
        메뉴
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isOpen && <ViewPostModal onClose={onClose} />}
    </section>
  );
};

export default ViewPost;
