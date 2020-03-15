<template>
  <div style="height: 100%;">
    <el-container class="fill-height">
      <el-header>
      </el-header>
      <el-container class="fill-height">
        <el-aside style="width: 160px; height: 100%;">
          <el-menu class="fill-height" :default-active="defaultNum">
            <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.num">
              <!-- <i class="el-icon-setting"></i> -->
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="position: relative;" class="gray">
          <div class="el-main-box">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'menuList',
    data() {
      return {
        menuList: []
      }
    },
    methods: {
      
    }
  }
</script>

<style>
  .el-main-box{}
</style>
