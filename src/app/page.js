import HeroSection from "./components/HeroSection";
import styles from "./styles/heroSection.module.css";
const page = () => {
  return (
    <main className={styles.main}> 
      <HeroSection/>
    </main>
  )
}

export default page
