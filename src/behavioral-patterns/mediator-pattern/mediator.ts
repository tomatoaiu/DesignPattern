export class Github {
  repositories: Array<Repository>

  constructor () {
    this.repositories = []
  }

  push (repository: Repository): void {
    this.repositories.push(repository)
  }

  showRepositoryList (): Array<string> {
    return this.repositories.map(repository => repository.name)
  }
}

export class Repository {
  name: string

  constructor (name: string) {
    this.name = name
  }
}
