"use strict";
const { createApp } = Vue;
createApp({
  data() {
    return {
      awesome: true,
    };
  },
  methods: {
    toggle(awesome) {
      if (this.awesome) {
        this.awesome = false;
      } else {
        this.awesome = true;
      }
    },
  },
}).mount("#app");
