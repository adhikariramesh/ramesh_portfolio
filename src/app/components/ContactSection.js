'use client'
import styles from "../styles/contactSection.module.css";
// const title = document.querySelector(".title");
//     title.addEventListener('click',(e)=>{
//       title.style.transform = "translateY(0)"
//     });

const ContactSection = () => {

  const handleInput = (id) => {
    console.log("function runing");
    if (id === "1") {
      const titles = document.getElementById("formTitile1");
      console.log(titles)
      titles.style.color = "darkcyan";
      titles.style.transform = "translateY(0)";
    }
   else if (id === "2") {
      const titles = document.getElementById("formTitile2");
      console.log(titles)
      titles.style.color = "darkcyan";
      titles.style.transform = "translateY(0)";
    }
   else if (id === "3") {
      const titles = document.getElementById("formTitile3");
      console.log(titles)
      titles.style.color = "darkcyan";
      titles.style.transform = "translateY(0)";
    }

  }
  // console.log(titles)

  return (
    <section className={styles.contactSection} >
      <div className={styles.container}>
        <form action="" method="post">
          <div className={styles.row}>
            <label className={styles.titles}
              id="formTitile1"
              htmlFor="name">Enter your full name

            </label>
            <input type="text" name="name"
              className={styles.inputField}
              autoFocus
              onClick={() => handleInput("1")}
            />
          </div>

          <div className={styles.row}>
            <label className={styles.titles}
              id="formTitile2"
              htmlFor="name">Mobile number without conuntry code
            </label>
            <input type="text" name="name"
              className={styles.inputField}
              onClick={() => handleInput("2")}
            />
          </div>

          <div className={styles.row}>
            <label className={styles.titles}
              id="formTitile3"
              htmlFor="name">Enter massage here.....
            </label>
            <textarea name="massage" id="massage" cols="50" rows="5"
              className={styles.inputField}
              onClick={() => handleInput("3")}
            ></textarea>
          </div>

          <div className={styles.row}>
            <button type="submit" className={styles.btn}>sand</button>
          </div>

        </form>
      </div>
    </section>
  )
}

export default ContactSection

