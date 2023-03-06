<template>
  <div>
    <h1>
      <!-- <span class="name">{{ name }}</span> -->
      <span class="motto" v-show="motto">{{ motto }}</span>
    </h1>
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { useData } from 'vitepress'

const { site, frontmatter } = useData()

const name = computed(
  () => (frontmatter.value.blog?.name ?? site.value.title) || ''
)
const motto = computed(() => frontmatter.value.blog?.motto || '')


</script>
<style lang="scss" scoped>
h1 {
  text-align: center;
  .name {
    transition: all 0.25s ease-in-out 0.04s;
    transform: translateY(0px);
    opacity: 1;
    font-weight: bold;
    margin: 0 auto;
    font-size: 36px;
  }

  .motto {
    position: relative;
    bottom: 0px;
    font-size: 14px;
    margin-left: 10px;

    &::before {
      content: '- ';
    }
  }
}

@media screen and (max-width: 500px) {
  .motto {
    display: none;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.inspiring-wrapper {
  margin: 16px 0;
  height: 24px;
  width: auto;
  h2 {
    animation: fade-in 0.5s ease-in-out;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    line-height: 1.6;
  }
}
</style>
