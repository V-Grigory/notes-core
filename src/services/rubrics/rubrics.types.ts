import { IRubric, IRubricData } from '@/entities'

export interface IRubricsService {
  getAll (): IRubricData[]
  getOneById (id: number): IRubric | undefined
  createRubric (data: IRubricData): IRubric
  // updateRubric (data: IRubricData): IRubric
}

export interface IRubricsServiceMock {
  getAll: jest.Mock <IRubricData[]>
  getOneById: jest.Mock <IRubric | undefined>
  createRubric: jest.Mock <IRubric>
}
