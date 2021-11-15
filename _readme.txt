[ Management Operationi Tool > Support]

_layout.html
  > 기본 레이아웃

_index.html
  > 버튼, 테이블 등 기본 스타일 목록

support_menu_001.html
  > Page ID: Support-Menu-001, Support-Menu-002
  > FAQ 서브 카테고리 생성 및 관리

support_menu_003.html
  > Page ID: Support-Menu-003
  > FAQ 제목 및 상세 내용 입력

setting_cs_002.html
  > Page ID: Setting-CS-002
  > 전체현황 - 검색 전, 후 포함

setting_cs_004.html
  > Page ID: Setting-CS-004, Setting-CS-005
  > 문의처리 - 상세 - 답변 전

setting_cs_008.html
  > Page ID: Setting-CS-008
  > 문의처리 - 상세 - 답변 완료


--------------------------------------------------------------------------------------------------------

2021. 11. 15
> setting_cs_010.html 마크업 추가 (summernote 제목 입력란 추가)
  <label for="editorTitle"></label>
  <input type="text" id="editorTitle" name="title" class="input_type2 tit_summernote" placeholder="제목을 입력해주세요." value="" min="" max="">

> summernote 에디터 마크업 수정 (id를 class로 수정)
  <div id="summernote"></div>
  <div class="summernote"></div>

> main.css 수정
  .input_type2.tit_summernote 추가

> main.js 수정
  $(".summernote").summernote({
    placeholder: "내용을 입력해주세요.",
    tabsize: 2,
    minHeight: 300,
    toolbar: [
      ["font", ["bold", "underline"]],
      ["color", ["color"]],
      ["table", ["table"]],
      ["insert", ["link", "picture"]],
      ["view", ["fullscreen", "codeview"]],
    ],
  });

--------------------

2021. 11. 03
> main.css 수정
  .tit_faq > z-index: 1 추가

> main.js 수정
  $("#summernote").summernote({
    placeholder: "내용을 입력해주세요.",
    tabsize: 2,
    minHeight: 300,
    toolbar: [
      ["font", ["bold", "underline"]],
      ["color", ["color"]],
      ["table", ["table"]],
      ["insert", ["link", "picture"]],
      ["view", ["fullscreen", "codeview"]],
    ],
  });

--------------------

2021. 09. 13
> Page ID로 전달드리는 게 편하실 것 같아 HTML 이름명 변경했습니다.

> 해당 css 파일은 드래그 앤 드랍 가능한 리스트를 사용하는 페이지(support_menu_001.html)에만 사용되었으면.. 좋겠습니다. (_ _) (현재 다른 페이지에는 주석 처리해두었습니다.)
  혹시 번거로운 일이라면 reset 코드 추가 가능합니다!

  <link rel="stylesheet" href="./assets/css/jquery-ui.css">