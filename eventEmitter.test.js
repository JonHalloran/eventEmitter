const eventEmitter = require('./eventEmitter');
// const jest = require('jest');

function callback1() {}

beforeEach(() => {
  const eventEmitter1 = new eventEmitter();
});

describe('creation', () => {
  test('Can create eventEmitter', () => {
    const eventEmitter1 = new eventEmitter();
    expect(eventEmitter1).toBeInstanceOf(eventEmitter);
  });
});

describe('emit', () => {
  test('emit does not error on events with no listeners', () => {
    const eventEmitter1 = new eventEmitter();
    eventEmitter1.emit('event');
    const emitTest = jest.fn(() => eventEmitter1.emit('event'));
    emitTest();
    expect(emitTest).toReturn();
  });
});

describe('addListener', () => {
  const eventEmitter1 = new eventEmitter();
  const mock1 = jest.fn();
  const mock2 = jest.fn();
  const mock3 = jest.fn();
  const mock4 = jest.fn();

  test('Can add listener to event', () => {
    eventEmitter1.addListener('event1', mock1);
    eventEmitter1.emit('event1');
    expect(mock1).toBeCalled();
  });

  test('Can add multiple listeners to different events', () => {
    eventEmitter1.addListener('event1', mock1);
    eventEmitter1.addListener('event2', mock2);
    eventEmitter1.emit('event1');
    expect(mock1).toBeCalled();
    expect(mock2)
      .not
      .toBeCalled();
    eventEmitter1.emit('event2');
    expect(mock2).toBeCalled();
  });

  test('Can add multiple listeners to same event', () => {
    eventEmitter1.addListener('event1', mock1);
    eventEmitter1.addListener('event1', mock2);
    expect(mock1).toBeCalled();
    expect(mock2).toBeCalled();
    eventEmitter1.emit('event1');
  });
});