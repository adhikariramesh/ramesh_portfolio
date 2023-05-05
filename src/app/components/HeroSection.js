import styles from "../styles/heroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
  <section className={styles.heroSection}>
      <div className={styles.left}>
        <h3 className={styles.title}>My name is</h3>
        <h1 className={styles.name}>R</h1>
        <p className={styles.position}>Learner || web developer</p>
      </div>
      <div className={styles.right}>
        <Image src="/myimage1.png" alt="my image" width={300} height={300} />
      </div>
  </section>
  )
}

export default HeroSection
