import { Rubric } from './note'
import { mockRubricsData } from './note.mock'

describe('>>> Rubric', () => {

  describe('>> constructor', () => {

    it('should instantiate id only if it was provided', () => {
      const entity1 = new Rubric({
        ...mockRubricsData()[0],
        id: 1
      })

      expect(entity1.id).toBe(1)

      const entity2 = new Rubric({
        ...mockRubricsData()[0],
        id: undefined
      })

      expect(entity2.id).toBeUndefined()
    })

    it('should instantiate createdAt only if it was provided', () => {
      const entity1 = new Rubric({
        ...mockRubricsData()[0],
        createdAt: '2019-12-19T11:54:04 +05:00'
      })

      expect(entity1.createdAt).toBe('2019-12-19T11:54:04 +05:00')

      const entity2 = new Rubric({
        ...mockRubricsData()[0],
        createdAt: undefined
      })

      expect(entity2.createdAt).toBeUndefined()
    })

  })

  describe('>> validate', () => {

    it('should fail validation if name_ru is empty', () => {
      const entity = new Rubric({
        ...mockRubricsData()[0],
        name_ru: ''
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should fail validation if name_ru is too short', () => {
      const entity = new Rubric({
        ...mockRubricsData()[0],
        name_ru: 'тт'
      })

      expect(entity.validate()).toBeFalsy()
    })

    it('should not fail validation if length name_ru is normal', () => {
      const entity = new Rubric({
        ...mockRubricsData()[0],
        name_ru: 'ттт'
      })

      expect(entity.validate()).toBeTruthy()
    })

  })

})
