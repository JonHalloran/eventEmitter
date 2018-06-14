class eventEmitter {
  constructor() {
    this.eventHash = {}
  }

  addListener = (event, cb) => {
    if (this.eventHash[event]) {
      this.eventHash[event].push([cb, false])
    } else {
      this.eventHash[event] = [
        [cb, true]
      ]
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

  once(event, cb) {
    if (this.eventHash[event]) {
      this.eventHash[event].push([cb, true])
    } else {
      this.eventHash[event] = [
        [cb, true]
      ]
    }
  }

  emit = (event) => {
    const callbacks = this.eventHash[event];
    if (callbacks) {
      callbacks.forEach((callback, index) => {
        const callback = callbackArr[0]
        callback();
        if (callback[1]) {
          this.eventHash.splice(index, 1)
        }
      });
    }
  }
}