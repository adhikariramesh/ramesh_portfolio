import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import styles from "./styles/heroSection.module.css";
const page = () => {
  return (
    <main className={styles.main}> 
      <HeroSection/>
      <AboutSection/>
      <ContactSection/>
    </main>
  )
}

export default page
