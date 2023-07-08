import "./App.css";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center">
      <h1 className="text-4xl text-center">Contact Us Form</h1>
      <Form />
    </div>
  );
};
export default App;
