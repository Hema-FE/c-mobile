<template>
  <form
    v-if="useForm"
    @click="onClick"
    ref="container"
    class="c-container"
    :class="[
      fixed ? `c-container__fixed-${fixed}` : '',
      {
        'c-container__safe-area': _safeArea
      }
    ]"
    :style="{
      backgroundColor,
      padding,
      zIndex: _zIndex
    }"
    report-submit>
    <slot></slot>
  </form>
  <div
    v-else
    @click="onClick"
    ref="container"
    class="c-container"
    :class="[
      fixed ? `c-container__fixed-${fixed}` : '',
      {
        'c-container__safe-area': _safeArea
      }
    ]"
    :style="{
      backgroundColor,
      padding,
      zIndex: _zIndex
    }">
    <slot></slot>
  </div>
</template>

<script>
import { isBrowser } from '../../utils'

export default {
  name: 'cContainer',
  data () {
    return {
      element: null
    }
  },
  props: {
    fixed: {
      type: String,
      default: null // null, top, bottom
    },
    safeArea: {
      type: Boolean,
      default: null
    },
    backgroundColor: {
      type: String,
      default: null
    },
    padding: {
      type: String,
      default: null
    },
    zIndex: {
      type: Number,
      default: null
    },
    useForm: { // 小程序支持
      type: Boolean,
      default: false
    }
  },
  beforeMount () {
    this.componentRemove()
  },
  mounted () {
    this.componentInit()
  },
  beforeUpdate () {
    this.componentRemove()
  },
  updated () {
    this.componentInit()
  },
  beforeDestroy () {
    this.componentRemove()
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    },
    componentInit () {
      if (
        this.fixed &&
        isBrowser
      ) {
        let className
        if (
          this.$refs.container &&
          this.$refs.container.firstChild &&
          this.$refs.container.firstChild.classList &&
          this.$refs.container.firstChild.classList[0]
        ) {
          className = `c-container-cover__fixed-${this.fixed}__${this.$refs.container.firstChild.classList[0]}`
        }
        if (
          className &&
          document.querySelectorAll(`.${className}`).length === 0
        ) {
          this.element = document.createElement('div')
          this.element.className = className
          let clientHeight = this.$refs.container.clientHeight
          clientHeight = Number.isNaN(clientHeight) ? 0 : parseInt(clientHeight)
          this.element.style.paddingTop = `${clientHeight}px`

          if (this.fixed === 'top') { // 悬浮在顶部
            document.body.insertBefore(this.element, document.body.firstChild)
          } else if (this.fixed === 'bottom') { // 悬浮在底部
            this.$nextTick(() => {
              if (
                this.$refs.container &&
                this.element
              ) { // 出现异步，修复马上杀死会出 bug，勿删除
                if (this._safeArea) { // 有安全区域的时候
                  this.element.classList.add('c-container-cover__fixed-bottom-safe-area')
                  let paddingBottom = this.$refs.container.style.paddingBottom.replace('px', '')
                  paddingBottom =  Number.isNaN(paddingBottom) ? 0 : parseInt(paddingBottom)
                  this.$refs.container.style.paddingBottom = `${paddingBottom}px`
                }
                if (!this.backgroundColor) { // 设置默认颜色
                  this.$refs.container.style.backgroundColor = window.getComputedStyle(this.$refs.container.firstChild).backgroundColor
                }
                document.body.appendChild(this.element)
              }
            })
          }
        }
      }
    },
    componentRemove () {
      if (
        this.fixed &&
        isBrowser
      ) {
        this.element && this.element.remove()
      }
    }
  },
  computed: {
    _zIndex () {
      if (this.fixed) {
        if (this.zIndex) {
          return this.zIndex
        } else {
          return 1000
        }
      } else {
        return this.zIndex
      }
    },
    _safeArea () {
      if (
        this.fixed === 'bottom' &&
        this.safeArea === null
      ) {
        return true
      } else {
        return this.safeArea
      }
    }
  }
}
</script>
