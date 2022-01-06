import { INoteData } from '@/entities'
import noteJsonData from '../../dataProvider/mocks/noteData.json'

const noteTsData = JSON.parse(JSON.stringify(noteJsonData))

export const mockNotesData = (): INoteData[] => {
  const mockRubrics: INoteData[] = []

  noteTsData.forEach((rubric: INoteData) => mockRubrics.push(rubric))

  return mockRubrics
}
