export default function Todo() {
  return (
    <div className="w-full min-h-[4rem] rounded-3xl dark:bg-dark-bg-btn mb-5 bg-light-bg-2 dark:text-dark-text flex items-center px-5 justify-between">
      <div className="flex items-center w-full">
        <h3 className="mr-3 font-bold text-[1.2rem]">안녕하세요</h3>
        <p>반갑습니다반갑습니다반갑습니다</p>
      </div>
      <div id="btns" className="w-full max-w-[260px] flex justify-end">
        <button className="min-w-[4rem] w-[30%] h-[2.5rem] ml-[2%] text-dark-text-input rounded-xl bg-light-bg-red">
          삭제
        </button>
        <button className="min-w-[4rem] w-[30%] ml-[4%] h-[2.5rem] text-dark-text-input rounded-xl bg-dark-bg-input">
          수정
        </button>
        <button className="min-w-[4rem] w-[30%] ml-[4%] h-[2.5rem] text-dark-text-input rounded-xl bg-light-bg-blue">
          확인
        </button>
      </div>
    </div>
  );
}
