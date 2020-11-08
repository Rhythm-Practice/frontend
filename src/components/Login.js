import React, { useState } from "react";
import { isMobile } from "mobile-device-detect";

function Login() {
  const [typeOfPerson, setTypeOfPerson] = useState("Alumno");
  const [textBox, setTextBox] = useState();
  const [name, setName] = useState("");
  const onClickButton = (e) => {
    let text = e.target.innerText;
    setTypeOfPerson(text);
  };
  let mobile = "";
  isMobile ? (mobile = " form-login-mobile") : (mobile = "");

  const onSubmitFunction = (e) => {
    e.preventDefault();
    const data = {
      name,
      type: typeOfPerson,
      number: textBox,
    };
    // Enviamos la data al servidor
    window.localStorage.setItem("data", JSON.stringify(data));
    window.location = "/principal";
  };

  return (
    <div className="login">
      <h3>Solo llena el formulario a continuación</h3>
      <form
        mothod="POST"
        onSubmit={(e) => onSubmitFunction(e)}
        className={"form-login" + mobile}
      >
        <main className="form-bar">
          <section onClick={onClickButton}>Maestro</section>
          <section onClick={onClickButton}>Alumno</section>
        </main>
        <section>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <TypeOfPeople
          state={typeOfPerson}
          setTextBox={setTextBox}
          onSubmit={onSubmitFunction}
        />
      </form>
    </div>
  );
}

const TypeOfPeople = ({ state, setTextBox }) => {
  if (state === "Maestro") {
    return (
      <main>
        <input
          type="number"
          placeholder="Crea una nueva sala"
          onChange={(e) => setTextBox(e.target.value)}
        />
        <button type="submit">Crear</button>
      </main>
    );
  } else {
    return (
      <main>
        <input
          type="number"
          placeholder="Ingresa el número de la sala"
          onChange={(e) => setTextBox(e.target.value)}
        />
        <button type="submit">Ingresar</button>
      </main>
    );
  }
};

export default Login;
