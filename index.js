class eventEmitter {
  constructor() {
    this.eventHash = {}
  }

  addListener = (event, cb) => {
    if (this.eventHash[event]) {
      this.eventHash[event].push(cb)
    } else {
      this.eventHash[event] = [cb]
    }
  }

  removeListener = (event, callback) => {
    const callbacks = this.eventHash[event];

  }

  emit = (event) => {
    const callbacks = this.eventHash[event];
    if (callbacks) {
      callbacks.forEach(callback => {
        callback();
      });
    }
  }
}