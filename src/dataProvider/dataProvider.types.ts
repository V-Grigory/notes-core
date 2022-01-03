import { IRubricData } from '@/entities'

export interface IDataProvider {
  getAll (): IRubricData[]
  getOneById (id: number): IRubricData | undefined
  createRubric (data: IRubricData): void
  // updateRubric (data: IRubricData): IRubric
}

export interface IRubricsServiceMock {
  getAll: jest.Mock <IRubricData[]>
  getOneById: jest.Mock <IRubricData | undefined>
  createRubric: jest.Mock <void>
}
