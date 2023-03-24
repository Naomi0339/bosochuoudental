$(".openbtn").click(function () {
  $(this).toggleClass("active");
  $("#openbtn_nav").toggleClass("panelactive");
});

$(".openbtn_nav_list a").click(function () {
  //ナビゲーションのリンクがクリックされたら
  $(".openbtn").removeClass("active"); //ボタンの activeクラスを除去し
  $("#openbtn_nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスも除去
});
// メニューオープナーここまで

// top_slider
var windowwidth =
  window.innerWidth || document.documentElement.clientWidth || 0;

  var responsiveImage = [
    { src: "images/top1.jpg" },
    { src: "images/top2.jpg" },
    { src: "images/top3.jpg" },
  ];


//Vegas全体の設定
$("#slider").vegas({
  overlay: false,
  transition: "blur",
  transitionDuration: 2000,
  delay: 10000,
  animationDuration: 20000,
  animation: "kenburns",
  slides: responsiveImage,
});

//ページトップ
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 200) {
    //上から200pxスクロールしたら
    $("#page_top").removeClass("DownMove"); //#page-topについているDownMoveというクラス名を除く
    $("#page_top").addClass("UpMove"); //#page-topについているUpMoveというクラス名を付与
  } else {
    if ($("#page_top").hasClass("UpMove")) {
      //すでに#page-topにUpMoveというクラス名がついていたら
      $("#page_top").removeClass("UpMove"); //UpMoveというクラス名を除き
      $("#page_top").addClass("DownMove"); //DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on("load", function () {
  PageTopAnime(); /* スクロールした際の動きの関数を呼ぶ*/
});

// #page-topをクリックした際の設定
$("#page_top a").click(function () {
  $("body,html").animate(
    {
      scrollTop: 0, //ページトップまでスクロール
    },
    500
  ); //ページトップスクロールの速さ。数字が大きいほど遅くなる
  return false; //リンク自体の無効化
});
