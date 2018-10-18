abstract class Command {
  public execute (): void {}
}

class GetHundredCommand extends Command {
  private receiver: Receiver

  constructor (receiver: Receiver) {
    super()
    this.receiver = receiver
  }

  public execute (): Number {
    return this.receiver.action(100)
  }
}

class GetTwentyCommand extends Command {
  private receiver: Receiver

  constructor (receiver: Receiver) {
    super()
    this.receiver = receiver
  }

  public execute (): Number {
    return this.receiver.action(20)
  }
}

class Invoker {
  public execute (command: Command) {
    return command.execute()
  }
}

class Receiver {
  public action (value: Number): Number {
    return value
  }
}

export {
  Receiver,
  GetHundredCommand,
  GetTwentyCommand,
  Command,
  Invoker
}
