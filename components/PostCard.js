import Image from "next/image";
import Logo from "../public/static/logo.png";
import { FiBookmark } from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { collection, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
  wrapper:
    "flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer",
  postDetails: "flex-[2.5rem]",
  authorContainer: "flex gap-[1.4rem]",
  authorImageContainer:
    "grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  authorImage: "object-cover",
  authorName: "font-semibold",
  title: "font-bold text-2xl",
  briefing: "text-[#787878]",
  detailsContainer: "flex items-center justify-between text-[#787878]",
  articleDetails: "my-2 text-[.8rem]",
  category: "bg-[#F2F3F2] p-1 rounded-full",
  bookmarkContainer: "curson-pointer",
  bookmark: "h-5 w-5",
  thumbnailContainer: "flex",
};

function PostCard({ post }) {
  const formattedDate = new Date(post.data.postedOn).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
  });
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    const getAuthorData = async () => {
      // console.log((await getDoc(doc(db, "users", post.data.author))).data())
      setAuthorData(
        (await getDoc(doc(db, "users", post.data.author))).data());
    };
    getAuthorData();
  }, []);

  return (
    <Link href={`/post/${post.id}`}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
            width={40}
                height={40}
                className={styles.authorImage}
              />
            </div>
            <div className={styles.authorName}>{authorData?.name}</div>
          </div>
          <h1 className={styles.title}>{post.data.title}</h1>
          <p className={styles.briefing}>{post.data.brief}</p>
          <div className={styles.detailsContainer}>
            <span className={styles.articleDetails}>
              {formattedDate} - {post.data.postLength} -{" "}
              <span className={styles.category}>{post.data.category}</span>{" "}
            </span>
            <span className={styles.bookmarkContainer}>
              <FiBookmark className={styles.bookmark} />
            </span>
          </div>
        </div>

        <div className={styles.thumbnailContainer}>
          <Image
            src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
            width={100}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
}
export default PostCard;
