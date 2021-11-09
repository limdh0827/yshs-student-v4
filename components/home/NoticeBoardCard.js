import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import { MdNotificationsActive, MdOpenInNew } from "react-icons/md";

const fetcher = (url) =>
  axios({
    method: "GET",
    url: url,
    // params: { targetDate },
  }).then((res) => res.data);

const NoticeBoardCard = () => {
  const { data: notices, error } = useSWR("/api/notice", fetcher);

  return (
    <div className="mx-auto w-full rounded-lg bg-gray-50 p-3">
      <div className="flex w-full justify-between items-center pb-2 border-b">
        <div className="flex justify-center items-center space-x-1">
          <MdNotificationsActive />
          <p>공지사항</p>
        </div>

        <Link href="https://yshs.djsch.kr/boardCnts/list.do?boardID=58786&m=020101&lev=0&s=yuseonghs">
          <a target="_blank">
            <div className="flex justify-center items-center bg-gray-300 mt-1 px-2 rounded-full">
              <p className="text-sm mr-1">공지사항 바로가기</p>
              <MdOpenInNew />
            </div>
          </a>
        </Link>
      </div>

      <div className="flex flex-col overflow-y-scroll h-40">
        {notices ? (
          notices.error ? (
            <p>⚠️ 요청 시간 초과</p>
          ) : (
            notices.data.map((notice, idx) => (
              <div key={idx} className="">
                <p>{notice}</p>
              </div>
            ))
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default NoticeBoardCard;

// export async function getServerSideProps({ context }) {
//   // const page = await axios({
//   //   method: "GET",
//   //   url: "https://yshs.djsch.kr/boardCnts/list.do?boardID=58786&m=020101&lev=0&s=yuseonghs",
//   //   timeout: "5000",
//   // })
//   //   .then((res) => {
//   //     return cheerio.load(res.data);
//   //   })
//   //   .catch((error) => {
//   //     console.log("Axios Error: ", error.message);
//   //     return "error";
//   //   });

//   const page = "error";

//   const announcements = [];

//   if (page !== "error") {
//     for (let i = 1; i <= 10; i++) {
//       announcements.push(
//         page(
//           `.wb > tbody:nth-child(5) > tr:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`
//         )
//           .text()
//           .replace("\n", "")
//       );
//     }
//   }

//   return {
//     props: {
//       announcements,
//     },
//   };
// }
