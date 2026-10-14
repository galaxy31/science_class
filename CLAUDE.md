# science_class — 과학 수업용 웹 도구 모음

중학교 과학 수업에서 전자칠판과 학생 기기로 여는 인터랙티브 웹 도구 저장소입니다.
GitHub Pages로 배포됩니다: https://galaxy31.github.io/science_class/

## 폴더 구조

```
index.html              첫 화면 (assets/tools.js 목록을 읽어 자동으로 그림)
assets/tools.js         도구 목록 — 도구를 추가하면 반드시 여기에도 한 항목 추가
assets/site.css, site.js 첫 화면·분야 페이지 공통 스타일과 스크립트
physics/                물리학
chemistry/              화학
life_science/           생명과학
earth_science/          지구과학
  <도구이름>/index.html  도구 하나 = 폴더 하나
```

## 새 도구를 만들 때 규칙

1. 분야 폴더 안에 영어 소문자·밑줄(`_`)로 된 폴더를 만들고 `index.html` 하나에 담는다.
   예: `earth_science/parallax/index.html`
2. 한 파일로 완결한다. HTML·CSS·JS를 모두 인라인으로 넣고, 외부 라이브러리는 버전을 고정한 CDN 주소만 쓴다.
3. 전자칠판을 기본 화면으로 생각한다.
   - 16:9 가로 화면에서 스크롤 없이 한 화면에 들어오게 한다.
   - 버튼과 터치 영역은 48px 이상, 글자는 멀리서도 읽히게 크게 한다.
   - 마우스와 터치 모두 되도록 Pointer Events를 쓴다.
   - 전체 화면 버튼을 넣는다(`requestFullscreen`, 실패하면 안내 문구).
4. 휴대폰(약 400px)에서도 깨지지 않게 세로로 쌓이는 반응형으로 만든다.
5. 화면 문구는 한국어로, 중학생이 이해할 수 있게 쓴다. 교과서 용어를 그대로 쓴다.
6. `assets/tools.js`의 `tools` 배열에 항목을 추가한다 (field, path, title, summary, unit, added).
7. 완성되면 main 브랜치에 커밋하고 push한다. 커밋 메시지 예: `지구과학: 시차 관찰 산책길 추가`

## 하지 말 것

- 폴더 이름에 한글이나 띄어쓰기를 쓰지 않는다 (웹 주소가 깨짐).
- 학생 개인정보를 저장하거나 외부로 보내는 기능을 넣지 않는다.
