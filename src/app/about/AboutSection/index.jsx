import styles from "./styles.module.css";
import Heading from "@/app/_ui/Heading";

function AboutSection() {
  return (
    <div className={styles.container}>
      <div className={styles.textCenter}>
        <Heading className={styles.title}>About Us</Heading>
        <p className={styles.subtitle}>
          We help folks love, heal, understand, and move their bodies—so they can be
          happier, healthier humans.
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.textBox}>
          <h2 className={styles.heading}>
            We’re here to get as many people{" "}
            <span className={styles.highlight}>moving</span> as possible.
          </h2>
          <p className={styles.text}>
            Not just people that are already fit, but all people. We offer a more
            accessible and sustainable alternative to the popular “No, pain. No gain.”
            mantra.
          </p>
          <p className={styles.text}>
            We don’t think exercise should be associated with pain at all. Gives it a bad
            name. Exercise is medicine. When done right, it not only alleviates pain, but
            it protects against it.
          </p>
        </div>
        <div className={styles.imageBox}>
          <img
            alt="Group of people exercising and having fun"
            className={styles.image}
            src="/room1.jpg"
          />
          <img
            alt="Group of people smiling and posing for a photo"
            className={styles.image}
            src="/room2.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
