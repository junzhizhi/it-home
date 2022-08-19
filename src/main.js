import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Form,
  Field,
  Button,
  Icon,
  Tab,
  Tabs,
  Cell,
  CellGroup,
  List,
  PullRefresh,
  ActionSheet,
  Popup,
  Col,
  Row,
  Badge
} from 'vant'

Vue.use(Badge)
Vue.use(Col)
Vue.use(Row)
Vue.use(Popup)
Vue.use(ActionSheet)
Vue.use(PullRefresh)
Vue.use(List)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Tab)
Vue.use(Tabs)

Vue.use(Icon)

Vue.use(Tabbar)
Vue.use(TabbarItem)

Vue.use(Form)
Vue.use(Field)
Vue.use(NavBar)
Vue.use(Button)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
