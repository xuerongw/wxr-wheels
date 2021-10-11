import Vue from 'vue'
// input---------------start
import myInput from '@/input/input.vue'
import inputRadio from '@/input/inputRadio.vue'
import inputRadioGroup from '@/input/inputRadioGroup.vue'
import inputCheckBox from '@/input/inputCheckBox.vue'
import inputArea from '@/input/inputArea.vue'
import inputNumber from '@/input/inputNumber.vue'
import inputSelect from '@/input/inputSelect.vue'
import inputDateRange from '@/input/inputDateRange.vue'
Vue.component('my-input',myInput)
Vue.component('input-radio',inputRadio)
Vue.component('input-radio-group',inputRadioGroup)
Vue.component('input-checkBox',inputCheckBox)
Vue.component('input-area',inputArea)
Vue.component('input-number',inputNumber)
Vue.component('input-select',inputSelect)
Vue.component('input-date-range',inputDateRange)
//input----------------end


//uploadFile-------------start
import simpleUpload from '@/uploadFiles/simpleUpload.vue'
import imageUpload from '@/uploadFiles/imageUpload.vue'
import imageUploadList from '@/uploadFiles/imageUploadList.vue'
Vue.component('simple-upload',simpleUpload)
Vue.component('image-upload',imageUpload)
Vue.component('image-upload-list',imageUploadList)
//uploadFile---------------------end

import colorPicker from '@/colorPicker.vue'
Vue.component('color-picker',colorPicker)