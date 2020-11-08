import React from "react";
import { isMobile } from "mobile-device-detect";
import { get } from "axios";

function Student() {
  // eslint-disable-next-line
  const getTasks = async () => {
    const tasks = await get("https://example.com/");
    console.log(tasks);
  };
  let mobile = "";
  isMobile ? (mobile = " tasks-mobile") : (mobile = "");
  return (
    <main className={"tasks" + mobile}>
      <section>No tienes tareas programadas</section>
    </main>
  );
}

export default Student;
