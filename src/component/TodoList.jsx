import Todo from "./Todo";

export default function TodoList({ todoWork }) {
  return (
    <div className="w-full min-h-[12rem] p-8 pb-3 bg-light-bg-1 dark:bg-dark-bg-1 rounded-3xl">
      {/* <p className="leading-[12rem] mb-5 text-light-text dark:text-dark-text text-center">
        리스트를 추가 해주세요.
      </p> */}
      <Todo />
    </div>
  );
}
