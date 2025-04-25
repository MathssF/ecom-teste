
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.GenreScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.LanguageScalarFieldEnum = {
  id: 'id',
  englishName: 'englishName'
};

exports.Prisma.MovieScalarFieldEnum = {
  id: 'id',
  title: 'title',
  originalTitle: 'originalTitle',
  originalLanguage: 'originalLanguage',
  adult: 'adult'
};

exports.Prisma.GenreMovieScalarFieldEnum = {
  genreId: 'genreId',
  movieId: 'movieId'
};

exports.Prisma.MovieDetailScalarFieldEnum = {
  movieId: 'movieId',
  voteCount: 'voteCount',
  voteAverage: 'voteAverage',
  popularity: 'popularity',
  releaseDate: 'releaseDate',
  posterPath: 'posterPath'
};

exports.Prisma.CompanyScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.MovieCompanyScalarFieldEnum = {
  movieId: 'movieId',
  companyId: 'companyId'
};

exports.Prisma.TrendingEntryScalarFieldEnum = {
  id: 'id',
  datetime: 'datetime',
  mode: 'mode',
  languageId: 'languageId'
};

exports.Prisma.TrendingStoryScalarFieldEnum = {
  trendingId: 'trendingId',
  movieId: 'movieId',
  votesCount: 'votesCount',
  votesAverage: 'votesAverage',
  popularity: 'popularity',
  page: 'page',
  rank: 'rank',
  rankPage: 'rankPage'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.GenreOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.LanguageOrderByRelevanceFieldEnum = {
  id: 'id',
  englishName: 'englishName'
};

exports.Prisma.MovieOrderByRelevanceFieldEnum = {
  id: 'id',
  title: 'title',
  originalTitle: 'originalTitle',
  originalLanguage: 'originalLanguage'
};

exports.Prisma.GenreMovieOrderByRelevanceFieldEnum = {
  genreId: 'genreId',
  movieId: 'movieId'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.MovieDetailOrderByRelevanceFieldEnum = {
  movieId: 'movieId',
  posterPath: 'posterPath'
};

exports.Prisma.CompanyOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.MovieCompanyOrderByRelevanceFieldEnum = {
  movieId: 'movieId',
  companyId: 'companyId'
};

exports.Prisma.TrendingEntryOrderByRelevanceFieldEnum = {
  id: 'id',
  languageId: 'languageId'
};

exports.Prisma.TrendingStoryOrderByRelevanceFieldEnum = {
  trendingId: 'trendingId',
  movieId: 'movieId'
};


exports.Prisma.ModelName = {
  Genre: 'Genre',
  Language: 'Language',
  Movie: 'Movie',
  GenreMovie: 'GenreMovie',
  MovieDetail: 'MovieDetail',
  Company: 'Company',
  MovieCompany: 'MovieCompany',
  TrendingEntry: 'TrendingEntry',
  TrendingStory: 'TrendingStory'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
