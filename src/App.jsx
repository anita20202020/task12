import { useEffect, useState } from 'react';
import { Profile } from './Profile/Profile.jsx';
import { Description } from './Description/Description.jsx';
import { Feedback } from './Feedback/Feedback.jsx';

const WIKI_TITLE = 'Аммосов,_Максим_Кирович';
const WIKI_API = `https://ru.wikipedia.org/api/rest_v1/page/summary/${WIKI_TITLE}`;
const WIKI_PAGE = `https://ru.wikipedia.org/wiki/${WIKI_TITLE}`;

function App() {
  const [theme, setTheme] = useState('light');
  const [wiki, setWiki] = useState(null);
  const [wikiError, setWikiError] = useState(false);

  // применяем тему к <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // запрос к API Википедии
  useEffect(() => {
    fetch(WIKI_API)
      .then((res) => {
        if (!res.ok) throw new Error('Ошибка запроса');
        return res.json();
      })
      .then((data) => setWiki(data))
      .catch(() => setWikiError(true));
  }, []);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      <button
        onClick={toggleTheme}
        style={{
          float: 'right',
          padding: '8px 14px',
          cursor: 'pointer',
          borderRadius: 8,
          border: '1px solid var(--border)',
          background: 'var(--card)',
          color: 'var(--text)',
        }}
      >
        {theme === 'light' ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
      </button>

      <div style={{ clear: 'both' }} />

      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <Profile
          name="Аммосов Максим Кирович"
          photo={wiki?.thumbnail?.source}
          link={wiki?.content_urls?.desktop?.page || WIKI_PAGE}
        />
        <Description wikiText={wiki?.extract} wikiError={wikiError} />
      </div>

      <Feedback />
    </>
  );
}

export default App;