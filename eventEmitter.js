class eventEmitter {
  constructor() {
    this.eventHash = {};
    this.onceHash = {};
  }

  addListener(event, cb) {
    if (this.eventHash[event]) {
      this
        .eventHash[event]
        .push(cb);
    } else {
      this.eventHash[event] = [cb];
    }
  }

  removeListener(event, cb) {
    const callbacks = this.eventHash[event];
    if (callbacks) {
      const index = callbacks.indexOf(cb);
      if (index >= 0) {
        callbacks.splice(index, 1);
      }
    }

    const singleUse = this.onceHash[event];
    if (singleUse) {
      const index = singleUse.indexOf(cb);
      if (cb > 0) {
        singleUse.splice(index, 1);
      }
    }
  }

  removeAllListeners(event) {
    this.eventHash[event] = undefined;
    this.onceHash[event] = undefined;
  }

  once(event, cb) {
    if (this.onceHash[event]) {
      this
        .onceHash[event]
        .push(cb);
    } else {
      this.onceHash[event] = [cb];
    }
  }

  emit(event) {
    const callbacks = this.eventHash[event];
    if (callbacks) {
      callbacks.forEach((callback, index) => {
        callback();
      });
    }

    const singleUse = this.onceHash[event];
    if (singleUse) {
      singleUse.forEach((once) => {
        once();
      });
      this.onceHash[event] = undefined;
    }
  }
}

export default eventEmitter;