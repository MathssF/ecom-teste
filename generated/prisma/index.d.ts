
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model GenreMovie
 * 
 */
export type GenreMovie = $Result.DefaultSelection<Prisma.$GenreMoviePayload>
/**
 * Model MovieDetail
 * 
 */
export type MovieDetail = $Result.DefaultSelection<Prisma.$MovieDetailPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model MovieCompany
 * 
 */
export type MovieCompany = $Result.DefaultSelection<Prisma.$MovieCompanyPayload>
/**
 * Model TrendingEntry
 * 
 */
export type TrendingEntry = $Result.DefaultSelection<Prisma.$TrendingEntryPayload>
/**
 * Model TrendingStory
 * 
 */
export type TrendingStory = $Result.DefaultSelection<Prisma.$TrendingStoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Genres
 * const genres = await prisma.genre.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Genres
   * const genres = await prisma.genre.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genreMovie`: Exposes CRUD operations for the **GenreMovie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GenreMovies
    * const genreMovies = await prisma.genreMovie.findMany()
    * ```
    */
  get genreMovie(): Prisma.GenreMovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieDetail`: Exposes CRUD operations for the **MovieDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieDetails
    * const movieDetails = await prisma.movieDetail.findMany()
    * ```
    */
  get movieDetail(): Prisma.MovieDetailDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.movieCompany`: Exposes CRUD operations for the **MovieCompany** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieCompanies
    * const movieCompanies = await prisma.movieCompany.findMany()
    * ```
    */
  get movieCompany(): Prisma.MovieCompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trendingEntry`: Exposes CRUD operations for the **TrendingEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrendingEntries
    * const trendingEntries = await prisma.trendingEntry.findMany()
    * ```
    */
  get trendingEntry(): Prisma.TrendingEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trendingStory`: Exposes CRUD operations for the **TrendingStory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrendingStories
    * const trendingStories = await prisma.trendingStory.findMany()
    * ```
    */
  get trendingStory(): Prisma.TrendingStoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "genre" | "language" | "movie" | "genreMovie" | "movieDetail" | "company" | "movieCompany" | "trendingEntry" | "trendingStory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      GenreMovie: {
        payload: Prisma.$GenreMoviePayload<ExtArgs>
        fields: Prisma.GenreMovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreMovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreMovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload>
          }
          findFirst: {
            args: Prisma.GenreMovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreMovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload>
          }
          findMany: {
            args: Prisma.GenreMovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload>[]
          }
          create: {
            args: Prisma.GenreMovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload>
          }
          createMany: {
            args: Prisma.GenreMovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GenreMovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload>
          }
          update: {
            args: Prisma.GenreMovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload>
          }
          deleteMany: {
            args: Prisma.GenreMovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreMovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GenreMovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenreMoviePayload>
          }
          aggregate: {
            args: Prisma.GenreMovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenreMovie>
          }
          groupBy: {
            args: Prisma.GenreMovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreMovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreMovieCountArgs<ExtArgs>
            result: $Utils.Optional<GenreMovieCountAggregateOutputType> | number
          }
        }
      }
      MovieDetail: {
        payload: Prisma.$MovieDetailPayload<ExtArgs>
        fields: Prisma.MovieDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload>
          }
          findFirst: {
            args: Prisma.MovieDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload>
          }
          findMany: {
            args: Prisma.MovieDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload>[]
          }
          create: {
            args: Prisma.MovieDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload>
          }
          createMany: {
            args: Prisma.MovieDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload>
          }
          update: {
            args: Prisma.MovieDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload>
          }
          deleteMany: {
            args: Prisma.MovieDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieDetailPayload>
          }
          aggregate: {
            args: Prisma.MovieDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieDetail>
          }
          groupBy: {
            args: Prisma.MovieDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieDetailCountArgs<ExtArgs>
            result: $Utils.Optional<MovieDetailCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      MovieCompany: {
        payload: Prisma.$MovieCompanyPayload<ExtArgs>
        fields: Prisma.MovieCompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieCompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieCompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload>
          }
          findFirst: {
            args: Prisma.MovieCompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieCompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload>
          }
          findMany: {
            args: Prisma.MovieCompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload>[]
          }
          create: {
            args: Prisma.MovieCompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload>
          }
          createMany: {
            args: Prisma.MovieCompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MovieCompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload>
          }
          update: {
            args: Prisma.MovieCompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload>
          }
          deleteMany: {
            args: Prisma.MovieCompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieCompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovieCompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovieCompanyPayload>
          }
          aggregate: {
            args: Prisma.MovieCompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovieCompany>
          }
          groupBy: {
            args: Prisma.MovieCompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieCompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCompanyCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCompanyCountAggregateOutputType> | number
          }
        }
      }
      TrendingEntry: {
        payload: Prisma.$TrendingEntryPayload<ExtArgs>
        fields: Prisma.TrendingEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendingEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendingEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload>
          }
          findFirst: {
            args: Prisma.TrendingEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendingEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload>
          }
          findMany: {
            args: Prisma.TrendingEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload>[]
          }
          create: {
            args: Prisma.TrendingEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload>
          }
          createMany: {
            args: Prisma.TrendingEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrendingEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload>
          }
          update: {
            args: Prisma.TrendingEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload>
          }
          deleteMany: {
            args: Prisma.TrendingEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendingEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrendingEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingEntryPayload>
          }
          aggregate: {
            args: Prisma.TrendingEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrendingEntry>
          }
          groupBy: {
            args: Prisma.TrendingEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendingEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendingEntryCountArgs<ExtArgs>
            result: $Utils.Optional<TrendingEntryCountAggregateOutputType> | number
          }
        }
      }
      TrendingStory: {
        payload: Prisma.$TrendingStoryPayload<ExtArgs>
        fields: Prisma.TrendingStoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrendingStoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrendingStoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload>
          }
          findFirst: {
            args: Prisma.TrendingStoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrendingStoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload>
          }
          findMany: {
            args: Prisma.TrendingStoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload>[]
          }
          create: {
            args: Prisma.TrendingStoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload>
          }
          createMany: {
            args: Prisma.TrendingStoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TrendingStoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload>
          }
          update: {
            args: Prisma.TrendingStoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload>
          }
          deleteMany: {
            args: Prisma.TrendingStoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrendingStoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TrendingStoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrendingStoryPayload>
          }
          aggregate: {
            args: Prisma.TrendingStoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrendingStory>
          }
          groupBy: {
            args: Prisma.TrendingStoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrendingStoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrendingStoryCountArgs<ExtArgs>
            result: $Utils.Optional<TrendingStoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    genre?: GenreOmit
    language?: LanguageOmit
    movie?: MovieOmit
    genreMovie?: GenreMovieOmit
    movieDetail?: MovieDetailOmit
    company?: CompanyOmit
    movieCompany?: MovieCompanyOmit
    trendingEntry?: TrendingEntryOmit
    trendingStory?: TrendingStoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    movies: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | GenreCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreMovieWhereInput
  }


  /**
   * Count Type LanguageCountOutputType
   */

  export type LanguageCountOutputType = {
    trending: number
    movies: number
  }

  export type LanguageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trending?: boolean | LanguageCountOutputTypeCountTrendingArgs
    movies?: boolean | LanguageCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LanguageCountOutputType
     */
    select?: LanguageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountTrendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingEntryWhereInput
  }

  /**
   * LanguageCountOutputType without action
   */
  export type LanguageCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }


  /**
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    genres: number
    companies: number
    trending: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | MovieCountOutputTypeCountGenresArgs
    companies?: boolean | MovieCountOutputTypeCountCompaniesArgs
    trending?: boolean | MovieCountOutputTypeCountTrendingArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreMovieWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCompanyWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountTrendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingStoryWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    movies: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | CompanyCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCompanyWhereInput
  }


  /**
   * Count Type TrendingEntryCountOutputType
   */

  export type TrendingEntryCountOutputType = {
    movies: number
  }

  export type TrendingEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | TrendingEntryCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * TrendingEntryCountOutputType without action
   */
  export type TrendingEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntryCountOutputType
     */
    select?: TrendingEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TrendingEntryCountOutputType without action
   */
  export type TrendingEntryCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingStoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>



  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      movies: Prisma.$GenreMoviePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends Genre$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.movies
   */
  export type Genre$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    where?: GenreMovieWhereInput
    orderBy?: GenreMovieOrderByWithRelationInput | GenreMovieOrderByWithRelationInput[]
    cursor?: GenreMovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreMovieScalarFieldEnum | GenreMovieScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageMinAggregateOutputType = {
    id: string | null
    englishName: string | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: string | null
    englishName: string | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    englishName: number
    _all: number
  }


  export type LanguageMinAggregateInputType = {
    id?: true
    englishName?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    englishName?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    englishName?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: string
    englishName: string
    _count: LanguageCountAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    englishName?: boolean
    trending?: boolean | Language$trendingArgs<ExtArgs>
    movies?: boolean | Language$moviesArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>



  export type LanguageSelectScalar = {
    id?: boolean
    englishName?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "englishName", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trending?: boolean | Language$trendingArgs<ExtArgs>
    movies?: boolean | Language$moviesArgs<ExtArgs>
    _count?: boolean | LanguageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      trending: Prisma.$TrendingEntryPayload<ExtArgs>[]
      movies: Prisma.$MoviePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      englishName: string
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trending<T extends Language$trendingArgs<ExtArgs> = {}>(args?: Subset<T, Language$trendingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    movies<T extends Language$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Language$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'String'>
    readonly englishName: FieldRef<"Language", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language.trending
   */
  export type Language$trendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    where?: TrendingEntryWhereInput
    orderBy?: TrendingEntryOrderByWithRelationInput | TrendingEntryOrderByWithRelationInput[]
    cursor?: TrendingEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendingEntryScalarFieldEnum | TrendingEntryScalarFieldEnum[]
  }

  /**
   * Language.movies
   */
  export type Language$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    title: string | null
    originalTitle: string | null
    originalLanguage: string | null
    adult: boolean | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    title: string | null
    originalTitle: string | null
    originalLanguage: string | null
    adult: boolean | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    title: number
    originalTitle: number
    originalLanguage: number
    adult: number
    _all: number
  }


  export type MovieMinAggregateInputType = {
    id?: true
    title?: true
    originalTitle?: true
    originalLanguage?: true
    adult?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    title?: true
    originalTitle?: true
    originalLanguage?: true
    adult?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    title?: true
    originalTitle?: true
    originalLanguage?: true
    adult?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    title: string
    originalTitle: string
    originalLanguage: string
    adult: boolean
    _count: MovieCountAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    originalTitle?: boolean
    originalLanguage?: boolean
    adult?: boolean
    genres?: boolean | Movie$genresArgs<ExtArgs>
    details?: boolean | Movie$detailsArgs<ExtArgs>
    companies?: boolean | Movie$companiesArgs<ExtArgs>
    trending?: boolean | Movie$trendingArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>



  export type MovieSelectScalar = {
    id?: boolean
    title?: boolean
    originalTitle?: boolean
    originalLanguage?: boolean
    adult?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "originalTitle" | "originalLanguage" | "adult", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | Movie$genresArgs<ExtArgs>
    details?: boolean | Movie$detailsArgs<ExtArgs>
    companies?: boolean | Movie$companiesArgs<ExtArgs>
    trending?: boolean | Movie$trendingArgs<ExtArgs>
    language?: boolean | LanguageDefaultArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      genres: Prisma.$GenreMoviePayload<ExtArgs>[]
      details: Prisma.$MovieDetailPayload<ExtArgs> | null
      companies: Prisma.$MovieCompanyPayload<ExtArgs>[]
      trending: Prisma.$TrendingStoryPayload<ExtArgs>[]
      language: Prisma.$LanguagePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      originalTitle: string
      originalLanguage: string
      adult: boolean
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genres<T extends Movie$genresArgs<ExtArgs> = {}>(args?: Subset<T, Movie$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    details<T extends Movie$detailsArgs<ExtArgs> = {}>(args?: Subset<T, Movie$detailsArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    companies<T extends Movie$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Movie$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    trending<T extends Movie$trendingArgs<ExtArgs> = {}>(args?: Subset<T, Movie$trendingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    language<T extends LanguageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LanguageDefaultArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly title: FieldRef<"Movie", 'String'>
    readonly originalTitle: FieldRef<"Movie", 'String'>
    readonly originalLanguage: FieldRef<"Movie", 'String'>
    readonly adult: FieldRef<"Movie", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.genres
   */
  export type Movie$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    where?: GenreMovieWhereInput
    orderBy?: GenreMovieOrderByWithRelationInput | GenreMovieOrderByWithRelationInput[]
    cursor?: GenreMovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenreMovieScalarFieldEnum | GenreMovieScalarFieldEnum[]
  }

  /**
   * Movie.details
   */
  export type Movie$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    where?: MovieDetailWhereInput
  }

  /**
   * Movie.companies
   */
  export type Movie$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    where?: MovieCompanyWhereInput
    orderBy?: MovieCompanyOrderByWithRelationInput | MovieCompanyOrderByWithRelationInput[]
    cursor?: MovieCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieCompanyScalarFieldEnum | MovieCompanyScalarFieldEnum[]
  }

  /**
   * Movie.trending
   */
  export type Movie$trendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    where?: TrendingStoryWhereInput
    orderBy?: TrendingStoryOrderByWithRelationInput | TrendingStoryOrderByWithRelationInput[]
    cursor?: TrendingStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendingStoryScalarFieldEnum | TrendingStoryScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model GenreMovie
   */

  export type AggregateGenreMovie = {
    _count: GenreMovieCountAggregateOutputType | null
    _min: GenreMovieMinAggregateOutputType | null
    _max: GenreMovieMaxAggregateOutputType | null
  }

  export type GenreMovieMinAggregateOutputType = {
    genreId: string | null
    movieId: string | null
  }

  export type GenreMovieMaxAggregateOutputType = {
    genreId: string | null
    movieId: string | null
  }

  export type GenreMovieCountAggregateOutputType = {
    genreId: number
    movieId: number
    _all: number
  }


  export type GenreMovieMinAggregateInputType = {
    genreId?: true
    movieId?: true
  }

  export type GenreMovieMaxAggregateInputType = {
    genreId?: true
    movieId?: true
  }

  export type GenreMovieCountAggregateInputType = {
    genreId?: true
    movieId?: true
    _all?: true
  }

  export type GenreMovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenreMovie to aggregate.
     */
    where?: GenreMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreMovies to fetch.
     */
    orderBy?: GenreMovieOrderByWithRelationInput | GenreMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GenreMovies
    **/
    _count?: true | GenreMovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMovieMaxAggregateInputType
  }

  export type GetGenreMovieAggregateType<T extends GenreMovieAggregateArgs> = {
        [P in keyof T & keyof AggregateGenreMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenreMovie[P]>
      : GetScalarType<T[P], AggregateGenreMovie[P]>
  }




  export type GenreMovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreMovieWhereInput
    orderBy?: GenreMovieOrderByWithAggregationInput | GenreMovieOrderByWithAggregationInput[]
    by: GenreMovieScalarFieldEnum[] | GenreMovieScalarFieldEnum
    having?: GenreMovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreMovieCountAggregateInputType | true
    _min?: GenreMovieMinAggregateInputType
    _max?: GenreMovieMaxAggregateInputType
  }

  export type GenreMovieGroupByOutputType = {
    genreId: string
    movieId: string
    _count: GenreMovieCountAggregateOutputType | null
    _min: GenreMovieMinAggregateOutputType | null
    _max: GenreMovieMaxAggregateOutputType | null
  }

  type GetGenreMovieGroupByPayload<T extends GenreMovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreMovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreMovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreMovieGroupByOutputType[P]>
            : GetScalarType<T[P], GenreMovieGroupByOutputType[P]>
        }
      >
    >


  export type GenreMovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    genreId?: boolean
    movieId?: boolean
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genreMovie"]>



  export type GenreMovieSelectScalar = {
    genreId?: boolean
    movieId?: boolean
  }

  export type GenreMovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"genreId" | "movieId", ExtArgs["result"]["genreMovie"]>
  export type GenreMovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $GenreMoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GenreMovie"
    objects: {
      genre: Prisma.$GenrePayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      genreId: string
      movieId: string
    }, ExtArgs["result"]["genreMovie"]>
    composites: {}
  }

  type GenreMovieGetPayload<S extends boolean | null | undefined | GenreMovieDefaultArgs> = $Result.GetResult<Prisma.$GenreMoviePayload, S>

  type GenreMovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreMovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreMovieCountAggregateInputType | true
    }

  export interface GenreMovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GenreMovie'], meta: { name: 'GenreMovie' } }
    /**
     * Find zero or one GenreMovie that matches the filter.
     * @param {GenreMovieFindUniqueArgs} args - Arguments to find a GenreMovie
     * @example
     * // Get one GenreMovie
     * const genreMovie = await prisma.genreMovie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreMovieFindUniqueArgs>(args: SelectSubset<T, GenreMovieFindUniqueArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GenreMovie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreMovieFindUniqueOrThrowArgs} args - Arguments to find a GenreMovie
     * @example
     * // Get one GenreMovie
     * const genreMovie = await prisma.genreMovie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreMovieFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreMovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenreMovie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreMovieFindFirstArgs} args - Arguments to find a GenreMovie
     * @example
     * // Get one GenreMovie
     * const genreMovie = await prisma.genreMovie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreMovieFindFirstArgs>(args?: SelectSubset<T, GenreMovieFindFirstArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GenreMovie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreMovieFindFirstOrThrowArgs} args - Arguments to find a GenreMovie
     * @example
     * // Get one GenreMovie
     * const genreMovie = await prisma.genreMovie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreMovieFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreMovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GenreMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreMovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GenreMovies
     * const genreMovies = await prisma.genreMovie.findMany()
     * 
     * // Get first 10 GenreMovies
     * const genreMovies = await prisma.genreMovie.findMany({ take: 10 })
     * 
     * // Only select the `genreId`
     * const genreMovieWithGenreIdOnly = await prisma.genreMovie.findMany({ select: { genreId: true } })
     * 
     */
    findMany<T extends GenreMovieFindManyArgs>(args?: SelectSubset<T, GenreMovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GenreMovie.
     * @param {GenreMovieCreateArgs} args - Arguments to create a GenreMovie.
     * @example
     * // Create one GenreMovie
     * const GenreMovie = await prisma.genreMovie.create({
     *   data: {
     *     // ... data to create a GenreMovie
     *   }
     * })
     * 
     */
    create<T extends GenreMovieCreateArgs>(args: SelectSubset<T, GenreMovieCreateArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GenreMovies.
     * @param {GenreMovieCreateManyArgs} args - Arguments to create many GenreMovies.
     * @example
     * // Create many GenreMovies
     * const genreMovie = await prisma.genreMovie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreMovieCreateManyArgs>(args?: SelectSubset<T, GenreMovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GenreMovie.
     * @param {GenreMovieDeleteArgs} args - Arguments to delete one GenreMovie.
     * @example
     * // Delete one GenreMovie
     * const GenreMovie = await prisma.genreMovie.delete({
     *   where: {
     *     // ... filter to delete one GenreMovie
     *   }
     * })
     * 
     */
    delete<T extends GenreMovieDeleteArgs>(args: SelectSubset<T, GenreMovieDeleteArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GenreMovie.
     * @param {GenreMovieUpdateArgs} args - Arguments to update one GenreMovie.
     * @example
     * // Update one GenreMovie
     * const genreMovie = await prisma.genreMovie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreMovieUpdateArgs>(args: SelectSubset<T, GenreMovieUpdateArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GenreMovies.
     * @param {GenreMovieDeleteManyArgs} args - Arguments to filter GenreMovies to delete.
     * @example
     * // Delete a few GenreMovies
     * const { count } = await prisma.genreMovie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreMovieDeleteManyArgs>(args?: SelectSubset<T, GenreMovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GenreMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreMovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GenreMovies
     * const genreMovie = await prisma.genreMovie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreMovieUpdateManyArgs>(args: SelectSubset<T, GenreMovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GenreMovie.
     * @param {GenreMovieUpsertArgs} args - Arguments to update or create a GenreMovie.
     * @example
     * // Update or create a GenreMovie
     * const genreMovie = await prisma.genreMovie.upsert({
     *   create: {
     *     // ... data to create a GenreMovie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GenreMovie we want to update
     *   }
     * })
     */
    upsert<T extends GenreMovieUpsertArgs>(args: SelectSubset<T, GenreMovieUpsertArgs<ExtArgs>>): Prisma__GenreMovieClient<$Result.GetResult<Prisma.$GenreMoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GenreMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreMovieCountArgs} args - Arguments to filter GenreMovies to count.
     * @example
     * // Count the number of GenreMovies
     * const count = await prisma.genreMovie.count({
     *   where: {
     *     // ... the filter for the GenreMovies we want to count
     *   }
     * })
    **/
    count<T extends GenreMovieCountArgs>(
      args?: Subset<T, GenreMovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreMovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GenreMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreMovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreMovieAggregateArgs>(args: Subset<T, GenreMovieAggregateArgs>): Prisma.PrismaPromise<GetGenreMovieAggregateType<T>>

    /**
     * Group by GenreMovie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreMovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreMovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreMovieGroupByArgs['orderBy'] }
        : { orderBy?: GenreMovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreMovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GenreMovie model
   */
  readonly fields: GenreMovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GenreMovie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreMovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GenreMovie model
   */
  interface GenreMovieFieldRefs {
    readonly genreId: FieldRef<"GenreMovie", 'String'>
    readonly movieId: FieldRef<"GenreMovie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GenreMovie findUnique
   */
  export type GenreMovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * Filter, which GenreMovie to fetch.
     */
    where: GenreMovieWhereUniqueInput
  }

  /**
   * GenreMovie findUniqueOrThrow
   */
  export type GenreMovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * Filter, which GenreMovie to fetch.
     */
    where: GenreMovieWhereUniqueInput
  }

  /**
   * GenreMovie findFirst
   */
  export type GenreMovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * Filter, which GenreMovie to fetch.
     */
    where?: GenreMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreMovies to fetch.
     */
    orderBy?: GenreMovieOrderByWithRelationInput | GenreMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenreMovies.
     */
    cursor?: GenreMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenreMovies.
     */
    distinct?: GenreMovieScalarFieldEnum | GenreMovieScalarFieldEnum[]
  }

  /**
   * GenreMovie findFirstOrThrow
   */
  export type GenreMovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * Filter, which GenreMovie to fetch.
     */
    where?: GenreMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreMovies to fetch.
     */
    orderBy?: GenreMovieOrderByWithRelationInput | GenreMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GenreMovies.
     */
    cursor?: GenreMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GenreMovies.
     */
    distinct?: GenreMovieScalarFieldEnum | GenreMovieScalarFieldEnum[]
  }

  /**
   * GenreMovie findMany
   */
  export type GenreMovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * Filter, which GenreMovies to fetch.
     */
    where?: GenreMovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GenreMovies to fetch.
     */
    orderBy?: GenreMovieOrderByWithRelationInput | GenreMovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GenreMovies.
     */
    cursor?: GenreMovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GenreMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GenreMovies.
     */
    skip?: number
    distinct?: GenreMovieScalarFieldEnum | GenreMovieScalarFieldEnum[]
  }

  /**
   * GenreMovie create
   */
  export type GenreMovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * The data needed to create a GenreMovie.
     */
    data: XOR<GenreMovieCreateInput, GenreMovieUncheckedCreateInput>
  }

  /**
   * GenreMovie createMany
   */
  export type GenreMovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GenreMovies.
     */
    data: GenreMovieCreateManyInput | GenreMovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GenreMovie update
   */
  export type GenreMovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * The data needed to update a GenreMovie.
     */
    data: XOR<GenreMovieUpdateInput, GenreMovieUncheckedUpdateInput>
    /**
     * Choose, which GenreMovie to update.
     */
    where: GenreMovieWhereUniqueInput
  }

  /**
   * GenreMovie updateMany
   */
  export type GenreMovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GenreMovies.
     */
    data: XOR<GenreMovieUpdateManyMutationInput, GenreMovieUncheckedUpdateManyInput>
    /**
     * Filter which GenreMovies to update
     */
    where?: GenreMovieWhereInput
    /**
     * Limit how many GenreMovies to update.
     */
    limit?: number
  }

  /**
   * GenreMovie upsert
   */
  export type GenreMovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * The filter to search for the GenreMovie to update in case it exists.
     */
    where: GenreMovieWhereUniqueInput
    /**
     * In case the GenreMovie found by the `where` argument doesn't exist, create a new GenreMovie with this data.
     */
    create: XOR<GenreMovieCreateInput, GenreMovieUncheckedCreateInput>
    /**
     * In case the GenreMovie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreMovieUpdateInput, GenreMovieUncheckedUpdateInput>
  }

  /**
   * GenreMovie delete
   */
  export type GenreMovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
    /**
     * Filter which GenreMovie to delete.
     */
    where: GenreMovieWhereUniqueInput
  }

  /**
   * GenreMovie deleteMany
   */
  export type GenreMovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GenreMovies to delete
     */
    where?: GenreMovieWhereInput
    /**
     * Limit how many GenreMovies to delete.
     */
    limit?: number
  }

  /**
   * GenreMovie without action
   */
  export type GenreMovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreMovie
     */
    select?: GenreMovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GenreMovie
     */
    omit?: GenreMovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreMovieInclude<ExtArgs> | null
  }


  /**
   * Model MovieDetail
   */

  export type AggregateMovieDetail = {
    _count: MovieDetailCountAggregateOutputType | null
    _avg: MovieDetailAvgAggregateOutputType | null
    _sum: MovieDetailSumAggregateOutputType | null
    _min: MovieDetailMinAggregateOutputType | null
    _max: MovieDetailMaxAggregateOutputType | null
  }

  export type MovieDetailAvgAggregateOutputType = {
    voteCount: number | null
    voteAverage: number | null
    popularity: number | null
  }

  export type MovieDetailSumAggregateOutputType = {
    voteCount: number | null
    voteAverage: number | null
    popularity: number | null
  }

  export type MovieDetailMinAggregateOutputType = {
    movieId: string | null
    voteCount: number | null
    voteAverage: number | null
    popularity: number | null
    releaseDate: Date | null
    posterPath: string | null
  }

  export type MovieDetailMaxAggregateOutputType = {
    movieId: string | null
    voteCount: number | null
    voteAverage: number | null
    popularity: number | null
    releaseDate: Date | null
    posterPath: string | null
  }

  export type MovieDetailCountAggregateOutputType = {
    movieId: number
    voteCount: number
    voteAverage: number
    popularity: number
    releaseDate: number
    posterPath: number
    _all: number
  }


  export type MovieDetailAvgAggregateInputType = {
    voteCount?: true
    voteAverage?: true
    popularity?: true
  }

  export type MovieDetailSumAggregateInputType = {
    voteCount?: true
    voteAverage?: true
    popularity?: true
  }

  export type MovieDetailMinAggregateInputType = {
    movieId?: true
    voteCount?: true
    voteAverage?: true
    popularity?: true
    releaseDate?: true
    posterPath?: true
  }

  export type MovieDetailMaxAggregateInputType = {
    movieId?: true
    voteCount?: true
    voteAverage?: true
    popularity?: true
    releaseDate?: true
    posterPath?: true
  }

  export type MovieDetailCountAggregateInputType = {
    movieId?: true
    voteCount?: true
    voteAverage?: true
    popularity?: true
    releaseDate?: true
    posterPath?: true
    _all?: true
  }

  export type MovieDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieDetail to aggregate.
     */
    where?: MovieDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailOrderByWithRelationInput | MovieDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieDetails
    **/
    _count?: true | MovieDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieDetailMaxAggregateInputType
  }

  export type GetMovieDetailAggregateType<T extends MovieDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieDetail[P]>
      : GetScalarType<T[P], AggregateMovieDetail[P]>
  }




  export type MovieDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieDetailWhereInput
    orderBy?: MovieDetailOrderByWithAggregationInput | MovieDetailOrderByWithAggregationInput[]
    by: MovieDetailScalarFieldEnum[] | MovieDetailScalarFieldEnum
    having?: MovieDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieDetailCountAggregateInputType | true
    _avg?: MovieDetailAvgAggregateInputType
    _sum?: MovieDetailSumAggregateInputType
    _min?: MovieDetailMinAggregateInputType
    _max?: MovieDetailMaxAggregateInputType
  }

  export type MovieDetailGroupByOutputType = {
    movieId: string
    voteCount: number
    voteAverage: number
    popularity: number
    releaseDate: Date
    posterPath: string | null
    _count: MovieDetailCountAggregateOutputType | null
    _avg: MovieDetailAvgAggregateOutputType | null
    _sum: MovieDetailSumAggregateOutputType | null
    _min: MovieDetailMinAggregateOutputType | null
    _max: MovieDetailMaxAggregateOutputType | null
  }

  type GetMovieDetailGroupByPayload<T extends MovieDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieDetailGroupByOutputType[P]>
            : GetScalarType<T[P], MovieDetailGroupByOutputType[P]>
        }
      >
    >


  export type MovieDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    voteCount?: boolean
    voteAverage?: boolean
    popularity?: boolean
    releaseDate?: boolean
    posterPath?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieDetail"]>



  export type MovieDetailSelectScalar = {
    movieId?: boolean
    voteCount?: boolean
    voteAverage?: boolean
    popularity?: boolean
    releaseDate?: boolean
    posterPath?: boolean
  }

  export type MovieDetailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movieId" | "voteCount" | "voteAverage" | "popularity" | "releaseDate" | "posterPath", ExtArgs["result"]["movieDetail"]>
  export type MovieDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $MovieDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieDetail"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: string
      voteCount: number
      voteAverage: number
      popularity: number
      releaseDate: Date
      posterPath: string | null
    }, ExtArgs["result"]["movieDetail"]>
    composites: {}
  }

  type MovieDetailGetPayload<S extends boolean | null | undefined | MovieDetailDefaultArgs> = $Result.GetResult<Prisma.$MovieDetailPayload, S>

  type MovieDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieDetailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieDetailCountAggregateInputType | true
    }

  export interface MovieDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieDetail'], meta: { name: 'MovieDetail' } }
    /**
     * Find zero or one MovieDetail that matches the filter.
     * @param {MovieDetailFindUniqueArgs} args - Arguments to find a MovieDetail
     * @example
     * // Get one MovieDetail
     * const movieDetail = await prisma.movieDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieDetailFindUniqueArgs>(args: SelectSubset<T, MovieDetailFindUniqueArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieDetail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieDetailFindUniqueOrThrowArgs} args - Arguments to find a MovieDetail
     * @example
     * // Get one MovieDetail
     * const movieDetail = await prisma.movieDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailFindFirstArgs} args - Arguments to find a MovieDetail
     * @example
     * // Get one MovieDetail
     * const movieDetail = await prisma.movieDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieDetailFindFirstArgs>(args?: SelectSubset<T, MovieDetailFindFirstArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailFindFirstOrThrowArgs} args - Arguments to find a MovieDetail
     * @example
     * // Get one MovieDetail
     * const movieDetail = await prisma.movieDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieDetails
     * const movieDetails = await prisma.movieDetail.findMany()
     * 
     * // Get first 10 MovieDetails
     * const movieDetails = await prisma.movieDetail.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieDetailWithMovieIdOnly = await prisma.movieDetail.findMany({ select: { movieId: true } })
     * 
     */
    findMany<T extends MovieDetailFindManyArgs>(args?: SelectSubset<T, MovieDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieDetail.
     * @param {MovieDetailCreateArgs} args - Arguments to create a MovieDetail.
     * @example
     * // Create one MovieDetail
     * const MovieDetail = await prisma.movieDetail.create({
     *   data: {
     *     // ... data to create a MovieDetail
     *   }
     * })
     * 
     */
    create<T extends MovieDetailCreateArgs>(args: SelectSubset<T, MovieDetailCreateArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieDetails.
     * @param {MovieDetailCreateManyArgs} args - Arguments to create many MovieDetails.
     * @example
     * // Create many MovieDetails
     * const movieDetail = await prisma.movieDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieDetailCreateManyArgs>(args?: SelectSubset<T, MovieDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieDetail.
     * @param {MovieDetailDeleteArgs} args - Arguments to delete one MovieDetail.
     * @example
     * // Delete one MovieDetail
     * const MovieDetail = await prisma.movieDetail.delete({
     *   where: {
     *     // ... filter to delete one MovieDetail
     *   }
     * })
     * 
     */
    delete<T extends MovieDetailDeleteArgs>(args: SelectSubset<T, MovieDetailDeleteArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieDetail.
     * @param {MovieDetailUpdateArgs} args - Arguments to update one MovieDetail.
     * @example
     * // Update one MovieDetail
     * const movieDetail = await prisma.movieDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieDetailUpdateArgs>(args: SelectSubset<T, MovieDetailUpdateArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieDetails.
     * @param {MovieDetailDeleteManyArgs} args - Arguments to filter MovieDetails to delete.
     * @example
     * // Delete a few MovieDetails
     * const { count } = await prisma.movieDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDetailDeleteManyArgs>(args?: SelectSubset<T, MovieDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieDetails
     * const movieDetail = await prisma.movieDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieDetailUpdateManyArgs>(args: SelectSubset<T, MovieDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieDetail.
     * @param {MovieDetailUpsertArgs} args - Arguments to update or create a MovieDetail.
     * @example
     * // Update or create a MovieDetail
     * const movieDetail = await prisma.movieDetail.upsert({
     *   create: {
     *     // ... data to create a MovieDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieDetail we want to update
     *   }
     * })
     */
    upsert<T extends MovieDetailUpsertArgs>(args: SelectSubset<T, MovieDetailUpsertArgs<ExtArgs>>): Prisma__MovieDetailClient<$Result.GetResult<Prisma.$MovieDetailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailCountArgs} args - Arguments to filter MovieDetails to count.
     * @example
     * // Count the number of MovieDetails
     * const count = await prisma.movieDetail.count({
     *   where: {
     *     // ... the filter for the MovieDetails we want to count
     *   }
     * })
    **/
    count<T extends MovieDetailCountArgs>(
      args?: Subset<T, MovieDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieDetailAggregateArgs>(args: Subset<T, MovieDetailAggregateArgs>): Prisma.PrismaPromise<GetMovieDetailAggregateType<T>>

    /**
     * Group by MovieDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieDetailGroupByArgs['orderBy'] }
        : { orderBy?: MovieDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieDetail model
   */
  readonly fields: MovieDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieDetail model
   */
  interface MovieDetailFieldRefs {
    readonly movieId: FieldRef<"MovieDetail", 'String'>
    readonly voteCount: FieldRef<"MovieDetail", 'Int'>
    readonly voteAverage: FieldRef<"MovieDetail", 'Float'>
    readonly popularity: FieldRef<"MovieDetail", 'Float'>
    readonly releaseDate: FieldRef<"MovieDetail", 'DateTime'>
    readonly posterPath: FieldRef<"MovieDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovieDetail findUnique
   */
  export type MovieDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetail to fetch.
     */
    where: MovieDetailWhereUniqueInput
  }

  /**
   * MovieDetail findUniqueOrThrow
   */
  export type MovieDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetail to fetch.
     */
    where: MovieDetailWhereUniqueInput
  }

  /**
   * MovieDetail findFirst
   */
  export type MovieDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetail to fetch.
     */
    where?: MovieDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailOrderByWithRelationInput | MovieDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieDetails.
     */
    cursor?: MovieDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieDetails.
     */
    distinct?: MovieDetailScalarFieldEnum | MovieDetailScalarFieldEnum[]
  }

  /**
   * MovieDetail findFirstOrThrow
   */
  export type MovieDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetail to fetch.
     */
    where?: MovieDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailOrderByWithRelationInput | MovieDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieDetails.
     */
    cursor?: MovieDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieDetails.
     */
    distinct?: MovieDetailScalarFieldEnum | MovieDetailScalarFieldEnum[]
  }

  /**
   * MovieDetail findMany
   */
  export type MovieDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetails to fetch.
     */
    where?: MovieDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailOrderByWithRelationInput | MovieDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieDetails.
     */
    cursor?: MovieDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    distinct?: MovieDetailScalarFieldEnum | MovieDetailScalarFieldEnum[]
  }

  /**
   * MovieDetail create
   */
  export type MovieDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieDetail.
     */
    data: XOR<MovieDetailCreateInput, MovieDetailUncheckedCreateInput>
  }

  /**
   * MovieDetail createMany
   */
  export type MovieDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieDetails.
     */
    data: MovieDetailCreateManyInput | MovieDetailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieDetail update
   */
  export type MovieDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieDetail.
     */
    data: XOR<MovieDetailUpdateInput, MovieDetailUncheckedUpdateInput>
    /**
     * Choose, which MovieDetail to update.
     */
    where: MovieDetailWhereUniqueInput
  }

  /**
   * MovieDetail updateMany
   */
  export type MovieDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieDetails.
     */
    data: XOR<MovieDetailUpdateManyMutationInput, MovieDetailUncheckedUpdateManyInput>
    /**
     * Filter which MovieDetails to update
     */
    where?: MovieDetailWhereInput
    /**
     * Limit how many MovieDetails to update.
     */
    limit?: number
  }

  /**
   * MovieDetail upsert
   */
  export type MovieDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieDetail to update in case it exists.
     */
    where: MovieDetailWhereUniqueInput
    /**
     * In case the MovieDetail found by the `where` argument doesn't exist, create a new MovieDetail with this data.
     */
    create: XOR<MovieDetailCreateInput, MovieDetailUncheckedCreateInput>
    /**
     * In case the MovieDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieDetailUpdateInput, MovieDetailUncheckedUpdateInput>
  }

  /**
   * MovieDetail delete
   */
  export type MovieDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
    /**
     * Filter which MovieDetail to delete.
     */
    where: MovieDetailWhereUniqueInput
  }

  /**
   * MovieDetail deleteMany
   */
  export type MovieDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieDetails to delete
     */
    where?: MovieDetailWhereInput
    /**
     * Limit how many MovieDetails to delete.
     */
    limit?: number
  }

  /**
   * MovieDetail without action
   */
  export type MovieDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetail
     */
    select?: MovieDetailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieDetail
     */
    omit?: MovieDetailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieDetailInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    movies?: boolean | Company$moviesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Company$moviesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      movies: Prisma.$MovieCompanyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movies<T extends Company$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Company$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.movies
   */
  export type Company$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    where?: MovieCompanyWhereInput
    orderBy?: MovieCompanyOrderByWithRelationInput | MovieCompanyOrderByWithRelationInput[]
    cursor?: MovieCompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieCompanyScalarFieldEnum | MovieCompanyScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model MovieCompany
   */

  export type AggregateMovieCompany = {
    _count: MovieCompanyCountAggregateOutputType | null
    _min: MovieCompanyMinAggregateOutputType | null
    _max: MovieCompanyMaxAggregateOutputType | null
  }

  export type MovieCompanyMinAggregateOutputType = {
    movieId: string | null
    companyId: string | null
  }

  export type MovieCompanyMaxAggregateOutputType = {
    movieId: string | null
    companyId: string | null
  }

  export type MovieCompanyCountAggregateOutputType = {
    movieId: number
    companyId: number
    _all: number
  }


  export type MovieCompanyMinAggregateInputType = {
    movieId?: true
    companyId?: true
  }

  export type MovieCompanyMaxAggregateInputType = {
    movieId?: true
    companyId?: true
  }

  export type MovieCompanyCountAggregateInputType = {
    movieId?: true
    companyId?: true
    _all?: true
  }

  export type MovieCompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieCompany to aggregate.
     */
    where?: MovieCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCompanies to fetch.
     */
    orderBy?: MovieCompanyOrderByWithRelationInput | MovieCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieCompanies
    **/
    _count?: true | MovieCompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieCompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieCompanyMaxAggregateInputType
  }

  export type GetMovieCompanyAggregateType<T extends MovieCompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieCompany[P]>
      : GetScalarType<T[P], AggregateMovieCompany[P]>
  }




  export type MovieCompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCompanyWhereInput
    orderBy?: MovieCompanyOrderByWithAggregationInput | MovieCompanyOrderByWithAggregationInput[]
    by: MovieCompanyScalarFieldEnum[] | MovieCompanyScalarFieldEnum
    having?: MovieCompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCompanyCountAggregateInputType | true
    _min?: MovieCompanyMinAggregateInputType
    _max?: MovieCompanyMaxAggregateInputType
  }

  export type MovieCompanyGroupByOutputType = {
    movieId: string
    companyId: string
    _count: MovieCompanyCountAggregateOutputType | null
    _min: MovieCompanyMinAggregateOutputType | null
    _max: MovieCompanyMaxAggregateOutputType | null
  }

  type GetMovieCompanyGroupByPayload<T extends MovieCompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieCompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieCompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieCompanyGroupByOutputType[P]>
            : GetScalarType<T[P], MovieCompanyGroupByOutputType[P]>
        }
      >
    >


  export type MovieCompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    companyId?: boolean
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieCompany"]>



  export type MovieCompanySelectScalar = {
    movieId?: boolean
    companyId?: boolean
  }

  export type MovieCompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"movieId" | "companyId", ExtArgs["result"]["movieCompany"]>
  export type MovieCompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieDefaultArgs<ExtArgs>
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $MovieCompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieCompany"
    objects: {
      movie: Prisma.$MoviePayload<ExtArgs>
      company: Prisma.$CompanyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: string
      companyId: string
    }, ExtArgs["result"]["movieCompany"]>
    composites: {}
  }

  type MovieCompanyGetPayload<S extends boolean | null | undefined | MovieCompanyDefaultArgs> = $Result.GetResult<Prisma.$MovieCompanyPayload, S>

  type MovieCompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieCompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCompanyCountAggregateInputType | true
    }

  export interface MovieCompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieCompany'], meta: { name: 'MovieCompany' } }
    /**
     * Find zero or one MovieCompany that matches the filter.
     * @param {MovieCompanyFindUniqueArgs} args - Arguments to find a MovieCompany
     * @example
     * // Get one MovieCompany
     * const movieCompany = await prisma.movieCompany.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieCompanyFindUniqueArgs>(args: SelectSubset<T, MovieCompanyFindUniqueArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MovieCompany that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieCompanyFindUniqueOrThrowArgs} args - Arguments to find a MovieCompany
     * @example
     * // Get one MovieCompany
     * const movieCompany = await prisma.movieCompany.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieCompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieCompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieCompany that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCompanyFindFirstArgs} args - Arguments to find a MovieCompany
     * @example
     * // Get one MovieCompany
     * const movieCompany = await prisma.movieCompany.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieCompanyFindFirstArgs>(args?: SelectSubset<T, MovieCompanyFindFirstArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MovieCompany that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCompanyFindFirstOrThrowArgs} args - Arguments to find a MovieCompany
     * @example
     * // Get one MovieCompany
     * const movieCompany = await prisma.movieCompany.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieCompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieCompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MovieCompanies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieCompanies
     * const movieCompanies = await prisma.movieCompany.findMany()
     * 
     * // Get first 10 MovieCompanies
     * const movieCompanies = await prisma.movieCompany.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieCompanyWithMovieIdOnly = await prisma.movieCompany.findMany({ select: { movieId: true } })
     * 
     */
    findMany<T extends MovieCompanyFindManyArgs>(args?: SelectSubset<T, MovieCompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MovieCompany.
     * @param {MovieCompanyCreateArgs} args - Arguments to create a MovieCompany.
     * @example
     * // Create one MovieCompany
     * const MovieCompany = await prisma.movieCompany.create({
     *   data: {
     *     // ... data to create a MovieCompany
     *   }
     * })
     * 
     */
    create<T extends MovieCompanyCreateArgs>(args: SelectSubset<T, MovieCompanyCreateArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MovieCompanies.
     * @param {MovieCompanyCreateManyArgs} args - Arguments to create many MovieCompanies.
     * @example
     * // Create many MovieCompanies
     * const movieCompany = await prisma.movieCompany.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCompanyCreateManyArgs>(args?: SelectSubset<T, MovieCompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieCompany.
     * @param {MovieCompanyDeleteArgs} args - Arguments to delete one MovieCompany.
     * @example
     * // Delete one MovieCompany
     * const MovieCompany = await prisma.movieCompany.delete({
     *   where: {
     *     // ... filter to delete one MovieCompany
     *   }
     * })
     * 
     */
    delete<T extends MovieCompanyDeleteArgs>(args: SelectSubset<T, MovieCompanyDeleteArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MovieCompany.
     * @param {MovieCompanyUpdateArgs} args - Arguments to update one MovieCompany.
     * @example
     * // Update one MovieCompany
     * const movieCompany = await prisma.movieCompany.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieCompanyUpdateArgs>(args: SelectSubset<T, MovieCompanyUpdateArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MovieCompanies.
     * @param {MovieCompanyDeleteManyArgs} args - Arguments to filter MovieCompanies to delete.
     * @example
     * // Delete a few MovieCompanies
     * const { count } = await prisma.movieCompany.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieCompanyDeleteManyArgs>(args?: SelectSubset<T, MovieCompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieCompanies
     * const movieCompany = await prisma.movieCompany.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieCompanyUpdateManyArgs>(args: SelectSubset<T, MovieCompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieCompany.
     * @param {MovieCompanyUpsertArgs} args - Arguments to update or create a MovieCompany.
     * @example
     * // Update or create a MovieCompany
     * const movieCompany = await prisma.movieCompany.upsert({
     *   create: {
     *     // ... data to create a MovieCompany
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieCompany we want to update
     *   }
     * })
     */
    upsert<T extends MovieCompanyUpsertArgs>(args: SelectSubset<T, MovieCompanyUpsertArgs<ExtArgs>>): Prisma__MovieCompanyClient<$Result.GetResult<Prisma.$MovieCompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MovieCompanies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCompanyCountArgs} args - Arguments to filter MovieCompanies to count.
     * @example
     * // Count the number of MovieCompanies
     * const count = await prisma.movieCompany.count({
     *   where: {
     *     // ... the filter for the MovieCompanies we want to count
     *   }
     * })
    **/
    count<T extends MovieCompanyCountArgs>(
      args?: Subset<T, MovieCompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieCompanyAggregateArgs>(args: Subset<T, MovieCompanyAggregateArgs>): Prisma.PrismaPromise<GetMovieCompanyAggregateType<T>>

    /**
     * Group by MovieCompany.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieCompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieCompanyGroupByArgs['orderBy'] }
        : { orderBy?: MovieCompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieCompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieCompany model
   */
  readonly fields: MovieCompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieCompany.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieCompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MovieCompany model
   */
  interface MovieCompanyFieldRefs {
    readonly movieId: FieldRef<"MovieCompany", 'String'>
    readonly companyId: FieldRef<"MovieCompany", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MovieCompany findUnique
   */
  export type MovieCompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * Filter, which MovieCompany to fetch.
     */
    where: MovieCompanyWhereUniqueInput
  }

  /**
   * MovieCompany findUniqueOrThrow
   */
  export type MovieCompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * Filter, which MovieCompany to fetch.
     */
    where: MovieCompanyWhereUniqueInput
  }

  /**
   * MovieCompany findFirst
   */
  export type MovieCompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * Filter, which MovieCompany to fetch.
     */
    where?: MovieCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCompanies to fetch.
     */
    orderBy?: MovieCompanyOrderByWithRelationInput | MovieCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieCompanies.
     */
    cursor?: MovieCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieCompanies.
     */
    distinct?: MovieCompanyScalarFieldEnum | MovieCompanyScalarFieldEnum[]
  }

  /**
   * MovieCompany findFirstOrThrow
   */
  export type MovieCompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * Filter, which MovieCompany to fetch.
     */
    where?: MovieCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCompanies to fetch.
     */
    orderBy?: MovieCompanyOrderByWithRelationInput | MovieCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieCompanies.
     */
    cursor?: MovieCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCompanies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieCompanies.
     */
    distinct?: MovieCompanyScalarFieldEnum | MovieCompanyScalarFieldEnum[]
  }

  /**
   * MovieCompany findMany
   */
  export type MovieCompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * Filter, which MovieCompanies to fetch.
     */
    where?: MovieCompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCompanies to fetch.
     */
    orderBy?: MovieCompanyOrderByWithRelationInput | MovieCompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieCompanies.
     */
    cursor?: MovieCompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCompanies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCompanies.
     */
    skip?: number
    distinct?: MovieCompanyScalarFieldEnum | MovieCompanyScalarFieldEnum[]
  }

  /**
   * MovieCompany create
   */
  export type MovieCompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieCompany.
     */
    data: XOR<MovieCompanyCreateInput, MovieCompanyUncheckedCreateInput>
  }

  /**
   * MovieCompany createMany
   */
  export type MovieCompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieCompanies.
     */
    data: MovieCompanyCreateManyInput | MovieCompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieCompany update
   */
  export type MovieCompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieCompany.
     */
    data: XOR<MovieCompanyUpdateInput, MovieCompanyUncheckedUpdateInput>
    /**
     * Choose, which MovieCompany to update.
     */
    where: MovieCompanyWhereUniqueInput
  }

  /**
   * MovieCompany updateMany
   */
  export type MovieCompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieCompanies.
     */
    data: XOR<MovieCompanyUpdateManyMutationInput, MovieCompanyUncheckedUpdateManyInput>
    /**
     * Filter which MovieCompanies to update
     */
    where?: MovieCompanyWhereInput
    /**
     * Limit how many MovieCompanies to update.
     */
    limit?: number
  }

  /**
   * MovieCompany upsert
   */
  export type MovieCompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieCompany to update in case it exists.
     */
    where: MovieCompanyWhereUniqueInput
    /**
     * In case the MovieCompany found by the `where` argument doesn't exist, create a new MovieCompany with this data.
     */
    create: XOR<MovieCompanyCreateInput, MovieCompanyUncheckedCreateInput>
    /**
     * In case the MovieCompany was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieCompanyUpdateInput, MovieCompanyUncheckedUpdateInput>
  }

  /**
   * MovieCompany delete
   */
  export type MovieCompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
    /**
     * Filter which MovieCompany to delete.
     */
    where: MovieCompanyWhereUniqueInput
  }

  /**
   * MovieCompany deleteMany
   */
  export type MovieCompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieCompanies to delete
     */
    where?: MovieCompanyWhereInput
    /**
     * Limit how many MovieCompanies to delete.
     */
    limit?: number
  }

  /**
   * MovieCompany without action
   */
  export type MovieCompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCompany
     */
    select?: MovieCompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MovieCompany
     */
    omit?: MovieCompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieCompanyInclude<ExtArgs> | null
  }


  /**
   * Model TrendingEntry
   */

  export type AggregateTrendingEntry = {
    _count: TrendingEntryCountAggregateOutputType | null
    _avg: TrendingEntryAvgAggregateOutputType | null
    _sum: TrendingEntrySumAggregateOutputType | null
    _min: TrendingEntryMinAggregateOutputType | null
    _max: TrendingEntryMaxAggregateOutputType | null
  }

  export type TrendingEntryAvgAggregateOutputType = {
    mode: number | null
  }

  export type TrendingEntrySumAggregateOutputType = {
    mode: number | null
  }

  export type TrendingEntryMinAggregateOutputType = {
    id: string | null
    datetime: Date | null
    mode: number | null
    languageId: string | null
  }

  export type TrendingEntryMaxAggregateOutputType = {
    id: string | null
    datetime: Date | null
    mode: number | null
    languageId: string | null
  }

  export type TrendingEntryCountAggregateOutputType = {
    id: number
    datetime: number
    mode: number
    languageId: number
    _all: number
  }


  export type TrendingEntryAvgAggregateInputType = {
    mode?: true
  }

  export type TrendingEntrySumAggregateInputType = {
    mode?: true
  }

  export type TrendingEntryMinAggregateInputType = {
    id?: true
    datetime?: true
    mode?: true
    languageId?: true
  }

  export type TrendingEntryMaxAggregateInputType = {
    id?: true
    datetime?: true
    mode?: true
    languageId?: true
  }

  export type TrendingEntryCountAggregateInputType = {
    id?: true
    datetime?: true
    mode?: true
    languageId?: true
    _all?: true
  }

  export type TrendingEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingEntry to aggregate.
     */
    where?: TrendingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingEntries to fetch.
     */
    orderBy?: TrendingEntryOrderByWithRelationInput | TrendingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrendingEntries
    **/
    _count?: true | TrendingEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrendingEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrendingEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendingEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendingEntryMaxAggregateInputType
  }

  export type GetTrendingEntryAggregateType<T extends TrendingEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateTrendingEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrendingEntry[P]>
      : GetScalarType<T[P], AggregateTrendingEntry[P]>
  }




  export type TrendingEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingEntryWhereInput
    orderBy?: TrendingEntryOrderByWithAggregationInput | TrendingEntryOrderByWithAggregationInput[]
    by: TrendingEntryScalarFieldEnum[] | TrendingEntryScalarFieldEnum
    having?: TrendingEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendingEntryCountAggregateInputType | true
    _avg?: TrendingEntryAvgAggregateInputType
    _sum?: TrendingEntrySumAggregateInputType
    _min?: TrendingEntryMinAggregateInputType
    _max?: TrendingEntryMaxAggregateInputType
  }

  export type TrendingEntryGroupByOutputType = {
    id: string
    datetime: Date
    mode: number
    languageId: string | null
    _count: TrendingEntryCountAggregateOutputType | null
    _avg: TrendingEntryAvgAggregateOutputType | null
    _sum: TrendingEntrySumAggregateOutputType | null
    _min: TrendingEntryMinAggregateOutputType | null
    _max: TrendingEntryMaxAggregateOutputType | null
  }

  type GetTrendingEntryGroupByPayload<T extends TrendingEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendingEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendingEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendingEntryGroupByOutputType[P]>
            : GetScalarType<T[P], TrendingEntryGroupByOutputType[P]>
        }
      >
    >


  export type TrendingEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    datetime?: boolean
    mode?: boolean
    languageId?: boolean
    language?: boolean | TrendingEntry$languageArgs<ExtArgs>
    movies?: boolean | TrendingEntry$moviesArgs<ExtArgs>
    _count?: boolean | TrendingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendingEntry"]>



  export type TrendingEntrySelectScalar = {
    id?: boolean
    datetime?: boolean
    mode?: boolean
    languageId?: boolean
  }

  export type TrendingEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "datetime" | "mode" | "languageId", ExtArgs["result"]["trendingEntry"]>
  export type TrendingEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    language?: boolean | TrendingEntry$languageArgs<ExtArgs>
    movies?: boolean | TrendingEntry$moviesArgs<ExtArgs>
    _count?: boolean | TrendingEntryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TrendingEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrendingEntry"
    objects: {
      language: Prisma.$LanguagePayload<ExtArgs> | null
      movies: Prisma.$TrendingStoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      datetime: Date
      mode: number
      languageId: string | null
    }, ExtArgs["result"]["trendingEntry"]>
    composites: {}
  }

  type TrendingEntryGetPayload<S extends boolean | null | undefined | TrendingEntryDefaultArgs> = $Result.GetResult<Prisma.$TrendingEntryPayload, S>

  type TrendingEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrendingEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrendingEntryCountAggregateInputType | true
    }

  export interface TrendingEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrendingEntry'], meta: { name: 'TrendingEntry' } }
    /**
     * Find zero or one TrendingEntry that matches the filter.
     * @param {TrendingEntryFindUniqueArgs} args - Arguments to find a TrendingEntry
     * @example
     * // Get one TrendingEntry
     * const trendingEntry = await prisma.trendingEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendingEntryFindUniqueArgs>(args: SelectSubset<T, TrendingEntryFindUniqueArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrendingEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrendingEntryFindUniqueOrThrowArgs} args - Arguments to find a TrendingEntry
     * @example
     * // Get one TrendingEntry
     * const trendingEntry = await prisma.trendingEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendingEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendingEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendingEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingEntryFindFirstArgs} args - Arguments to find a TrendingEntry
     * @example
     * // Get one TrendingEntry
     * const trendingEntry = await prisma.trendingEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendingEntryFindFirstArgs>(args?: SelectSubset<T, TrendingEntryFindFirstArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendingEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingEntryFindFirstOrThrowArgs} args - Arguments to find a TrendingEntry
     * @example
     * // Get one TrendingEntry
     * const trendingEntry = await prisma.trendingEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendingEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendingEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrendingEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrendingEntries
     * const trendingEntries = await prisma.trendingEntry.findMany()
     * 
     * // Get first 10 TrendingEntries
     * const trendingEntries = await prisma.trendingEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trendingEntryWithIdOnly = await prisma.trendingEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrendingEntryFindManyArgs>(args?: SelectSubset<T, TrendingEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrendingEntry.
     * @param {TrendingEntryCreateArgs} args - Arguments to create a TrendingEntry.
     * @example
     * // Create one TrendingEntry
     * const TrendingEntry = await prisma.trendingEntry.create({
     *   data: {
     *     // ... data to create a TrendingEntry
     *   }
     * })
     * 
     */
    create<T extends TrendingEntryCreateArgs>(args: SelectSubset<T, TrendingEntryCreateArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrendingEntries.
     * @param {TrendingEntryCreateManyArgs} args - Arguments to create many TrendingEntries.
     * @example
     * // Create many TrendingEntries
     * const trendingEntry = await prisma.trendingEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendingEntryCreateManyArgs>(args?: SelectSubset<T, TrendingEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrendingEntry.
     * @param {TrendingEntryDeleteArgs} args - Arguments to delete one TrendingEntry.
     * @example
     * // Delete one TrendingEntry
     * const TrendingEntry = await prisma.trendingEntry.delete({
     *   where: {
     *     // ... filter to delete one TrendingEntry
     *   }
     * })
     * 
     */
    delete<T extends TrendingEntryDeleteArgs>(args: SelectSubset<T, TrendingEntryDeleteArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrendingEntry.
     * @param {TrendingEntryUpdateArgs} args - Arguments to update one TrendingEntry.
     * @example
     * // Update one TrendingEntry
     * const trendingEntry = await prisma.trendingEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendingEntryUpdateArgs>(args: SelectSubset<T, TrendingEntryUpdateArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrendingEntries.
     * @param {TrendingEntryDeleteManyArgs} args - Arguments to filter TrendingEntries to delete.
     * @example
     * // Delete a few TrendingEntries
     * const { count } = await prisma.trendingEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendingEntryDeleteManyArgs>(args?: SelectSubset<T, TrendingEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrendingEntries
     * const trendingEntry = await prisma.trendingEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendingEntryUpdateManyArgs>(args: SelectSubset<T, TrendingEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrendingEntry.
     * @param {TrendingEntryUpsertArgs} args - Arguments to update or create a TrendingEntry.
     * @example
     * // Update or create a TrendingEntry
     * const trendingEntry = await prisma.trendingEntry.upsert({
     *   create: {
     *     // ... data to create a TrendingEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrendingEntry we want to update
     *   }
     * })
     */
    upsert<T extends TrendingEntryUpsertArgs>(args: SelectSubset<T, TrendingEntryUpsertArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrendingEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingEntryCountArgs} args - Arguments to filter TrendingEntries to count.
     * @example
     * // Count the number of TrendingEntries
     * const count = await prisma.trendingEntry.count({
     *   where: {
     *     // ... the filter for the TrendingEntries we want to count
     *   }
     * })
    **/
    count<T extends TrendingEntryCountArgs>(
      args?: Subset<T, TrendingEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendingEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrendingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrendingEntryAggregateArgs>(args: Subset<T, TrendingEntryAggregateArgs>): Prisma.PrismaPromise<GetTrendingEntryAggregateType<T>>

    /**
     * Group by TrendingEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrendingEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendingEntryGroupByArgs['orderBy'] }
        : { orderBy?: TrendingEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrendingEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendingEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrendingEntry model
   */
  readonly fields: TrendingEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrendingEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendingEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    language<T extends TrendingEntry$languageArgs<ExtArgs> = {}>(args?: Subset<T, TrendingEntry$languageArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    movies<T extends TrendingEntry$moviesArgs<ExtArgs> = {}>(args?: Subset<T, TrendingEntry$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrendingEntry model
   */
  interface TrendingEntryFieldRefs {
    readonly id: FieldRef<"TrendingEntry", 'String'>
    readonly datetime: FieldRef<"TrendingEntry", 'DateTime'>
    readonly mode: FieldRef<"TrendingEntry", 'Int'>
    readonly languageId: FieldRef<"TrendingEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TrendingEntry findUnique
   */
  export type TrendingEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingEntry to fetch.
     */
    where: TrendingEntryWhereUniqueInput
  }

  /**
   * TrendingEntry findUniqueOrThrow
   */
  export type TrendingEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingEntry to fetch.
     */
    where: TrendingEntryWhereUniqueInput
  }

  /**
   * TrendingEntry findFirst
   */
  export type TrendingEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingEntry to fetch.
     */
    where?: TrendingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingEntries to fetch.
     */
    orderBy?: TrendingEntryOrderByWithRelationInput | TrendingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingEntries.
     */
    cursor?: TrendingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingEntries.
     */
    distinct?: TrendingEntryScalarFieldEnum | TrendingEntryScalarFieldEnum[]
  }

  /**
   * TrendingEntry findFirstOrThrow
   */
  export type TrendingEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingEntry to fetch.
     */
    where?: TrendingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingEntries to fetch.
     */
    orderBy?: TrendingEntryOrderByWithRelationInput | TrendingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingEntries.
     */
    cursor?: TrendingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingEntries.
     */
    distinct?: TrendingEntryScalarFieldEnum | TrendingEntryScalarFieldEnum[]
  }

  /**
   * TrendingEntry findMany
   */
  export type TrendingEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingEntries to fetch.
     */
    where?: TrendingEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingEntries to fetch.
     */
    orderBy?: TrendingEntryOrderByWithRelationInput | TrendingEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrendingEntries.
     */
    cursor?: TrendingEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingEntries.
     */
    skip?: number
    distinct?: TrendingEntryScalarFieldEnum | TrendingEntryScalarFieldEnum[]
  }

  /**
   * TrendingEntry create
   */
  export type TrendingEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a TrendingEntry.
     */
    data: XOR<TrendingEntryCreateInput, TrendingEntryUncheckedCreateInput>
  }

  /**
   * TrendingEntry createMany
   */
  export type TrendingEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrendingEntries.
     */
    data: TrendingEntryCreateManyInput | TrendingEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrendingEntry update
   */
  export type TrendingEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a TrendingEntry.
     */
    data: XOR<TrendingEntryUpdateInput, TrendingEntryUncheckedUpdateInput>
    /**
     * Choose, which TrendingEntry to update.
     */
    where: TrendingEntryWhereUniqueInput
  }

  /**
   * TrendingEntry updateMany
   */
  export type TrendingEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrendingEntries.
     */
    data: XOR<TrendingEntryUpdateManyMutationInput, TrendingEntryUncheckedUpdateManyInput>
    /**
     * Filter which TrendingEntries to update
     */
    where?: TrendingEntryWhereInput
    /**
     * Limit how many TrendingEntries to update.
     */
    limit?: number
  }

  /**
   * TrendingEntry upsert
   */
  export type TrendingEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the TrendingEntry to update in case it exists.
     */
    where: TrendingEntryWhereUniqueInput
    /**
     * In case the TrendingEntry found by the `where` argument doesn't exist, create a new TrendingEntry with this data.
     */
    create: XOR<TrendingEntryCreateInput, TrendingEntryUncheckedCreateInput>
    /**
     * In case the TrendingEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendingEntryUpdateInput, TrendingEntryUncheckedUpdateInput>
  }

  /**
   * TrendingEntry delete
   */
  export type TrendingEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
    /**
     * Filter which TrendingEntry to delete.
     */
    where: TrendingEntryWhereUniqueInput
  }

  /**
   * TrendingEntry deleteMany
   */
  export type TrendingEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingEntries to delete
     */
    where?: TrendingEntryWhereInput
    /**
     * Limit how many TrendingEntries to delete.
     */
    limit?: number
  }

  /**
   * TrendingEntry.language
   */
  export type TrendingEntry$languageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    where?: LanguageWhereInput
  }

  /**
   * TrendingEntry.movies
   */
  export type TrendingEntry$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    where?: TrendingStoryWhereInput
    orderBy?: TrendingStoryOrderByWithRelationInput | TrendingStoryOrderByWithRelationInput[]
    cursor?: TrendingStoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrendingStoryScalarFieldEnum | TrendingStoryScalarFieldEnum[]
  }

  /**
   * TrendingEntry without action
   */
  export type TrendingEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingEntry
     */
    select?: TrendingEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingEntry
     */
    omit?: TrendingEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingEntryInclude<ExtArgs> | null
  }


  /**
   * Model TrendingStory
   */

  export type AggregateTrendingStory = {
    _count: TrendingStoryCountAggregateOutputType | null
    _avg: TrendingStoryAvgAggregateOutputType | null
    _sum: TrendingStorySumAggregateOutputType | null
    _min: TrendingStoryMinAggregateOutputType | null
    _max: TrendingStoryMaxAggregateOutputType | null
  }

  export type TrendingStoryAvgAggregateOutputType = {
    votesCount: number | null
    votesAverage: number | null
    popularity: number | null
    page: number | null
    rank: number | null
    rankPage: number | null
  }

  export type TrendingStorySumAggregateOutputType = {
    votesCount: number | null
    votesAverage: number | null
    popularity: number | null
    page: number | null
    rank: number | null
    rankPage: number | null
  }

  export type TrendingStoryMinAggregateOutputType = {
    trendingId: string | null
    movieId: string | null
    votesCount: number | null
    votesAverage: number | null
    popularity: number | null
    page: number | null
    rank: number | null
    rankPage: number | null
  }

  export type TrendingStoryMaxAggregateOutputType = {
    trendingId: string | null
    movieId: string | null
    votesCount: number | null
    votesAverage: number | null
    popularity: number | null
    page: number | null
    rank: number | null
    rankPage: number | null
  }

  export type TrendingStoryCountAggregateOutputType = {
    trendingId: number
    movieId: number
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
    _all: number
  }


  export type TrendingStoryAvgAggregateInputType = {
    votesCount?: true
    votesAverage?: true
    popularity?: true
    page?: true
    rank?: true
    rankPage?: true
  }

  export type TrendingStorySumAggregateInputType = {
    votesCount?: true
    votesAverage?: true
    popularity?: true
    page?: true
    rank?: true
    rankPage?: true
  }

  export type TrendingStoryMinAggregateInputType = {
    trendingId?: true
    movieId?: true
    votesCount?: true
    votesAverage?: true
    popularity?: true
    page?: true
    rank?: true
    rankPage?: true
  }

  export type TrendingStoryMaxAggregateInputType = {
    trendingId?: true
    movieId?: true
    votesCount?: true
    votesAverage?: true
    popularity?: true
    page?: true
    rank?: true
    rankPage?: true
  }

  export type TrendingStoryCountAggregateInputType = {
    trendingId?: true
    movieId?: true
    votesCount?: true
    votesAverage?: true
    popularity?: true
    page?: true
    rank?: true
    rankPage?: true
    _all?: true
  }

  export type TrendingStoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingStory to aggregate.
     */
    where?: TrendingStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingStories to fetch.
     */
    orderBy?: TrendingStoryOrderByWithRelationInput | TrendingStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrendingStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrendingStories
    **/
    _count?: true | TrendingStoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrendingStoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrendingStorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrendingStoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrendingStoryMaxAggregateInputType
  }

  export type GetTrendingStoryAggregateType<T extends TrendingStoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTrendingStory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrendingStory[P]>
      : GetScalarType<T[P], AggregateTrendingStory[P]>
  }




  export type TrendingStoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrendingStoryWhereInput
    orderBy?: TrendingStoryOrderByWithAggregationInput | TrendingStoryOrderByWithAggregationInput[]
    by: TrendingStoryScalarFieldEnum[] | TrendingStoryScalarFieldEnum
    having?: TrendingStoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrendingStoryCountAggregateInputType | true
    _avg?: TrendingStoryAvgAggregateInputType
    _sum?: TrendingStorySumAggregateInputType
    _min?: TrendingStoryMinAggregateInputType
    _max?: TrendingStoryMaxAggregateInputType
  }

  export type TrendingStoryGroupByOutputType = {
    trendingId: string
    movieId: string
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
    _count: TrendingStoryCountAggregateOutputType | null
    _avg: TrendingStoryAvgAggregateOutputType | null
    _sum: TrendingStorySumAggregateOutputType | null
    _min: TrendingStoryMinAggregateOutputType | null
    _max: TrendingStoryMaxAggregateOutputType | null
  }

  type GetTrendingStoryGroupByPayload<T extends TrendingStoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrendingStoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrendingStoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrendingStoryGroupByOutputType[P]>
            : GetScalarType<T[P], TrendingStoryGroupByOutputType[P]>
        }
      >
    >


  export type TrendingStorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    trendingId?: boolean
    movieId?: boolean
    votesCount?: boolean
    votesAverage?: boolean
    popularity?: boolean
    page?: boolean
    rank?: boolean
    rankPage?: boolean
    trending?: boolean | TrendingEntryDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trendingStory"]>



  export type TrendingStorySelectScalar = {
    trendingId?: boolean
    movieId?: boolean
    votesCount?: boolean
    votesAverage?: boolean
    popularity?: boolean
    page?: boolean
    rank?: boolean
    rankPage?: boolean
  }

  export type TrendingStoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"trendingId" | "movieId" | "votesCount" | "votesAverage" | "popularity" | "page" | "rank" | "rankPage", ExtArgs["result"]["trendingStory"]>
  export type TrendingStoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trending?: boolean | TrendingEntryDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $TrendingStoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrendingStory"
    objects: {
      trending: Prisma.$TrendingEntryPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      trendingId: string
      movieId: string
      votesCount: number
      votesAverage: number
      popularity: number
      page: number
      rank: number
      rankPage: number
    }, ExtArgs["result"]["trendingStory"]>
    composites: {}
  }

  type TrendingStoryGetPayload<S extends boolean | null | undefined | TrendingStoryDefaultArgs> = $Result.GetResult<Prisma.$TrendingStoryPayload, S>

  type TrendingStoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrendingStoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrendingStoryCountAggregateInputType | true
    }

  export interface TrendingStoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrendingStory'], meta: { name: 'TrendingStory' } }
    /**
     * Find zero or one TrendingStory that matches the filter.
     * @param {TrendingStoryFindUniqueArgs} args - Arguments to find a TrendingStory
     * @example
     * // Get one TrendingStory
     * const trendingStory = await prisma.trendingStory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrendingStoryFindUniqueArgs>(args: SelectSubset<T, TrendingStoryFindUniqueArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrendingStory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrendingStoryFindUniqueOrThrowArgs} args - Arguments to find a TrendingStory
     * @example
     * // Get one TrendingStory
     * const trendingStory = await prisma.trendingStory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrendingStoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TrendingStoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendingStory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingStoryFindFirstArgs} args - Arguments to find a TrendingStory
     * @example
     * // Get one TrendingStory
     * const trendingStory = await prisma.trendingStory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrendingStoryFindFirstArgs>(args?: SelectSubset<T, TrendingStoryFindFirstArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrendingStory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingStoryFindFirstOrThrowArgs} args - Arguments to find a TrendingStory
     * @example
     * // Get one TrendingStory
     * const trendingStory = await prisma.trendingStory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrendingStoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TrendingStoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrendingStories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingStoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrendingStories
     * const trendingStories = await prisma.trendingStory.findMany()
     * 
     * // Get first 10 TrendingStories
     * const trendingStories = await prisma.trendingStory.findMany({ take: 10 })
     * 
     * // Only select the `trendingId`
     * const trendingStoryWithTrendingIdOnly = await prisma.trendingStory.findMany({ select: { trendingId: true } })
     * 
     */
    findMany<T extends TrendingStoryFindManyArgs>(args?: SelectSubset<T, TrendingStoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrendingStory.
     * @param {TrendingStoryCreateArgs} args - Arguments to create a TrendingStory.
     * @example
     * // Create one TrendingStory
     * const TrendingStory = await prisma.trendingStory.create({
     *   data: {
     *     // ... data to create a TrendingStory
     *   }
     * })
     * 
     */
    create<T extends TrendingStoryCreateArgs>(args: SelectSubset<T, TrendingStoryCreateArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrendingStories.
     * @param {TrendingStoryCreateManyArgs} args - Arguments to create many TrendingStories.
     * @example
     * // Create many TrendingStories
     * const trendingStory = await prisma.trendingStory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrendingStoryCreateManyArgs>(args?: SelectSubset<T, TrendingStoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrendingStory.
     * @param {TrendingStoryDeleteArgs} args - Arguments to delete one TrendingStory.
     * @example
     * // Delete one TrendingStory
     * const TrendingStory = await prisma.trendingStory.delete({
     *   where: {
     *     // ... filter to delete one TrendingStory
     *   }
     * })
     * 
     */
    delete<T extends TrendingStoryDeleteArgs>(args: SelectSubset<T, TrendingStoryDeleteArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrendingStory.
     * @param {TrendingStoryUpdateArgs} args - Arguments to update one TrendingStory.
     * @example
     * // Update one TrendingStory
     * const trendingStory = await prisma.trendingStory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrendingStoryUpdateArgs>(args: SelectSubset<T, TrendingStoryUpdateArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrendingStories.
     * @param {TrendingStoryDeleteManyArgs} args - Arguments to filter TrendingStories to delete.
     * @example
     * // Delete a few TrendingStories
     * const { count } = await prisma.trendingStory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrendingStoryDeleteManyArgs>(args?: SelectSubset<T, TrendingStoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrendingStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingStoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrendingStories
     * const trendingStory = await prisma.trendingStory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrendingStoryUpdateManyArgs>(args: SelectSubset<T, TrendingStoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrendingStory.
     * @param {TrendingStoryUpsertArgs} args - Arguments to update or create a TrendingStory.
     * @example
     * // Update or create a TrendingStory
     * const trendingStory = await prisma.trendingStory.upsert({
     *   create: {
     *     // ... data to create a TrendingStory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrendingStory we want to update
     *   }
     * })
     */
    upsert<T extends TrendingStoryUpsertArgs>(args: SelectSubset<T, TrendingStoryUpsertArgs<ExtArgs>>): Prisma__TrendingStoryClient<$Result.GetResult<Prisma.$TrendingStoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrendingStories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingStoryCountArgs} args - Arguments to filter TrendingStories to count.
     * @example
     * // Count the number of TrendingStories
     * const count = await prisma.trendingStory.count({
     *   where: {
     *     // ... the filter for the TrendingStories we want to count
     *   }
     * })
    **/
    count<T extends TrendingStoryCountArgs>(
      args?: Subset<T, TrendingStoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrendingStoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrendingStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingStoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrendingStoryAggregateArgs>(args: Subset<T, TrendingStoryAggregateArgs>): Prisma.PrismaPromise<GetTrendingStoryAggregateType<T>>

    /**
     * Group by TrendingStory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrendingStoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrendingStoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrendingStoryGroupByArgs['orderBy'] }
        : { orderBy?: TrendingStoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrendingStoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrendingStoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrendingStory model
   */
  readonly fields: TrendingStoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrendingStory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrendingStoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trending<T extends TrendingEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TrendingEntryDefaultArgs<ExtArgs>>): Prisma__TrendingEntryClient<$Result.GetResult<Prisma.$TrendingEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrendingStory model
   */
  interface TrendingStoryFieldRefs {
    readonly trendingId: FieldRef<"TrendingStory", 'String'>
    readonly movieId: FieldRef<"TrendingStory", 'String'>
    readonly votesCount: FieldRef<"TrendingStory", 'Int'>
    readonly votesAverage: FieldRef<"TrendingStory", 'Float'>
    readonly popularity: FieldRef<"TrendingStory", 'Float'>
    readonly page: FieldRef<"TrendingStory", 'Int'>
    readonly rank: FieldRef<"TrendingStory", 'Int'>
    readonly rankPage: FieldRef<"TrendingStory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TrendingStory findUnique
   */
  export type TrendingStoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingStory to fetch.
     */
    where: TrendingStoryWhereUniqueInput
  }

  /**
   * TrendingStory findUniqueOrThrow
   */
  export type TrendingStoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingStory to fetch.
     */
    where: TrendingStoryWhereUniqueInput
  }

  /**
   * TrendingStory findFirst
   */
  export type TrendingStoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingStory to fetch.
     */
    where?: TrendingStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingStories to fetch.
     */
    orderBy?: TrendingStoryOrderByWithRelationInput | TrendingStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingStories.
     */
    cursor?: TrendingStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingStories.
     */
    distinct?: TrendingStoryScalarFieldEnum | TrendingStoryScalarFieldEnum[]
  }

  /**
   * TrendingStory findFirstOrThrow
   */
  export type TrendingStoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingStory to fetch.
     */
    where?: TrendingStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingStories to fetch.
     */
    orderBy?: TrendingStoryOrderByWithRelationInput | TrendingStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrendingStories.
     */
    cursor?: TrendingStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingStories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrendingStories.
     */
    distinct?: TrendingStoryScalarFieldEnum | TrendingStoryScalarFieldEnum[]
  }

  /**
   * TrendingStory findMany
   */
  export type TrendingStoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * Filter, which TrendingStories to fetch.
     */
    where?: TrendingStoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrendingStories to fetch.
     */
    orderBy?: TrendingStoryOrderByWithRelationInput | TrendingStoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrendingStories.
     */
    cursor?: TrendingStoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrendingStories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrendingStories.
     */
    skip?: number
    distinct?: TrendingStoryScalarFieldEnum | TrendingStoryScalarFieldEnum[]
  }

  /**
   * TrendingStory create
   */
  export type TrendingStoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TrendingStory.
     */
    data: XOR<TrendingStoryCreateInput, TrendingStoryUncheckedCreateInput>
  }

  /**
   * TrendingStory createMany
   */
  export type TrendingStoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrendingStories.
     */
    data: TrendingStoryCreateManyInput | TrendingStoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrendingStory update
   */
  export type TrendingStoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TrendingStory.
     */
    data: XOR<TrendingStoryUpdateInput, TrendingStoryUncheckedUpdateInput>
    /**
     * Choose, which TrendingStory to update.
     */
    where: TrendingStoryWhereUniqueInput
  }

  /**
   * TrendingStory updateMany
   */
  export type TrendingStoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrendingStories.
     */
    data: XOR<TrendingStoryUpdateManyMutationInput, TrendingStoryUncheckedUpdateManyInput>
    /**
     * Filter which TrendingStories to update
     */
    where?: TrendingStoryWhereInput
    /**
     * Limit how many TrendingStories to update.
     */
    limit?: number
  }

  /**
   * TrendingStory upsert
   */
  export type TrendingStoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TrendingStory to update in case it exists.
     */
    where: TrendingStoryWhereUniqueInput
    /**
     * In case the TrendingStory found by the `where` argument doesn't exist, create a new TrendingStory with this data.
     */
    create: XOR<TrendingStoryCreateInput, TrendingStoryUncheckedCreateInput>
    /**
     * In case the TrendingStory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrendingStoryUpdateInput, TrendingStoryUncheckedUpdateInput>
  }

  /**
   * TrendingStory delete
   */
  export type TrendingStoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
    /**
     * Filter which TrendingStory to delete.
     */
    where: TrendingStoryWhereUniqueInput
  }

  /**
   * TrendingStory deleteMany
   */
  export type TrendingStoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrendingStories to delete
     */
    where?: TrendingStoryWhereInput
    /**
     * Limit how many TrendingStories to delete.
     */
    limit?: number
  }

  /**
   * TrendingStory without action
   */
  export type TrendingStoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrendingStory
     */
    select?: TrendingStorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrendingStory
     */
    omit?: TrendingStoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrendingStoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    englishName: 'englishName'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    id: 'id',
    title: 'title',
    originalTitle: 'originalTitle',
    originalLanguage: 'originalLanguage',
    adult: 'adult'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const GenreMovieScalarFieldEnum: {
    genreId: 'genreId',
    movieId: 'movieId'
  };

  export type GenreMovieScalarFieldEnum = (typeof GenreMovieScalarFieldEnum)[keyof typeof GenreMovieScalarFieldEnum]


  export const MovieDetailScalarFieldEnum: {
    movieId: 'movieId',
    voteCount: 'voteCount',
    voteAverage: 'voteAverage',
    popularity: 'popularity',
    releaseDate: 'releaseDate',
    posterPath: 'posterPath'
  };

  export type MovieDetailScalarFieldEnum = (typeof MovieDetailScalarFieldEnum)[keyof typeof MovieDetailScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const MovieCompanyScalarFieldEnum: {
    movieId: 'movieId',
    companyId: 'companyId'
  };

  export type MovieCompanyScalarFieldEnum = (typeof MovieCompanyScalarFieldEnum)[keyof typeof MovieCompanyScalarFieldEnum]


  export const TrendingEntryScalarFieldEnum: {
    id: 'id',
    datetime: 'datetime',
    mode: 'mode',
    languageId: 'languageId'
  };

  export type TrendingEntryScalarFieldEnum = (typeof TrendingEntryScalarFieldEnum)[keyof typeof TrendingEntryScalarFieldEnum]


  export const TrendingStoryScalarFieldEnum: {
    trendingId: 'trendingId',
    movieId: 'movieId',
    votesCount: 'votesCount',
    votesAverage: 'votesAverage',
    popularity: 'popularity',
    page: 'page',
    rank: 'rank',
    rankPage: 'rankPage'
  };

  export type TrendingStoryScalarFieldEnum = (typeof TrendingStoryScalarFieldEnum)[keyof typeof TrendingStoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const GenreOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreOrderByRelevanceFieldEnum = (typeof GenreOrderByRelevanceFieldEnum)[keyof typeof GenreOrderByRelevanceFieldEnum]


  export const LanguageOrderByRelevanceFieldEnum: {
    id: 'id',
    englishName: 'englishName'
  };

  export type LanguageOrderByRelevanceFieldEnum = (typeof LanguageOrderByRelevanceFieldEnum)[keyof typeof LanguageOrderByRelevanceFieldEnum]


  export const MovieOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    originalTitle: 'originalTitle',
    originalLanguage: 'originalLanguage'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  export const GenreMovieOrderByRelevanceFieldEnum: {
    genreId: 'genreId',
    movieId: 'movieId'
  };

  export type GenreMovieOrderByRelevanceFieldEnum = (typeof GenreMovieOrderByRelevanceFieldEnum)[keyof typeof GenreMovieOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const MovieDetailOrderByRelevanceFieldEnum: {
    movieId: 'movieId',
    posterPath: 'posterPath'
  };

  export type MovieDetailOrderByRelevanceFieldEnum = (typeof MovieDetailOrderByRelevanceFieldEnum)[keyof typeof MovieDetailOrderByRelevanceFieldEnum]


  export const CompanyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyOrderByRelevanceFieldEnum = (typeof CompanyOrderByRelevanceFieldEnum)[keyof typeof CompanyOrderByRelevanceFieldEnum]


  export const MovieCompanyOrderByRelevanceFieldEnum: {
    movieId: 'movieId',
    companyId: 'companyId'
  };

  export type MovieCompanyOrderByRelevanceFieldEnum = (typeof MovieCompanyOrderByRelevanceFieldEnum)[keyof typeof MovieCompanyOrderByRelevanceFieldEnum]


  export const TrendingEntryOrderByRelevanceFieldEnum: {
    id: 'id',
    languageId: 'languageId'
  };

  export type TrendingEntryOrderByRelevanceFieldEnum = (typeof TrendingEntryOrderByRelevanceFieldEnum)[keyof typeof TrendingEntryOrderByRelevanceFieldEnum]


  export const TrendingStoryOrderByRelevanceFieldEnum: {
    trendingId: 'trendingId',
    movieId: 'movieId'
  };

  export type TrendingStoryOrderByRelevanceFieldEnum = (typeof TrendingStoryOrderByRelevanceFieldEnum)[keyof typeof TrendingStoryOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    movies?: GenreMovieListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    movies?: GenreMovieOrderByRelationAggregateInput
    _relevance?: GenreOrderByRelevanceInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringFilter<"Genre"> | string
    movies?: GenreMovieListRelationFilter
  }, "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: StringFilter<"Language"> | string
    englishName?: StringFilter<"Language"> | string
    trending?: TrendingEntryListRelationFilter
    movies?: MovieListRelationFilter
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    englishName?: SortOrder
    trending?: TrendingEntryOrderByRelationAggregateInput
    movies?: MovieOrderByRelationAggregateInput
    _relevance?: LanguageOrderByRelevanceInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    englishName?: StringFilter<"Language"> | string
    trending?: TrendingEntryListRelationFilter
    movies?: MovieListRelationFilter
  }, "id">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    englishName?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Language"> | string
    englishName?: StringWithAggregatesFilter<"Language"> | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    originalTitle?: StringFilter<"Movie"> | string
    originalLanguage?: StringFilter<"Movie"> | string
    adult?: BoolFilter<"Movie"> | boolean
    genres?: GenreMovieListRelationFilter
    details?: XOR<MovieDetailNullableScalarRelationFilter, MovieDetailWhereInput> | null
    companies?: MovieCompanyListRelationFilter
    trending?: TrendingStoryListRelationFilter
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    originalTitle?: SortOrder
    originalLanguage?: SortOrder
    adult?: SortOrder
    genres?: GenreMovieOrderByRelationAggregateInput
    details?: MovieDetailOrderByWithRelationInput
    companies?: MovieCompanyOrderByRelationAggregateInput
    trending?: TrendingStoryOrderByRelationAggregateInput
    language?: LanguageOrderByWithRelationInput
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    title?: StringFilter<"Movie"> | string
    originalTitle?: StringFilter<"Movie"> | string
    originalLanguage?: StringFilter<"Movie"> | string
    adult?: BoolFilter<"Movie"> | boolean
    genres?: GenreMovieListRelationFilter
    details?: XOR<MovieDetailNullableScalarRelationFilter, MovieDetailWhereInput> | null
    companies?: MovieCompanyListRelationFilter
    trending?: TrendingStoryListRelationFilter
    language?: XOR<LanguageScalarRelationFilter, LanguageWhereInput>
  }, "id">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    originalTitle?: SortOrder
    originalLanguage?: SortOrder
    adult?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie"> | string
    title?: StringWithAggregatesFilter<"Movie"> | string
    originalTitle?: StringWithAggregatesFilter<"Movie"> | string
    originalLanguage?: StringWithAggregatesFilter<"Movie"> | string
    adult?: BoolWithAggregatesFilter<"Movie"> | boolean
  }

  export type GenreMovieWhereInput = {
    AND?: GenreMovieWhereInput | GenreMovieWhereInput[]
    OR?: GenreMovieWhereInput[]
    NOT?: GenreMovieWhereInput | GenreMovieWhereInput[]
    genreId?: StringFilter<"GenreMovie"> | string
    movieId?: StringFilter<"GenreMovie"> | string
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type GenreMovieOrderByWithRelationInput = {
    genreId?: SortOrder
    movieId?: SortOrder
    genre?: GenreOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
    _relevance?: GenreMovieOrderByRelevanceInput
  }

  export type GenreMovieWhereUniqueInput = Prisma.AtLeast<{
    genreId_movieId?: GenreMovieGenreIdMovieIdCompoundUniqueInput
    AND?: GenreMovieWhereInput | GenreMovieWhereInput[]
    OR?: GenreMovieWhereInput[]
    NOT?: GenreMovieWhereInput | GenreMovieWhereInput[]
    genreId?: StringFilter<"GenreMovie"> | string
    movieId?: StringFilter<"GenreMovie"> | string
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "genreId_movieId">

  export type GenreMovieOrderByWithAggregationInput = {
    genreId?: SortOrder
    movieId?: SortOrder
    _count?: GenreMovieCountOrderByAggregateInput
    _max?: GenreMovieMaxOrderByAggregateInput
    _min?: GenreMovieMinOrderByAggregateInput
  }

  export type GenreMovieScalarWhereWithAggregatesInput = {
    AND?: GenreMovieScalarWhereWithAggregatesInput | GenreMovieScalarWhereWithAggregatesInput[]
    OR?: GenreMovieScalarWhereWithAggregatesInput[]
    NOT?: GenreMovieScalarWhereWithAggregatesInput | GenreMovieScalarWhereWithAggregatesInput[]
    genreId?: StringWithAggregatesFilter<"GenreMovie"> | string
    movieId?: StringWithAggregatesFilter<"GenreMovie"> | string
  }

  export type MovieDetailWhereInput = {
    AND?: MovieDetailWhereInput | MovieDetailWhereInput[]
    OR?: MovieDetailWhereInput[]
    NOT?: MovieDetailWhereInput | MovieDetailWhereInput[]
    movieId?: StringFilter<"MovieDetail"> | string
    voteCount?: IntFilter<"MovieDetail"> | number
    voteAverage?: FloatFilter<"MovieDetail"> | number
    popularity?: FloatFilter<"MovieDetail"> | number
    releaseDate?: DateTimeFilter<"MovieDetail"> | Date | string
    posterPath?: StringNullableFilter<"MovieDetail"> | string | null
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type MovieDetailOrderByWithRelationInput = {
    movieId?: SortOrder
    voteCount?: SortOrder
    voteAverage?: SortOrder
    popularity?: SortOrder
    releaseDate?: SortOrder
    posterPath?: SortOrderInput | SortOrder
    movie?: MovieOrderByWithRelationInput
    _relevance?: MovieDetailOrderByRelevanceInput
  }

  export type MovieDetailWhereUniqueInput = Prisma.AtLeast<{
    movieId?: string
    AND?: MovieDetailWhereInput | MovieDetailWhereInput[]
    OR?: MovieDetailWhereInput[]
    NOT?: MovieDetailWhereInput | MovieDetailWhereInput[]
    voteCount?: IntFilter<"MovieDetail"> | number
    voteAverage?: FloatFilter<"MovieDetail"> | number
    popularity?: FloatFilter<"MovieDetail"> | number
    releaseDate?: DateTimeFilter<"MovieDetail"> | Date | string
    posterPath?: StringNullableFilter<"MovieDetail"> | string | null
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "movieId">

  export type MovieDetailOrderByWithAggregationInput = {
    movieId?: SortOrder
    voteCount?: SortOrder
    voteAverage?: SortOrder
    popularity?: SortOrder
    releaseDate?: SortOrder
    posterPath?: SortOrderInput | SortOrder
    _count?: MovieDetailCountOrderByAggregateInput
    _avg?: MovieDetailAvgOrderByAggregateInput
    _max?: MovieDetailMaxOrderByAggregateInput
    _min?: MovieDetailMinOrderByAggregateInput
    _sum?: MovieDetailSumOrderByAggregateInput
  }

  export type MovieDetailScalarWhereWithAggregatesInput = {
    AND?: MovieDetailScalarWhereWithAggregatesInput | MovieDetailScalarWhereWithAggregatesInput[]
    OR?: MovieDetailScalarWhereWithAggregatesInput[]
    NOT?: MovieDetailScalarWhereWithAggregatesInput | MovieDetailScalarWhereWithAggregatesInput[]
    movieId?: StringWithAggregatesFilter<"MovieDetail"> | string
    voteCount?: IntWithAggregatesFilter<"MovieDetail"> | number
    voteAverage?: FloatWithAggregatesFilter<"MovieDetail"> | number
    popularity?: FloatWithAggregatesFilter<"MovieDetail"> | number
    releaseDate?: DateTimeWithAggregatesFilter<"MovieDetail"> | Date | string
    posterPath?: StringNullableWithAggregatesFilter<"MovieDetail"> | string | null
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    movies?: MovieCompanyListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    movies?: MovieCompanyOrderByRelationAggregateInput
    _relevance?: CompanyOrderByRelevanceInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    movies?: MovieCompanyListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
  }

  export type MovieCompanyWhereInput = {
    AND?: MovieCompanyWhereInput | MovieCompanyWhereInput[]
    OR?: MovieCompanyWhereInput[]
    NOT?: MovieCompanyWhereInput | MovieCompanyWhereInput[]
    movieId?: StringFilter<"MovieCompany"> | string
    companyId?: StringFilter<"MovieCompany"> | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }

  export type MovieCompanyOrderByWithRelationInput = {
    movieId?: SortOrder
    companyId?: SortOrder
    movie?: MovieOrderByWithRelationInput
    company?: CompanyOrderByWithRelationInput
    _relevance?: MovieCompanyOrderByRelevanceInput
  }

  export type MovieCompanyWhereUniqueInput = Prisma.AtLeast<{
    movieId_companyId?: MovieCompanyMovieIdCompanyIdCompoundUniqueInput
    AND?: MovieCompanyWhereInput | MovieCompanyWhereInput[]
    OR?: MovieCompanyWhereInput[]
    NOT?: MovieCompanyWhereInput | MovieCompanyWhereInput[]
    movieId?: StringFilter<"MovieCompany"> | string
    companyId?: StringFilter<"MovieCompany"> | string
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
  }, "movieId_companyId">

  export type MovieCompanyOrderByWithAggregationInput = {
    movieId?: SortOrder
    companyId?: SortOrder
    _count?: MovieCompanyCountOrderByAggregateInput
    _max?: MovieCompanyMaxOrderByAggregateInput
    _min?: MovieCompanyMinOrderByAggregateInput
  }

  export type MovieCompanyScalarWhereWithAggregatesInput = {
    AND?: MovieCompanyScalarWhereWithAggregatesInput | MovieCompanyScalarWhereWithAggregatesInput[]
    OR?: MovieCompanyScalarWhereWithAggregatesInput[]
    NOT?: MovieCompanyScalarWhereWithAggregatesInput | MovieCompanyScalarWhereWithAggregatesInput[]
    movieId?: StringWithAggregatesFilter<"MovieCompany"> | string
    companyId?: StringWithAggregatesFilter<"MovieCompany"> | string
  }

  export type TrendingEntryWhereInput = {
    AND?: TrendingEntryWhereInput | TrendingEntryWhereInput[]
    OR?: TrendingEntryWhereInput[]
    NOT?: TrendingEntryWhereInput | TrendingEntryWhereInput[]
    id?: StringFilter<"TrendingEntry"> | string
    datetime?: DateTimeFilter<"TrendingEntry"> | Date | string
    mode?: IntFilter<"TrendingEntry"> | number
    languageId?: StringNullableFilter<"TrendingEntry"> | string | null
    language?: XOR<LanguageNullableScalarRelationFilter, LanguageWhereInput> | null
    movies?: TrendingStoryListRelationFilter
  }

  export type TrendingEntryOrderByWithRelationInput = {
    id?: SortOrder
    datetime?: SortOrder
    mode?: SortOrder
    languageId?: SortOrderInput | SortOrder
    language?: LanguageOrderByWithRelationInput
    movies?: TrendingStoryOrderByRelationAggregateInput
    _relevance?: TrendingEntryOrderByRelevanceInput
  }

  export type TrendingEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrendingEntryWhereInput | TrendingEntryWhereInput[]
    OR?: TrendingEntryWhereInput[]
    NOT?: TrendingEntryWhereInput | TrendingEntryWhereInput[]
    datetime?: DateTimeFilter<"TrendingEntry"> | Date | string
    mode?: IntFilter<"TrendingEntry"> | number
    languageId?: StringNullableFilter<"TrendingEntry"> | string | null
    language?: XOR<LanguageNullableScalarRelationFilter, LanguageWhereInput> | null
    movies?: TrendingStoryListRelationFilter
  }, "id">

  export type TrendingEntryOrderByWithAggregationInput = {
    id?: SortOrder
    datetime?: SortOrder
    mode?: SortOrder
    languageId?: SortOrderInput | SortOrder
    _count?: TrendingEntryCountOrderByAggregateInput
    _avg?: TrendingEntryAvgOrderByAggregateInput
    _max?: TrendingEntryMaxOrderByAggregateInput
    _min?: TrendingEntryMinOrderByAggregateInput
    _sum?: TrendingEntrySumOrderByAggregateInput
  }

  export type TrendingEntryScalarWhereWithAggregatesInput = {
    AND?: TrendingEntryScalarWhereWithAggregatesInput | TrendingEntryScalarWhereWithAggregatesInput[]
    OR?: TrendingEntryScalarWhereWithAggregatesInput[]
    NOT?: TrendingEntryScalarWhereWithAggregatesInput | TrendingEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrendingEntry"> | string
    datetime?: DateTimeWithAggregatesFilter<"TrendingEntry"> | Date | string
    mode?: IntWithAggregatesFilter<"TrendingEntry"> | number
    languageId?: StringNullableWithAggregatesFilter<"TrendingEntry"> | string | null
  }

  export type TrendingStoryWhereInput = {
    AND?: TrendingStoryWhereInput | TrendingStoryWhereInput[]
    OR?: TrendingStoryWhereInput[]
    NOT?: TrendingStoryWhereInput | TrendingStoryWhereInput[]
    trendingId?: StringFilter<"TrendingStory"> | string
    movieId?: StringFilter<"TrendingStory"> | string
    votesCount?: IntFilter<"TrendingStory"> | number
    votesAverage?: FloatFilter<"TrendingStory"> | number
    popularity?: FloatFilter<"TrendingStory"> | number
    page?: IntFilter<"TrendingStory"> | number
    rank?: IntFilter<"TrendingStory"> | number
    rankPage?: IntFilter<"TrendingStory"> | number
    trending?: XOR<TrendingEntryScalarRelationFilter, TrendingEntryWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type TrendingStoryOrderByWithRelationInput = {
    trendingId?: SortOrder
    movieId?: SortOrder
    votesCount?: SortOrder
    votesAverage?: SortOrder
    popularity?: SortOrder
    page?: SortOrder
    rank?: SortOrder
    rankPage?: SortOrder
    trending?: TrendingEntryOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
    _relevance?: TrendingStoryOrderByRelevanceInput
  }

  export type TrendingStoryWhereUniqueInput = Prisma.AtLeast<{
    trendingId_movieId?: TrendingStoryTrendingIdMovieIdCompoundUniqueInput
    AND?: TrendingStoryWhereInput | TrendingStoryWhereInput[]
    OR?: TrendingStoryWhereInput[]
    NOT?: TrendingStoryWhereInput | TrendingStoryWhereInput[]
    trendingId?: StringFilter<"TrendingStory"> | string
    movieId?: StringFilter<"TrendingStory"> | string
    votesCount?: IntFilter<"TrendingStory"> | number
    votesAverage?: FloatFilter<"TrendingStory"> | number
    popularity?: FloatFilter<"TrendingStory"> | number
    page?: IntFilter<"TrendingStory"> | number
    rank?: IntFilter<"TrendingStory"> | number
    rankPage?: IntFilter<"TrendingStory"> | number
    trending?: XOR<TrendingEntryScalarRelationFilter, TrendingEntryWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "trendingId_movieId">

  export type TrendingStoryOrderByWithAggregationInput = {
    trendingId?: SortOrder
    movieId?: SortOrder
    votesCount?: SortOrder
    votesAverage?: SortOrder
    popularity?: SortOrder
    page?: SortOrder
    rank?: SortOrder
    rankPage?: SortOrder
    _count?: TrendingStoryCountOrderByAggregateInput
    _avg?: TrendingStoryAvgOrderByAggregateInput
    _max?: TrendingStoryMaxOrderByAggregateInput
    _min?: TrendingStoryMinOrderByAggregateInput
    _sum?: TrendingStorySumOrderByAggregateInput
  }

  export type TrendingStoryScalarWhereWithAggregatesInput = {
    AND?: TrendingStoryScalarWhereWithAggregatesInput | TrendingStoryScalarWhereWithAggregatesInput[]
    OR?: TrendingStoryScalarWhereWithAggregatesInput[]
    NOT?: TrendingStoryScalarWhereWithAggregatesInput | TrendingStoryScalarWhereWithAggregatesInput[]
    trendingId?: StringWithAggregatesFilter<"TrendingStory"> | string
    movieId?: StringWithAggregatesFilter<"TrendingStory"> | string
    votesCount?: IntWithAggregatesFilter<"TrendingStory"> | number
    votesAverage?: FloatWithAggregatesFilter<"TrendingStory"> | number
    popularity?: FloatWithAggregatesFilter<"TrendingStory"> | number
    page?: IntWithAggregatesFilter<"TrendingStory"> | number
    rank?: IntWithAggregatesFilter<"TrendingStory"> | number
    rankPage?: IntWithAggregatesFilter<"TrendingStory"> | number
  }

  export type GenreCreateInput = {
    id: string
    name: string
    movies?: GenreMovieCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id: string
    name: string
    movies?: GenreMovieUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    movies?: GenreMovieUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    movies?: GenreMovieUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id: string
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageCreateInput = {
    id: string
    englishName: string
    trending?: TrendingEntryCreateNestedManyWithoutLanguageInput
    movies?: MovieCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateInput = {
    id: string
    englishName: string
    trending?: TrendingEntryUncheckedCreateNestedManyWithoutLanguageInput
    movies?: MovieUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    trending?: TrendingEntryUpdateManyWithoutLanguageNestedInput
    movies?: MovieUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    trending?: TrendingEntryUncheckedUpdateManyWithoutLanguageNestedInput
    movies?: MovieUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageCreateManyInput = {
    id: string
    englishName: string
  }

  export type LanguageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
    genres?: GenreMovieCreateNestedManyWithoutMovieInput
    details?: MovieDetailCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryCreateNestedManyWithoutMovieInput
    language: LanguageCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    id: string
    title: string
    originalTitle: string
    originalLanguage: string
    adult: boolean
    genres?: GenreMovieUncheckedCreateNestedManyWithoutMovieInput
    details?: MovieDetailUncheckedCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyUncheckedCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUpdateManyWithoutMovieNestedInput
    language?: LanguageUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalLanguage?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUncheckedUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUncheckedUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUncheckedUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id: string
    title: string
    originalTitle: string
    originalLanguage: string
    adult: boolean
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalLanguage?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GenreMovieCreateInput = {
    genre: GenreCreateNestedOneWithoutMoviesInput
    movie: MovieCreateNestedOneWithoutGenresInput
  }

  export type GenreMovieUncheckedCreateInput = {
    genreId: string
    movieId: string
  }

  export type GenreMovieUpdateInput = {
    genre?: GenreUpdateOneRequiredWithoutMoviesNestedInput
    movie?: MovieUpdateOneRequiredWithoutGenresNestedInput
  }

  export type GenreMovieUncheckedUpdateInput = {
    genreId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreMovieCreateManyInput = {
    genreId: string
    movieId: string
  }

  export type GenreMovieUpdateManyMutationInput = {

  }

  export type GenreMovieUncheckedUpdateManyInput = {
    genreId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieDetailCreateInput = {
    voteCount: number
    voteAverage: number
    popularity: number
    releaseDate: Date | string
    posterPath?: string | null
    movie: MovieCreateNestedOneWithoutDetailsInput
  }

  export type MovieDetailUncheckedCreateInput = {
    movieId: string
    voteCount: number
    voteAverage: number
    popularity: number
    releaseDate: Date | string
    posterPath?: string | null
  }

  export type MovieDetailUpdateInput = {
    voteCount?: IntFieldUpdateOperationsInput | number
    voteAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
    movie?: MovieUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type MovieDetailUncheckedUpdateInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    voteCount?: IntFieldUpdateOperationsInput | number
    voteAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieDetailCreateManyInput = {
    movieId: string
    voteCount: number
    voteAverage: number
    popularity: number
    releaseDate: Date | string
    posterPath?: string | null
  }

  export type MovieDetailUpdateManyMutationInput = {
    voteCount?: IntFieldUpdateOperationsInput | number
    voteAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieDetailUncheckedUpdateManyInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    voteCount?: IntFieldUpdateOperationsInput | number
    voteAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateInput = {
    id: string
    name: string
    movies?: MovieCompanyCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id: string
    name: string
    movies?: MovieCompanyUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    movies?: MovieCompanyUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    movies?: MovieCompanyUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id: string
    name: string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCompanyCreateInput = {
    movie: MovieCreateNestedOneWithoutCompaniesInput
    company: CompanyCreateNestedOneWithoutMoviesInput
  }

  export type MovieCompanyUncheckedCreateInput = {
    movieId: string
    companyId: string
  }

  export type MovieCompanyUpdateInput = {
    movie?: MovieUpdateOneRequiredWithoutCompaniesNestedInput
    company?: CompanyUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieCompanyUncheckedUpdateInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCompanyCreateManyInput = {
    movieId: string
    companyId: string
  }

  export type MovieCompanyUpdateManyMutationInput = {

  }

  export type MovieCompanyUncheckedUpdateManyInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingEntryCreateInput = {
    id: string
    datetime: Date | string
    mode: number
    language?: LanguageCreateNestedOneWithoutTrendingInput
    movies?: TrendingStoryCreateNestedManyWithoutTrendingInput
  }

  export type TrendingEntryUncheckedCreateInput = {
    id: string
    datetime: Date | string
    mode: number
    languageId?: string | null
    movies?: TrendingStoryUncheckedCreateNestedManyWithoutTrendingInput
  }

  export type TrendingEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
    language?: LanguageUpdateOneWithoutTrendingNestedInput
    movies?: TrendingStoryUpdateManyWithoutTrendingNestedInput
  }

  export type TrendingEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
    languageId?: NullableStringFieldUpdateOperationsInput | string | null
    movies?: TrendingStoryUncheckedUpdateManyWithoutTrendingNestedInput
  }

  export type TrendingEntryCreateManyInput = {
    id: string
    datetime: Date | string
    mode: number
    languageId?: string | null
  }

  export type TrendingEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
  }

  export type TrendingEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
    languageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrendingStoryCreateInput = {
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
    trending: TrendingEntryCreateNestedOneWithoutMoviesInput
    movie: MovieCreateNestedOneWithoutTrendingInput
  }

  export type TrendingStoryUncheckedCreateInput = {
    trendingId: string
    movieId: string
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
  }

  export type TrendingStoryUpdateInput = {
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
    trending?: TrendingEntryUpdateOneRequiredWithoutMoviesNestedInput
    movie?: MovieUpdateOneRequiredWithoutTrendingNestedInput
  }

  export type TrendingStoryUncheckedUpdateInput = {
    trendingId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
  }

  export type TrendingStoryCreateManyInput = {
    trendingId: string
    movieId: string
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
  }

  export type TrendingStoryUpdateManyMutationInput = {
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
  }

  export type TrendingStoryUncheckedUpdateManyInput = {
    trendingId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GenreMovieListRelationFilter = {
    every?: GenreMovieWhereInput
    some?: GenreMovieWhereInput
    none?: GenreMovieWhereInput
  }

  export type GenreMovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreOrderByRelevanceInput = {
    fields: GenreOrderByRelevanceFieldEnum | GenreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type TrendingEntryListRelationFilter = {
    every?: TrendingEntryWhereInput
    some?: TrendingEntryWhereInput
    none?: TrendingEntryWhereInput
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type TrendingEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageOrderByRelevanceInput = {
    fields: LanguageOrderByRelevanceFieldEnum | LanguageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    englishName?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    englishName?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    englishName?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MovieDetailNullableScalarRelationFilter = {
    is?: MovieDetailWhereInput | null
    isNot?: MovieDetailWhereInput | null
  }

  export type MovieCompanyListRelationFilter = {
    every?: MovieCompanyWhereInput
    some?: MovieCompanyWhereInput
    none?: MovieCompanyWhereInput
  }

  export type TrendingStoryListRelationFilter = {
    every?: TrendingStoryWhereInput
    some?: TrendingStoryWhereInput
    none?: TrendingStoryWhereInput
  }

  export type LanguageScalarRelationFilter = {
    is?: LanguageWhereInput
    isNot?: LanguageWhereInput
  }

  export type MovieCompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrendingStoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieOrderByRelevanceInput = {
    fields: MovieOrderByRelevanceFieldEnum | MovieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    originalTitle?: SortOrder
    originalLanguage?: SortOrder
    adult?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    originalTitle?: SortOrder
    originalLanguage?: SortOrder
    adult?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    originalTitle?: SortOrder
    originalLanguage?: SortOrder
    adult?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type GenreMovieOrderByRelevanceInput = {
    fields: GenreMovieOrderByRelevanceFieldEnum | GenreMovieOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GenreMovieGenreIdMovieIdCompoundUniqueInput = {
    genreId: string
    movieId: string
  }

  export type GenreMovieCountOrderByAggregateInput = {
    genreId?: SortOrder
    movieId?: SortOrder
  }

  export type GenreMovieMaxOrderByAggregateInput = {
    genreId?: SortOrder
    movieId?: SortOrder
  }

  export type GenreMovieMinOrderByAggregateInput = {
    genreId?: SortOrder
    movieId?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MovieDetailOrderByRelevanceInput = {
    fields: MovieDetailOrderByRelevanceFieldEnum | MovieDetailOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieDetailCountOrderByAggregateInput = {
    movieId?: SortOrder
    voteCount?: SortOrder
    voteAverage?: SortOrder
    popularity?: SortOrder
    releaseDate?: SortOrder
    posterPath?: SortOrder
  }

  export type MovieDetailAvgOrderByAggregateInput = {
    voteCount?: SortOrder
    voteAverage?: SortOrder
    popularity?: SortOrder
  }

  export type MovieDetailMaxOrderByAggregateInput = {
    movieId?: SortOrder
    voteCount?: SortOrder
    voteAverage?: SortOrder
    popularity?: SortOrder
    releaseDate?: SortOrder
    posterPath?: SortOrder
  }

  export type MovieDetailMinOrderByAggregateInput = {
    movieId?: SortOrder
    voteCount?: SortOrder
    voteAverage?: SortOrder
    popularity?: SortOrder
    releaseDate?: SortOrder
    posterPath?: SortOrder
  }

  export type MovieDetailSumOrderByAggregateInput = {
    voteCount?: SortOrder
    voteAverage?: SortOrder
    popularity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CompanyOrderByRelevanceInput = {
    fields: CompanyOrderByRelevanceFieldEnum | CompanyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type MovieCompanyOrderByRelevanceInput = {
    fields: MovieCompanyOrderByRelevanceFieldEnum | MovieCompanyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MovieCompanyMovieIdCompanyIdCompoundUniqueInput = {
    movieId: string
    companyId: string
  }

  export type MovieCompanyCountOrderByAggregateInput = {
    movieId?: SortOrder
    companyId?: SortOrder
  }

  export type MovieCompanyMaxOrderByAggregateInput = {
    movieId?: SortOrder
    companyId?: SortOrder
  }

  export type MovieCompanyMinOrderByAggregateInput = {
    movieId?: SortOrder
    companyId?: SortOrder
  }

  export type LanguageNullableScalarRelationFilter = {
    is?: LanguageWhereInput | null
    isNot?: LanguageWhereInput | null
  }

  export type TrendingEntryOrderByRelevanceInput = {
    fields: TrendingEntryOrderByRelevanceFieldEnum | TrendingEntryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrendingEntryCountOrderByAggregateInput = {
    id?: SortOrder
    datetime?: SortOrder
    mode?: SortOrder
    languageId?: SortOrder
  }

  export type TrendingEntryAvgOrderByAggregateInput = {
    mode?: SortOrder
  }

  export type TrendingEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    datetime?: SortOrder
    mode?: SortOrder
    languageId?: SortOrder
  }

  export type TrendingEntryMinOrderByAggregateInput = {
    id?: SortOrder
    datetime?: SortOrder
    mode?: SortOrder
    languageId?: SortOrder
  }

  export type TrendingEntrySumOrderByAggregateInput = {
    mode?: SortOrder
  }

  export type TrendingEntryScalarRelationFilter = {
    is?: TrendingEntryWhereInput
    isNot?: TrendingEntryWhereInput
  }

  export type TrendingStoryOrderByRelevanceInput = {
    fields: TrendingStoryOrderByRelevanceFieldEnum | TrendingStoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TrendingStoryTrendingIdMovieIdCompoundUniqueInput = {
    trendingId: string
    movieId: string
  }

  export type TrendingStoryCountOrderByAggregateInput = {
    trendingId?: SortOrder
    movieId?: SortOrder
    votesCount?: SortOrder
    votesAverage?: SortOrder
    popularity?: SortOrder
    page?: SortOrder
    rank?: SortOrder
    rankPage?: SortOrder
  }

  export type TrendingStoryAvgOrderByAggregateInput = {
    votesCount?: SortOrder
    votesAverage?: SortOrder
    popularity?: SortOrder
    page?: SortOrder
    rank?: SortOrder
    rankPage?: SortOrder
  }

  export type TrendingStoryMaxOrderByAggregateInput = {
    trendingId?: SortOrder
    movieId?: SortOrder
    votesCount?: SortOrder
    votesAverage?: SortOrder
    popularity?: SortOrder
    page?: SortOrder
    rank?: SortOrder
    rankPage?: SortOrder
  }

  export type TrendingStoryMinOrderByAggregateInput = {
    trendingId?: SortOrder
    movieId?: SortOrder
    votesCount?: SortOrder
    votesAverage?: SortOrder
    popularity?: SortOrder
    page?: SortOrder
    rank?: SortOrder
    rankPage?: SortOrder
  }

  export type TrendingStorySumOrderByAggregateInput = {
    votesCount?: SortOrder
    votesAverage?: SortOrder
    popularity?: SortOrder
    page?: SortOrder
    rank?: SortOrder
    rankPage?: SortOrder
  }

  export type GenreMovieCreateNestedManyWithoutGenreInput = {
    create?: XOR<GenreMovieCreateWithoutGenreInput, GenreMovieUncheckedCreateWithoutGenreInput> | GenreMovieCreateWithoutGenreInput[] | GenreMovieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutGenreInput | GenreMovieCreateOrConnectWithoutGenreInput[]
    createMany?: GenreMovieCreateManyGenreInputEnvelope
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
  }

  export type GenreMovieUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<GenreMovieCreateWithoutGenreInput, GenreMovieUncheckedCreateWithoutGenreInput> | GenreMovieCreateWithoutGenreInput[] | GenreMovieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutGenreInput | GenreMovieCreateOrConnectWithoutGenreInput[]
    createMany?: GenreMovieCreateManyGenreInputEnvelope
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GenreMovieUpdateManyWithoutGenreNestedInput = {
    create?: XOR<GenreMovieCreateWithoutGenreInput, GenreMovieUncheckedCreateWithoutGenreInput> | GenreMovieCreateWithoutGenreInput[] | GenreMovieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutGenreInput | GenreMovieCreateOrConnectWithoutGenreInput[]
    upsert?: GenreMovieUpsertWithWhereUniqueWithoutGenreInput | GenreMovieUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: GenreMovieCreateManyGenreInputEnvelope
    set?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    disconnect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    delete?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    update?: GenreMovieUpdateWithWhereUniqueWithoutGenreInput | GenreMovieUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: GenreMovieUpdateManyWithWhereWithoutGenreInput | GenreMovieUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: GenreMovieScalarWhereInput | GenreMovieScalarWhereInput[]
  }

  export type GenreMovieUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<GenreMovieCreateWithoutGenreInput, GenreMovieUncheckedCreateWithoutGenreInput> | GenreMovieCreateWithoutGenreInput[] | GenreMovieUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutGenreInput | GenreMovieCreateOrConnectWithoutGenreInput[]
    upsert?: GenreMovieUpsertWithWhereUniqueWithoutGenreInput | GenreMovieUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: GenreMovieCreateManyGenreInputEnvelope
    set?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    disconnect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    delete?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    update?: GenreMovieUpdateWithWhereUniqueWithoutGenreInput | GenreMovieUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: GenreMovieUpdateManyWithWhereWithoutGenreInput | GenreMovieUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: GenreMovieScalarWhereInput | GenreMovieScalarWhereInput[]
  }

  export type TrendingEntryCreateNestedManyWithoutLanguageInput = {
    create?: XOR<TrendingEntryCreateWithoutLanguageInput, TrendingEntryUncheckedCreateWithoutLanguageInput> | TrendingEntryCreateWithoutLanguageInput[] | TrendingEntryUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TrendingEntryCreateOrConnectWithoutLanguageInput | TrendingEntryCreateOrConnectWithoutLanguageInput[]
    createMany?: TrendingEntryCreateManyLanguageInputEnvelope
    connect?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
  }

  export type MovieCreateNestedManyWithoutLanguageInput = {
    create?: XOR<MovieCreateWithoutLanguageInput, MovieUncheckedCreateWithoutLanguageInput> | MovieCreateWithoutLanguageInput[] | MovieUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLanguageInput | MovieCreateOrConnectWithoutLanguageInput[]
    createMany?: MovieCreateManyLanguageInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type TrendingEntryUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<TrendingEntryCreateWithoutLanguageInput, TrendingEntryUncheckedCreateWithoutLanguageInput> | TrendingEntryCreateWithoutLanguageInput[] | TrendingEntryUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TrendingEntryCreateOrConnectWithoutLanguageInput | TrendingEntryCreateOrConnectWithoutLanguageInput[]
    createMany?: TrendingEntryCreateManyLanguageInputEnvelope
    connect?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutLanguageInput = {
    create?: XOR<MovieCreateWithoutLanguageInput, MovieUncheckedCreateWithoutLanguageInput> | MovieCreateWithoutLanguageInput[] | MovieUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLanguageInput | MovieCreateOrConnectWithoutLanguageInput[]
    createMany?: MovieCreateManyLanguageInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type TrendingEntryUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<TrendingEntryCreateWithoutLanguageInput, TrendingEntryUncheckedCreateWithoutLanguageInput> | TrendingEntryCreateWithoutLanguageInput[] | TrendingEntryUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TrendingEntryCreateOrConnectWithoutLanguageInput | TrendingEntryCreateOrConnectWithoutLanguageInput[]
    upsert?: TrendingEntryUpsertWithWhereUniqueWithoutLanguageInput | TrendingEntryUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: TrendingEntryCreateManyLanguageInputEnvelope
    set?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    disconnect?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    delete?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    connect?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    update?: TrendingEntryUpdateWithWhereUniqueWithoutLanguageInput | TrendingEntryUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: TrendingEntryUpdateManyWithWhereWithoutLanguageInput | TrendingEntryUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: TrendingEntryScalarWhereInput | TrendingEntryScalarWhereInput[]
  }

  export type MovieUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<MovieCreateWithoutLanguageInput, MovieUncheckedCreateWithoutLanguageInput> | MovieCreateWithoutLanguageInput[] | MovieUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLanguageInput | MovieCreateOrConnectWithoutLanguageInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutLanguageInput | MovieUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: MovieCreateManyLanguageInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutLanguageInput | MovieUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutLanguageInput | MovieUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type TrendingEntryUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<TrendingEntryCreateWithoutLanguageInput, TrendingEntryUncheckedCreateWithoutLanguageInput> | TrendingEntryCreateWithoutLanguageInput[] | TrendingEntryUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: TrendingEntryCreateOrConnectWithoutLanguageInput | TrendingEntryCreateOrConnectWithoutLanguageInput[]
    upsert?: TrendingEntryUpsertWithWhereUniqueWithoutLanguageInput | TrendingEntryUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: TrendingEntryCreateManyLanguageInputEnvelope
    set?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    disconnect?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    delete?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    connect?: TrendingEntryWhereUniqueInput | TrendingEntryWhereUniqueInput[]
    update?: TrendingEntryUpdateWithWhereUniqueWithoutLanguageInput | TrendingEntryUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: TrendingEntryUpdateManyWithWhereWithoutLanguageInput | TrendingEntryUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: TrendingEntryScalarWhereInput | TrendingEntryScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutLanguageNestedInput = {
    create?: XOR<MovieCreateWithoutLanguageInput, MovieUncheckedCreateWithoutLanguageInput> | MovieCreateWithoutLanguageInput[] | MovieUncheckedCreateWithoutLanguageInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutLanguageInput | MovieCreateOrConnectWithoutLanguageInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutLanguageInput | MovieUpsertWithWhereUniqueWithoutLanguageInput[]
    createMany?: MovieCreateManyLanguageInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutLanguageInput | MovieUpdateWithWhereUniqueWithoutLanguageInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutLanguageInput | MovieUpdateManyWithWhereWithoutLanguageInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type GenreMovieCreateNestedManyWithoutMovieInput = {
    create?: XOR<GenreMovieCreateWithoutMovieInput, GenreMovieUncheckedCreateWithoutMovieInput> | GenreMovieCreateWithoutMovieInput[] | GenreMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutMovieInput | GenreMovieCreateOrConnectWithoutMovieInput[]
    createMany?: GenreMovieCreateManyMovieInputEnvelope
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
  }

  export type MovieDetailCreateNestedOneWithoutMovieInput = {
    create?: XOR<MovieDetailCreateWithoutMovieInput, MovieDetailUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MovieDetailCreateOrConnectWithoutMovieInput
    connect?: MovieDetailWhereUniqueInput
  }

  export type MovieCompanyCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieCompanyCreateWithoutMovieInput, MovieCompanyUncheckedCreateWithoutMovieInput> | MovieCompanyCreateWithoutMovieInput[] | MovieCompanyUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutMovieInput | MovieCompanyCreateOrConnectWithoutMovieInput[]
    createMany?: MovieCompanyCreateManyMovieInputEnvelope
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
  }

  export type TrendingStoryCreateNestedManyWithoutMovieInput = {
    create?: XOR<TrendingStoryCreateWithoutMovieInput, TrendingStoryUncheckedCreateWithoutMovieInput> | TrendingStoryCreateWithoutMovieInput[] | TrendingStoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutMovieInput | TrendingStoryCreateOrConnectWithoutMovieInput[]
    createMany?: TrendingStoryCreateManyMovieInputEnvelope
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
  }

  export type LanguageCreateNestedOneWithoutMoviesInput = {
    create?: XOR<LanguageCreateWithoutMoviesInput, LanguageUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutMoviesInput
    connect?: LanguageWhereUniqueInput
  }

  export type GenreMovieUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<GenreMovieCreateWithoutMovieInput, GenreMovieUncheckedCreateWithoutMovieInput> | GenreMovieCreateWithoutMovieInput[] | GenreMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutMovieInput | GenreMovieCreateOrConnectWithoutMovieInput[]
    createMany?: GenreMovieCreateManyMovieInputEnvelope
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
  }

  export type MovieDetailUncheckedCreateNestedOneWithoutMovieInput = {
    create?: XOR<MovieDetailCreateWithoutMovieInput, MovieDetailUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MovieDetailCreateOrConnectWithoutMovieInput
    connect?: MovieDetailWhereUniqueInput
  }

  export type MovieCompanyUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieCompanyCreateWithoutMovieInput, MovieCompanyUncheckedCreateWithoutMovieInput> | MovieCompanyCreateWithoutMovieInput[] | MovieCompanyUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutMovieInput | MovieCompanyCreateOrConnectWithoutMovieInput[]
    createMany?: MovieCompanyCreateManyMovieInputEnvelope
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
  }

  export type TrendingStoryUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<TrendingStoryCreateWithoutMovieInput, TrendingStoryUncheckedCreateWithoutMovieInput> | TrendingStoryCreateWithoutMovieInput[] | TrendingStoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutMovieInput | TrendingStoryCreateOrConnectWithoutMovieInput[]
    createMany?: TrendingStoryCreateManyMovieInputEnvelope
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GenreMovieUpdateManyWithoutMovieNestedInput = {
    create?: XOR<GenreMovieCreateWithoutMovieInput, GenreMovieUncheckedCreateWithoutMovieInput> | GenreMovieCreateWithoutMovieInput[] | GenreMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutMovieInput | GenreMovieCreateOrConnectWithoutMovieInput[]
    upsert?: GenreMovieUpsertWithWhereUniqueWithoutMovieInput | GenreMovieUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: GenreMovieCreateManyMovieInputEnvelope
    set?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    disconnect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    delete?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    update?: GenreMovieUpdateWithWhereUniqueWithoutMovieInput | GenreMovieUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: GenreMovieUpdateManyWithWhereWithoutMovieInput | GenreMovieUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: GenreMovieScalarWhereInput | GenreMovieScalarWhereInput[]
  }

  export type MovieDetailUpdateOneWithoutMovieNestedInput = {
    create?: XOR<MovieDetailCreateWithoutMovieInput, MovieDetailUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MovieDetailCreateOrConnectWithoutMovieInput
    upsert?: MovieDetailUpsertWithoutMovieInput
    disconnect?: MovieDetailWhereInput | boolean
    delete?: MovieDetailWhereInput | boolean
    connect?: MovieDetailWhereUniqueInput
    update?: XOR<XOR<MovieDetailUpdateToOneWithWhereWithoutMovieInput, MovieDetailUpdateWithoutMovieInput>, MovieDetailUncheckedUpdateWithoutMovieInput>
  }

  export type MovieCompanyUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieCompanyCreateWithoutMovieInput, MovieCompanyUncheckedCreateWithoutMovieInput> | MovieCompanyCreateWithoutMovieInput[] | MovieCompanyUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutMovieInput | MovieCompanyCreateOrConnectWithoutMovieInput[]
    upsert?: MovieCompanyUpsertWithWhereUniqueWithoutMovieInput | MovieCompanyUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieCompanyCreateManyMovieInputEnvelope
    set?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    disconnect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    delete?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    update?: MovieCompanyUpdateWithWhereUniqueWithoutMovieInput | MovieCompanyUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieCompanyUpdateManyWithWhereWithoutMovieInput | MovieCompanyUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieCompanyScalarWhereInput | MovieCompanyScalarWhereInput[]
  }

  export type TrendingStoryUpdateManyWithoutMovieNestedInput = {
    create?: XOR<TrendingStoryCreateWithoutMovieInput, TrendingStoryUncheckedCreateWithoutMovieInput> | TrendingStoryCreateWithoutMovieInput[] | TrendingStoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutMovieInput | TrendingStoryCreateOrConnectWithoutMovieInput[]
    upsert?: TrendingStoryUpsertWithWhereUniqueWithoutMovieInput | TrendingStoryUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: TrendingStoryCreateManyMovieInputEnvelope
    set?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    disconnect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    delete?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    update?: TrendingStoryUpdateWithWhereUniqueWithoutMovieInput | TrendingStoryUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: TrendingStoryUpdateManyWithWhereWithoutMovieInput | TrendingStoryUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: TrendingStoryScalarWhereInput | TrendingStoryScalarWhereInput[]
  }

  export type LanguageUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<LanguageCreateWithoutMoviesInput, LanguageUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutMoviesInput
    upsert?: LanguageUpsertWithoutMoviesInput
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutMoviesInput, LanguageUpdateWithoutMoviesInput>, LanguageUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreMovieUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<GenreMovieCreateWithoutMovieInput, GenreMovieUncheckedCreateWithoutMovieInput> | GenreMovieCreateWithoutMovieInput[] | GenreMovieUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: GenreMovieCreateOrConnectWithoutMovieInput | GenreMovieCreateOrConnectWithoutMovieInput[]
    upsert?: GenreMovieUpsertWithWhereUniqueWithoutMovieInput | GenreMovieUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: GenreMovieCreateManyMovieInputEnvelope
    set?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    disconnect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    delete?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    connect?: GenreMovieWhereUniqueInput | GenreMovieWhereUniqueInput[]
    update?: GenreMovieUpdateWithWhereUniqueWithoutMovieInput | GenreMovieUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: GenreMovieUpdateManyWithWhereWithoutMovieInput | GenreMovieUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: GenreMovieScalarWhereInput | GenreMovieScalarWhereInput[]
  }

  export type MovieDetailUncheckedUpdateOneWithoutMovieNestedInput = {
    create?: XOR<MovieDetailCreateWithoutMovieInput, MovieDetailUncheckedCreateWithoutMovieInput>
    connectOrCreate?: MovieDetailCreateOrConnectWithoutMovieInput
    upsert?: MovieDetailUpsertWithoutMovieInput
    disconnect?: MovieDetailWhereInput | boolean
    delete?: MovieDetailWhereInput | boolean
    connect?: MovieDetailWhereUniqueInput
    update?: XOR<XOR<MovieDetailUpdateToOneWithWhereWithoutMovieInput, MovieDetailUpdateWithoutMovieInput>, MovieDetailUncheckedUpdateWithoutMovieInput>
  }

  export type MovieCompanyUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieCompanyCreateWithoutMovieInput, MovieCompanyUncheckedCreateWithoutMovieInput> | MovieCompanyCreateWithoutMovieInput[] | MovieCompanyUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutMovieInput | MovieCompanyCreateOrConnectWithoutMovieInput[]
    upsert?: MovieCompanyUpsertWithWhereUniqueWithoutMovieInput | MovieCompanyUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieCompanyCreateManyMovieInputEnvelope
    set?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    disconnect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    delete?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    update?: MovieCompanyUpdateWithWhereUniqueWithoutMovieInput | MovieCompanyUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieCompanyUpdateManyWithWhereWithoutMovieInput | MovieCompanyUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieCompanyScalarWhereInput | MovieCompanyScalarWhereInput[]
  }

  export type TrendingStoryUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<TrendingStoryCreateWithoutMovieInput, TrendingStoryUncheckedCreateWithoutMovieInput> | TrendingStoryCreateWithoutMovieInput[] | TrendingStoryUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutMovieInput | TrendingStoryCreateOrConnectWithoutMovieInput[]
    upsert?: TrendingStoryUpsertWithWhereUniqueWithoutMovieInput | TrendingStoryUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: TrendingStoryCreateManyMovieInputEnvelope
    set?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    disconnect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    delete?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    update?: TrendingStoryUpdateWithWhereUniqueWithoutMovieInput | TrendingStoryUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: TrendingStoryUpdateManyWithWhereWithoutMovieInput | TrendingStoryUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: TrendingStoryScalarWhereInput | TrendingStoryScalarWhereInput[]
  }

  export type GenreCreateNestedOneWithoutMoviesInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput
    connect?: GenreWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutGenresInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput
    connect?: MovieWhereUniqueInput
  }

  export type GenreUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput
    upsert?: GenreUpsertWithoutMoviesInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutMoviesInput, GenreUpdateWithoutMoviesInput>, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MovieCreateOrConnectWithoutGenresInput
    upsert?: MovieUpsertWithoutGenresInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutGenresInput, MovieUpdateWithoutGenresInput>, MovieUncheckedUpdateWithoutGenresInput>
  }

  export type MovieCreateNestedOneWithoutDetailsInput = {
    create?: XOR<MovieCreateWithoutDetailsInput, MovieUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutDetailsInput
    connect?: MovieWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MovieUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<MovieCreateWithoutDetailsInput, MovieUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: MovieCreateOrConnectWithoutDetailsInput
    upsert?: MovieUpsertWithoutDetailsInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutDetailsInput, MovieUpdateWithoutDetailsInput>, MovieUncheckedUpdateWithoutDetailsInput>
  }

  export type MovieCompanyCreateNestedManyWithoutCompanyInput = {
    create?: XOR<MovieCompanyCreateWithoutCompanyInput, MovieCompanyUncheckedCreateWithoutCompanyInput> | MovieCompanyCreateWithoutCompanyInput[] | MovieCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutCompanyInput | MovieCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: MovieCompanyCreateManyCompanyInputEnvelope
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
  }

  export type MovieCompanyUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<MovieCompanyCreateWithoutCompanyInput, MovieCompanyUncheckedCreateWithoutCompanyInput> | MovieCompanyCreateWithoutCompanyInput[] | MovieCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutCompanyInput | MovieCompanyCreateOrConnectWithoutCompanyInput[]
    createMany?: MovieCompanyCreateManyCompanyInputEnvelope
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
  }

  export type MovieCompanyUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<MovieCompanyCreateWithoutCompanyInput, MovieCompanyUncheckedCreateWithoutCompanyInput> | MovieCompanyCreateWithoutCompanyInput[] | MovieCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutCompanyInput | MovieCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: MovieCompanyUpsertWithWhereUniqueWithoutCompanyInput | MovieCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: MovieCompanyCreateManyCompanyInputEnvelope
    set?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    disconnect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    delete?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    update?: MovieCompanyUpdateWithWhereUniqueWithoutCompanyInput | MovieCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: MovieCompanyUpdateManyWithWhereWithoutCompanyInput | MovieCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: MovieCompanyScalarWhereInput | MovieCompanyScalarWhereInput[]
  }

  export type MovieCompanyUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<MovieCompanyCreateWithoutCompanyInput, MovieCompanyUncheckedCreateWithoutCompanyInput> | MovieCompanyCreateWithoutCompanyInput[] | MovieCompanyUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: MovieCompanyCreateOrConnectWithoutCompanyInput | MovieCompanyCreateOrConnectWithoutCompanyInput[]
    upsert?: MovieCompanyUpsertWithWhereUniqueWithoutCompanyInput | MovieCompanyUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: MovieCompanyCreateManyCompanyInputEnvelope
    set?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    disconnect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    delete?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    connect?: MovieCompanyWhereUniqueInput | MovieCompanyWhereUniqueInput[]
    update?: MovieCompanyUpdateWithWhereUniqueWithoutCompanyInput | MovieCompanyUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: MovieCompanyUpdateManyWithWhereWithoutCompanyInput | MovieCompanyUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: MovieCompanyScalarWhereInput | MovieCompanyScalarWhereInput[]
  }

  export type MovieCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<MovieCreateWithoutCompaniesInput, MovieUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCompaniesInput
    connect?: MovieWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutMoviesInput = {
    create?: XOR<CompanyCreateWithoutMoviesInput, CompanyUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutMoviesInput
    connect?: CompanyWhereUniqueInput
  }

  export type MovieUpdateOneRequiredWithoutCompaniesNestedInput = {
    create?: XOR<MovieCreateWithoutCompaniesInput, MovieUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: MovieCreateOrConnectWithoutCompaniesInput
    upsert?: MovieUpsertWithoutCompaniesInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutCompaniesInput, MovieUpdateWithoutCompaniesInput>, MovieUncheckedUpdateWithoutCompaniesInput>
  }

  export type CompanyUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<CompanyCreateWithoutMoviesInput, CompanyUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutMoviesInput
    upsert?: CompanyUpsertWithoutMoviesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutMoviesInput, CompanyUpdateWithoutMoviesInput>, CompanyUncheckedUpdateWithoutMoviesInput>
  }

  export type LanguageCreateNestedOneWithoutTrendingInput = {
    create?: XOR<LanguageCreateWithoutTrendingInput, LanguageUncheckedCreateWithoutTrendingInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutTrendingInput
    connect?: LanguageWhereUniqueInput
  }

  export type TrendingStoryCreateNestedManyWithoutTrendingInput = {
    create?: XOR<TrendingStoryCreateWithoutTrendingInput, TrendingStoryUncheckedCreateWithoutTrendingInput> | TrendingStoryCreateWithoutTrendingInput[] | TrendingStoryUncheckedCreateWithoutTrendingInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutTrendingInput | TrendingStoryCreateOrConnectWithoutTrendingInput[]
    createMany?: TrendingStoryCreateManyTrendingInputEnvelope
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
  }

  export type TrendingStoryUncheckedCreateNestedManyWithoutTrendingInput = {
    create?: XOR<TrendingStoryCreateWithoutTrendingInput, TrendingStoryUncheckedCreateWithoutTrendingInput> | TrendingStoryCreateWithoutTrendingInput[] | TrendingStoryUncheckedCreateWithoutTrendingInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutTrendingInput | TrendingStoryCreateOrConnectWithoutTrendingInput[]
    createMany?: TrendingStoryCreateManyTrendingInputEnvelope
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
  }

  export type LanguageUpdateOneWithoutTrendingNestedInput = {
    create?: XOR<LanguageCreateWithoutTrendingInput, LanguageUncheckedCreateWithoutTrendingInput>
    connectOrCreate?: LanguageCreateOrConnectWithoutTrendingInput
    upsert?: LanguageUpsertWithoutTrendingInput
    disconnect?: LanguageWhereInput | boolean
    delete?: LanguageWhereInput | boolean
    connect?: LanguageWhereUniqueInput
    update?: XOR<XOR<LanguageUpdateToOneWithWhereWithoutTrendingInput, LanguageUpdateWithoutTrendingInput>, LanguageUncheckedUpdateWithoutTrendingInput>
  }

  export type TrendingStoryUpdateManyWithoutTrendingNestedInput = {
    create?: XOR<TrendingStoryCreateWithoutTrendingInput, TrendingStoryUncheckedCreateWithoutTrendingInput> | TrendingStoryCreateWithoutTrendingInput[] | TrendingStoryUncheckedCreateWithoutTrendingInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutTrendingInput | TrendingStoryCreateOrConnectWithoutTrendingInput[]
    upsert?: TrendingStoryUpsertWithWhereUniqueWithoutTrendingInput | TrendingStoryUpsertWithWhereUniqueWithoutTrendingInput[]
    createMany?: TrendingStoryCreateManyTrendingInputEnvelope
    set?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    disconnect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    delete?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    update?: TrendingStoryUpdateWithWhereUniqueWithoutTrendingInput | TrendingStoryUpdateWithWhereUniqueWithoutTrendingInput[]
    updateMany?: TrendingStoryUpdateManyWithWhereWithoutTrendingInput | TrendingStoryUpdateManyWithWhereWithoutTrendingInput[]
    deleteMany?: TrendingStoryScalarWhereInput | TrendingStoryScalarWhereInput[]
  }

  export type TrendingStoryUncheckedUpdateManyWithoutTrendingNestedInput = {
    create?: XOR<TrendingStoryCreateWithoutTrendingInput, TrendingStoryUncheckedCreateWithoutTrendingInput> | TrendingStoryCreateWithoutTrendingInput[] | TrendingStoryUncheckedCreateWithoutTrendingInput[]
    connectOrCreate?: TrendingStoryCreateOrConnectWithoutTrendingInput | TrendingStoryCreateOrConnectWithoutTrendingInput[]
    upsert?: TrendingStoryUpsertWithWhereUniqueWithoutTrendingInput | TrendingStoryUpsertWithWhereUniqueWithoutTrendingInput[]
    createMany?: TrendingStoryCreateManyTrendingInputEnvelope
    set?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    disconnect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    delete?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    connect?: TrendingStoryWhereUniqueInput | TrendingStoryWhereUniqueInput[]
    update?: TrendingStoryUpdateWithWhereUniqueWithoutTrendingInput | TrendingStoryUpdateWithWhereUniqueWithoutTrendingInput[]
    updateMany?: TrendingStoryUpdateManyWithWhereWithoutTrendingInput | TrendingStoryUpdateManyWithWhereWithoutTrendingInput[]
    deleteMany?: TrendingStoryScalarWhereInput | TrendingStoryScalarWhereInput[]
  }

  export type TrendingEntryCreateNestedOneWithoutMoviesInput = {
    create?: XOR<TrendingEntryCreateWithoutMoviesInput, TrendingEntryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: TrendingEntryCreateOrConnectWithoutMoviesInput
    connect?: TrendingEntryWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutTrendingInput = {
    create?: XOR<MovieCreateWithoutTrendingInput, MovieUncheckedCreateWithoutTrendingInput>
    connectOrCreate?: MovieCreateOrConnectWithoutTrendingInput
    connect?: MovieWhereUniqueInput
  }

  export type TrendingEntryUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<TrendingEntryCreateWithoutMoviesInput, TrendingEntryUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: TrendingEntryCreateOrConnectWithoutMoviesInput
    upsert?: TrendingEntryUpsertWithoutMoviesInput
    connect?: TrendingEntryWhereUniqueInput
    update?: XOR<XOR<TrendingEntryUpdateToOneWithWhereWithoutMoviesInput, TrendingEntryUpdateWithoutMoviesInput>, TrendingEntryUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieUpdateOneRequiredWithoutTrendingNestedInput = {
    create?: XOR<MovieCreateWithoutTrendingInput, MovieUncheckedCreateWithoutTrendingInput>
    connectOrCreate?: MovieCreateOrConnectWithoutTrendingInput
    upsert?: MovieUpsertWithoutTrendingInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutTrendingInput, MovieUpdateWithoutTrendingInput>, MovieUncheckedUpdateWithoutTrendingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GenreMovieCreateWithoutGenreInput = {
    movie: MovieCreateNestedOneWithoutGenresInput
  }

  export type GenreMovieUncheckedCreateWithoutGenreInput = {
    movieId: string
  }

  export type GenreMovieCreateOrConnectWithoutGenreInput = {
    where: GenreMovieWhereUniqueInput
    create: XOR<GenreMovieCreateWithoutGenreInput, GenreMovieUncheckedCreateWithoutGenreInput>
  }

  export type GenreMovieCreateManyGenreInputEnvelope = {
    data: GenreMovieCreateManyGenreInput | GenreMovieCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type GenreMovieUpsertWithWhereUniqueWithoutGenreInput = {
    where: GenreMovieWhereUniqueInput
    update: XOR<GenreMovieUpdateWithoutGenreInput, GenreMovieUncheckedUpdateWithoutGenreInput>
    create: XOR<GenreMovieCreateWithoutGenreInput, GenreMovieUncheckedCreateWithoutGenreInput>
  }

  export type GenreMovieUpdateWithWhereUniqueWithoutGenreInput = {
    where: GenreMovieWhereUniqueInput
    data: XOR<GenreMovieUpdateWithoutGenreInput, GenreMovieUncheckedUpdateWithoutGenreInput>
  }

  export type GenreMovieUpdateManyWithWhereWithoutGenreInput = {
    where: GenreMovieScalarWhereInput
    data: XOR<GenreMovieUpdateManyMutationInput, GenreMovieUncheckedUpdateManyWithoutGenreInput>
  }

  export type GenreMovieScalarWhereInput = {
    AND?: GenreMovieScalarWhereInput | GenreMovieScalarWhereInput[]
    OR?: GenreMovieScalarWhereInput[]
    NOT?: GenreMovieScalarWhereInput | GenreMovieScalarWhereInput[]
    genreId?: StringFilter<"GenreMovie"> | string
    movieId?: StringFilter<"GenreMovie"> | string
  }

  export type TrendingEntryCreateWithoutLanguageInput = {
    id: string
    datetime: Date | string
    mode: number
    movies?: TrendingStoryCreateNestedManyWithoutTrendingInput
  }

  export type TrendingEntryUncheckedCreateWithoutLanguageInput = {
    id: string
    datetime: Date | string
    mode: number
    movies?: TrendingStoryUncheckedCreateNestedManyWithoutTrendingInput
  }

  export type TrendingEntryCreateOrConnectWithoutLanguageInput = {
    where: TrendingEntryWhereUniqueInput
    create: XOR<TrendingEntryCreateWithoutLanguageInput, TrendingEntryUncheckedCreateWithoutLanguageInput>
  }

  export type TrendingEntryCreateManyLanguageInputEnvelope = {
    data: TrendingEntryCreateManyLanguageInput | TrendingEntryCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type MovieCreateWithoutLanguageInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
    genres?: GenreMovieCreateNestedManyWithoutMovieInput
    details?: MovieDetailCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutLanguageInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
    genres?: GenreMovieUncheckedCreateNestedManyWithoutMovieInput
    details?: MovieDetailUncheckedCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyUncheckedCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutLanguageInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutLanguageInput, MovieUncheckedCreateWithoutLanguageInput>
  }

  export type MovieCreateManyLanguageInputEnvelope = {
    data: MovieCreateManyLanguageInput | MovieCreateManyLanguageInput[]
    skipDuplicates?: boolean
  }

  export type TrendingEntryUpsertWithWhereUniqueWithoutLanguageInput = {
    where: TrendingEntryWhereUniqueInput
    update: XOR<TrendingEntryUpdateWithoutLanguageInput, TrendingEntryUncheckedUpdateWithoutLanguageInput>
    create: XOR<TrendingEntryCreateWithoutLanguageInput, TrendingEntryUncheckedCreateWithoutLanguageInput>
  }

  export type TrendingEntryUpdateWithWhereUniqueWithoutLanguageInput = {
    where: TrendingEntryWhereUniqueInput
    data: XOR<TrendingEntryUpdateWithoutLanguageInput, TrendingEntryUncheckedUpdateWithoutLanguageInput>
  }

  export type TrendingEntryUpdateManyWithWhereWithoutLanguageInput = {
    where: TrendingEntryScalarWhereInput
    data: XOR<TrendingEntryUpdateManyMutationInput, TrendingEntryUncheckedUpdateManyWithoutLanguageInput>
  }

  export type TrendingEntryScalarWhereInput = {
    AND?: TrendingEntryScalarWhereInput | TrendingEntryScalarWhereInput[]
    OR?: TrendingEntryScalarWhereInput[]
    NOT?: TrendingEntryScalarWhereInput | TrendingEntryScalarWhereInput[]
    id?: StringFilter<"TrendingEntry"> | string
    datetime?: DateTimeFilter<"TrendingEntry"> | Date | string
    mode?: IntFilter<"TrendingEntry"> | number
    languageId?: StringNullableFilter<"TrendingEntry"> | string | null
  }

  export type MovieUpsertWithWhereUniqueWithoutLanguageInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutLanguageInput, MovieUncheckedUpdateWithoutLanguageInput>
    create: XOR<MovieCreateWithoutLanguageInput, MovieUncheckedCreateWithoutLanguageInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutLanguageInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutLanguageInput, MovieUncheckedUpdateWithoutLanguageInput>
  }

  export type MovieUpdateManyWithWhereWithoutLanguageInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutLanguageInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    id?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
    originalTitle?: StringFilter<"Movie"> | string
    originalLanguage?: StringFilter<"Movie"> | string
    adult?: BoolFilter<"Movie"> | boolean
  }

  export type GenreMovieCreateWithoutMovieInput = {
    genre: GenreCreateNestedOneWithoutMoviesInput
  }

  export type GenreMovieUncheckedCreateWithoutMovieInput = {
    genreId: string
  }

  export type GenreMovieCreateOrConnectWithoutMovieInput = {
    where: GenreMovieWhereUniqueInput
    create: XOR<GenreMovieCreateWithoutMovieInput, GenreMovieUncheckedCreateWithoutMovieInput>
  }

  export type GenreMovieCreateManyMovieInputEnvelope = {
    data: GenreMovieCreateManyMovieInput | GenreMovieCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type MovieDetailCreateWithoutMovieInput = {
    voteCount: number
    voteAverage: number
    popularity: number
    releaseDate: Date | string
    posterPath?: string | null
  }

  export type MovieDetailUncheckedCreateWithoutMovieInput = {
    voteCount: number
    voteAverage: number
    popularity: number
    releaseDate: Date | string
    posterPath?: string | null
  }

  export type MovieDetailCreateOrConnectWithoutMovieInput = {
    where: MovieDetailWhereUniqueInput
    create: XOR<MovieDetailCreateWithoutMovieInput, MovieDetailUncheckedCreateWithoutMovieInput>
  }

  export type MovieCompanyCreateWithoutMovieInput = {
    company: CompanyCreateNestedOneWithoutMoviesInput
  }

  export type MovieCompanyUncheckedCreateWithoutMovieInput = {
    companyId: string
  }

  export type MovieCompanyCreateOrConnectWithoutMovieInput = {
    where: MovieCompanyWhereUniqueInput
    create: XOR<MovieCompanyCreateWithoutMovieInput, MovieCompanyUncheckedCreateWithoutMovieInput>
  }

  export type MovieCompanyCreateManyMovieInputEnvelope = {
    data: MovieCompanyCreateManyMovieInput | MovieCompanyCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type TrendingStoryCreateWithoutMovieInput = {
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
    trending: TrendingEntryCreateNestedOneWithoutMoviesInput
  }

  export type TrendingStoryUncheckedCreateWithoutMovieInput = {
    trendingId: string
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
  }

  export type TrendingStoryCreateOrConnectWithoutMovieInput = {
    where: TrendingStoryWhereUniqueInput
    create: XOR<TrendingStoryCreateWithoutMovieInput, TrendingStoryUncheckedCreateWithoutMovieInput>
  }

  export type TrendingStoryCreateManyMovieInputEnvelope = {
    data: TrendingStoryCreateManyMovieInput | TrendingStoryCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type LanguageCreateWithoutMoviesInput = {
    id: string
    englishName: string
    trending?: TrendingEntryCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutMoviesInput = {
    id: string
    englishName: string
    trending?: TrendingEntryUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutMoviesInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutMoviesInput, LanguageUncheckedCreateWithoutMoviesInput>
  }

  export type GenreMovieUpsertWithWhereUniqueWithoutMovieInput = {
    where: GenreMovieWhereUniqueInput
    update: XOR<GenreMovieUpdateWithoutMovieInput, GenreMovieUncheckedUpdateWithoutMovieInput>
    create: XOR<GenreMovieCreateWithoutMovieInput, GenreMovieUncheckedCreateWithoutMovieInput>
  }

  export type GenreMovieUpdateWithWhereUniqueWithoutMovieInput = {
    where: GenreMovieWhereUniqueInput
    data: XOR<GenreMovieUpdateWithoutMovieInput, GenreMovieUncheckedUpdateWithoutMovieInput>
  }

  export type GenreMovieUpdateManyWithWhereWithoutMovieInput = {
    where: GenreMovieScalarWhereInput
    data: XOR<GenreMovieUpdateManyMutationInput, GenreMovieUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieDetailUpsertWithoutMovieInput = {
    update: XOR<MovieDetailUpdateWithoutMovieInput, MovieDetailUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieDetailCreateWithoutMovieInput, MovieDetailUncheckedCreateWithoutMovieInput>
    where?: MovieDetailWhereInput
  }

  export type MovieDetailUpdateToOneWithWhereWithoutMovieInput = {
    where?: MovieDetailWhereInput
    data: XOR<MovieDetailUpdateWithoutMovieInput, MovieDetailUncheckedUpdateWithoutMovieInput>
  }

  export type MovieDetailUpdateWithoutMovieInput = {
    voteCount?: IntFieldUpdateOperationsInput | number
    voteAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieDetailUncheckedUpdateWithoutMovieInput = {
    voteCount?: IntFieldUpdateOperationsInput | number
    voteAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    posterPath?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieCompanyUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieCompanyWhereUniqueInput
    update: XOR<MovieCompanyUpdateWithoutMovieInput, MovieCompanyUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieCompanyCreateWithoutMovieInput, MovieCompanyUncheckedCreateWithoutMovieInput>
  }

  export type MovieCompanyUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieCompanyWhereUniqueInput
    data: XOR<MovieCompanyUpdateWithoutMovieInput, MovieCompanyUncheckedUpdateWithoutMovieInput>
  }

  export type MovieCompanyUpdateManyWithWhereWithoutMovieInput = {
    where: MovieCompanyScalarWhereInput
    data: XOR<MovieCompanyUpdateManyMutationInput, MovieCompanyUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieCompanyScalarWhereInput = {
    AND?: MovieCompanyScalarWhereInput | MovieCompanyScalarWhereInput[]
    OR?: MovieCompanyScalarWhereInput[]
    NOT?: MovieCompanyScalarWhereInput | MovieCompanyScalarWhereInput[]
    movieId?: StringFilter<"MovieCompany"> | string
    companyId?: StringFilter<"MovieCompany"> | string
  }

  export type TrendingStoryUpsertWithWhereUniqueWithoutMovieInput = {
    where: TrendingStoryWhereUniqueInput
    update: XOR<TrendingStoryUpdateWithoutMovieInput, TrendingStoryUncheckedUpdateWithoutMovieInput>
    create: XOR<TrendingStoryCreateWithoutMovieInput, TrendingStoryUncheckedCreateWithoutMovieInput>
  }

  export type TrendingStoryUpdateWithWhereUniqueWithoutMovieInput = {
    where: TrendingStoryWhereUniqueInput
    data: XOR<TrendingStoryUpdateWithoutMovieInput, TrendingStoryUncheckedUpdateWithoutMovieInput>
  }

  export type TrendingStoryUpdateManyWithWhereWithoutMovieInput = {
    where: TrendingStoryScalarWhereInput
    data: XOR<TrendingStoryUpdateManyMutationInput, TrendingStoryUncheckedUpdateManyWithoutMovieInput>
  }

  export type TrendingStoryScalarWhereInput = {
    AND?: TrendingStoryScalarWhereInput | TrendingStoryScalarWhereInput[]
    OR?: TrendingStoryScalarWhereInput[]
    NOT?: TrendingStoryScalarWhereInput | TrendingStoryScalarWhereInput[]
    trendingId?: StringFilter<"TrendingStory"> | string
    movieId?: StringFilter<"TrendingStory"> | string
    votesCount?: IntFilter<"TrendingStory"> | number
    votesAverage?: FloatFilter<"TrendingStory"> | number
    popularity?: FloatFilter<"TrendingStory"> | number
    page?: IntFilter<"TrendingStory"> | number
    rank?: IntFilter<"TrendingStory"> | number
    rankPage?: IntFilter<"TrendingStory"> | number
  }

  export type LanguageUpsertWithoutMoviesInput = {
    update: XOR<LanguageUpdateWithoutMoviesInput, LanguageUncheckedUpdateWithoutMoviesInput>
    create: XOR<LanguageCreateWithoutMoviesInput, LanguageUncheckedCreateWithoutMoviesInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutMoviesInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutMoviesInput, LanguageUncheckedUpdateWithoutMoviesInput>
  }

  export type LanguageUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    trending?: TrendingEntryUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    trending?: TrendingEntryUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type GenreCreateWithoutMoviesInput = {
    id: string
    name: string
  }

  export type GenreUncheckedCreateWithoutMoviesInput = {
    id: string
    name: string
  }

  export type GenreCreateOrConnectWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type MovieCreateWithoutGenresInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
    details?: MovieDetailCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryCreateNestedManyWithoutMovieInput
    language: LanguageCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutGenresInput = {
    id: string
    title: string
    originalTitle: string
    originalLanguage: string
    adult: boolean
    details?: MovieDetailUncheckedCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyUncheckedCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutGenresInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
  }

  export type GenreUpsertWithoutMoviesInput = {
    update: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutMoviesInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUpsertWithoutGenresInput = {
    update: XOR<MovieUpdateWithoutGenresInput, MovieUncheckedUpdateWithoutGenresInput>
    create: XOR<MovieCreateWithoutGenresInput, MovieUncheckedCreateWithoutGenresInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutGenresInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutGenresInput, MovieUncheckedUpdateWithoutGenresInput>
  }

  export type MovieUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    details?: MovieDetailUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUpdateManyWithoutMovieNestedInput
    language?: LanguageUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutGenresInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalLanguage?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    details?: MovieDetailUncheckedUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUncheckedUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateWithoutDetailsInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
    genres?: GenreMovieCreateNestedManyWithoutMovieInput
    companies?: MovieCompanyCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryCreateNestedManyWithoutMovieInput
    language: LanguageCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutDetailsInput = {
    id: string
    title: string
    originalTitle: string
    originalLanguage: string
    adult: boolean
    genres?: GenreMovieUncheckedCreateNestedManyWithoutMovieInput
    companies?: MovieCompanyUncheckedCreateNestedManyWithoutMovieInput
    trending?: TrendingStoryUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutDetailsInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutDetailsInput, MovieUncheckedCreateWithoutDetailsInput>
  }

  export type MovieUpsertWithoutDetailsInput = {
    update: XOR<MovieUpdateWithoutDetailsInput, MovieUncheckedUpdateWithoutDetailsInput>
    create: XOR<MovieCreateWithoutDetailsInput, MovieUncheckedCreateWithoutDetailsInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutDetailsInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutDetailsInput, MovieUncheckedUpdateWithoutDetailsInput>
  }

  export type MovieUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUpdateManyWithoutMovieNestedInput
    companies?: MovieCompanyUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUpdateManyWithoutMovieNestedInput
    language?: LanguageUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutDetailsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalLanguage?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUncheckedUpdateManyWithoutMovieNestedInput
    companies?: MovieCompanyUncheckedUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCompanyCreateWithoutCompanyInput = {
    movie: MovieCreateNestedOneWithoutCompaniesInput
  }

  export type MovieCompanyUncheckedCreateWithoutCompanyInput = {
    movieId: string
  }

  export type MovieCompanyCreateOrConnectWithoutCompanyInput = {
    where: MovieCompanyWhereUniqueInput
    create: XOR<MovieCompanyCreateWithoutCompanyInput, MovieCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type MovieCompanyCreateManyCompanyInputEnvelope = {
    data: MovieCompanyCreateManyCompanyInput | MovieCompanyCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type MovieCompanyUpsertWithWhereUniqueWithoutCompanyInput = {
    where: MovieCompanyWhereUniqueInput
    update: XOR<MovieCompanyUpdateWithoutCompanyInput, MovieCompanyUncheckedUpdateWithoutCompanyInput>
    create: XOR<MovieCompanyCreateWithoutCompanyInput, MovieCompanyUncheckedCreateWithoutCompanyInput>
  }

  export type MovieCompanyUpdateWithWhereUniqueWithoutCompanyInput = {
    where: MovieCompanyWhereUniqueInput
    data: XOR<MovieCompanyUpdateWithoutCompanyInput, MovieCompanyUncheckedUpdateWithoutCompanyInput>
  }

  export type MovieCompanyUpdateManyWithWhereWithoutCompanyInput = {
    where: MovieCompanyScalarWhereInput
    data: XOR<MovieCompanyUpdateManyMutationInput, MovieCompanyUncheckedUpdateManyWithoutCompanyInput>
  }

  export type MovieCreateWithoutCompaniesInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
    genres?: GenreMovieCreateNestedManyWithoutMovieInput
    details?: MovieDetailCreateNestedOneWithoutMovieInput
    trending?: TrendingStoryCreateNestedManyWithoutMovieInput
    language: LanguageCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutCompaniesInput = {
    id: string
    title: string
    originalTitle: string
    originalLanguage: string
    adult: boolean
    genres?: GenreMovieUncheckedCreateNestedManyWithoutMovieInput
    details?: MovieDetailUncheckedCreateNestedOneWithoutMovieInput
    trending?: TrendingStoryUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutCompaniesInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutCompaniesInput, MovieUncheckedCreateWithoutCompaniesInput>
  }

  export type CompanyCreateWithoutMoviesInput = {
    id: string
    name: string
  }

  export type CompanyUncheckedCreateWithoutMoviesInput = {
    id: string
    name: string
  }

  export type CompanyCreateOrConnectWithoutMoviesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutMoviesInput, CompanyUncheckedCreateWithoutMoviesInput>
  }

  export type MovieUpsertWithoutCompaniesInput = {
    update: XOR<MovieUpdateWithoutCompaniesInput, MovieUncheckedUpdateWithoutCompaniesInput>
    create: XOR<MovieCreateWithoutCompaniesInput, MovieUncheckedCreateWithoutCompaniesInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutCompaniesInput, MovieUncheckedUpdateWithoutCompaniesInput>
  }

  export type MovieUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUpdateOneWithoutMovieNestedInput
    trending?: TrendingStoryUpdateManyWithoutMovieNestedInput
    language?: LanguageUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalLanguage?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUncheckedUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUncheckedUpdateOneWithoutMovieNestedInput
    trending?: TrendingStoryUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type CompanyUpsertWithoutMoviesInput = {
    update: XOR<CompanyUpdateWithoutMoviesInput, CompanyUncheckedUpdateWithoutMoviesInput>
    create: XOR<CompanyCreateWithoutMoviesInput, CompanyUncheckedCreateWithoutMoviesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutMoviesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutMoviesInput, CompanyUncheckedUpdateWithoutMoviesInput>
  }

  export type CompanyUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LanguageCreateWithoutTrendingInput = {
    id: string
    englishName: string
    movies?: MovieCreateNestedManyWithoutLanguageInput
  }

  export type LanguageUncheckedCreateWithoutTrendingInput = {
    id: string
    englishName: string
    movies?: MovieUncheckedCreateNestedManyWithoutLanguageInput
  }

  export type LanguageCreateOrConnectWithoutTrendingInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutTrendingInput, LanguageUncheckedCreateWithoutTrendingInput>
  }

  export type TrendingStoryCreateWithoutTrendingInput = {
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
    movie: MovieCreateNestedOneWithoutTrendingInput
  }

  export type TrendingStoryUncheckedCreateWithoutTrendingInput = {
    movieId: string
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
  }

  export type TrendingStoryCreateOrConnectWithoutTrendingInput = {
    where: TrendingStoryWhereUniqueInput
    create: XOR<TrendingStoryCreateWithoutTrendingInput, TrendingStoryUncheckedCreateWithoutTrendingInput>
  }

  export type TrendingStoryCreateManyTrendingInputEnvelope = {
    data: TrendingStoryCreateManyTrendingInput | TrendingStoryCreateManyTrendingInput[]
    skipDuplicates?: boolean
  }

  export type LanguageUpsertWithoutTrendingInput = {
    update: XOR<LanguageUpdateWithoutTrendingInput, LanguageUncheckedUpdateWithoutTrendingInput>
    create: XOR<LanguageCreateWithoutTrendingInput, LanguageUncheckedCreateWithoutTrendingInput>
    where?: LanguageWhereInput
  }

  export type LanguageUpdateToOneWithWhereWithoutTrendingInput = {
    where?: LanguageWhereInput
    data: XOR<LanguageUpdateWithoutTrendingInput, LanguageUncheckedUpdateWithoutTrendingInput>
  }

  export type LanguageUpdateWithoutTrendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    movies?: MovieUpdateManyWithoutLanguageNestedInput
  }

  export type LanguageUncheckedUpdateWithoutTrendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    englishName?: StringFieldUpdateOperationsInput | string
    movies?: MovieUncheckedUpdateManyWithoutLanguageNestedInput
  }

  export type TrendingStoryUpsertWithWhereUniqueWithoutTrendingInput = {
    where: TrendingStoryWhereUniqueInput
    update: XOR<TrendingStoryUpdateWithoutTrendingInput, TrendingStoryUncheckedUpdateWithoutTrendingInput>
    create: XOR<TrendingStoryCreateWithoutTrendingInput, TrendingStoryUncheckedCreateWithoutTrendingInput>
  }

  export type TrendingStoryUpdateWithWhereUniqueWithoutTrendingInput = {
    where: TrendingStoryWhereUniqueInput
    data: XOR<TrendingStoryUpdateWithoutTrendingInput, TrendingStoryUncheckedUpdateWithoutTrendingInput>
  }

  export type TrendingStoryUpdateManyWithWhereWithoutTrendingInput = {
    where: TrendingStoryScalarWhereInput
    data: XOR<TrendingStoryUpdateManyMutationInput, TrendingStoryUncheckedUpdateManyWithoutTrendingInput>
  }

  export type TrendingEntryCreateWithoutMoviesInput = {
    id: string
    datetime: Date | string
    mode: number
    language?: LanguageCreateNestedOneWithoutTrendingInput
  }

  export type TrendingEntryUncheckedCreateWithoutMoviesInput = {
    id: string
    datetime: Date | string
    mode: number
    languageId?: string | null
  }

  export type TrendingEntryCreateOrConnectWithoutMoviesInput = {
    where: TrendingEntryWhereUniqueInput
    create: XOR<TrendingEntryCreateWithoutMoviesInput, TrendingEntryUncheckedCreateWithoutMoviesInput>
  }

  export type MovieCreateWithoutTrendingInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
    genres?: GenreMovieCreateNestedManyWithoutMovieInput
    details?: MovieDetailCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyCreateNestedManyWithoutMovieInput
    language: LanguageCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateWithoutTrendingInput = {
    id: string
    title: string
    originalTitle: string
    originalLanguage: string
    adult: boolean
    genres?: GenreMovieUncheckedCreateNestedManyWithoutMovieInput
    details?: MovieDetailUncheckedCreateNestedOneWithoutMovieInput
    companies?: MovieCompanyUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutTrendingInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutTrendingInput, MovieUncheckedCreateWithoutTrendingInput>
  }

  export type TrendingEntryUpsertWithoutMoviesInput = {
    update: XOR<TrendingEntryUpdateWithoutMoviesInput, TrendingEntryUncheckedUpdateWithoutMoviesInput>
    create: XOR<TrendingEntryCreateWithoutMoviesInput, TrendingEntryUncheckedCreateWithoutMoviesInput>
    where?: TrendingEntryWhereInput
  }

  export type TrendingEntryUpdateToOneWithWhereWithoutMoviesInput = {
    where?: TrendingEntryWhereInput
    data: XOR<TrendingEntryUpdateWithoutMoviesInput, TrendingEntryUncheckedUpdateWithoutMoviesInput>
  }

  export type TrendingEntryUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
    language?: LanguageUpdateOneWithoutTrendingNestedInput
  }

  export type TrendingEntryUncheckedUpdateWithoutMoviesInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
    languageId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovieUpsertWithoutTrendingInput = {
    update: XOR<MovieUpdateWithoutTrendingInput, MovieUncheckedUpdateWithoutTrendingInput>
    create: XOR<MovieCreateWithoutTrendingInput, MovieUncheckedCreateWithoutTrendingInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutTrendingInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutTrendingInput, MovieUncheckedUpdateWithoutTrendingInput>
  }

  export type MovieUpdateWithoutTrendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUpdateManyWithoutMovieNestedInput
    language?: LanguageUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieUncheckedUpdateWithoutTrendingInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    originalLanguage?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUncheckedUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUncheckedUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type GenreMovieCreateManyGenreInput = {
    movieId: string
  }

  export type GenreMovieUpdateWithoutGenreInput = {
    movie?: MovieUpdateOneRequiredWithoutGenresNestedInput
  }

  export type GenreMovieUncheckedUpdateWithoutGenreInput = {
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreMovieUncheckedUpdateManyWithoutGenreInput = {
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingEntryCreateManyLanguageInput = {
    id: string
    datetime: Date | string
    mode: number
  }

  export type MovieCreateManyLanguageInput = {
    id: string
    title: string
    originalTitle: string
    adult: boolean
  }

  export type TrendingEntryUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
    movies?: TrendingStoryUpdateManyWithoutTrendingNestedInput
  }

  export type TrendingEntryUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
    movies?: TrendingStoryUncheckedUpdateManyWithoutTrendingNestedInput
  }

  export type TrendingEntryUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    datetime?: DateTimeFieldUpdateOperationsInput | Date | string
    mode?: IntFieldUpdateOperationsInput | number
  }

  export type MovieUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
    genres?: GenreMovieUncheckedUpdateManyWithoutMovieNestedInput
    details?: MovieDetailUncheckedUpdateOneWithoutMovieNestedInput
    companies?: MovieCompanyUncheckedUpdateManyWithoutMovieNestedInput
    trending?: TrendingStoryUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateManyWithoutLanguageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    originalTitle?: StringFieldUpdateOperationsInput | string
    adult?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GenreMovieCreateManyMovieInput = {
    genreId: string
  }

  export type MovieCompanyCreateManyMovieInput = {
    companyId: string
  }

  export type TrendingStoryCreateManyMovieInput = {
    trendingId: string
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
  }

  export type GenreMovieUpdateWithoutMovieInput = {
    genre?: GenreUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type GenreMovieUncheckedUpdateWithoutMovieInput = {
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type GenreMovieUncheckedUpdateManyWithoutMovieInput = {
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCompanyUpdateWithoutMovieInput = {
    company?: CompanyUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieCompanyUncheckedUpdateWithoutMovieInput = {
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCompanyUncheckedUpdateManyWithoutMovieInput = {
    companyId?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingStoryUpdateWithoutMovieInput = {
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
    trending?: TrendingEntryUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type TrendingStoryUncheckedUpdateWithoutMovieInput = {
    trendingId?: StringFieldUpdateOperationsInput | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
  }

  export type TrendingStoryUncheckedUpdateManyWithoutMovieInput = {
    trendingId?: StringFieldUpdateOperationsInput | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
  }

  export type MovieCompanyCreateManyCompanyInput = {
    movieId: string
  }

  export type MovieCompanyUpdateWithoutCompanyInput = {
    movie?: MovieUpdateOneRequiredWithoutCompaniesNestedInput
  }

  export type MovieCompanyUncheckedUpdateWithoutCompanyInput = {
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCompanyUncheckedUpdateManyWithoutCompanyInput = {
    movieId?: StringFieldUpdateOperationsInput | string
  }

  export type TrendingStoryCreateManyTrendingInput = {
    movieId: string
    votesCount: number
    votesAverage: number
    popularity: number
    page: number
    rank: number
    rankPage: number
  }

  export type TrendingStoryUpdateWithoutTrendingInput = {
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
    movie?: MovieUpdateOneRequiredWithoutTrendingNestedInput
  }

  export type TrendingStoryUncheckedUpdateWithoutTrendingInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
  }

  export type TrendingStoryUncheckedUpdateManyWithoutTrendingInput = {
    movieId?: StringFieldUpdateOperationsInput | string
    votesCount?: IntFieldUpdateOperationsInput | number
    votesAverage?: FloatFieldUpdateOperationsInput | number
    popularity?: FloatFieldUpdateOperationsInput | number
    page?: IntFieldUpdateOperationsInput | number
    rank?: IntFieldUpdateOperationsInput | number
    rankPage?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}