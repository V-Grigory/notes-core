import { IRubricData } from '@/entities'
import { IDataProvider } from './dataProvider.types'

import { mockRubricsData } from '@/entities'

export class DataProvider implements IDataProvider {

  rubricData: IRubricData[]

  constructor (private readonly dataSource: string) {
    this.rubricData = mockRubricsData()
  }

  getAll (): IRubricData[] {
    return this.rubricData
  }

  getOneById (id: number): IRubricData | undefined {
    return this.rubricData.find(rubric => rubric.id === id)
  }

  createRubric(newRubricData: IRubricData): {} {
    this.rubricData.push(newRubricData)
    return { errors: '' }
  }
}
