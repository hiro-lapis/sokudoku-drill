import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
import NuxtLink from '.nuxt/components/nuxt-link.server.js'

Vue.use(CompositionApi)
// RouterLinkStub用の読み込み
Vue.use(NuxtLink)
