<script setup lang="ts">
import { } from 'vue'
import BlogHomeBanner from './index/BlogHomeBanner.vue'
import BlogHomeInfo from './index/BlogHomeInfo.vue'
import BlogList from './index/BlogList.vue' 
</script>
<template>
  <div class="home">
    <div class="header-banner">
      <BlogHomeBanner />
    </div>
    <div class="content-wrapper">
      <div class="blog-list-wrapper"><blog-list /></div>
      <!-- <div class="blog-info-wrapper"><BlogHomeInfo /></div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  margin: 0 auto;
  padding: 20px;
  max-width: 1126px;
}

@media screen and (min-width: 960px) {
  .home {
    padding-top: var(--vp-nav-height);
  }
}

.header-banner {
  width: 100%;
  padding: 60px 0;
}

.content-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

.blog-list-wrapper {
  width: 100%;
}
.blog-info-wrapper {
  margin-left: 16px;
  position: sticky;
  top: 100px;
}

@media screen and (max-width: 959px) {
  .blog-info-wrapper {
    margin-left: 16px;
    position: sticky;
    top: 40px;
  }
}

@media screen and (max-width: 767px) {
  .content-wrapper {
    flex-wrap: wrap;
  }

  .blog-info-wrapper {
    margin: 20px 0;
    width: 100%;
  }
}
</style>
