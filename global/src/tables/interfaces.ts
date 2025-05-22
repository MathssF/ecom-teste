export interface limitsData {
  dev?: boolean,
  persistence?: boolean,
  frontEndPage?: boolean,
  showFullApi?: boolean,
  shortInfo?: boolean,
  showInfo?: boolean,
  resultModeByPage?: boolean, // Retorna TopRatedList[] e TrendingList[]
  returnPageList?: boolean, // Retorna TopRatedWithPages e TrendingWithPages
  setLimitItems?: boolean,
  setLimitPages?: boolean,
  limitItems?: number,
  limitPages?: number,
  setLang?: boolean,
  chooseLang?: string,
  setGenre?: boolean,
  setYear?: boolean,
  chooseGenreRef?: number | string,
  chooseYear?: number | string,
}