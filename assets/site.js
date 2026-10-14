/* 첫 화면과 분야 페이지를 tools.js 목록으로 그립니다.
 * <body data-field="">            → 첫 화면 (분야 4개 + 최근 도구)
 * <body data-field="earth_science"> → 해당 분야의 도구 목록
 */
(function () {
  var SC = window.SC, app = document.getElementById("app");
  var current = document.body.dataset.field || "";
  var root = current ? "../" : "";
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function fieldOf(id) { for (var i = 0; i < SC.fields.length; i++) if (SC.fields[i].id === id) return SC.fields[i]; return null; }
  function toolsIn(id) { return SC.tools.filter(function (t) { return t.field === id; }); }

  function toolCard(t, showField) {
    var f = fieldOf(t.field);
    var a = el("a", "tool f-" + t.field);
    a.href = (current ? "" : t.field + "/") + t.path + "/";
    var meta = el("div", "meta");
    if (showField && f) meta.appendChild(el("span", "pill fieldpill", f.name));
    if (t.unit) meta.appendChild(el("span", "pill", t.unit));
    a.appendChild(meta);
    a.appendChild(el("span", "title", t.title));
    a.appendChild(el("p", "sum", t.summary));
    a.appendChild(el("span", "go", "열기 →"));
    return a;
  }

  if (!current) {
    document.title = "과학 수업 도구 모음";
    app.appendChild(el("div", "eyebrow", "중학교 과학 수업"));
    app.appendChild(el("h1", null, "과학 수업 도구 모음"));
    app.appendChild(el("p", "lead", "수업 시간에 전자칠판이나 학생 기기에서 바로 열어 쓰는 과학 웹 도구입니다. 분야를 골라 들어가세요."));
    var grid = el("div", "fields");
    SC.fields.forEach(function (f) {
      var a = el("a", "field f-" + f.id); a.href = f.id + "/";
      a.appendChild(el("span", "en", f.en));
      a.appendChild(el("span", "name", f.name));
      a.appendChild(el("p", "desc", f.desc));
      var n = toolsIn(f.id).length;
      a.appendChild(el("span", "count", n ? "도구 " + n + "개" : "준비 중"));
      grid.appendChild(a);
    });
    app.appendChild(grid);
    app.appendChild(el("h2", null, "최근에 추가한 도구"));
    var recent = SC.tools.slice().sort(function (a, b) { return (b.added || "").localeCompare(a.added || ""); }).slice(0, 6);
    var list = el("div", "tools");
    recent.forEach(function (t) { list.appendChild(toolCard(t, true)); });
    app.appendChild(recent.length ? list : el("div", "empty", "아직 올라온 도구가 없습니다."));
  } else {
    var f = fieldOf(current);
    document.title = f.name + " · 과학 수업 도구 모음";
    var crumb = el("div", "crumb"); var back = el("a", null, "← 과학 수업 도구 모음"); back.href = "../"; crumb.appendChild(back);
    app.appendChild(crumb);
    app.appendChild(el("div", "eyebrow", f.en));
    var h = el("h1", "f-" + f.id, f.name); h.style.color = "var(--c)"; app.appendChild(h);
    app.appendChild(el("p", "lead", f.desc));
    app.appendChild(el("h2", null, "도구"));
    var ts = toolsIn(current), wrap = el("div", "tools");
    ts.forEach(function (t) { wrap.appendChild(toolCard(t, false)); });
    app.appendChild(ts.length ? wrap : el("div", "empty", "아직 올라온 도구가 없습니다. 곧 추가될 예정입니다."));
  }
  var foot = el("footer", null, "도구는 모두 한 파일짜리 웹 페이지라 설치 없이 브라우저에서 바로 열립니다.");
  app.appendChild(foot);
})();
