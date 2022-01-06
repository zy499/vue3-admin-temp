import './styles/index.less';
import 'virtual:svg-icons-register';
import 'virtual:windi.css';
import { createApp } from 'vue';
import { components, plugins } from './components';
import App from './App.vue';
import { setupStore } from './store';
import router from './router';
// import '/@/router/permission';

const app = createApp(App);

setupStore(app);
app.use(router);
app.mount('#app');

// 加载全局组件
components.forEach((component) => {
  app.component(component.name, component);
});

// 加载全局插件
plugins.forEach((plugin) => {
  app.use(plugin);
});
