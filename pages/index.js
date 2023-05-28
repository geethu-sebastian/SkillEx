import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.connect}>
          <ConnectWallet />
        </div>
      </main>
    </div>
  );
}
