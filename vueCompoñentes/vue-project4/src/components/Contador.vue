<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementar() {
      this.count++;
    },
  },
};
</script>
<template>
  <div>
    <button @click="incrementar">{{ count }}</button>
  </div>
</template>
