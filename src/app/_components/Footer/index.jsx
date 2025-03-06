import Link from "next/link";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={`${styles.footerMenu} container`}>
        <div>
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:info@rancamaya.com">info@rancamaya.com</a>
            </li>
            <li></li>
            <li>
              <a href="tel:+622518242278">+62-251-824 2278</a>
            </li>
            <li>
              <address>
                Jl. Graha Yasa No. SH-01
                <br />
                Rancamaya Golf Estate
                <br />
                Ciawi - Bogor 16720
              </address>
            </li>
            <li className={styles.icons}></li>
          </ul>
        </div>

        <div>
          <h3>Link Menu</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/rooms">Hotels</Link>
            </li>
            <li>
              <Link href="/estate">Estate</Link>
            </li>
            <li>
              <Link href="/golf">Golf</Link>
            </li>
            <li>
              <Link href={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Subscribe To Our Newsletter</h3>
          <li className={styles.newsletter}>
            <input type="text" placeholder="example@mail.com" />
            <button>SUBMIT</button>
          </li>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
