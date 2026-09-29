import { useState } from 'react';
import styles from './Feedback.module.css';

function Feedback() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправлено:', form);
    setSent(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className={styles.block}>
      <h3>Обратная связь</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input name="name" placeholder="Имя" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Сообщение" rows="4" value={form.message} onChange={handleChange} required />
        <button type="submit">Отправить</button>
      </form>
      {sent && <p className={styles.ok}>Спасибо! Сообщение отправлено.</p>}
    </section>
  );
}

export { Feedback };