import { useState } from 'react';
import styles from './Description.module.css';

const SECTIONS = [
  { id: 'bio', title: 'Биография' },
  { id: 'career', title: 'Деятельность' },
  { id: 'memory', title: 'Память' },
];

const CAREER = [
  'Участие в установлении советской власти в Якутии',
  'Руководящая работа в Якутской АССР в 1920-е годы',
  'Работа на государственных постах в Москве в 1930-е годы',
  'Арестован и расстрелян в 1938 году, реабилитирован в 1957 году',
];

const MEMORY = [
  'Северо-Восточный федеральный университет имени М. К. Аммосова',
  'Улицы и памятные места в Якутии',
  'Научные и краеведческие исследования о его жизни',
];

function Description({ wikiText, wikiError }) {
  const [section, setSection] = useState('bio');
  const [showDetails, setShowDetails] = useState(false);
  const [showMemory, setShowMemory] = useState(false);

  return (
    <section className={styles.block}>
      <nav className={styles.nav}>
        {SECTIONS.map((s) => (
          <button
            key={s.id}
            className={section === s.id ? styles.active : ''}
            onClick={() => setSection(s.id)}
          >
            {s.title}
          </button>
        ))}
      </nav>

      {section === 'bio' && (
        <div className={styles.content}>
          <p>
            <strong>Максим Кирович Аммосов</strong> (1897–1938) — советский
            государственный и партийный деятель, революционер, один из
            организаторов советской власти в <strong>Якутии</strong>.
          </p>
          <p>
            {wikiError && 'Не удалось загрузить данные из Википедии.'}
            {!wikiError && !wikiText && 'Загрузка данных из Википедии…'}
            {wikiText}
          </p>

          <button className={styles.toggle} onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? 'Скрыть детали' : 'Показать детали биографии'}
          </button>

          {showDetails && (
            <div className={styles.details}>
              <p>
                Родился в 1897 году в Якутии. Участвовал в революционных
                событиях 1917 года и Гражданской войне.
              </p>
              <p>
                В 1938 году был репрессирован. Реабилитирован в 1957 году.
              </p>
            </div>
          )}
        </div>
      )}

      {section === 'career' && (
        <div className={styles.content}>
          <h3>Трудовая деятельность</h3>
          <ul className={styles.list}>
            {CAREER.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {section === 'memory' && (
        <div className={styles.content}>
          <h3>Увековечение памяти</h3>
          <button className={styles.toggle} onClick={() => setShowMemory(!showMemory)}>
            {showMemory ? 'Свернуть ▲' : 'Развернуть список ▼'}
          </button>
          {showMemory && (
            <ul className={styles.list}>
              {MEMORY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}

export { Description };