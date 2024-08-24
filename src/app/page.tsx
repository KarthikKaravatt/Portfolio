
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
          <p className={styles.mainCardContentName}>Karthik Karavatt</p>
          <div className={styles.mainCardContentIconContainer}>
            <a
              href="https://github.com/KarthikKaravatt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: '1rem' }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-8 h-8"
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
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.navBar}>
        <p>Projects</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis tortor non mauris blandit mollis. Donec vel neque porta, semper justo pretium, maximus augue. Praesent quis ligula convallis, fringilla libero id, blandit mi. Fusce facilisis elit felis, eget luctus eros tempor malesuada. Maecenas et magna lorem. Nunc tempus eros at dui pretium pharetra. Morbi congue lobortis diam. Morbi eu ultricies nunc. Etiam cursus interdum dolor, at vehicula leo ultricies quis. Sed vel tellus eget erat feugiat rhoncus sit amet vitae lorem. Quisque fringilla, lorem et sagittis mollis, est mi mattis magna, non vulputate libero mi quis massa. Donec in odio at lacus mollis imperdiet. Nunc ut quam finibus, faucibus orci at, hendrerit neque.

        Duis feugiat nulla id diam faucibus congue. Vestibulum metus ante, facilisis quis venenatis et, venenatis at ligula. Quisque leo turpis, vulputate quis aliquam nec, imperdiet vitae elit. Nunc id hendrerit sapien. Etiam luctus in leo in eleifend. Ut id convallis nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus quis dictum orci, in luctus metus. Mauris ac gravida purus, eu tincidunt libero. Morbi risus lacus, fermentum quis mi sit amet, consectetur ultricies diam. Vivamus a arcu volutpat, aliquet nunc et, laoreet nisi.

        Proin semper placerat lectus. In lacinia arcu libero, a dignissim lacus porttitor sed. Etiam convallis sit amet sapien vel luctus. Vestibulum porta mollis tincidunt. In lobortis rhoncus magna, ut vehicula tellus. Cras sit amet sodales ante. Vivamus mauris lectus, bibendum non ligula sed, porta finibus eros. Phasellus quis elit a nibh cursus facilisis. Aliquam sollicitudin faucibus quam et condimentum. Nunc condimentum tristique arcu, id euismod risus mattis at. Praesent finibus blandit tellus quis pretium. Nulla accumsan, nunc et pretium volutpat, turpis purus cursus metus, vitae scelerisque neque leo sit amet enim.

        Nunc vel elit viverra risus laoreet tincidunt. Donec lectus est, mollis a arcu euismod, dictum pharetra lectus. Praesent sed commodo eros. Aliquam tortor sem, euismod et arcu mattis, mattis malesuada mi. Donec faucibus tortor in nunc imperdiet interdum. Proin eu condimentum urna. Nunc in neque nec leo semper porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sodales ac tellus sit amet auctor. Sed eu diam orci. Sed elementum lacus at cursus imperdiet. Pellentesque a egestas nisl. Praesent fringilla sit amet urna ac iaculis.

        Sed sem lorem, posuere eu sapien eget, semper congue orci. Donec eu est vitae dui dapibus mollis a quis felis. Etiam urna lectus, posuere non purus ac, sodales molestie nulla. Aenean bibendum vehicula libero ac vestibulum. Vestibulum lacinia consectetur venenatis. Sed aliquam est ornare aliquam aliquam. Maecenas dapibus hendrerit tristique. Duis congue et mauris sit amet tincidunt. Nam lacinia at augue id rutrum. In euismod ipsum at turpis sollicitudin eleifend. Donec sagittis mattis velit ut iaculis. Donec mattis posuere diam, sit amet varius ligula placerat nec. Sed commodo consequat justo, vel lacinia libero lacinia eget. Aenean congue nisl at tincidunt posuere. Maecenas convallis ligula nec dui pharetra auctor ac sit amet lacus.
      </p>
    </main>
  );
}

