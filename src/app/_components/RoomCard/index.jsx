import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import Card from "../Card";

function RoomCard({ room }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shortDescription = room.description.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <Card>
      <Card.Thumbnail>
        <Image fill src={`/${room.thumbnail}`} alt={`Image of ${room.name}`} />
      </Card.Thumbnail>

      <Card.Description className={styles.roomDescription}>
        <h2>{room.name}</h2>
        <p>
          {isExpanded ? room.description : shortDescription}
          <span onClick={toggleReadMore} className={styles.readMore}>
            {isExpanded ? " Less" : " Read More"}
          </span>
        </p>
      </Card.Description>
    </Card>
  );
}

export default RoomCard;
