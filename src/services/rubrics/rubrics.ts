import { IRubric, IRubricData, Rubric } from '@/entities'
import { IRubricsService } from '@/services'
import { IDataProvider } from "@/dataProvider/dataProvider.types";

export class RubricsService implements IRubricsService {

  constructor (private readonly dataProvider: IDataProvider) {

  }

  getAll (): IRubricData[] {
    return this.dataProvider.getAll()
  }

  getOneById (id: number): IRubric | undefined {
    const rubric = this.dataProvider.getOneById(id)
    if (rubric === undefined) {
      return undefined
    }
    return new Rubric(rubric)
  }

  createRubric(newRubricData: IRubricData): IRubric {
    const newRubric = new Rubric(newRubricData)
    if (newRubric.validate()) {
      this.dataProvider.createRubric(newRubricData)
      return newRubric
    }
    throw new Error('Rubruc is not valid')
  }
}
