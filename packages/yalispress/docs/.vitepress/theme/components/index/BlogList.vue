<template>
  <ul class="blog-list">
    <li v-for="post in posts" :key="post.path">
      <BlogItem
        :route="post.path"
        :title="post.title"
        :date="post.date"
        :sticky="post.sticky"
        :description="post.description"
        :tag="post.tag"
        :author="post.author"
        :cover="post.cover"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { getPostByPath } from '../../../config/posts'
import { reactive } from 'vue'

import test from '../../../../blogs/2023/03/04/模板.md?raw'
console.log(test)

const posts = getPostByPath()
console.log(posts)
</script>
<style lang="scss" scoped></style>
