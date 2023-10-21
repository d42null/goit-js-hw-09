import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Vimeo(document.querySelector('#vimeo-player'));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time')??0)
player.on('timeupdate',throttle(e =>{localStorage.setItem('videoplayer-current-time', e.seconds);},1000));

