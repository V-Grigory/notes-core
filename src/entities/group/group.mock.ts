import { IGroupData } from '@/entities'
import groupJsonData from '../../dataProvider/mocks/groupData.json'

const groupTsData = JSON.parse(JSON.stringify(groupJsonData))

export const mockGroupsData = (): IGroupData[] => {
  const mockRubrics: IGroupData[] = []

  groupTsData.forEach((rubric: IGroupData) => mockRubrics.push(rubric))

  return mockRubrics
}

// export const mockRubrics = (data: IRubricData[] = mockRubricsData()): IRubric[] => {
//   return data.map(item => new Rubric(item))
// }
