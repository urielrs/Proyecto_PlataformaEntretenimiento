// src/components/VisionPlusChangePassword.jsx
import React from "react";
import "./VisionPlusChangePassword.css";

export default function VisionPlusChangePassword() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log("Datos enviados:", data);
  };

  return (
    <div>
      <header className="header">
        <div className="brand">VISIONPLUS</div>
      </header>

      <main className="wrap">
        <div className="section-head">
          <h2>Cambiar Contraseña</h2>
          <div className="hr"></div>
        </div>

        <div className="inner">
          <div className="avatar">
            <svg className="icon" viewBox="0 0 64 64">
              <circle cx="32" cy="24" r="10" />
              <path d="M12,54 Q32,40 52,54" strokeLinecap="round" />
            </svg>
          </div>

          <form className="form-card" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="old">Ingresar contraseña anterior</label>
              <input className="input" id="old" name="old" type="password" placeholder="••••••••" required />
            </div>

            <div className="field">
              <label className="label" htmlFor="new">Ingrese nueva contraseña</label>
              <input className="input" id="new" name="new" type="password" placeholder="••••••••" required />
            </div>

            <div className="field">
              <label className="label" htmlFor="confirm">Confirme nueva contraseña</label>
              <input className="input" id="confirm" name="confirm" type="password" placeholder="••••••••" required />
            </div>

            <div className="actions-row">
              <button className="btn-primary" type="submit">Guardar</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}