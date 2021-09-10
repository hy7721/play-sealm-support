// layer-popup
function layerPopupOpen($t){
  $(".wrap_popup" + "." + $t).stop(true, true).fadeIn(300);
};
function layerPopupClose(){
  $(".wrap_popup").each(function(){
    if($(this).css("display") != "none") $(this).stop(true, true).fadeOut(300);
  });
};

$(document).on("click", ".btn_close", function(){
  if(!$(this).parent().css("display") != "none"){
    layerPopupClose();
  };
});

$(function() {
  // aside-menu
  $(".wrap_snb").accordion({
    heightStyle: "content"
  });

  // tab contents
  $(".wrap_tabs").tabs();

  // sortable list
  $( ".sortable_list" ).sortable({
    connectWith: ".connectedSortable",
    /*stop: function(event, ui) {
        var item_sortable_list_id = $(this).attr('id');
        console.log(ui);
        //alert($(ui.sender).attr('id'))
    },*/

    // 다른 리스트로 드래그 앤 드롭 하면 alert 창이 노출
    receive: function(event, ui) {
      alert("dropped on = "+this.id); // Where the item is dropped
      alert("sender = "+ui.sender[0].id); // Where it came from
      alert("item = "+ui.item[0].innerHTML); //Which item (or ui.item[0].id)
    }
  }).disableSelection();

  // toggle button
  document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // do this
        console.log('Checked');
      } else {
        // do that
        console.log('Not checked');
      }
    });
  });

  // editor(summer note)
  $('#summernote').summernote({
    placeholder: '내용을 입력해주세요.',
    tabsize: 2,
    height: 300,
    toolbar: [
      ['font', ['bold', 'underline']],
      ['color', ['color']],
      ['table', ['table']],
      ['insert', ['link', 'picture']],
      ['view', ['fullscreen', 'codeview']]
    ]
  });
});

// setting_cs_002.html > 검색 버튼 클릭시 검색결과 노출
function srchResult() {
  $('.table_result').css('display', 'block');
}