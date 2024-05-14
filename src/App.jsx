import { useState } from "react";
import "./App.css";
import CompletionList from "./component/CompletionList";
import InputForm from "./component/InputForm";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "안녕하세요",
      text: "반갑습니다반갑습니다반갑습니다",
      isDone: false,
    },
    {
      id: 2,
      title: "안녕하세요",
      text: "반갑습니다반갑습니다반갑습니다",
      isDone: true,
    },
    {
      id: 3,
      title: "안녕하세요",
      text: "반갑습니다반갑습니다반갑습니다",
      isDone: true,
    },
  ]);
  console.log(todo);

  const todoWork = todo.filter((e) => e.isDone === false);
  const todoDone = todo.filter((e) => e.isDone === true);
  console.log(todoWork, todoDone);
  // const headleUpdate = (updated) => setTodo(list.map((l) => (l.id == updated.id ? updated : l)));
  const headleCheck = (updated) => {
    setTodo(
      todo.map((l) => (l.id === updated.id ? { ...l, isDone: !l.isDone } : l))
    );
    console.log("wda");
  };
  const handleDelete = (deleted) =>
    setTodo(todo.filter((l) => l.id !== deleted.id));

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
          <TodoList
            todoWork={todoWork}
            handleDelete={handleDelete}
            headleCheck={headleCheck}
          />
          <h3 className="text-light-text-dark dark:text-white text-[1.8rem] font-bold ml-2 mb-2 mt-5">
            Done
          </h3>
          <CompletionList
            todoDone={todoDone}
            handleDelete={handleDelete}
            headleCheck={headleCheck}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
