export default function InputForm() {
  return (
    <div className="bg-light-bg dark:bg-dark-bg-3 h-20 rounded-3xl">
      <form
        action=""
        className="flex align-middle justify-between h-full px-10"
      >
        <div className="h-12">
          <input type="text" className="h-12 px-10 mr-5" required />
          <input type="text" className="h-12 px-10" required />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
