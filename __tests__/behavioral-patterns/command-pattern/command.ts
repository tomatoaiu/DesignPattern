import { Command, GetHundredCommand, GetTwentyCommand, Invoker, Receiver } from '../../../src/behavioral-patterns/command-pattern/command'

describe('Command Pattern', () => {
  const receiver: Receiver = new Receiver()
  const getHundredCommand: Command = new GetHundredCommand(receiver)
  const getTwentyCommand: Command = new GetTwentyCommand(receiver)
  const invoker: Invoker = new Invoker()

  it('getHundredCommand is 100', () => {
    expect(invoker.execute(getHundredCommand)).toBe(100)
  })

  it('getTwentyCommand is 20', () => {
    expect(invoker.execute(getTwentyCommand)).toBe(20)
  })
})
