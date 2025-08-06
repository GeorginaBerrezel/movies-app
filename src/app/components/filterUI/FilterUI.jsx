"use client";

import { useState, useEffect } from "react";
import styles from "./filterUI.module.css";

export default function FilterUI({ onFilter, onReset }) {
  const [note, setNote] = useState("");
  const [lang, setLang] = useState("");
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");

  // Filtrage automatique à chaque changement
  useEffect(() => {
    onFilter({
      note: parseFloat(note),
      lang,
      search,
      year,
    });
  }, [note, lang, search, year]);

  const resetAll = () => {
    setNote("");
    setLang("");
    setSearch("");
    setYear("");
    onReset();
  };

  return (
    <div className={styles.filterWrapper}>
      <label>
        🔤 Recherche par titre :
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ex : Inception"
        />
      </label>

      <label>
        ⭐ Note minimum :
        <input
          type="number"
          min="0"
          max="10"
          step="0.1"
          name="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="ex : 7"
        />
      </label>

      <label>
        🌐 Langue :
        <select name="lang" value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="">Toutes</option>
          <option value="en">Anglais</option>
          <option value="fr">Français</option>
          <option value="es">Espagnol</option>
        </select>
      </label>

      <label>
        📅 Année de sortie :
        <input
          type="number"
          min="1900"
          max="2099"
          step="1"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="ex : 2020"
        />
      </label>

      <div className={styles.buttonGroup}>
        <button className={styles.resetButton} onClick={resetAll}>
          Réinitialiser les filtres
        </button>
      </div>
    </div>
  );
}
