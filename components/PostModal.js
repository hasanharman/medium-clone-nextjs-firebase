import { useContext, useState } from "react";
import { MediumContext } from "../context/MediumContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

const styles = {
  wrapper:
    "w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1-rem] overflow-scroll font-mediumSerif",
  title: "my-[2rem] font-bold text-3xl",
  smallField: "w-full flex flex-col  justify-between gap-[.5rem]",
  fieldTitle: "flex-1 text-start",
  inputContainer: "flex-[5] h-min border-2 border-[#787878] rounded-[.5rem]",
  inputField: "w-full border-0 outline-none bg-transparent ",
  accentedButton: "bg-black text-white py-2 px-4 rounded-full",
};

function PostModal() {
  const { currentUser } = useContext(MediumContext);

  const [title, setTitle] = useState("");
  const [brief, setBrief] = useState("");
  const [category, setCategory] = useState("");
  const [postLength, setPostLength] = useState("");
  const [bannerImage, setBannerImage] = useState("");
  const [body, setBody] = useState("");

  const addPostToFirebase = async (event) => {
    event.preventDefault();

    await addDoc(collection(db, "articles"), {
      title: title,
      brief: brief,
      category: category,
      postLength: postLength,
      bannerImage: bannerImage,
      body: body,
      postedOn: serverTimestamp(),
      author: currentUser.email,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Create a New Post</div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Title</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            value={brief}
            onChange={(event) => setBrief(event.target.value)}
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            value={bannerImage}
            onChange={(event) => setBannerImage(event.target.value)}
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Estimated Reading Time</span>
        <span className={styles.inputContainer}>
          <input
            type="text"
            value={postLength}
            onChange={(event) => setPostLength(event.target.value)}
            className={styles.inputField}
          />
        </span>
      </div>
      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea
            type="text"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            className={styles.inputField}
            rows={10}
          />
        </span>
      </div>
      <button onClick={addPostToFirebase} className={styles.accentedButton}>Submit</button>
    </div>
  );
}

export default PostModal;
