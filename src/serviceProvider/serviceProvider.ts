import { RubricsService } from '@/services/rubrics'
import { IServiceProvider } from '@/serviceProvider/serviceProvider.types'
import { DataProvider } from '@/dataProvider/dataProvider'

export const serviceProvider = (): IServiceProvider => ({
  rubrics: new RubricsService(new DataProvider('mockData'))
})
