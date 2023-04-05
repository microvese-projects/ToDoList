import moreBtn from '../moreBtn.js';

jest.mock('../moreBtn.js');

test('Returns the more button', () => {
  document.body.innerHTML = moreBtn();
  const boxes = document.querySelectorAll('.box');
  expect(boxes.length).toBe(3);
});