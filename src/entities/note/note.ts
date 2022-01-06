import { INote, INoteData } from './note.types'

export class Note implements INote {

  readonly id?: number
  readonly group_id: number
  readonly title: string
  readonly value: string
  readonly order?: number
  readonly description?: string

  constructor (data: INoteData) {
    if (data.id) {
      this.id = data.id
    }
    this.group_id = data.group_id
    this.title = data.title
    this.value = data.value
    this.order = data.order || undefined
    this.description = data.description || undefined
  }

  validate (): boolean {
    if (!this.group_id || !this.title || !this.value) {
      return false
    }

    return true
  }
}
