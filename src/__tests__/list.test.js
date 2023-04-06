// const Overall = require('../list.js');
import Overall from '../list.js';

import jsdom from 'jsdom';
const { JSDOM } = jsdom;

describe('Overall', () => {
  let dom;
  let overall;

  beforeEach(() => {
    dom = new JSDOM('<html><body><div id="to-dos"></div><form><input type="text"></form><div id="clear-all"><p></p></div><button id="reset"></button></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;
    overall = new Overall();
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
  });

  describe('add', () => {
    it('should add a new task to the list', () => {
      overall.add('task 1');
      expect(overall.tasks).toEqual([{ description: 'task 1', completed: false, index: 0 }]);
      expect(overall.listContainer.childNodes.length).toBe(1);
      expect(overall.listContainer.firstChild.childNodes[1].textContent).toBe('task 1');
    });

    it('should not add a task when the input is empty', () => {
      overall.add('');
      expect(overall.tasks).toEqual([]);
      expect(overall.listContainer.childNodes.length).toBe(0);
    });
  });

  describe('remove', () => {
    beforeEach(() => {
      overall.add('task 1');
      overall.add('task 2');
      overall.add('task 3');
    });

    it('should remove the task with the given index', () => {
      overall.remove(1);
      expect(overall.tasks).toEqual([{ description: 'task 1', completed: false, index: 0 }, { description: 'task 3', completed: false, index: 1 }]);
      expect(overall.listContainer.childNodes.length).toBe(2);
      expect(overall.listContainer.firstChild.childNodes[1].textContent).toBe('task 3');
    });

    it('should not remove any tasks when given an invalid index', () => {
      overall.remove(5);
      expect(overall.tasks).toEqual([{ description: 'task 1', completed: false, index: 0 }, { description: 'task 2', completed: false, index: 1 }, { description: 'task 3', completed: false, index: 2 }]);
      expect(overall.listContainer.childNodes.length).toBe(3);
    });
  });
});
