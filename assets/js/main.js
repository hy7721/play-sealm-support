// layer-popup
function layerPopupOpen($t) {
  $(".wrap_popup" + "." + $t)
    .stop(true, true)
    .fadeIn(300);
}
function layerPopupClose() {
  $(".wrap_popup").each(function () {
    if ($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
}

$(document).on("click", ".btn_close", function () {
  if (!$(this).parent().css("display") != "none") {
    layerPopupClose();
  }
});

// setting_cs_002.html > 검색 버튼 클릭시 검색결과 노출
function srchResult() {
  $(".table_result").css("display", "block");
}

$(function () {
  // aside-menu
  $(".wrap_snb").accordion({
    heightStyle: "content",
  });

  // tab contents
  $(".wrap_tabs").tabs();

 // sortable list
  $(".sortable_list").sortable({
    placeholder: "ui-state-highlight"
  })
  .disableSelection();

  // toggle button
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        // do this
        console.log("Checked");
      } else {
        // do that
        console.log("Not checked");
      }
    });
  });

  // editor(summer note)
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

  // var i = 0;
  // $(document).ready(function(){
  //   $('.btn_create').click(function(){
  //     $('.add_newnote').append('<div class="wrap_data"><div class="summernote" id="summernote"></div><div class="wrap_button_type2"><button type="button" class="btn_save" value="저장" onclick="layerPopupOpen("alert_save"); return false;"><span>저장</span></button></div></div>')
  //     i++;
  //   })
  // })
});
