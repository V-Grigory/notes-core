import { IRubricsService, IRubricsServiceMock } from '@/services/rubrics'

export interface IServiceProvider {
  rubrics: IRubricsService
}

export interface IServiceProviderMock {
  rubrics: IRubricsServiceMock
}
