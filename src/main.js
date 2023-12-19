import { createApp } from 'vue';
import App from './App.vue';
import "./assets/style/style.scss";
import "@fontsource/asap";

/* fontawesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faChevronDown, faGithub, faStackOverflow, faUser, faMagnifyingGlass);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
