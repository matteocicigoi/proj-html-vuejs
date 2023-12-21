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
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faGears } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
library.add(faChevronDown, faGithub, faStackOverflow, faUser, faMagnifyingGlass, faAngleRight, faLayerGroup, faTv, faMaximize, faGears, faCircleCheck, faFacebookF, faInstagram, faTwitter, faLinkedinIn);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
