import Image from "next/image";
import Link from "next/link";
import AuthorPhoto from "../public/static/qazi.jpg";
import Banner from "../public/static/banner.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { HiOutlineLink } from "react-icons/hi";
import { BiBookmarks } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const styles = {
  wrapper: "flex items-center justify-center flex-[3] border-l border-r",
  content: "h-screen w-full p-[2rem]",
  postHeaderContainer:
    "flex justify-between items-center mt-[2.2rem] mb-[2.2rem]",
  authorContainer: "flex gap-[1rem]",
  authorImageContainer:
    "h-[3rem] w-[3rem] grid center rounded-full overflow-hidden",
  column: `flex-1 flex flex-col justify-center`,
  postDetails: `flex items-center flex-row gap-[.2rem] text-[#787878]`,
  listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
  socials: "flex gap-[1rem] text-[#787878] cursor-pointer",
  space: "w-[.5rem]",
  articleMainContainer: "flex flex-col gap-[1rem]",
  bannerContainer: "h-[18rem] w-full grid center overflow-hidden mb-[2rem]",
  image: "object-cover",
  title: "text-3xl font-bold",
  subtitle: "font-mediumSerifItalic text-[1.4rem] text-[#292929]",
  articleText: "font-mediumSerif",
};

function ArticleMain({ post, author }) {
  console.log(post, author);

  const formattedDate = new Date(post.data.postedOn).toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    year: 'numeric'
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.postHeaderContainer}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
              <Image
                className={`object-cover`}
                src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.column}>
              <div>{author?.data?.name}</div>
              <span className={styles.postDetails}>
                {formattedDate} - {post?.data?.postLength} -{" "}
                <span className={styles.listenButton}>
                  <AiFillPlayCircle /> Listen
                </span>{" "}
              </span>
            </div>
          </div>
          <div className={styles.socials}>
            <IoLogoTwitter />
            <FaFacebook />
            <GrLinkedin />
            <HiOutlineLink />
            <div className={styles.space} />
            <BiBookmarks />
            <FiMoreHorizontal />
          </div>
        </div>

        <div className={styles.articleMainContainer}>
          <div className={styles.bannerContainer}>
            <Image
              className={styles.image}
              src={`https://res.cloudinary.com/demo/image/fetch/${post?.data?.bannerImage}`}
              width={100}
              height={100}
            />
          </div>

          <h1 className={styles.title}>{post?.data?.title}</h1>
          <h4 className={styles.subtitle}>
            <div>
              {author?.data?.name}, {formattedDate}
            </div>
            <div>Brief: {post?.data?.brief}</div>
          </h4>
          <div className="articleText">{post?.data?.body}</div>
        </div>
      </div>
    </div>
  );
}

export default ArticleMain;
