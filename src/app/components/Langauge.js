import styles from "../styles/langauge.module.css";

const Langauge = () => {
  return (
   <section className={styles.langaugeSection}>
    <h1 className={styles.head}>langauge</h1>
    <div className={styles.container}>
        <ul>
            <li>nepali</li>
            <li>hindi</li>
            <li>english</li>
            <li>bhojpuri</li>
        </ul>
    </div>
   </section>
  )
}

export default Langauge
