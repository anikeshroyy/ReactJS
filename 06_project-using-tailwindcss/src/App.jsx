import Card from "./components/Card";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-600">
      <Header />
      <Card />
    </div>
  );
};

export default App;
