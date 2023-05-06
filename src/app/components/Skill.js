import styles from "../styles/skill.module.css";

const Skill = () => {
    return (
        <section className={styles.skillSection}>
            <h1 className={styles.head}>skills</h1>
            <div className={styles.container}>
                <ul>
                    <li>html:5</li>
                    <li>css:3</li>
                    <li>javascript</li>

                </ul>
                <ul>
                    <li>react.js</li>
                    <li>next.js</li>
                    <li>node js</li>

                </ul>
                <ul>
                    <li>bootstrap</li>
                    <li>github</li>
                    <li>php</li>
                    <li>my sql</li>

                </ul>
            </div>
        </section>
    )
}

export default Skill
