// src/components/VisionPlusNotifications.jsx
import React from "react";
import "./VisionPlusNotifications.css";

export default function VisionPlusNotifications() {
  const onSearch = (e) => e.preventDefault();

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="brand">VISIONPLUS</div>

        <nav className="nav" aria-label="Principal">
          <a href="#">Inicio</a>
          <a href="#" aria-current="page">Notificaciones</a>
        </nav>

        <div className="actions">
          <a href="#" aria-label="Perfil">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="12" cy="8" r="4"/><path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/>
            </svg>
            <span>Perfil</span>
          </a>
          <a href="#" aria-label="Notificaciones">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/>
            </svg>
            <span>Notificaciones</span>
          </a>
        </div>
      </header>

      {/* Buscador centrado (opcional) */}
      <form className="search" role="search" aria-label="Buscar"
            onSubmit={onSearch}
            style={{ position: "absolute", left: "50%", top: 20, transform: "translateX(-50%)" }}>
        <input type="search" placeholder="Buscar" aria-label="Buscar" />
        <button className="btn" type="submit" aria-label="Buscar">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="7"/><path d="M20 20 L16.65 16.65"/>
          </svg>
        </button>
      </form>

      {/* Contenido */}
      <main className="wrap">
        <div className="section-head">
          <h2>Notificaciones</h2>
          <div className="hr"></div>
        </div>

        <section className="timeline" aria-label="Historial de notificaciones">
          {/* Grupo 1 */}
          <div className="group">
            <div className="date-chip">15 de Septiembre 2025</div>

            <div className="item">
              <div className="msg">Su plan fue realizado exitosamente</div>
              <div className="time">11:20 a.m</div>
            </div>

            <div className="item">
              <div className="msg">Stranger Things se ha agregado a “Mi lista”</div>
              <div className="time">7:25 p.m</div>
            </div>
          </div>

          {/* Grupo 2 */}
          <div className="group">
            <div className="date-chip">10 de Octubre 2025</div>

            <div className="item">
              <div className="msg">Su plan está a punto de vencer</div>
              <div className="time">11:00 a.m</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}