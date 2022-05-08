// Vuex
import { createStore } from "vuex";
import { VuexPersistence } from "vuex-persist";

const vuexPersist = new VuexPersistence({
  storage: localStorage,
});

export default createStore({
  state: {
    // オブジェクトが作成される度+1 => idを設定
    count: 0,
    memos: [],
  },
  // 取得
  getters: {
    // メモが存在するか
    getCount: (state) => {
      return state.memos.length;
    },
    // メモを取得
    getAllMemos: (state) => {
      return state.memos;
    },
    // idのメモを取得
    getMemoById: (state) => (id) => {
      // find(): idが一致したメモを取り出す
      return state.memos.find((memo) => memo.id === id);
    },
  },
  // 変更
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,

    // メモを保存
    save(state, newMemo) {
      if (newMemo.id) {
        // idが存在するとき
        let x = state.memos.find((memo) => memo.id === newMemo.id);
        x.title = newMemo.title;
        x.content = newMemo.content;
      } else {
        // idにcount + 1を挿入
        newMemo.id = ++state.count;
        // unshift(): 配列の"先頭"に挿入
        state.memos.unshift(newMemo);
      }
    },

    // メモの削除
    delete(state, id) {
      // メモのデータをidが一致しないものだけにする(効率悪!)
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
