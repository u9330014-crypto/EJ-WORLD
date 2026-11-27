/* 下次去哪裡玩・景點收集器 — 唯一資料檔
 *
 * 這是一份會慢慢變長的收集清單。之後要加景點：複製最下面「範例」那一筆，
 * 貼到 PLACES 陣列最後（新的放最後，頁面上的「最近加入」會以此為準），
 * 改名字與縣市，存檔後重新整理網頁即可。不要另開第二份清單。
 *
 * —— 必填 ——
 *   name     景點名稱
 *   county   必須是 COUNTIES 裡的全名，例如「南投縣」「臺南市」（用「臺」）
 *   tags     陣列，可用：自然、親子、文化、老街、步道、海邊、觀光工廠、素食友善、夜市、手作、動物、景觀餐廳、農場
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
  const TAGS = ["自然", "親子", "文化", "老街", "步道", "海邊", "觀光工廠", "素食友善", "夜市", "手作", "動物", "景觀餐廳", "農場"];

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
    },
    {
      name: "台灣油礦陳列館",
      county: "苗栗縣",
      tags: ["文化", "親子"],
      desc: "位於苗栗公館出磺坑，是台灣中油探採事業部的展示館，介紹油礦探勘與開採。出磺坑是臺灣最早發現石油的地點之一。",
      address: "苗栗縣公館鄉開礦村36號",
      official: "https://www.cpc.com.tw/cp.aspx?n=3860",
      cluster: "公館",
      added: "2026-11-24",
      source: "EJ",
      note: "週二至週日 09:00–16:00；週一、除夕及春節年假休館。團體導覽須於參觀日前 10 個工作日申請。"
    },
    {
      name: "八卦山脈生態遊客中心",
      county: "彰化縣",
      tags: ["自然", "親子", "手作"],
      desc: "參山國家風景區的遊客中心，也是灰面鵟鷹主題館（官方全名：八卦山脈生態遊客中心暨灰面鵟鷹主題館），介紹八卦山脈生態並提供旅遊諮詢。免費參觀。",
      address: "彰化縣彰化市卦山路13之7號",
      official: "https://www.trimt-nsa.gov.tw/zh-tw/attraction/134/",
      added: "2026-11-24",
      source: "Threads 貼文",
      note: "每日 08:30–17:30，電話 04-7289608。Threads 貼文（2026-11-24）提到免費手作體驗（樹皮杯墊、棉紙漆扇、卦山植物染方巾染），每場限 20 人、需事先報名；活動請以現場或官方公告為準。"
    },
    {
      name: "野森動物學校",
      county: "高雄市",
      tags: ["親子", "動物"],
      desc: "高雄內門的動物互動生態園區，以動物與生命教育為主題。入園與票價請依官方網站公告。",
      address: "高雄市內門區中正路39巷168號",
      official: "https://www.yessen.com.tw/",
      added: "2026-11-24",
      source: "社群影片",
      note: "每日 10:00–17:00（最後入園 16:00），每週三公休，國定假日另行公告。常有季節優惠，出發前查官網。"
    },
    {
      name: "田寮農莊景觀餐廳",
      county: "臺中市",
      tags: ["景觀餐廳", "親子"],
      desc: "臺中南屯的庭園景觀餐廳，以中式套餐為主，園區有池塘庭園，離市區不遠。",
      address: "408臺中市南屯區楓樹里樂田巷2之34號",
      maps: "https://maps.app.goo.gl/a9vNEcR8gT2tyVgbA",
      added: "2026-11-24",
      source: "Google 地圖",
      note: "平日 11:30–15:30，週六、日另有 16:30–19:00 時段，週三公休（2026 臺中購物節店家頁）。電話 04-24795186。多家食記提到有素食套餐，出發前請向店家確認。"
    },
    {
      name: "千巧谷牛樂園牧場",
      county: "雲林縣",
      tags: ["親子", "農場"],
      desc: "雲林崙背的乳牛主題休閒牧場，由千巧谷烘焙相關業者經營，可近距離接觸乳牛；入園免費，牧草等餵食用品需在園區購買。",
      address: "雲林縣崙背鄉羅厝村東興路182之32號",
      official: "https://www.chanchauku.com/pages/%E5%8D%83%E5%B7%A7%E8%B0%B7%E9%96%80%E5%B8%82%E8%B3%87%E8%A8%8A",
      added: "2026-11-24",
      source: "網誌文章",
      note: "入園免門票、免停車費。平日 09:00–19:00，假日 09:00–20:00；每年 11/1–12/22 假日改為 09:00–19:30（千巧谷官網門市資訊）。電話 05-6969845。餵食請用園區提供或販售的飼料，勿自行攜帶。"
    },
    {
      name: "橋聳雲天綠雕園區",
      county: "南投縣",
      tags: ["親子", "自然"],
      desc: "位於南投國姓、國道 6 號「橋聳雲天」高架橋下的綠雕園區，可看橋景與綠雕，並有兒童遊戲場與攀爬、繩網等挑戰設施。",
      address: "南投縣國姓鄉福龜村",
      official: "https://travel.nantou.gov.tw/attractions/qiaosongyuntian-greenery-sculpture-park/",
      added: "2026-11-24",
      source: "社群影片",
      note: "社群影片與多家遊記寫每日 08:00–17:00；南投旅遊網該頁另列出 24 小時營業（並註部分資訊來自第三方），出發前請再確認。可自備水和點心，垃圾請帶走。"
    },
    {
      name: "苗栗明德水陸空遊憩區",
      county: "苗栗縣",
      tags: ["自然", "親子"],
      desc: "位於苗栗頭屋明德水庫的遊憩園區，有遊湖船與高空等體驗項目；實際場次與票價請依官網訂票系統。",
      address: "362苗栗縣頭屋鄉明德村明德路91-1號",
      official: "https://www.minghu.com.tw/",
      added: "2026-11-24",
      source: "社群影片",
      note: "園區營業時間每日 09:00–17:30，除夕休園（官網 FAQ）。遊湖船與高空設施另依訂票系統與現場公告，建議先上網預約。電話 037-250-688。"
    },
    {
      name: "富樂爾噗樂館好Shoes樂活工廠",
      county: "南投縣",
      tags: ["觀光工廠", "親子"],
      desc: "南投名間的製鞋主題室內觀光工廠，2025 年開幕，共三層樓，有製鞋展示、親子互動遊戲與 DIY；三樓生產線參觀需提前預約，適合作雨天備案。",
      address: "551南投縣名間鄉新街村彰南路365-5號",
      official: "https://www.facebook.com/profile.php?id=61574862446300",
      cluster: "名間",
      added: "2026-11-24",
      source: "網誌文章",
      note: "多家遊記寫營業時間 09:00–17:00、週三休館，電話 049-2230365。2025 年試營運期間遊記寫免門票、未來收費未公布；2026-08 遊記仍寫入館免門票、DIY 須預約另計。未找到獨立官網確認現行票價，出發前請向館方或臉書專頁確認。"
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
