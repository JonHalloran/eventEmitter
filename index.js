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

  removeListener = (event, cb) => {
    const callbacks = this.eventHash[event];
    if (callbacks) {
      const index = callbacks.indexOf(cb)
      if (cb > 0) {
        callbacks.splice(index, 1)
      }
    }
  }

  removeAllListeners = (event) => {
    this.eventHash[event] = undefined;
  }

  once()

  emit = (event) => {
    const callbacks = this.eventHash[event];
    if (callbacks) {
      callbacks.forEach(callback => {
        callback();
      });
    }
  }
}