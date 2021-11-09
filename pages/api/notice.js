import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const page = await axios({
      method: "GET",
      url: "https://yshs.djsch.kr/boardCnts/list.do?boardID=58786&m=020101&lev=0&s=yuseonghs",
      timeout: "5000",
    })
      .then((res) => {
        return cheerio.load(res.data);
      })
      .catch((error) => {
        if (error.code === "ECONNABORTED") return "timeout";
        else throw error;
      });

    const data = [];

    if (page === "timeout") {
      return res.status(200).json({ error: "TO" });
    }
    if (page !== "timeout") {
      for (let i = 1; i <= 10; i++) {
        const post = page(
          `.wb > tbody:nth-child(5) > tr:nth-child(${i}) > td:nth-child(2) > a:nth-child(1)`
        );
        data.push(post.text().replace("\n", ""));

        // const dest = post
        //   .attr("onclick")
        //   .replace("javascript:goView", "")
        //   .replace(/'()/gi, "");
      }
    }

    return res.status(200).json({ data });
  }

  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}

// https://yshs.djsch.kr/boardCnts/view.do?boardID=${boardID}&boardSeq=${boardSeq}&lev=${lev}&searchType=${searchType}&statusYN=${statusYN}&page=${page}&pSize=${pSize}&s=yuseonghs&m=020101&opType=${opType}
