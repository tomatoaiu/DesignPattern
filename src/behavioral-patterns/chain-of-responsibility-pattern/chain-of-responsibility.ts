interface Responsible {
  isMyLanguage (text: string): boolean;
}

export class Japanese implements Responsible {
  isMyLanguage (text: string): boolean {
    return ('こんにちは' === text);
  }
}

export class English implements Responsible {
  isMyLanguage (text: string): boolean {
    return ('Hello' === text);
  }
}

export class LanguageHandler {
  languages: Array<Responsible>;

  constructor () {
    this.languages = [];
  }

  setLanguage (language: Responsible) {
    this.languages.push(language)
  }

  whatLanguge (text: string): Responsible {
    return this.languages.find((language) => {
      return language.isMyLanguage(text);
    });
  }
}
