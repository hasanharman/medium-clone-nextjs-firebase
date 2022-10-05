import { useContext, useState, useEffect } from "react";
import ArticleMain from "../../components/ArticleMain";
import ReadersNav from "../../components/ReadersNav";
import Recommendations from "../../components/Recommendations";
import { MediumContext } from "../../context/MediumContext";
import { Router, useRouter } from "next/router";

const styles = {
  content: "flex",
};

function Post() {
  const router = useRouter();
  const { posts, users } = useContext(MediumContext);
  const [post, setPost] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    if (posts.length == 0) {
      return;
    }
    setPost(posts.find((post) => post.id === router.query.slug));

    setAuthor(users.find((user) => user.id === post?.data?.author));
  }, [post]);

  return (
    <div className={styles.content}>
      <ReadersNav />
      <ArticleMain post={post} author={author} />
      <Recommendations />
    </div>
  );
}
export default Post;
