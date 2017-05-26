import './assets/scss/app.scss'
import Btn from './components/btn'
import { Flex, FlexItem } from './components/flex'
import Header from './components/header'
import Icon from './components/icon'
import { InputGroup, Input, InputHead, InputBody } from './components/input-group'
import Switch from './components/switch'
import { Tab, TabItem } from './components/tab'
import { Tabbar, TabbarItem } from './components/tabbar'

const components = [
  Btn,
  Flex,
  FlexItem,
  Header,
  Icon,
  InputGroup,
  Input,
  InputHead,
  InputBody,
  Switch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem
]

const install = (Vue, opts = {}) => {
  if (install.installed) return

  components.map(component => {
    Vue.component(component.name, component)
  })
}

export default {
  install
}
