import { IRubric, IRubricData } from './note.types'
import { Rubric } from './note'
import rubricData from '../../dataProvider/mocks/rubricData'

export const mockRubricsData = (): IRubricData[] => {
  const mockRubrics: IRubricData[] = []
  rubricData.forEach((rubric: IRubricData) => mockRubrics.push(rubric))
  return mockRubrics
}

export const mockRubrics = (data: IRubricData[] = mockRubricsData()): IRubric[] => {
  return data.map(item => new Rubric(item))
}
