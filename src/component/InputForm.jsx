// import React from "react";
import { v4 as uuidv4 } from "uuid";
import ModeBtn from "./ModeBtn";

export default function InputForm({ setTodo, setLocalStorege, modeChange }) {
  const addTodo = (e) => {
    e.preventDefault();
    const todoTitle = e.target.elements.title.value.trim();
    const todoText = e.target.elements.text.value.trim();
    if (todoTitle !== "" && todoText !== "") {
      setTodo((todo) => [
        ...todo,
        { id: uuidv4(), title: todoTitle, text: todoText, isDone: false },
      ]);
      setLocalStorege();
    }
    e.target.elements.title.value = "";
    e.target.elements.text.value = "";
  };

  return (
    <div className="bg-light-bg-1 dark:bg-dark-bg-1 h-20 flex items-center justify-between rounded-3xl px-[2.5rem]">
      <form
        onSubmit={addTodo}
        className="h-full w-full flex items-center justify-between "
      >
        <div className="w-full flex">
          <input
            type="text"
            id="title"
            className="focus:outline-none h-12 px-5 mr-5 w-[12rem] dark:bg-dark-bg-input dark:text-dark-text-input dark:placeholder:text-dark-text-inputP"
            required
            maxLength={5}
            placeholder="제목 ( 5자 이하 )"
          />
          <input
            type="text"
            id="text"
            className="focus:outline-none h-12 px-5 w-full dark:bg-dark-bg-input dark:text-dark-text-input dark:placeholder:text-dark-text-inputP"
            maxLength={15}
            required
            placeholder="내용 ( 15자 이하 )"
          />
        </div>
        <input
          type="submit"
          className="h-12 w-[10rem] ml-[2.5rem] bg-light-bg-blue dark:bg-dark-bg-btn text-light-text-2 rounded-xl cursor-pointer"
          value="추가하기"
        />
      </form>
      <ModeBtn setLocalStorege={setLocalStorege} modeChange={modeChange} />
    </div>
  );
}
