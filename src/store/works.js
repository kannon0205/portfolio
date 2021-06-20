const works = [
  {
    title: "Travel Blog",
    img: require("../assets/code_step_blog.png"),
    language: "HTML/CSS",
    page: "https://flamboyant-goodall-67d8ae.netlify.app/",
    github: "#",
    comment:
      "制作時間3時間。デザインカンプからのコーディングの練習に作成しました。デザインカンプはCodestep様からお借りしました。"
  },
  {
    title: "PPboard",
    img: require("../assets/pp_board.png"),
    language: "HTML/SCSS, JavaScript(Next.js)",
    page: "https://relaxed-bohr-0eb32d.netlify.app/",
    github: "https://github.com/kannon0205/PPboard",
    comment: "Next.jsの練習に作成した卓球のスコアボードです。"
  },
  {
    title: "vue_adventure",
    img: require("../assets/vue_adventure.png"),
    language: "HTML/CSS, JavaScript(Vue.js)",
    page: "https://peaceful-torvalds-b04ea3.netlify.app/#/",
    github: "https://github.com/kannon0205/vue_adventure",
    comment:
      "Vue.jsdeで作成したノベルゲームの骨組みです。アニメーションの練習に作成しました。"
  },
  {
    title: "Portfolio",
    img: require("../assets/portfolio.png"),
    language: "HTML/CSS, JavaScript(Vue.js)",
    page: "https://stoic-lumiere-11a0b6.netlify.app/",
    github: "https://github.com/kannon0205/portfolio",
    comment:
      "Vue.jsの学習も兼ねてSPAにしました。WorksはVuexを使ってstoreで作品情報を管理しています。"
  },
  {
    title: "ASBM",
    img: require("../assets/asbm.png"),
    language: "HTML/CSS, JavaScript(Node.js)",
    page: "https://asbm.herokuapp.com/",
    github: "https://github.com/kannon0205/asbm",
    comment:
      "登録したブックマークをタグで管理できるほか、加入したグループのメンバーや、フォローしたユーザーのブックマークを複数のタイムラインで閲覧できるサービスです。「cheerio-httpcli」を用いて、新規ブックマーク登録時にOGPからタイトルを自動取得するようにしました。"
  },
  {
    title: "PHPquest",
    img: require("../assets/phpquest.png"),
    language: "HTML/CSS, PHP",
    page: "https://phpquest.herokuapp.com/",
    github: "https://github.com/kannon0205/phpquest",
    comment:
      "職業訓練校の授業で作成したシンプルなブラウザゲームです。制作期間の関係上完成しないことがわかっていたので、後日追加しやすいようクラスを分けることを重視しました。現在は「スライムの街道」ダンジョンのみです。"
  },
  {
    title: "YSC-PPC",
    img: require("../assets/ysc-ppc.png"),
    language: "HTML/CSS, Ruby(Ruby on Rails)",
    page: "https://ysc-ppc.herokuapp.com/",
    github: "https://github.com/kannon0205/ysc-ppc",
    comment:
      "職業訓練校に入る前に作った卓球のスコア記録アプリです。メンバー登録後、ゲーム作成画面でサーブの先攻とプレイヤーを設定することで開始できます。内部でメンバーごとの勝敗を記録していて、成績関連の機能を作る予定でした。"
  }
];

export default works;
