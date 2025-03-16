import Post from "./Post";
import styles from "./PostsList.module.css";
import { PostData } from "../routes/NewPost";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts: PostData[] = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              body={post.body}
              id={post.id}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div className={styles.text}>
          <h2>There are no posts yet :(</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
