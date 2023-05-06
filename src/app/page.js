import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import styles from "./styles/heroSection.module.css";
const page = () => {
  return (
    <main className={styles.main}> 
      <HeroSection/>
      <AboutSection/>
    </main>
  )
}

export default page
