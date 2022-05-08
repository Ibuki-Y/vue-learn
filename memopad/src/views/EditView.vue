<template>
  <!-- {{ $route.params.id }}: routerからidを取得 -->
  <MemoForm v-if="getMemo" :memo="getMemo" />
  <p v-else>not found...</p>
</template>

<script>
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "EditView",
  components: {
    MemoForm,
  },
  computed: {
    getMemo() {
      // routerからidを取得(thisが必要!) => int化
      const id = parseInt(this.$route.params.id);
      // storeのgettersでidが一致するmemoを取得
      return this.$store.getters.getMemoById(id);
    },
  },
};
</script>
