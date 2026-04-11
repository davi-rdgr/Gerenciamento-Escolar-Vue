import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vMaska } from 'maska/vue'

import App from './App.vue'
import router from './router'
import { registerComponent } from './componentRegister.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({ components, directives })

const app = createApp(App)

// plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)

// diretivas
app.directive('maska', vMaska)

// componentes
registerComponent(app)

app.mount('#app')