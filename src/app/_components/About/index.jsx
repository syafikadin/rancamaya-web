import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutContainer}`}>
        <div className={styles.description}>
          <Heading>About Us</Heading>
          <p>
            Suryamas was established on 21 September 1989 and obtained its legal status as
            a private limited company on 31 October 1990 with its main business as real
            estate developer in Indonesia.
          </p>
          <Link href="/about">
            <button className={styles.aboutButton}>Learn More</button>
          </Link>
        </div>
        <div className={styles.gallery}>
          <div>
            <Image fill src="/bg.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
