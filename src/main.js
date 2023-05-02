import { createApp } from 'vue';

import App from './App.vue'
// make available globally
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue'
import BaseDialog from './components/UI/BaseDialog.vue'

const app = createApp(App)

// remember to actually use <base-card> now instead of <BaseCard>
app.component('base-card', BaseCard)
app.component('base-button', BaseButton)
app.component('base-dialog', BaseDialog)

app.mount('#app');
