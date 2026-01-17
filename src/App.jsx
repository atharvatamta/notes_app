import NoteForm  from "./components/NoteForm";
import { useState } from "react";
import NoteList from "./components/NoteList";

const App = () => {
const [notes,setNotes] = useState([])

  return (  <div className =" max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg"
  >
    <h2 className="text-2xl font-bold mb-4 text-center">📝 Notes App</h2>
    <NoteForm notes= {notes} setNotes= {setNotes}/>
    <NoteList notes= {notes}/>
  </div>);
}
export default App;

// add a delete button and create a function which will be passed up to the app.jsx containing global state and then filtering out the note using notee id
