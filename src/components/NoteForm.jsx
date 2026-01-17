import { useState } from "react";
import TextInput from "./inputs/TextInput";
import TextAreaInput from "./inputs/TextAreaInput";
import SelectInput from "./inputs/SelectInput";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: " ",
    priority: "medium",
    category: "work",
    description: " ",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // The reason that we put the `e.target.name` in square brackets is because we want to use the value of the `name` attribute as the key in the object. Without the brackets, it would be looked at as a string and we would get an error.
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return; // Validation
    // Create a new note object
    const newNote = { id: Date.now(), ...formData };
    // Add the new note to the notes array, which gets passed from App.jsx
    setNotes([newNote, ...notes]);
    // Reset form data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 text-purple-500 border border-purple-400 shadow-sm cursor-pointer rounded-lg hover:bg-purple-100 transition py-2 mb-4"
      >
        {isFormVisible ? "Hide Form ❌" : "Add Note ➕"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
        <TextInput
        name = "title"
        label= "Title"
        onChange = {handleChange}
        value = {formData.title}
        />
         

            <SelectInput
        label="Category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        options={[
          { value: "Work", label: "📂 Work" },
          { value: "Personal", label: "🏠 Personal" },
          { value: "Ideas", label: "💡 Ideas" },
        ]}
      />

      <SelectInput
        label="Priority"
        name="priority"
        value={formData.priority}
        onChange={handleChange}
        options={[
          { value: "High", label: "🔴 High" },
          { value: "Medium", label: "🟠 Medium" },
          { value: "Low", label: "🟢 Low" },
        ]}
      />
         <TextAreaInput
         label = "Description"
         name= "description"
         value= {formData.description}
         onChange={handleChange}

         />
          <button
            type="submit"
            className="bg-purple-500 w-full py-2 cursor-pointer rounded-lg shadow-lg text-white hover:bg-purple-600"
          >
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
<>textform</>;
