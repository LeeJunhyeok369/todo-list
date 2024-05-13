import "./App.css";
import InputForm from "./component/InputForm";

function App() {
  return (
    <div className="">
      <div className="w-screen h-screen bg-[#f5f5f5] dark:bg-dark-bg">
        <div className="max-w-[1200px] min-w-[50rem] h-full m-auto pt-10 px-10">
          <InputForm />
        </div>
      </div>
    </div>
  );
}

export default App;
