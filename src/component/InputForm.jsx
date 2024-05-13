export default function InputForm() {
  return (
    <div className="bg-light-bg-1 dark:bg-dark-bg-1 h-20 rounded-3xl flex items-center justify-between px-10">
      <div>
        <input
          type="text"
          className="focus:outline-none h-12 px-5 mr-5 dark:bg-dark-bg-input dark:text-dark-text-input dark:placeholder:text-dark-text-inputP"
          required
          placeholder="제목"
        />
        <input
          type="text"
          className="focus:outline-none h-12 px-5 dark:bg-dark-bg-input dark:text-dark-text-input dark:placeholder:text-dark-text-inputP"
          required
          placeholder="내용"
        />
      </div>
      <input
        type="submit"
        className="px-10 h-12 bg-light-bg-blue dark:bg-dark-bg-btn text-light-text-2 rounded-xl cursor-pointer"
        value="추가하기"
      />
    </div>
  );
}
