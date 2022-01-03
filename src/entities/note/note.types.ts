export interface INoteData {
  readonly id?: number
  readonly group_id: number
  readonly title: string
  readonly value: string
  readonly order?: number
  readonly description?: string
}

export interface INote extends INoteData {
  validate(): boolean
}

export const NOTE_NAME_MIN_LENGTH = 3
