<template>
  <div class="page-home" m="2">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="排队开票">Content of Tab Pane 1</TabPane>
      <TabPane key="2" tab="班级开票" force-render>Content of Tab Pane 2</TabPane>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';

  import { Tabs, TabPane } from 'ant-design-vue';

  const activeKey = ref('1');
</script>
<style lang="less" scoped></style>
