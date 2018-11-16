import { Github, Repository } from '../../../src/behavioral-patterns/mediator-pattern/mediator'

describe('Mediator Pattern', () => {
  const github: Github = new Github()
  const designRepository: Repository = new Repository('desidn')
  const patternRepository: Repository = new Repository('pattern')
  github.push(designRepository)
  github.push(patternRepository)

  const repositoryList: Array<string> = github.showRepositoryList()

  it('repositoryList[0] name is desidn', () => {
    expect(repositoryList[0]).toBe('desidn')
  })

  it('repositoryList[1] name is 20', () => {
    expect(repositoryList[1]).toBe('pattern')
  })
})
