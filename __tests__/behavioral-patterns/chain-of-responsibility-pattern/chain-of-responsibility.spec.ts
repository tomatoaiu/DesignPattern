import { Japanese, English, LanguageHandler } from '../../../src/behavioral-patterns/chain-of-responsibility-pattern/chain-of-responsibility'

describe('Mediator Pattern', () => {
  const languageHandler: LanguageHandler = new LanguageHandler();
  languageHandler.setLanguage(new Japanese());
  languageHandler.setLanguage(new English());

  it('こんにちは is Japanese', () => {
    expect(languageHandler.whatLanguge('こんにちは')).toBeInstanceOf(Japanese)
  })

  it('Hello is English', () => {
    expect(languageHandler.whatLanguge('Hello')).toBeInstanceOf(English)
  })
})
