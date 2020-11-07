import React from "react";
import Teacher from "./Teacher";
import Student from "./Student";

function Principal() {
  const data = JSON.parse(window.localStorage.getItem("data"));
  console.log(data);
  if (!data) {
    window.location = "/login";
  }

  if (data.type === "Maestro") {
    return <Teacher />;
  } else {
    return <Student />;
  }
}

export default Principal;
