import { IRubricsServiceMock } from './rubrics.types'

export const mockRubricsService = (): IRubricsServiceMock => ({
  getAll: jest.fn(),
  getOneById: jest.fn(),
  createRubric: jest.fn()
})
