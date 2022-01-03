import { mockRubrics, mockRubricsData, Rubric } from '@/entities'
import { RubricsService } from './rubrics'
import { DataProvider } from '@/dataProvider/dataProvider'

describe('>>> Rubrics Service', () => {

  const service = new RubricsService(new DataProvider('mockData'))

  describe('>> getAll', () => {

    it('should return all data', () => {
      expect(service.getAll()).toEqual(mockRubricsData())
    })

  })

  describe('>> getOneById', () => {

    it('should return one rubric by provided id', () => {
      const rubric = mockRubrics()[1]
      const id = rubric.id as number
      expect(service.getOneById(id)).toEqual(rubric)
    })

    it('should return undefined if no rubric found', () => {
      expect(service.getOneById(111111)).toBeUndefined()
    })

  })

  describe('>> createRubric', () => {

    it('should add new rubric and return it', () => {

      const newRubricData = { ...mockRubricsData()[0], name_ru: 'name' }
      const createdRubric = service.createRubric(newRubricData)

      expect(service.getAll().length).toBe(mockRubricsData().length + 1)
      expect(createdRubric instanceof Rubric).toBeTruthy()
    })

    it('should throw an error if doesn\'t pass validate', () => {

      const newRubricData = { ...mockRubricsData()[0], name_ru: 'rr' }

      expect(() => { service.createRubric(newRubricData) }).toThrow()
    })

  })

})
