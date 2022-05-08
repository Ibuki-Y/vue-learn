<!-- 空のとき送信しない!!!! -->
<template>
  <h1>Title</h1>
  <div><input type="text" v-model="title" /></div>
  <div><textarea v-model="content"></textarea></div>
  <div class="center">
    <button @click="saveMemo">保存</button>
    <button v-if="memo.id" @click="removeMemo">削除</button>
  </div>
</template>

<script>
// コンポーネント化
export default {
  name: "MemoForm",
  props: ["memo"],
  data() {
    return {
      title: this.memo.title,
      content: this.memo.content,
    };
  },
  methods: {
    saveMemo() {
      let memo = {
        title: this.title,
        content: this.content,
      };
      // idが存在するとき
      if (this.memo.id) {
        memo.id = this.memo.id;
      }
      // mutationsのsave()にmemoを渡す
      this.$store.commit("save", memo);
      // Homeページに戻す
      this.$router.push("/");
    },
    removeMemo() {
      this.$store.commit("delete", this.memo.id);
      this.$router.push("/");
    },
  },
};
</script>

<!-- scoped: このファイルのみ適応 -->
<style scoped>
div {
  margin-bottom: 10px;
}
input[type="text"] {
  width: 100%;
  border-radius: 4px;
  box-shadow: 2px 2px 1px;
}
textarea {
  width: 100%;
  height: 30em;
  border-radius: 4px;
  box-shadow: 2px 2px 1px;
}
button {
  width: 5em;
  margin: 3px;
  font-weight: 600;
  border-radius: 4px;
  box-shadow: 2px 2px 1px;
  cursor: pointer;
}
.center {
  text-align: center;
}
</style>
