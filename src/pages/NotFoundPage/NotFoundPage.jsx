import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.imgBox}>
      <img src="./error.jpg" alt="Not Found" />
      <h1>
        <Link to="/">Go to HomePage</Link>
      </h1>
    </div>
  );
};

export default NotFoundPage;
