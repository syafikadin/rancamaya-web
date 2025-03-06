import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

function WhatsAppFloating() {
  return (
    <Link href="https://wa.me/622180600681" className={styles.whatsappFloating}>
      <Image src="/whatsapp.png" alt="WhatsApp Logo" width={30} height={30} />
      <span className={styles.whatsappText}>Contact Us</span>
    </Link>
  );
}

export default WhatsAppFloating;
