import Todo from "./Todo";

export default function TodoList({
  todoWork,
  handleDelete,
  headleCheck,
  headleUpdate,
}) {
  return (
    <div className="w-full min-h-[10rem] p-8 pb-3 bg-light-bg-1 dark:bg-dark-bg-1 rounded-3xl">
      {todoWork.length === 0 ? (
        <p className="leading-[10rem] mb-5 text-light-text dark:text-dark-text text-center">
          리스트를 추가 해주세요.
        </p>
      ) : (
        todoWork.map((e) => (
          <Todo
            key={e.id}
            list={e}
            handleDelete={handleDelete}
            headleCheck={headleCheck}
            headleUpdate={headleUpdate}
          />
        ))
      )}
    </div>
  );
}
