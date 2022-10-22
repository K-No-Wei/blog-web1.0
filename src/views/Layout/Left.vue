<template>
  <div class="left">
    <My/>
    <Category/>
    <Tag/>
  </div>
</template>

<script>
import My from '@/components/my.vue';
import Category from '@/components/category.vue';
import Tag from '@/components/tag.vue'
export default {
    components: { My, Category,Tag }
}
</script>

<style lang="less" scoped>
</style>