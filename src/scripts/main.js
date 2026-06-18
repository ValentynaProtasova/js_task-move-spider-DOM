'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  if (!e.target.closest('.wall')) {
    return;
  }

  const wallRect = wall.getBoundingClientRect();
  const wallStyle = getComputedStyle(wall);
  const borderLeft = parseInt(wallStyle.borderLeftWidth);
  const borderTop = parseInt(wallStyle.borderTopWidth);

  const clickCoordinatX = e.clientX - wallRect.left - borderLeft;
  const clickCoordinatY = e.clientY - wallRect.top - borderTop;

  const spiderWidth = spider.offsetWidth;
  const spiderHeight = spider.offsetHeight;

  const leftPosit = clickCoordinatX - spiderWidth / 2;
  const topPosit = clickCoordinatY - spiderHeight / 2;

  const clampedLeft = Math.max(
    0,
    Math.min(leftPosit, wall.clientWidth - spiderWidth),
  );
  const clampedTop = Math.max(
    0,
    Math.min(topPosit, wall.clientHeight - spiderHeight),
  );

  spider.style.left = clampedLeft + 'px';
  spider.style.top = clampedTop + 'px';
});
