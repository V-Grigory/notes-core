import { Group } from './group'
import { mockGroupsData } from './group.mock'

// console.log(mockGroupsData())

describe('>>> Group', () => {

  describe('>> constructor', () => {

    it('should instantiate id only if it was provided', () => {
      const group1 = new Group({
        ...mockGroupsData()[0],
        id: 1
      })

      expect(group1.id).toBe(1)

      const group2 = new Group({
        ...mockGroupsData()[0],
        id: undefined
      })

      expect(group2.id).toBeUndefined()
    })

    it('should instantiate order only if it was provided', () => {
      const group1 = new Group({
        ...mockGroupsData()[0],
        order: 3
      })

      expect(group1.order).toBe(3)

      const group2 = new Group({
        ...mockGroupsData()[0],
        order: undefined
      })

      expect(group2.order).toBeUndefined()
    })
  })

  describe('>> validate', () => {

    it('should fail validation if title is empty', () => {
      const group = new Group({
        ...mockGroupsData()[0],
        title: ''
      })

      expect(group.validate()).toBeFalsy()
    })

    it('should fail validation if title is too short', () => {
      const group = new Group({
        ...mockGroupsData()[0],
        title: 'т'
      })

      expect(group.validate()).toBeFalsy()
    })

    it('should not fail validation if length title is normal', () => {
      const group = new Group({
        ...mockGroupsData()[0],
        title: 'ттт'
      })

      expect(group.validate()).toBeTruthy()
    })
  })
})
