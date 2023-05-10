import React, { useEffect, useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Notes from "./pages/Notes";
import EditNote from "./pages/EditNote";
import CreateNote from "./pages/CreateNote";
import dummyNotes from "./dummy-notes";
import "./index.css";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Notes notes={notes} />} />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/create-note"
            element={<CreateNote notes={notes} setNotes={setNotes} />}
          />
        </Routes>
      </HashRouter>
    </main>
  );
};

export default App;
