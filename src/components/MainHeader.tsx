import { MdPostAdd, MdMessage } from "react-icons/md";
import styles from "./MainHeader.module.css";
import { Link } from "react-router-dom";

type Props = {
  onCreatePost: any;
};

function MainHeader(Props: Readonly<Props>) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={styles.button} onClick={Props.onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
