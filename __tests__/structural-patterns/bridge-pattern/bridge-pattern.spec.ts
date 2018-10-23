import { LaunchPad, TrackingLaunchPad, Fighter } from '../../../src/structural-patterns/bridge-pattern/bridge-pattern'

describe('Bridge Pattern', () => {
  const launchPad: LaunchPad = new LaunchPad(new Fighter())
	const trackingLaunchPad: TrackingLaunchPad = new TrackingLaunchPad(new Fighter())

  it('launchPad.missile is 100', () => {
    expect(launchPad.missile()).toBe(100)
  })

  it('trackingLaunchPad.missile is 100', () => {
    expect(trackingLaunchPad.missile()).toBe(100)
  })

  it('trackingLaunchPad.laser is 20', () => {
    expect(trackingLaunchPad.laser()).toBe(20)
  })
})
