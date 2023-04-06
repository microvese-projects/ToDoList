import moreBtn from '../moreBtn';

import jsdom from 'jsdom';
const { JSDOM } = jsdom;
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost'
});
global.window = dom.window;
global.document = window.document;

describe('moreBtn function', () => {
  it('returns a div element with the class name "more"', () => {
    const result = moreBtn();
    expect(result.tagName).toEqual('DIV');
    expect(result.classList.contains('more')).toBe(true);
  });

  it('returns a div element with three child div elements with the class name "box"', () => {
    const result = moreBtn();
    const boxes = result.querySelectorAll('.box');
    expect(boxes.length).toEqual(3);
    boxes.forEach(box => {
      expect(box.tagName).toEqual('DIV');
      expect(box.classList.contains('box')).toBe(true);
    });
  });
});