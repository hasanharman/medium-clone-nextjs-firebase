import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { MdMarkEmailUnread } from "react-icons/md";
import ReplitLogo from "../public/static/replit.png";
import TutorialImg from "../public/static/tutorial.jpg";
import CPLogo from "../public/static/cp.png";
import AuthorImage from "../public/static/qazi.jpg";
import JSLogo from "../public/static/jsLogo.png";

const styles = {
  wrapper: "h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]",
  accentedButton:
    "flex items-center justify-center text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full ",
  searchBar:
    "flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full",
  searchInput: "border-none outline-none bg-none w-full",
  authorContainer: "my-[2rem]",
  auhorProfileImageContainer: "h-[5rem] w-[5rem] rounded-full overflow-hidden",
  authorName: "font-semibold mb-[0.2rem] mt-[1rem]",
  authorFollowing: "text-[#787878]",
  authorActions: "flex gap-[.6rem] my-[1rem]",
  actionButton:
    "bg-[#1A8917] text-white rounded-full px-[.6rem] y-[.4rem] text-sm",
  recommendationsContainer: "",
  title: "",
  articlesContainer: "",
  articleContentWrapper:
    "flex items-center justify-between cursor-pointer my-[2rem] ",
  articleContent: "flex-[4]",
  recommendationAuthorContainer: "flex items-center gap-[.6rem]",
  recommendationAutherProfilerImageContainer:
    "rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]",
  recommendationAuthorName: "text-sm",
  recommendationTitle: "font-bold",
  recommendationThumbnailContainer:
    "flex flex-1 items-center justify-center h-[4rem] w-[4rem]",
  recommendationThumbnail: "object-cover",
};

function Recommendations({ author }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.accentedButton}>Get unlimited access</div>
      <div className={styles.searchBar}>
        <AiOutlineSearch />
        <input
          className={styles.searchInput}
          placeholder="Search"
          type="text"
        />
      </div>
      <div className={styles.authorContainer}>
        <div className={styles.auhorProfileImageContainer}>
          <Image src={AuthorImage} width={100} height={100} />
        </div>
        <div className={styles.authorName}>Hasan Harman</div>
        <div className={styles.authorFollowing}>1903 followers</div>
        <div className={styles.authorActions}>
          <button className={styles.actionButton}>Follow</button>
          <button className={styles.actionButton}>
            <MdMarkEmailUnread />
          </button>
        </div>
      </div>

      <div className={styles.recommendationsContainer}>
        <div className={styles.title}>More from Medium</div>
        <div className={styles.articlesContainer}>
          {recommendedPosts.map((post) => (
            <div key={post.title} className={styles.articleContentWrapper}>
              <div className={styles.articleContent}>
                <div className={styles.recommendationAuthorContainer}>
                  <div
                    className={
                      styles.recommendationAutherProfilerImageContainer
                    }
                  >
                    <Image src={post.author.image} width={100} height={100} />
                  </div>
                  <div className={styles.recommendationAuthorName}>
                    {post.author.name}
                  </div>
                </div>
                <div className={styles.recommendationTitle}>{post.title}</div>
              </div>
              <div className={styles.recommendationThumbnailContainer}>
                <Image
                  src={post.image}
                  width={100}
                  height={100}
                  className={styles.recommendationThumbnail}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const recommendedPosts = [
  {
    title: "What can you do with Replit?",
    image: ReplitLogo,
    author: {
      name: "Hasan Harman",
      image: CPLogo,
    },
  },
  {
    title: "The Ultimate JS Course",
    image: JSLogo,
    author: {
      name: "Hasan Harman",
      image: CPLogo,
    },
  },
  {
    title: "Being Dev in 2022",
    image: TutorialImg,
    author: {
      name: "Hasan Harman",
      image: CPLogo,
    },
  },
];

export default Recommendations;
