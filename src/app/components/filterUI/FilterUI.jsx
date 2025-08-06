"use client";

import styles from "./filterUI.module.css";

export default function FilterUI({ onFilter, onReset }) {
  return (
    <div className={styles.filterWrapper}>
      <label>
        🔤 Recherche par titre :
        <input type="text" name="search" placeholder="ex : Inception" />
      </label>

      <label>
        ⭐ Note minimum :
        <input type="number" min="0" max="10" step="0.1" name="note" placeholder="ex : 7" />
      </label>

      <label>
        🌐 Langue :
        <select name="lang">
          <option value="">Toutes</option>
          <option value="en">Anglais</option>
          <option value="fr">Français</option>
          <option value="es">Espagnol</option>
        </select>
      </label>

      <label>
        📅 Année de sortie :
        <input type="number" min="1900" max="2099" step="1" name="year" placeholder="ex : 2020" />
      </label>

      <div className={styles.buttonGroup}>
        <button
          className={styles.filterButton}
          onClick={() => {
            const note = parseFloat(document.querySelector('input[name="note"]').value);
            const lang = document.querySelector('select[name="lang"]').value;
            const search = document.querySelector('input[name="search"]').value;
            const year = document.querySelector('input[name="year"]').value;

            onFilter({ note, lang, search, year });
          }}
        >
          Appliquer les filtres
        </button>

        <button
          className={styles.resetButton}
          onClick={() => {
            document.querySelectorAll('.' + styles.filterWrapper + ' input').forEach((input) => (input.value = ""));
            document.querySelector('select[name="lang"]').value = "";
            onReset();
          }}
        >
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
}
