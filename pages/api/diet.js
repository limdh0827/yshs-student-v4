import axios from "axios";
import https from "https";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const targetDate = req.query.targetDate ?? "";
    const datPattern =
      /(((\d{4})(0[13578]|10|12)(0[1-9]|[12][0-9]|3[01]))|((\d{4})(0[469]|11)(0[1-9]|[12][0-9]|30))|((\d{4})(02)(0[1-9]|1[0-9]|2[0-8]))|([0-9][0-9][02468]40229)|([0-9][0-9][02468]80229)|([0-9][0-9][13579]20229)|([0-9][0-9][13579]60229)|([0-9][0-9][02468]00229))/;
    if (!datPattern.test(targetDate))
      return res.status(400).json({ error: "Incorrect targetDate pattern" });

    const fetchDiet = async (targetDate) => {
      const apiUrl = `https://open.neis.go.kr/hub/mealServiceDietInfo`;

      var diet = {
        isLunchServed: Boolean,
        isDinnerServed: Boolean,
        lunch: "",
        dinner: "",
        lunchCal: "",
        dinnerCal: "",
      };

      const instance = axios.create({
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      });

      await instance
        .get(apiUrl, {
          params: {
            KEY: process.env.MEAL_API_KEY,
            ATPT_OFCDC_SC_CODE: "G10",
            SD_SCHUL_CODE: "7430042",
            MLSV_YMD: targetDate,
            Type: "json",
            pIndex: "1",
            pSize: "10",
          },
        })
        .then(async (res) => {
          const data = res.data;

          if (data.mealServiceDietInfo) {
            if (data.mealServiceDietInfo[1].row.length === 2) {
              const lunchServiceDietInfo = data.mealServiceDietInfo[1].row[0];
              const dinnerServiceDietInfo = data.mealServiceDietInfo[1].row[1];

              diet.isLunchServed = true;
              diet.isDinnerServed = true;

              diet.lunch = lunchServiceDietInfo.DDISH_NM;
              diet.lunchCal = lunchServiceDietInfo.CAL_INFO;

              diet.dinner = dinnerServiceDietInfo.DDISH_NM;
              diet.dinnerCal = dinnerServiceDietInfo.CAL_INFO;
            } else {
              const lunchServiceDietInfo = data.mealServiceDietInfo[1].row[0];
              diet.isLunchServed = true;
              diet.isDinnerServed = false;

              diet.lunch = lunchServiceDietInfo.DDISH_NM;
              diet.lunchCal = lunchServiceDietInfo.CAL_INFO;
            }
          } else {
            diet.isLunchServed = false;
            diet.isDinnerServed = false;
          }
        });

      return diet;
    };

    return res.status(200).json(await fetchDiet(targetDate));
  }
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}
