import Image from "next/image";
import Logo from "../public/static/banner.png";

const styles = {
  wrapper: 'h-max-[10rem] flex items-center justify-center bg-[#FCC017] border-y border-black',
  contentWrapper: "max-w-7xl flex-1 flex items-center justify-between",
  content: "space-y-5 p-10 flex-[3]",
  header: "max-w-xl text-[6rem] font-mediumSerif",
  text: "text-2xl",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
  bannerImage: "hidden h-32 md:inline-flex object-contain flex-1",
};

function Banner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.header}>Stay Curious.</h1>
          <h3 className={styles.text}>
            Discover stories, thinking, and expertise from writers on any topic.
          </h3>
          <button className={styles.accentedButton}>Start Reading</button>
        </div>
        <Image
          src={Logo.src}
          width={500}
          height={400}
          className={styles.bannerImage}
        />
      </div>
    </div>
  );
}
export default Banner;
