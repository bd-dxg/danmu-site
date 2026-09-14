/// <reference types="vitepress/client" />

// 自定义主题用到的 .vue 单文件组件，给 tsc / oxlint 一个模块声明
declare module '*.vue' {
  import type { Component } from 'vue'
  const component: Component
  export default component
}
