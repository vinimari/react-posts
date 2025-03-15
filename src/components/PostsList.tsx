import { useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostsList.module.css";
import Modal from "./Modal";
import MainHeader from "./MainHeader";
import { PostData } from "../routes/NewPost";

function PostsList() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      setIsFetching(true);
      const res = await fetch("http://localhost:8080/posts");
      const resData = await res.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }
    fetchPost();
  }, []);

  function hideModalHandler() {
    setModalVisible(false);
  }

  function showModalHandler() {
    setModalVisible(true);
  }

  function addPostHandler(postData: PostData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.enteredBody}
              author={post.enteredAuthor}
              body={post.enteredBody}
            />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div className={styles.text}>
          <h2>There are no posts yet :(</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div className={styles.text}>
          <p>Loading...</p>{" "}
        </div>
      )}
    </>
  );
}

export default PostsList;
