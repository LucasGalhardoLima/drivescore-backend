-- CreateTable
CREATE TABLE "Maker" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Maker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Model" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "makerId" INTEGER,

    CONSTRAINT "Model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Year" (
    "id" SERIAL NOT NULL,
    "year" INTEGER NOT NULL,
    "fuelType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "modelId" INTEGER,

    CONSTRAINT "Year_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Version" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "gearbox" TEXT NOT NULL,
    "bodywork" TEXT NOT NULL,
    "fuelType" TEXT NOT NULL,
    "traction" TEXT NOT NULL,
    "doors" INTEGER NOT NULL,
    "seats" INTEGER NOT NULL,
    "horsepower" TEXT NOT NULL,
    "motorization" TEXT,
    "emissions" TEXT,
    "fuelEconomy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "yearId" INTEGER,
    "modelId" INTEGER,

    CONSTRAINT "Version_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Model" ADD CONSTRAINT "Model_makerId_fkey" FOREIGN KEY ("makerId") REFERENCES "Maker"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Year" ADD CONSTRAINT "Year_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Version" ADD CONSTRAINT "Version_yearId_fkey" FOREIGN KEY ("yearId") REFERENCES "Year"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Version" ADD CONSTRAINT "Version_modelId_fkey" FOREIGN KEY ("modelId") REFERENCES "Model"("id") ON DELETE SET NULL ON UPDATE CASCADE;
