# AI Daily Digest — 일일 자동 생성 지침 (GENERATE.md)

> 매일 아침 08:00 KST에 실행되는 스케줄러가 **이 문서를 그대로 따라** 그날의 브리핑을
> 생성합니다. 이 한 문서만 보고도 전체 작업을 수행할 수 있도록 작성되어 있습니다.

---

## 0. 실행 요약

1. 오늘 날짜(KST)를 확인한다.
2. 주제 3개를 각각 검색·요약한다. (§2)
3. 주제별로 `templates/PAGE_TEMPLATE.html`을 채워 `pages/<날짜>/<topic-id>.html` 3개를 만든다. (§3)
4. `manifest.js`의 `days` 배열 맨 앞에 오늘 날짜 항목을 추가한다. (§4)
5. 변경분을 git commit & push 한다. (§5)
6. 체크리스트로 검증한다. (§6)

**주제 대응표**

| topic-id | 주제명 | body class | 히어로 | 검색 도구 |
|---|---|---|---|---|
| `ai-naver-news` | AI 네이버 뉴스 | `topic-blue` | A 뉴스형 | 네이버 `search_news` (없으면 WebSearch) |
| `ai-current-affairs` | AI 시사 교양 유튜브 | `topic-purple` | B 영상형 | WebSearch |
| `ai-productivity` | AI 업무 활용 유튜브 | `topic-green` | B 영상형 | WebSearch |

---

## 1. 날짜 준비

- 한국 시각(KST) 기준 오늘 날짜를 구한다. `get_current_korean_time` 도구가 있으면 사용한다.
- 다음 형식들을 만들어 둔다:
  - `DATE` = `YYYY-MM-DD` (예: `2026-05-22`) — 폴더명·manifest용
  - `LABEL` = `M월 D일` (예: `5월 22일`) — 사이드바 탭용
  - `WEEKDAY` = 한 글자 요일 `월화수목금토일` 중 (예: `금`)
  - `LONG` = `YYYY년 M월 D일 요일` (예: `2026년 5월 22일 금요일`)

---

## 2. 주제별 수집

### 2-1. AI 네이버 뉴스 — `ai-naver-news` (topic-blue, 히어로 A)

**검색**
- 네이버 뉴스 검색 도구 `search_news`를 우선 사용. 키워드별로 `sort=date`, `display=5`:
  - `인공지능` / `AI` / `테크 뉴스` / `빅테크`
- `search_news` 도구를 쓸 수 없으면 `WebSearch`로 대체 (`네이버 뉴스 인공지능 최신`, `AI 빅테크 뉴스` 등).

**선정**
- 4개 키워드 결과를 합쳐 **중복 제거** 후, 최신성·중요도 기준 **핵심 5~8건** 선정.
- 각 기사 요약은 **정확히 3문장**: ① 배경 → ② 핵심 내용 → ③ 의미/전망.
- 각 기사의 **원문 URL**과 **출처 매체명**을 반드시 확보.

**페이지 채우기** (템플릿 카드 A = `.news-card`)
- `news-index`: `01`, `02`, … 두 자리.
- 제목 `<a class="news-title-link">`, 출처 태그 `<a class="tag tag-primary">` 둘 다 `href`=원문 URL, `target="_blank"`.
- 출처 태그 뒤에 분류 키워드 태그(`<span class="tag">`) 2~3개.
- 히어로 A: pill=`{LONG} · 오전 브리핑`, emoji `📰`, title `네이버에서 퍼오는 AI·테크 뉴스 브리핑`,
  sub `인공지능 & AI 테마 · 김작가님을 위한 맞춤 뉴스`,
  통계 3개 = `핵심 기사 N` / `검색 키워드 4` / `수집 시각 HH:MM`.
- 섹션 헤더 `📑 오늘의 핵심 뉴스`, 콜아웃 라벨 `⚡ 오늘의 트렌드 요약`.

### 2-2. AI 시사 교양 유튜브 — `ai-current-affairs` (topic-purple, 히어로 B)

**검색** — `WebSearch`, `site:youtube.com` 쿼리. 아래 키워드 풀에서 **매일 2~3개를 돌아가며** 조합:
> 인공지능 · AI · 테크 뉴스 · 빅테크 · 프롬프트 엔지니어링 · 클로드 · ChatGPT · 일자리 · 자동화
- 검색 예: `site:youtube.com 인공지능 뉴스 2026`, `site:youtube.com AI 빅테크 토크쇼 한국 2026`.

**콘텐츠 유형** — **뉴스 영상 또는 토크쇼만**. 강의·튜토리얼 영상은 **제외**.

**우선순위** (높은 순): ① 한국인 유튜버 ② 한국어 진행 ③ 한글 자막.
**예외 채널** — `노마드 코더(Nomad Coders)`는 외국인이지만 한국어·자막 품질이 높아 적극 포함.
**선호 채널 예시** — 비디오머그, 교양이를 부탁해, 지식인사이드, 언더스탠딩, 14F 일사에프, BZCF 비즈까페, EO Korea, 티타임즈TV, 노마드 코더.

**선정**
- 최근 **3개월 이내** 업로드 영상 우선. 조회수·채널 신뢰도·시사 적합성 고려해 **5개** 선정.
- **업로드 최신순(최근→오래된)** 정렬.
- 각 영상의 **YouTube 영상 ID**(URL `?v=` 뒤 문자열)와 영상 URL, 채널명, 업로드일 확보.

