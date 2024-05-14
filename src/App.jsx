import { useState } from "react";
import "./App.css";
import CompletionList from "./component/CompletionList";
import InputForm from "./component/InputForm";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  console.log(todo);

  const todoWork = todo.filter((e) => e.isDone === false);
  const todoDone = todo.filter((e) => e.isDone === true);

  // const headleUpdate = (updated) => setTodo(list.map((l) => (l.id == updated.id ? updated : l)));
  // const handleDelete = (deleted) => setTodo(list.filter((l) => l.id !== deleted.id));

  return (
    <div className="dark">
      <div className="max-w-screen min-h-screen bg-light-bg dark:bg-dark-bg py-10">
        <div className="max-w-[1200px] min-w-[50rem] m-auto px-10">
          <h3 className="text-light-text-dark dark:text-white text-[5rem] text-center mb-5">
            TodoList
          </h3>
          <InputForm setTodo={setTodo} />
          <h3 className="text-light-text-dark dark:text-white text-[1.8rem] font-bold ml-2 mb-2 mt-5">
            Working
          </h3>
          <TodoList todoWork={todoWork} />
          <h3 className="text-light-text-dark dark:text-white text-[1.8rem] font-bold ml-2 mb-2 mt-5">
            Done
          </h3>
          <CompletionList todoDone={todoDone} />
        </div>
      </div>
    </div>
  );
}

export default App;
