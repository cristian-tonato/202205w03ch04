import { Film } from '../components/unwatched.js';
import { View } from '../components/watched.js';

function app() {
    new Film('.series-list');
    new View('.series-list--watched');
}

(() => {
    document.addEventListener('DOMContentLoaded', app);
})();
