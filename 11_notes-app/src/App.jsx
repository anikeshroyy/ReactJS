import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const oldNotes = JSON.parse(localStorage.getItem("notes")) || [];

  const submitHandler = (e) => {
    e.preventDefault();

    setTitle("");
    console.log(title);

    setDescription("");
    console.log(description);

    const note = {
      description,
      title,
    };

    oldNotes.push(note);

    localStorage.setItem("notes", JSON.stringify(oldNotes));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10 flex gap-10">
      <form
        className="w-1/3 bg-slate-800 p-6 rounded-xl shadow-lg flex flex-col gap-4"
        onSubmit={submitHandler}
      >
        <h1 className="text-2xl font-bold text-center">Add Note</h1>

        <input
          type="text"
          placeholder="Notes Title"
          required
          className="border border-slate-600 bg-slate-700 rounded-lg px-4 py-2 outline-none focus:border-blue-500"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter Your Notes"
          required
          className="border border-slate-600 bg-slate-700 rounded-lg px-4 py-2 h-36 outline-none resize-none focus:border-blue-500"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-blue-600 hover:bg-blue-700 transition rounded-lg py-2 font-semibold cursor-pointer">
          Add Note
        </button>
      </form>

      <div className="w-2/3">
        <h1 className="text-2xl font-bold mb-5">Your Note</h1>

        <div>
          {oldNotes.map((note, index) => (
            <div
              key={index}
              className="bg-slate-800 p-5 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl transition mb-4"
            >
              <h2 className="text-xl font-bold text-yellow-400 mb-2">
                {note.title}
              </h2>

              <p className="text-gray-300 wrap-break-words">
                {note.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default App;
