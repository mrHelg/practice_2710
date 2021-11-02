'use strict';

const image1 =
  'https://previews.123rf.com/images/boligolovag/boligolovag2002/boligolovag200200560/140502050-aerial-wide-angle-panorama-of-zell-am-see-and-kaprun-tourist-resort-with-sunny-alp-mountain-summits-.jpg';
const image2 =
  'https://image.freepik.com/free-photo/beautiful-tropical-beach-sea-ocean-with-white-cloud-blue-sky-copyspace_74190-8663.jpg';

const img = document.querySelector('img');
const btn = document.querySelector('button');

let flag = true;
function updateView() {
  flag ? img.setAttribute('src', image1) : img.setAttribute('src', image2);
  flag = !flag;
}

updateView();
btn.addEventListener('click', updateView);
