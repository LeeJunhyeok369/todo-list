import { useEffect, useState } from "react";
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

  const todoWork = todo.filter((e) => e.isDone === false);
  const todoDone = todo.filter((e) => e.isDone === true);

  const headleUpdate = (updated) => {
    const title = prompt("제목 변경 (5자 이하)", updated.title);
    if (
      title === "" ||
      title === undefined ||
      title === null ||
      title.length > 6
    )
      return alert("5자 초과이거나 빈칸입니다.");
    const text = prompt("내용 변경 (15자 이하)", updated.text);
    if (
      text === "" ||
      title === undefined ||
      title === null ||
      title.length > 16
    )
      return alert("15자 초과이거나 빈칸입니다.");
    setTodo(
      todo.map((l) =>
        l.id == updated.id ? { ...l, title: title, text: text } : l
      )
    );
    setLocalStorege();
  };

  const headleCheck = (updated) => {
    setTodo(
      todo.map((l) => (l.id === updated.id ? { ...l, isDone: !l.isDone } : l))
    );
    setLocalStorege();
  };

  const handleDelete = (deleted) => {
    setTodo(todo.filter((l) => l.id !== deleted.id));
    setLocalStorege();
  };

  const getLocalStorege = (name = "todoList") => {
    let todoList = localStorage.getItem(name);
    return todoList !== null ? JSON.parse(todoList) : setLocalStorege();
  };
  const setLocalStorege = (name = "todoList", data = todo) => {
    return localStorage.setItem(name, JSON.stringify(data));
  };

  const modeChange = () => {
    const mode = getLocalStorege("mode");
    if (mode || mode === undefined) {
      document.getElementById("mode").classList.remove("dark");
    } else {
      document.getElementById("mode").classList.add("dark");
    }
  };

  useEffect(() => {
    setTodo(getLocalStorege());
    modeChange();
  }, []);

  return (
    <div id="mode" className="dark">
      <div className="max-w-screen min-h-screen bg-light-bg dark:bg-dark-bg py-10">
        <div className="max-w-[1200px] min-w-[50rem] m-auto px-10">
          <h3 className="text-light-text-dark dark:text-white text-[5rem] text-center mb-5">
            TodoList
          </h3>
          <InputForm
            setTodo={setTodo}
            setLocalStorege={setLocalStorege}
            modeChange={modeChange}
          />
          <h3 className="text-light-text-dark dark:text-white text-[1.8rem] font-bold ml-2 mb-2 mt-5">
            Working
          </h3>
          <TodoList
            todoWork={todoWork}
            handleDelete={handleDelete}
            headleCheck={headleCheck}
            headleUpdate={headleUpdate}
          />
          <h3 className="text-light-text-dark dark:text-white text-[1.8rem] font-bold ml-2 mb-2 mt-5">
            Done
          </h3>
          <CompletionList
            todoDone={todoDone}
            handleDelete={handleDelete}
            headleCheck={headleCheck}
            headleUpdate={headleUpdate}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
