function moreBtn() {
  const more = document.createElement('div');
  more.className = 'more';
  const box = document.createElement('div');
  const box1 = document.createElement('div');
  const box2 = document.createElement('div');
  box.className = 'box';
  box1.className = 'box';
  box2.className = 'box';
  more.appendChild(box);
  more.appendChild(box1);
  more.appendChild(box2);
  return more;
}

export default moreBtn;