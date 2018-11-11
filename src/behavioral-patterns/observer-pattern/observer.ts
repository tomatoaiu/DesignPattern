export class Observer {
  message: string

  notify () {
    this.message = 'notify'
  }
}

export class Subject {
  observers: Observer[]

  constructor () {
    this.observers = []
  }

  register (observer: Observer) {
    this.observers.push(observer)
  }

  notify () {
    this.observers.forEach((observer) => {
      observer.notify()
    })
  }
}
