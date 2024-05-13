import "./App.css";
import CompletionList from "./component/CompletionList";
import InputForm from "./component/InputForm";
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="dark">
      <div className="w-screen h-screen bg-light-bg dark:bg-dark-bg">
        <div className="max-w-[1200px] min-w-[50rem] h-full m-auto pt-10 px-10">
          <h3 className="text-light-text-dark dark:text-white text-[5rem] text-center mb-5">
            TodoList
          </h3>
          <InputForm />
          <h3 className="text-light-text-dark dark:text-white text-[1.8rem] font-bold ml-2 mb-2 mt-5">
            Working
          </h3>
          <TodoList />
          <h3 className="text-light-text-dark dark:text-white text-[1.8rem] font-bold ml-2 mb-2 mt-5">
            Done
          </h3>
          <CompletionList />
        </div>
      </div>
    </div>
  );
}

export default App;
