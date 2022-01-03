import { IRubric, IRubricData, RUBRICS_MIN_NAME_RU_LENGTH } from './note.types'

export class Rubric implements IRubric {

  readonly id?: number
  readonly parent_id: number
  readonly name_ru: string
  readonly name_en: string
  readonly order: number
  readonly params: object
  readonly createdAt?: Date | string

  constructor (data: IRubricData) {
    if (data.id) {
      this.id = data.id
    }
    this.parent_id = data.parent_id
    this.name_ru = data.name_ru
    this.name_en = data.name_en
    this.order = data.order
    this.params = data.params
    if (data.createdAt) {
      this.createdAt = data.createdAt
    }
  }

  validate (): boolean {
    if (!this.name_ru) {
      return false
    }
    if (this.name_ru.length < RUBRICS_MIN_NAME_RU_LENGTH) {
      return false
    }
    return true
  }

}
