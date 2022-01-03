import { IServiceProviderMock } from './serviceProvider.types'
import { mockRubricsService } from '@/services/rubrics'

export const mockServiceProvider = (): IServiceProviderMock => ({
  rubrics: mockRubricsService()
})
