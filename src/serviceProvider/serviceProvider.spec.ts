import { serviceProvider } from './serviceProvider'
import { RubricsService } from '@/services/rubrics'

jest.mock('@/services/rubrics')

describe('>> Provider', () => {

  it('should instantiate Rubrics Service', () => {
    serviceProvider()
    expect(RubricsService.prototype.constructor).toBeCalled()
  })

})
