import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDoorOpen, faDoorClosed } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const data = JSON.parse(window.localStorage.getItem("data"));
  return (
    <header>
      <Link to={data ? "/principal" : "/info"}>
        <h1>Rhythm Practice</h1>
      </Link>
      {data ? <Salir /> : <Entrar />}
    </header>
  );
}

function Entrar() {
  return (
    <section>
      <Link to="/login">
        <FontAwesomeIcon icon={faDoorClosed} />
        <span> Entrar</span>
      </Link>
    </section>
  );
}
function Salir() {
  return (
    <section>
      <Link to="/exit">
        <FontAwesomeIcon icon={faDoorOpen} />
        <span> Salir</span>
      </Link>
    </section>
  );
}

export default Header;
