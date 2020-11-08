import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { post } from "axios";

const DateComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      minDate={new Date()}
      dateFormat="MMMM d, yyyy h:mm aa"
    />
  );
};

const Tasks = () => {
  return (
    <main>
      <section>
        <p>No tienes tareas encargadas</p>
      </section>
    </main>
  );
};

function Teacher() {
  const [state, setState] = useState();
  const onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    fileUpload(state.file).then((response) => {
      console.log(response.data);
    });
  };
  const onChange = (e) => {
    setState({ file: e.target.files[0] });
  };
  const fileUpload = (file) => {
    const url = "http://example.com/file-upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  };

  return (
    <>
      <main className="tasks">
        <form
          method="POST"
          className="form-task"
          onSubmit={(e) => onFormSubmit(e)}
        >
          <h4>Nueva tarea</h4>
          <input
            type="file"
            name="music"
            id="music"
            placeholder="Envía una canción"
            onChange={onChange}
          />
          <DateComponent />
          <button type="submit">Encargar tarea</button>
        </form>
      </main>
      <main className="tasks">
        <Tasks />
      </main>
    </>
  );
}

export default Teacher;