**페이지 채우기** (템플릿 카드 B = `.video-card`)
- 썸네일: `https://img.youtube.com/vi/{ID}/hqdefault.jpg`, `<a class="video-thumb" href=영상URL>`.
- 제목 `<a class="video-title-link" href=영상URL>`. `thumb-rank`는 `#1`~`#5`.
- 히어로 B: pill=`AI·테크 유튜브 큐레이션`, emoji `📡`, title `오늘의 AI·테크 유튜브 엄선 5선`,
  sub `한국어 뉴스 · 토크쇼 채널 중심 큐레이션`, datepill=`{LONG 축약: M월 D일 요일}`.
- 섹션 헤더 `🎬 이주의 픽`, 콜아웃 라벨 `💬 오늘의 한줄 트렌드`.

### 2-3. AI 업무 활용 유튜브 — `ai-productivity` (topic-green, 히어로 B)

**검색** — `WebSearch`, `site:youtube.com` 쿼리. 키워드 풀에서 **매일 2~3개 조합**:
> 클로드 활용 · ChatGPT 활용 · AI 업무 자동화 · AI 생산성 도구 · 프롬프트 엔지니어링 ·
> 힉스필드 AI 활용 · 나노바나나 AI 활용 · 릴리스 AI 활용 · 마누스 AI 활용
- 검색 예: `site:youtube.com "클로드 활용" 업무 2026`, `site:youtube.com AI 업무 자동화 한국어 2026`.

**콘텐츠 유형** — 실무 활용·강의·튜토리얼 영상 환영(시사교양과 달리 강의를 **포함**).
**우선순위** — ① 한국인 유튜버 ② 한국어 강의 ③ 한글 자막. **예외 채널** — 노마드 코더 포함.
**선호 채널 예시** — 일잘러 장피엠, 커리어해커 알렉스, 노마드 코더, 페이퍼로지, 피피티프로, 오빠두엑셀, 디지털거북이.

**선정** — 최근 3개월 이내 우선, 조회수·신뢰도·실무 적용 가능성 고려해 **5개**, **업로드 최신순** 정렬. 영상 ID·URL·채널명·업로드일 확보.

**페이지 채우기** — 카드 B 동일. 히어로 B: pill=`AI 업무활용 유튜브 큐레이션`, emoji `🛠️`,
title `오늘의 AI 업무활용 유튜브 엄선 5선`, sub `실무 적용 가능한 AI 도구 · 자동화 · 프롬프트 중심 큐레이션`.
섹션 헤더 `🎬 이주의 픽`, 콜아웃 라벨 `🧭 오늘의 픽 한마디`.

---

## 3. 페이지 생성

각 주제마다:
1. `templates/PAGE_TEMPLATE.html`을 읽어 사본을 만든다.
2. `<body class="...">`에 해당 topic class를 넣는다.
3. 히어로는 주제에 맞는 A/B 한 가지만 남기고 나머지 주석 블록은 삭제한다.
4. 카드도 해당 유형(news/video)만 남기고, 항목 수만큼 복제한다.
   - `data-delay`는 `0, 60, 120, …`로 60씩 증가.
5. `{{...}}` 자리표시자를 모두 실제 값으로 교체. **남은 `{{`가 없어야 한다.**
6. `pages/<DATE>/<topic-id>.html` 경로로 저장한다. (폴더가 없으면 생성)
   - 같은 날 재실행 시 기존 파일을 **덮어쓴다**.

콘텐츠 톤: 사실 위주, 과장 없는 한국어. 트렌드 콜아웃은 그날 3개 주제를 관통하는 흐름을 1~3문장으로.

---

## 4. manifest.js 갱신

`manifest.js`의 `days: [` 바로 뒤에 오늘 항목을 **맨 앞**으로 추가한다 (최신순 유지):

```js
    {
      date: "<DATE>",
      label: "<LABEL>",
      weekday: "<WEEKDAY>",
      entries: [
        { topic: "ai-naver-news",      file: "pages/<DATE>/ai-naver-news.html",      headline: "<뉴스 대표 한 줄>", count: <기사수> },
        { topic: "ai-current-affairs", file: "pages/<DATE>/ai-current-affairs.html", headline: "<영상 대표 한 줄>", count: 5 },
        { topic: "ai-productivity",    file: "pages/<DATE>/ai-productivity.html",    headline: "<영상 대표 한 줄>", count: 5 }
      ]
    },
```

- `headline`은 사이드바에 보이는 짧은 요약(20자 내외).
- 오늘 날짜 항목이 **이미 있으면** 새로 추가하지 말고 그 항목을 교체한다.
- `topics` 배열은 수정하지 않는다.

---

## 5. 커밋 & 푸시

```
git add -A
git commit -m "brief: <DATE> 브리핑 추가"
git push
```

push가 끝나면 GitHub Pages가 1~2분 내 자동 재배포한다.

---

## 6. 완료 체크리스트

- [ ] `pages/<DATE>/` 에 HTML 3개가 생성되었다.
- [ ] 세 파일 모두 `{{`로 시작하는 자리표시자가 남아 있지 않다.
- [ ] 뉴스 기사·유튜브 영상의 링크(`href`)가 실제 URL이다.
- [ ] `manifest.js` 맨 앞에 오늘 날짜 항목이 추가되었고 JS 문법이 깨지지 않았다.
- [ ] git push 가 성공했다.

> 참고: 초기 시드 데이터(`2026-05-20`, `2026-05-21`)는 예시이며, 실제 운영이
> 며칠 쌓이면 `pages/`의 해당 폴더와 `manifest.js` 항목을 지워도 된다.
