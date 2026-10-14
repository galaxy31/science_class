/*
 * 도구 목록 — 새 도구를 만들면 아래 tools 배열에 한 줄을 추가하세요.
 * 첫 화면과 각 분야 페이지가 이 목록을 읽어 자동으로 카드를 만듭니다.
 *
 *   field   : physics | chemistry | life_science | earth_science
 *   path    : 분야 폴더 안의 도구 폴더 이름 (예: parallax → earth_science/parallax/)
 *   title   : 화면에 보일 도구 이름
 *   summary : 한두 문장 설명
 *   unit    : 관련 단원 (선택)
 *   added   : 추가한 날짜 (YYYY-MM-DD)
 */
window.SC = {
  fields: [
    { id: "physics",       name: "물리학",   en: "Physics",       desc: "힘과 운동, 빛과 파동, 전기와 자기" },
    { id: "chemistry",     name: "화학",     en: "Chemistry",     desc: "물질의 구성, 상태 변화, 화학 반응" },
    { id: "life_science",  name: "생명과학", en: "Life Science",  desc: "세포, 생물의 구조와 기능, 유전" },
    { id: "earth_science", name: "지구과학", en: "Earth Science", desc: "지구계, 날씨, 별과 우주" }
  ],
  tools: [
    {
      field: "earth_science",
      path: "parallax",
      title: "시차 관찰 산책길",
      summary: "관측자가 걸을 때 나무 뒤 배경이 달라지는 모습을 보며 시차를 체험합니다. 두 위치를 표시하면 시차 각을 잴 수 있습니다.",
      unit: "별과 우주",
      added: "2026-10-14"
    },
    {
      field: "earth_science",
      path: "annual_parallax",
      title: "연주 시차 관측소",
      summary: "지구를 공전시키고 별을 옮기며 6개월 간격 관측의 시차와 연주 시차를 확인합니다. 거리와 연주 시차의 반비례 관계를 그래프로 봅니다.",
      unit: "별과 우주",
      added: "2026-10-14"
    }
  ]
};
