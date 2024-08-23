import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styles from './Home.module.css'
import RotatingCube from './components/RotatingCube';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <div className={styles.overlay}></div>
        <h1 style={{ fontSize: '3rem' }}>
          Karthik Karavatt
        </h1>
        <div style={{ marginTop: '0.5rem', display: 'flex', gap: '1rem' }}>
          <a href="https://github.com/KarthikKaravatt" target="_blank"
            rel="noopener noreferrer" style={{ marginRight: '1rem' }}>
            <FontAwesomeIcon icon={faGithub}
              style={{ width: '2rem', height: '2rem' }} />
          </a>
          <a href="https://www.linkedin.com/in/karthik-karavatt-098261257/"
            target="_blank" rel="noopener noreferrer"
            style={{ marginRight: '1rem' }}>
            <FontAwesomeIcon icon={faLinkedin}
              style={{ width: '2rem', height: '2rem' }} />
          </a>
        </div>
      </div>
      <div style={{ height: '400px', width: '400px', margin: '0 auto' }}>
        <RotatingCube /> {/* This should render the rotating cube */}
      </div>
    </main>
  );
}
