import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

export default function Home(): JSX.Element {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const fullTitle = 'Enzo Frese';
  const fullSubtitle = 'Embedded Software Engineer';

  const typingSpeed = 150;

  useEffect(() => {
    let titleTimeout: ReturnType<typeof setTimeout>;
    let subtitleTimeout: ReturnType<typeof setTimeout>;

    titleTimeout = setTimeout(() => {
      let currentTitle = '';
      let index = 0;
      const interval = setInterval(() => {
        currentTitle += fullTitle[index];
        setTitle(currentTitle);
        index += 1;
        if (index === fullTitle.length) {
          clearInterval(interval);
        }
      }, typingSpeed);
    }, 500);

    subtitleTimeout = setTimeout(() => {
      let currentSubtitle = '';
      let index = 0;
      const interval = setInterval(() => {
        currentSubtitle += fullSubtitle[index];
        setSubtitle(currentSubtitle);
        index += 1;
        if (index === fullSubtitle.length) {
          clearInterval(interval);
        }
      }, typingSpeed);
    }, 1000 + fullTitle.length * typingSpeed);

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtitleTimeout);
    };
  }, []);

  return (
    <Layout
      title="Enzo Frese's Portfolio"
      description="Enzo Frese - Firmware Engineer">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div id="top" className={styles.heroContainer}>
          <h1 className={clsx(styles.typingText, styles.whiteText)}>{title}</h1>
          <h2 className={clsx(styles.typingText, styles.whiteText)}>{subtitle}</h2>
          <p className={styles.whiteText}>Military Engineering Institute (IME), Rio de Janeiro, Brazil</p>

          <div className={styles.socialMediaLinks}>
            <a href="https://instagram.com/enzofrese" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" alt="Instagram" />
            </a>
            <a href="mailto:enzo.frese.g@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/enzo-frese-378420203" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
            </a>
            <a href="https://discord.gg/#EnzoFrese#1793" target="_blank" rel="noopener noreferrer">
              <img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="Discord" />
            </a>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
