
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Home.module.css';
import BackgroundCubes from './components/BackgroundCubes';

export default function Home() {
  return (
    <main>
      <div className={styles.mainCard}>
        <BackgroundCubes /> 
        <div className={styles.mainCardContent}>
          <div className={styles.overlay}></div>
          <h1 style={{ fontSize: '3rem' }}>Karthik Karavatt</h1>
          <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
            <a
              href="https://github.com/KarthikKaravatt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '1rem' }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={{ width: '2rem', height: '2rem' }}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/karthik-karavatt-098261257/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '1rem' }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ width: '2rem', height: '2rem' }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.infoCards}>
        <div className={styles.infoCardsContent}>
          <div className={styles.infoCard}>
            <p> LOL </p>
          </div>
          <div className={styles.infoCard}>
            <p> LOL </p>
          </div>
          <div className={styles.infoCard}>
            <p> LOL </p>
          </div>
        </div>
      </div>
    </main>
  );
}
