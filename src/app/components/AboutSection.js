import styles from "../styles/aboutSection.module.css";
import commonStyles from "../styles/common.module.css";
import Skills from "../components/Skill";
import Langauge from "../components/Langauge"
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className={commonStyles.mainsection}>
    <div className={styles.aboutSection}>
      <div className={styles.left}>
        <Image src="/myimage2.png" alt="about image" width={300} height={300} />
      </div>
      <div className={styles.right}>
        <p className={commonStyles.mainHead}>who i am?</p>
        <h1 className={commonStyles.head}>About me</h1>
        <p className={styles.para}>I am Ramesh Prasad Adhikari.I was graduate with a bachelor of computer application from RIMT University.Web development with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Eager to obtain a
          challenging position at a prestigious a Company like Dream Version
          that will expand my learning and build upon my developer skills </p>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.aboutHead}>
        <h1 className={`${commonStyles.head} ${styles.aboutlink}`}>education</h1>
      </div>
          <div className={styles.box}>
              <div className={styles.leftBox}>
                <Image src="/pipra school.jpg" alt="school image" width={250} height={250}/>
                <h2 className={`${commonStyles.head} ${styles.aboutboxhead}`}>secondary school</h2>
                <p className={styles.aboutpara}>shree saraswati higher secondray sechool pipra bholohiya, Rautahat Nepal</p>
                <h5 className={styles.boxfooter}>2016</h5>
              </div>
              <div className={styles.leftBox}>
              <Image src="/gauri shankar.jpg" alt="school image" width={250} height={250}/>
                <h2 className={`${commonStyles.head} ${styles.aboutboxhead}`}> Higher secondary school</h2>
                <p className={styles.aboutpara}>Shree Gauri shankar yadav, Rautahat campus Gaur,Nepal</p>
                <h5 className={styles.boxfooter}>2018</h5>
              </div>
              <div className={styles.leftBox}>
              <Image src="/rimt university.jpg" alt="school image" width={250} height={250}/>
                <h2 className={`${commonStyles.head} ${styles.aboutboxhead}`}>bachelor degree</h2>
                <p className={styles.aboutpara}>RIMT University punjab India</p>
                <h5 className={styles.boxfooter}>2021</h5> 
              </div>
          </div>
    </div>
    <Skills/>
    <Langauge/>
    </section>
  )
}

export default AboutSection
