-- CreateTable
CREATE TABLE `Genre` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Language` (
    `id` VARCHAR(2) NOT NULL,
    `englishName` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Movie` (
    `id` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `originalTitle` VARCHAR(191) NOT NULL,
    `originalLanguage` VARCHAR(6) NOT NULL,
    `adult` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GenreMovie` (
    `genreId` VARCHAR(191) NOT NULL,
    `movieId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`genreId`, `movieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieDetail` (
    `movieId` VARCHAR(191) NOT NULL,
    `voteCount` INTEGER NOT NULL,
    `voteAverage` DOUBLE NOT NULL,
    `popularity` DOUBLE NOT NULL,
    `releaseDate` DATETIME(3) NOT NULL,
    `posterPath` VARCHAR(191) NULL,

    PRIMARY KEY (`movieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Company` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MovieCompany` (
    `movieId` VARCHAR(191) NOT NULL,
    `companyId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`movieId`, `companyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrendingEntry` (
    `id` VARCHAR(191) NOT NULL,
    `datetime` DATETIME(3) NOT NULL,
    `mode` INTEGER NOT NULL,
    `languageId` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrendingStory` (
    `trendingId` VARCHAR(191) NOT NULL,
    `movieId` VARCHAR(191) NOT NULL,
    `votesCount` INTEGER NOT NULL,
    `votesAverage` DOUBLE NOT NULL,
    `popularity` DOUBLE NOT NULL,
    `page` INTEGER NOT NULL,
    `rank` INTEGER NOT NULL,
    `rankPage` INTEGER NOT NULL,

    PRIMARY KEY (`trendingId`, `movieId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Movie` ADD CONSTRAINT `Movie_originalLanguage_fkey` FOREIGN KEY (`originalLanguage`) REFERENCES `Language`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GenreMovie` ADD CONSTRAINT `GenreMovie_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `GenreMovie` ADD CONSTRAINT `GenreMovie_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieDetail` ADD CONSTRAINT `MovieDetail_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCompany` ADD CONSTRAINT `MovieCompany_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MovieCompany` ADD CONSTRAINT `MovieCompany_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrendingEntry` ADD CONSTRAINT `TrendingEntry_languageId_fkey` FOREIGN KEY (`languageId`) REFERENCES `Language`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrendingStory` ADD CONSTRAINT `TrendingStory_trendingId_fkey` FOREIGN KEY (`trendingId`) REFERENCES `TrendingEntry`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TrendingStory` ADD CONSTRAINT `TrendingStory_movieId_fkey` FOREIGN KEY (`movieId`) REFERENCES `Movie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
