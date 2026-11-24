/* 下次去哪裡玩・景點收集器 — 唯一資料檔
 *
 * 這是一份會慢慢變長的收集清單。之後要加景點：複製最下面「範例」那一筆，
 * 貼到 PLACES 陣列最後（新的放最後，頁面上的「最近加入」會以此為準），
 * 改名字與縣市，存檔後重新整理網頁即可。不要另開第二份清單。
 *
 * —— 必填 ——
 *   name     景點名稱
 *   county   必須是 COUNTIES 裡的全名，例如「南投縣」「臺南市」（用「臺」）
 *   tags     陣列，可用：自然、親子、文化、老街、步道、海邊、觀光工廠、素食友善、夜市
 *   desc     一兩句介紹，只寫確定的事
 *   added    加入日期，YYYY-MM-DD（以臺北時間為準）
 *
 * —— 選填 ——
 *   source    來源，例如「文宣」「親友推薦」「集集景點」
 *   note      給自己看的備註
 *   address   完整地址（有的話地圖會比較準）
 *   official  官方網站網址
 *   cluster   小鎮或區塊，例如「集集」（同一個值會排在一起）
 *   maps      通常不用填；會用「地址」或「名稱 + 縣市」做 Google 地圖搜尋
 *   id        通常不用填；沒填會用縣市+名稱自動產生
 *   hint      通常不用填；會依縣市套用「從臺中出發」的提示
 *
 * 縣市請維持由北到南、分 北/中/南/東/離島。還沒收集的縣市也要留在 COUNTIES，
 * 頁面上會以清單顯示；還沒收集的縣市會收成一行灰字「還沒收集」。沒有轉盤。
 */
(function (root) {
  const TAGS = ["自然", "親子", "文化", "老街", "步道", "海邊", "觀光工廠", "素食友善", "夜市"];

  const COUNTIES = [
    { name: "基隆市", region: "北部", hint: "一日遊或過夜" },
    { name: "臺北市", region: "北部", hint: "一日遊或過夜" },
    { name: "新北市", region: "北部", hint: "一日遊或過夜" },
    { name: "桃園市", region: "北部", hint: "一日遊或過夜" },
    { name: "新竹市", region: "北部", hint: "一日遊或過夜" },
    { name: "新竹縣", region: "北部", hint: "一日遊或過夜" },
    { name: "苗栗縣", region: "中部", hint: "適合一日遊" },
    { name: "臺中市", region: "中部", hint: "半日／市區就近" },
    { name: "彰化縣", region: "中部", hint: "適合一日遊" },
    { name: "南投縣", region: "中部", hint: "適合一日遊" },
    { name: "雲林縣", region: "中部", hint: "一日遊或過夜" },
    { name: "嘉義市", region: "南部", hint: "一日遊或過夜" },
    { name: "嘉義縣", region: "南部", hint: "一日遊或過夜" },
    { name: "臺南市", region: "南部", hint: "建議過夜" },
    { name: "高雄市", region: "南部", hint: "建議過夜" },
    { name: "屏東縣", region: "南部", hint: "建議過夜" },
    { name: "宜蘭縣", region: "東部", hint: "建議過夜" },
    { name: "花蓮縣", region: "東部", hint: "建議過夜" },
    { name: "臺東縣", region: "東部", hint: "建議過夜" },
    { name: "澎湖縣", region: "離島", hint: "需搭船或搭機，建議過夜" },
    { name: "金門縣", region: "離島", hint: "需搭船或搭機，建議過夜" },
    { name: "連江縣", region: "離島", hint: "需搭船或搭機，建議過夜" }
  ];

  const PLACES = [
    {
      name: "集元果觀光工廠",
      county: "南投縣",
      tags: ["觀光工廠", "親子"],
      desc: "集集的香蕉主題觀光工廠（jijibanana），可逛園區，並依公告參加導覽或 DIY（課程須預約）。",
      address: "南投縣集集鎮富山里大坪巷1號",
      official: "https://www.jijibanana.net/",
      cluster: "集集",
      added: "2026-11-24",
      source: "文宣"
    },
    {
      name: "虹泰水凝膠世界",
      county: "臺南市",
      tags: ["觀光工廠", "親子"],
      desc: "仁德的水凝膠主題觀光工廠，有導覽、互動體驗與 DIY。官網說明平日參訪請提前預約，星期一休館。",
      address: "臺南市仁德區中正路三段523巷116號",
      official: "https://www.hometech.tw/",
      added: "2026-11-24",
      source: "文宣",
      note: "平日預約・週一休館"
    }

    /* 範例（加新景點時，把這整段複製到上一筆的逗號後面，去掉註解再改內容）：
    ,{
      name: "景點名稱",
      county: "臺中市",
      tags: ["親子"],
      desc: "一兩句確定的介紹。",
      address: "",
      added: "2026-11-24",
      source: "文宣",
      note: ""
    }
    */
  ];

  function preparePlace(raw, countyByName) {
    const c = countyByName[raw.county];
    if (!c) {
      throw new Error("未知縣市（必須是 COUNTIES 全名）：" + raw.county + " / " + raw.name);
    }
    const query = (raw.address && String(raw.address).trim()) || (raw.name + " " + raw.county);
    const id = raw.id || ("p-" + raw.county + "-" + raw.name);
    return {
      id: id,
      name: raw.name,
      county: raw.county,
      region: c.region,
      tags: raw.tags || [],
      desc: raw.desc || "",
      address: raw.address || "",
      official: raw.official || "",
      cluster: raw.cluster || "",
      added: raw.added || "",
      source: raw.source || "",
      note: raw.note || "",
      maps: raw.maps || ("https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query)),
      hint: raw.hint || c.hint
    };
  }

  const countyByName = {};
  COUNTIES.forEach(function (c) { countyByName[c.name] = c; });
  const places = PLACES.map(function (p) { return preparePlace(p, countyByName); });

  root.PLACE_DATA = {
    home: "臺中市豐樂公園",
    tags: TAGS,
    regions: ["北部", "中部", "南部", "東部", "離島"],
    counties: COUNTIES,
    places: places
  };
  root.preparePlace = preparePlace;
})(typeof window !== "undefined" ? window : globalThis);
