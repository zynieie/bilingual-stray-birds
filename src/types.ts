export interface Poem {
  id: number
  english: string
  chinese: string
  vocabulary?: VocabularyEntry[]
}

export interface VocabularyEntry {
  word: string
  phonetic: string
  partOfSpeech: string
  definition: string
  example?: string
}
