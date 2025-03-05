import Heading from "@/app/_ui/Heading";
import styles from "./styles.module.css";

function VillaDescription() {
  return (
    <div className={styles.description}>
      <Heading className="text-center">Villa Description</Heading>

      <hr className="decriptionDivider" />

      <div className={styles.descriptionContent}>
        <p>
          Relax in exquisite, contemporary style 34-sqm room featuring two 160 x 200 queen
          beds, Superior rooms are invitingly cozy. Sip your morning tea or coffee on the
          balcony, before stepping under the rain shower to get ready for a day in
          paradise. Come back for an afternoon snooze, or laze in bed and watch a movie.
          Keeping in touch with friends and family back home is easy with free Wi-Fi, and
          a comfy bed with the perfect room temperature promises a good night`s sleep, so
          you`ll wake up feeling totally refreshed
        </p>
      </div>
    </div>
  );
}

export default VillaDescription;
