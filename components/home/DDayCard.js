import { MdToday } from "react-icons/md";

const DDayCard = () => {
  return (
    <div className="mx-auto w-full rounded-lg bg-gray-50 p-3">
      <div className="flex w-full justify-between items-center pb-2 border-b">
        <div className="flex justify-center items-center space-x-1">
          <MdToday />
          <p>이벤트</p>
        </div>
        <div className="flex justify-center items-center bg-yellow-300 px-2 rounded-full text-sm">
          <p>날짜 설정</p>
        </div>
      </div>

      <div className="flex flex-col mt-3">
        <p className="text-sm">Lorem Ipsum</p>
        <p className="text-6xl">D-35</p>
      </div>
    </div>
  );
};

export default DDayCard;
