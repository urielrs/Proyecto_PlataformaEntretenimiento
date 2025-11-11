// src/components/VisionPlusPlan.jsx
import React from "react";
import "./VisionPlusPlan.css";

export default function VisionPlusPlan() {
  const handleSelect = (plan) => {
    console.log("Seleccionaste:", plan);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="brand">VISIONPLUS</div>

        <nav className="nav" aria-label="Principal">
          <a href="#">Inicio</a>
          <a href="#" aria-current="page">Mi Plan</a>
        </nav>

        <div className="actions">
          <a href="#" aria-label="Perfil">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
            </svg>
            <span>Perfil</span>
          </a>
          <a href="#" aria-label="Notificaciones">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
            <span>Notificaciones</span>
          </a>
        </div>
      </header>

      {/* Buscador centrado (opcional) */}
      <form
        className="search"
        role="search"
        aria-label="Buscar"
        onSubmit={(e) => e.preventDefault()}
        style={{ position: "absolute", left: "50%", top: 20, transform: "translateX(-50%)" }}
      >
        <input type="search" placeholder="Buscar" aria-label="Buscar" />
        <button className="btn" type="submit" aria-label="Buscar">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
            <circle cx="11" cy="11" r="7"/><path d="M20 20 L16.65 16.65"/>
          </svg>
        </button>
      </form>

      {/* Contenido */}
      <main className="wrap">
        <div className="section-head">
          <h2>Mi Plan</h2>
          <div className="hr"></div>
        </div>

        <section className="pricing" aria-label="Planes disponibles">
          {/* FREE */}
          <article className="card">
            <header>
              <div className="icon">📱</div>
              <h3>Plan FREE</h3>
            </header>
            <ul className="features">
              <li>1 dispositivo</li>
              <li>Catálogo limitado</li>
              <li>Publicidad</li>
              <li>Calidad HD</li>
              <li>Soporte estándar</li>
            </ul>
            <div className="actions">
              <button className="btn" type="button" onClick={() => handleSelect("FREE")}>
                Seleccionar Plan
              </button>
            </div>
          </article>

          {/* PREMIUM */}
          <article className="card">
            <header>
              <div className="icon">📱</div>
              <h3>Plan PREMIUM</h3>
            </header>
            <ul className="features">
              <li>2 dispositivos</li>
              <li>Todo el catálogo</li>
              <li>Sin publicidad</li>
              <li>Full HD / 4K*</li>
              <li>Descargas offline</li>
            </ul>
            <div className="actions">
              <button className="btn" type="button" onClick={() => handleSelect("PREMIUM")}>
                Seleccionar Plan
              </button>
            </div>
          </article>

          {/* FAMILY */}
          <article className="card">
            <header>
              <div className="icon">📱</div>
              <h3>Plan FAMILY</h3>
            </header>
            <ul className="features">
              <li>Hasta 4 dispositivos</li>
              <li>Todo el catálogo</li>
              <li>Perfiles infantiles</li>
              <li>4K/HDR según contenido</li>
              <li>Soporte prioritario</li>
            </ul>
            <div className="actions">
              <button className="btn" type="button" onClick={() => handleSelect("FAMILY")}>
                Seleccionar Plan
              </button>
            </div>
          </article>
        </section>

        <p className="note">Su plan reciente es de ….</p>
      </main>
    </div>
  );
}