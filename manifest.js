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
      date: "2026-05-24",
      label: "5월 24일",
      weekday: "일",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-24/ai-naver-news.html",      headline: "MS 조직 해체·딥시크 가격파괴·미·스웨덴 기술동맹", count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-24/ai-current-affairs.html", headline: "창작·금융·감정… AI가 침투한 인간 영역", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-24/ai-productivity.html",    headline: "클로드 코워크 윈도우 출시·자동화 신기능", count: 5 }
      ]
    },
    {
      date: "2026-05-23",
      label: "5월 23일",
      weekday: "토",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-23/ai-naver-news.html",      headline: "MS 임원진 해체·메타 데이터센터 한국 4조 수주", count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-23/ai-current-affairs.html", headline: "빅테크가 한국 필요한 이유·클로드 1위", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-23/ai-productivity.html",    headline: "AI 네이티브 컴퍼니·멀티 에이전트 자동화", count: 5 }
      ]
    },
    {
      date: "2026-05-22",
      label: "5월 22일",
      weekday: "금",
      entries: [
        { topic: "ai-naver-news",      file: "pages/2026-05-22/ai-naver-news.html",      headline: "구글I/O 에이전틱 AI·클로드 급성장", count: 7 },
        { topic: "ai-current-affairs", file: "pages/2026-05-22/ai-current-affairs.html", headline: "자율 AI 에이전트 시대의 경계선", count: 5 },
        { topic: "ai-productivity",    file: "pages/2026-05-22/ai-productivity.html",    headline: "클로드 코워크로 업무 자동화 혁명", count: 5 }
      ]
    },
    {
      date: "2026-05-21",
      label: "5월 21일",
      weekday: "목",
      entries: [
        {
          topic: "ai-naver-news",
          file: "pages/2026-05-21/ai-naver-news.html",
          headline: "클로드 12배 폭증·K-메모리 구애",
          count: 7
        },
        {
          topic: "ai-current-affairs",
          file: "pages/2026-05-21/ai-current-affairs.html",
          headline: "AI 일자리 변동, 한국이 한복판",
          count: 5
        },
        {
          topic: "ai-productivity",
          file: "pages/2026-05-21/ai-productivity.html",
          headline: "Claude Code로 야근 끝내기",
          count: 5
        }
      ]
    },
    {
      date: "2026-05-20",
      label: "5월 20일",
      weekday: "수",
      entries: [
        {
          topic: "ai-naver-news",
          file: "pages/2026-05-20/ai-naver-news.html",
          headline: "삼성·SK 온디바이스 AI 반도체 동시 공개",
          count: 6
        },
        {
          topic: "ai-current-affairs",
          file: "pages/2026-05-20/ai-current-affairs.html",
          headline: "AI 저작권·딥페이크 규제 논쟁 가열",
          count: 5
        },
        {
          topic: "ai-productivity",
          file: "pages/2026-05-20/ai-productivity.html",
          headline: "회의록부터 보고서까지 AI 업무 자동화",
          count: 5
        }
      ]
    }
  ]
};
