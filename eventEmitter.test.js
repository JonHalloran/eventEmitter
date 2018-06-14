const eventEmitter = require('./eventEmitter');

function callback1() {}

beforeEach(() => {
  const eventEmitter1 = new eventEmitter();
});

test('Can create eventEmitter', () => {
  const eventEmitter1 = new eventEmitter();
  expect(eventEmitter1).toBeInstanceOf(eventEmitter);
});

test('Can add listeners to event Emitter');