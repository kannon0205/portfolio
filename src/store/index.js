import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    works: [
      {
        id: 0,
        title: "Portfolio",
        img: require("../assets/portfolio.png"),
        language: "HTML/CSS, JavaScript(Vue.js)",
        page: "",
        github: "https://github.com/kannon0205/portfolio",
        comment:
          "Vue.jsの学習も兼ねてSPAにしました。WorksはVuexを使ってstoreで作品情報を管理しています。"
      },
      {
        id: 1,
        title: "ASBM",
        img: require("../assets/asbm.png"),
        language: "HTML/CSS, JavaScript(Node.js)",
        page: "https://asbm.herokuapp.com/",
        github: "https://github.com/kannon0205/asbm",
        comment:
          "登録したブックマークをタグで管理できるほか、加入したグループのメンバーや、フォローしたユーザーのブックマークを複数のタイムラインで閲覧できるサービスです。「cheerio-httpcli」を用いて、新規ブックマーク登録時にOGPからタイトルを自動取得するようにしました。"
      },
      {
        id: 2,
        title: "PHPquest",
        img: require("../assets/phpquest.png"),
        language: "HTML/CSS, PHP",
        page: "https://phpquest.herokuapp.com/",
        github: "https://github.com/kannon0205/phpquest",
        comment:
          "職業訓練校の授業で作成したシンプルなブラウザゲームです。制作期間の関係上完成しないことがわかっていたので、後日追加しやすいようクラスを分けることを重視しました。現在は「スライムの街道」ダンジョンのみです。"
      },
      {
        id: 3,
        title: "YSC-PPC",
        img: require("../assets/ysc-ppc.png"),
        language: "HTML/CSS, Ruby(Ruby on Rails)",
        page: "https://ysc-ppc.herokuapp.com/",
        github: "https://github.com/kannon0205/ysc-ppc",
        comment:
          "職業訓練校に入る前に作った卓球のスコア記録アプリです。メンバー登録後、ゲーム作成画面でサーブの先攻とプレイヤーを設定することで開始できます。内部でメンバーごとの勝敗を記録していて、成績関連の機能を作る予定でした。"
      }
    ],
    openModal: false,
    modalContents: {}
  },
  getters: {
    works(state) {
      return state.works;
    },
    openModal(state) {
      return state.openModal;
    },
    modalContents(state) {
      return state.modalContents;
    }
  },
  mutations: {
    openModalMutation(state) {
      state.openModal = true;
    },
    closeModalMutation(state) {
      state.openModal = false;
    },
    changeModalContentsMutation(state, work) {
      state.modalContents = work;
    }
  },
  actions: {
    openModalAction({ commit }) {
      commit("openModalMutation");
    },
    closeModalAction({ commit }) {
      commit("closeModalMutation");
    },
    changeModalContentsAction({ commit }, work) {
      commit("changeModalContentsMutation", work);
    }
  },
  modules: {}
});
