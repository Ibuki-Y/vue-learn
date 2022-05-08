<template>
  <!-- props(memo) -->
  <MemoForm memo="" />
</template>

<script>
// @: src
import MemoForm from "@/components/MemoForm.vue";

export default {
  name: "NewView",
  // componentもexportする
  components: {
    MemoForm,
  },
};
</script>
