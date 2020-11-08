import React from "react";
import { Link } from "react-router-dom";

function Exit() {
  window.localStorage.removeItem("data");
  window.location = "/";
  return (
    <main className="tasks">
      <p>Estamos a punto de redireccionarte</p>
      <Link to="/">
        <button>Si no pasa nada, haz clic aquí :)</button>
      </Link>
    </main>
  );
}

export default Exit;
