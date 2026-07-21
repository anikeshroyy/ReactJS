import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  useEffect(
    function () {
      console.log("Use Effect Running");

      getData();
    },
    [index],
  );

  const getData = async () => {
    const response = await fetch(
      `https://picsum.photos/v2/list?page=${index}&limit=10`,
    );
    const data = await response.json();
    setUserData(data);
    console.log(data);
  };

  let printUserData = (
    <h2 className="font-semibold text-gray-400">Loading......</h2>
  );

  if (userData.length > 0) {
    printUserData = userData.map(function (elem) {
      return <Card elem={elem} />;
    });
  }

  return (
    <div className="bg-black min-h-screen text-white flex justify-center flex-col items-center">
      <div className="flex items-center gap-4 flex-wrap justify-center h-120">
        {printUserData}
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          disabled={index === 1}
          onClick={() => {
            setUserData([]);
            setIndex(index - 1);
            console.log(index);
          }}
          className="bg-amber-400 text-black font-semibold px-4 py-2 rounded cursor-pointer active:scale-95"
        >
          Prev
        </button>
        <h2>Page {index}</h2>
        <button
          onClick={() => {
            setUserData([]);
            setIndex(index + 1);
            console.log(index);
          }}
          className="bg-amber-400 text-black font-semibold px-4 py-2 rounded cursor-pointer active:scale-95"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
