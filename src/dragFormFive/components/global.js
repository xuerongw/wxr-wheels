import Vue from 'vue'
import inputText from './inputText'
import inputTitle from './inputTitle'
import inputExplain from './inputExplain'
import inputNumber from './inputNumber'
import inputMoney from './inputMoney'
import inputRadio from './inputRadio'
import uploadImage from './uploadImage'
import uploadFile from './uploadFile'
import urgentLevel from './urgentLevel'


Vue.component('input-text', inputText)
Vue.component('input-title', inputTitle)
Vue.component('input-explain', inputExplain)
Vue.component('input-number', inputNumber)
Vue.component('input-money', inputMoney)
Vue.component('input-radio', inputRadio)
Vue.component('upload-image', uploadImage)
Vue.component('upload-file', uploadFile)
Vue.component('urgent-level', urgentLevel)