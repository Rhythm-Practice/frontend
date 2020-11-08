import React from "react";
import { isMobile } from "mobile-device-detect";
import { Link } from "react-router-dom";

const OnlyInBrowser = () => {
  return (
    <>
      <h2>
        Rhythm Practice propone una nueva forma de estudiar bajo una concepción
        complementaria, una de las disciplinas artísticas más difundidas en el
        mundo que es, la música. Una gran cantidad de estudiantes que buscan
        formarse musicalmente, necesitan obtener continuamente observaciones que
        les permitan saber dentro de su práctica, qué aspectos presentan
        oportunidades de mejora y/o aquellos que presentan un buen desempeño.{" "}
      </h2>
      <h2>
        Rhythm Practice es muy fácil de usar, el estudiante sube un audio de su
        práctica de una pieza musical completa o sólo una parte, se procesa, y
        se refleja un porcentaje confiable del desempeño demostrado en el audio.{" "}
      </h2>
    </>
  );
};

function Info() {
  let mobile = "";
  isMobile ? (mobile = " info-main-mobile") : (mobile = "");
  return (
    <div className="info">
      <div className="back">
        <img src="/img/back-2.jpg" alt="" />
        <img src="/img/back-1.jpg" alt="" />
        <img src="/img/back-3.jpg" alt="" />
        <img src="/img/back-4.jpg" alt="" />
        <img src="/img/back-5.jpg" alt="" />
      </div>
      <main className={"info-main" + mobile}>
        <h1>
          Rhythm Practice es una herramienta de educación musical para calcular
          tu desempeño en un proceso de aprendizaje e impulsarte a desarrollar
          tus habilidades y reforzar tu talento.
        </h1>
        {isMobile ? null : <OnlyInBrowser mobile={mobile} />}
        <Link to="/login">
          <button className="info-button">
            Prueba esta experiencia ahora!
          </button>
        </Link>
      </main>
    </div>
  );
}

export default Info;
