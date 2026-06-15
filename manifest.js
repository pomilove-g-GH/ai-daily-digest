/* =============================================================
   AI Daily Digest — 콘텐츠 인덱스(manifest)
   -------------------------------------------------------------
   이 파일은 매일 아침 자동화가 갱신합니다.
   새 날짜를 추가할 때: days 배열 맨 앞에 날짜 객체를 추가하고,
   pages/<날짜>/<주제id>.html 파일을 생성하면 됩니다.
   topics 배열은 고정(주제 추가 시에만 수정).
   file:// 로컬 접속에서도 동작하도록 .json 이 아닌 .js 로 둡니다.
   ============================================================= */
window.DIGEST_MANIFEST = {
  site: {
    title: "AI Daily Digest",
    subtitle: "매일 아침 AI 브리핑",
    owner: "김작가"
  },

  /* 주제 정의 — id 는 파일명과 사이드바 키로 사용 */
  topics: [
    {
      id: "ai-naver-news",
      label: "AI 네이버 뉴스",
      source: "naver",
      sourceLabel: "N",
      accent: "blue"
    },
    {
      id: "ai-current-affairs",
      label: "AI 시사 교양 유튜브",
      source: "youtube",
      sourceLabel: "▶",
      accent: "purple"
    },
    {
      id: "ai-productivity",
      label: "AI 업무 활용 유튜브",
      source: "youtube",
      sourceLabel: "▶",
      accent: "green"
    }
  ],

  /* 날짜별 항목 — 최신순(맨 앞이 가장 최근) */
  days: [
    {
      date: "2026-06-16",
      label: "6월 16일",
      weekday: "화",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-16/ai-naver-news.html",      count: 5 },
        { topic: "ai-current-affairs", file: "pages/2026-06-16/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-16/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-15",
      label: "6월 15일",
      weekday: "월",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-15/ai-naver-news.html",      count: 5 },
        { topic: "ai-current-affairs", file: "pages/2026-06-15/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-15/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-14",
      label: "6월 14일",
      weekday: "일",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-14/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-06-14/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-14/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-13",
      label: "6월 13일",
      weekday: "토",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-13/ai-naver-news.html",      count: 5 },
        { topic: "ai-current-affairs", file: "pages/2026-06-13/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-13/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-12",
      label: "6월 12일",
      weekday: "금",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-12/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-12/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-12/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-11",
      label: "6월 11일",
      weekday: "목",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-11/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-11/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-11/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-10",
      label: "6월 10일",
      weekday: "수",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-10/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-10/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-10/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-08",
      label: "6월 8일",
      weekday: "월",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-08/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-08/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-08/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-07",
      label: "6월 7일",
      weekday: "일",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-07/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-07/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-07/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-06",
      label: "6월 6일",
      weekday: "토",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-06/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-06/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-06/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-05",
      label: "6월 5일",
      weekday: "금",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-05/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-05/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-05/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-04",
      label: "6월 4일",
      weekday: "목",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-04/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-04/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-04/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-03",
      label: "6월 3일",
      weekday: "수",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-03/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-06-03/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-03/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-02",
      label: "6월 2일",
      weekday: "화",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-02/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-06-02/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-02/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-06-01",
      label: "6월 1일",
      weekday: "월",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-06-01/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-06-01/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-06-01/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-31",
      label: "5월 31일",
      weekday: "일",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-31/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-31/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-31/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-30",
      label: "5월 30일",
      weekday: "토",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-30/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-30/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-30/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-29",
      label: "5월 29일",
      weekday: "금",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-29/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-29/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-29/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-28",
      label: "5월 28일",
      weekday: "목",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-28/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-28/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-28/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-27",
      label: "5월 27일",
      weekday: "수",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-27/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-27/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-27/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-26",
      label: "5월 26일",
      weekday: "화",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-26/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-26/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-26/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-25",
      label: "5월 25일",
      weekday: "월",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-25/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-25/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-25/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-24",
      label: "5월 24일",
      weekday: "일",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-24/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-24/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-24/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-23",
      label: "5월 23일",
      weekday: "토",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-23/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-23/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-23/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-22",
      label: "5월 22일",
      weekday: "금",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-22/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-22/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-22/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-21",
      label: "5월 21일",
      weekday: "목",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-21/ai-naver-news.html",      count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-21/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-21/ai-productivity.html",    count: 5 }
      ]
    },
    {
      date: "2026-05-20",
      label: "5월 20일",
      weekday: "수",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-20/ai-naver-news.html",      count: 6 },
        { topic: "ai-current-affairs", file: "pages/2026-05-20/ai-current-affairs.html", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-20/ai-productivity.html",    count: 5 }
      ]
    }
  ]
};
