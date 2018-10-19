export abstract class Command {
  public execute (): void {}
}

export class GetHundredCommand extends Command {
  private receiver: Receiver

  constructor (receiver: Receiver) {
      super()
      this.receiver = receiver
  }

  public execute (): Number {
      return this.receiver.action(100)
  }
}

export class GetTwentyCommand extends Command {
  private receiver: Receiver

  constructor (receiver: Receiver) {
      super()
      this.receiver = receiver
  }

  public execute (): Number {
      return this.receiver.action(20)
  }
}

export class Invoker {
  public execute (command: Command) {
      return command.execute()
  }
}

export class Receiver {
  public action (value: Number): Number {
      return value
  }
}
