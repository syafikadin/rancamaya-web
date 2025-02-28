import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";
import Card from "../Card";
import Image from "next/image";
function Blog() {
  return (
    <section className={styles.blogSection}>
      <div className="container">
        <h1 className={styles.heading}>
          <span>Rancamaya Golf</span>
        </h1>
        <p className={styles.description}>Discover Nature at it’s Finest</p>

        <div className={styles.blogGrid}>
          <Card>
            <Card.Thumbnail>
              <Image fill src="/golf_bg.jpg" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>Rancamaya Golf Course</h2>
              <p className={styles.blogLabel}>Unparalleled Golfing Experience</p>
              <p className={styles.blogDescription}>
                When playing golf at Rancamaya, you can drive the ball for an extra twenty
                meters or even more. Ted Robinson, a renowned international course
                architect, has sculpted Rancamaya to be a championship course that will be
                a joy to play by focusing upon three major elements : flexibility,
                memorability and natural beauty. It is a uniquely designed course that
                includes a series of lakes connected by moving cascades of water. The
                sense of tranquility and natural splendor of Rancamaya is enhanced by the
                soothing sounds of moving water
              </p>
            </Card.Description>
          </Card>
          <Card>
            <Card.Thumbnail>
              <Image fill src="/golf_club.jpeg" alt="" />
            </Card.Thumbnail>
            <Card.Description className={styles.blogDescriptionContainer}>
              <h2 className={styles.blogHeading}>The Golf Club</h2>
              <p className={styles.blogLabel}>Play Golf Like A Pro</p>
              <p className={styles.blogDescription}>
                Our 6,931 yard championship golf course was designed by the distinguished
                international course designer Ted Robinson, who incorporated natural
                beauty with challenge in the form of extraordinary course contours. <br />
                The Rancamaya golf course features gently rolling terrains with
                breath-taking views of Mount Salak and was recognized in 2011 by the Asia
                Pacific Property Awards in cooperation with Bloomberg TV as the Best Golf
                Course in Indonesia” and the “#1 Golf Club in Southeast Asia. In 2012,
                Rancamaya was recognized by the same prestigious institution as Highly
                Commended Landscape Architectural in Indonesia.
              </p>
            </Card.Description>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Blog;
