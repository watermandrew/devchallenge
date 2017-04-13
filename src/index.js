import $ from 'jquery';
import './style.scss';

let num = 0;

function printSeconds() {
  num += 1;
  $('#main').html(`You've been on this page for ${num} seconds.`);
}

setInterval(printSeconds, 1000);
