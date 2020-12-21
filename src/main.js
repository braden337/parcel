import 'regenerator-runtime/runtime';

import {chunk, zip} from 'lodash';

import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

(async function () {
  [...document.querySelectorAll('time')].forEach(
    time => (time.innerText = dayjs(time.innerText).fromNow())
  );

  const randomCat = new URL('https://aws.random.cat');
  randomCat.pathname = 'meow';

  let meows = new Array(6)
    .fill(null)
    .map(_ => fetch(randomCat.href).then(response => response.json()));
  meows = await Promise.all(meows);
  meows = chunk(meows, 3);

  const cats = document.querySelectorAll('.cats');

  const combinedCatsMeows = zip(cats, meows);

  for (let [cats, meows] of combinedCatsMeows) {
    for (let meow of meows) {
      cats.insertAdjacentHTML(
        'beforeend',
        `<img src="${meow.file}" alt="cat" />`
      );
    }
  }
})();
