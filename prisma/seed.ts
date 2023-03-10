import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const makers = [
  'Acura',
  'Agrale',
  'Alfa Romeo',
  'AM General',
  'Asia Motors',
  'Aston Martin',
  'Audi',
  'Baby',
  'BMW',
  'BRM',
  'Bugre',
  'BYD',
  'CAB Motors',
  'Cadillac',
  'CBT Jipe',
  'Chana',
  'Changan',
  'Chery',
  'Chevrolet',
  'Chrysler',
  'Citroën',
  'Cross Lander',
  'Daewoo',
  'Daihatsu',
  'Dodge',
  'Effa',
  'Engesa',
  'Envemo',
  'Ferrari',
  'Fiat',
  'Fibravan',
  'Ford',
  'Fyber',
  'Geely',
  'Great Wall',
  'Gurgel',
  'Hafei',
  'Hitech Electric',
  'Honda',
  'Hyundai',
  'Isuzu',
  'Jac',
  'Jaguar',
  'Jeep',
  'Jinbei',
  'JPX',
  'Kia Motors',
  'Lada',
  'Lamborghini',
  'Land Rover',
  'Lexus',
  'Lifan',
  'Lobini',
  'Lotus',
  'Mahindra',
  'Maserati',
  'Matra',
  'Mazda',
  'Mclaren',
  'Mercedes-Benz',
  'Mercury',
  'MG',
  'MINI',
  'Mitsubishi',
  'Miura',
  'Nissan',
  'Peugeot',
  'Plymouth',
  'Pontiac',
  'Porsche',
  'RAM',
  'Rely',
  'Renault',
  'Rolls-Royce',
  'Rover',
  'Saab',
  'Saturn',
  'Seat',
  'Shineray',
  'smart',
  'Ssangyong',
  'Subaru',
  'Suzuki',
  'TAC',
  'Toyota',
  'Troller',
  'Volkswagen',
  'Volvo',
  'Wake',
  'Walk',
];

const models = {
  Acura: ['Integra', 'Legend', 'NSX'],
  'Alfa Romeo': ['145', '147', '155', '156', '164', '166', '2300', 'Spider'],
  'AM General': ['Hummer'],
  'Asia Motors': ['AM 825', 'Jipe Rocsta', 'Topic', 'Towner'],
  'Aston Martin': [
    'DB9',
    'Rapide',
    'Rapide S',
    'Vanquish',
    'Vantage',
    'Vantage S',
    'Virage',
  ],
  'CAB Motors': ['Stark Mountain', 'Stark Superação'],
  'CBT Jipe': ['Javali'],
  'Cross Lander': ['CL-244', 'CL-330'],
  'Great Wall': ['HOVER CUV'],
  'Hitech Electric': ['e.co Cargo', 'e.co Tech2', 'e.co Tech4', 'e.co Truck'],
  'Kia Motors': [
    'Besta',
    'Bongo',
    'Cadenza',
    'Carens',
    'Carnival',
    'Cerato',
    'Ceres',
    'Clarus',
    'Grand Carnival',
    'Magentis',
    'Mohave',
    'Niro',
    'Opirus',
    'Optima',
    'Picanto',
    'Quoris',
    'Rio',
    'Sephia',
    'Shuma',
    'Sorento',
    'Soul',
    'Sportage',
    'Stinger',
    'Stonic',
  ],
  'Land Rover': [
    'Defender',
    'Discovery',
    'Discovery 4',
    'Discovery Sport',
    'Evo',
    'Evoque',
    'Freelander',
    'Freelander 2',
    'Range Rover Autobiography',
    'Range Rover Sport',
    'Range Rover Velar',
    'Range Rover Vogue',
  ],
  'Mercedes-Benz': [
    '180-D',
    '190-E',
    '230-E',
    '260-E',
    '300',
    '500',
    'A-35 AMG',
    'A-45 S AMG',
    'A35 AMG',
    'AMG GT Black Series',
    'Classe A',
    'Classe A Hatch',
    'Classe A Sedan',
    'Classe A Sedan AMG',
    'Classe B',
    'Classe C',
    'Classe C Conversível',
    'Classe CL',
    'Classe Cla',
    'Classe CLC',
    'Classe CLK',
    'Classe CLS',
    'Classe E',
    'Classe G',
    'Classe GL',
    'Classe GLA',
    'Classe GLB',
    'Classe GLC',
    'Classe GLE',
    'Classe GLK',
    'Classe GLS',
    'Classe ML',
    'Classe R',
    'Classe S',
    'Classe SL',
    'Classe SLC',
    'Classe SLK',
    'Classic',
    'EQC',
    'GT',
    'GT 43 AMG',
    'GT 63',
    'GT R AMG',
    'SE-500',
    'SLS',
    'Sprinter',
    'Sprinter Chassi',
    'Sprinter Furgao',
    'Sprinter Truck',
    'Sprinter Van',
    'Vito',
    'Vito Tourer',
  ],
  'Rolls-Royce': ['Cullinan', 'Dawn', 'Ghost', 'Phantom', 'Wraith'],
  Agrale: ['Marrua'],
  Audi: [
    '100',
    '80',
    'A1',
    'A1 Sportback',
    'A3',
    'A3 Cabriolet',
    'A3 Sedan',
    'A4',
    'A4 Avant',
    'A5',
    'A5 Cabriolet',
    'A6',
    'A6 Avant',
    'A7',
    'A8',
    'Allroad',
    'e-tron',
    'Q3',
    'Q5',
    'Q7',
    'Q8',
    'R8',
    'R8 Spyder',
    'RS e-tron',
    'RS Q3',
    'RS Q8',
    'RS2',
    'RS3 Sedan',
    'RS3 Sportback',
    'RS4',
    'RS5',
    'RS6',
    'RS6 Avant',
    'RS7',
    'S Q5',
    'S3',
    'S4',
    'S5',
    'S6',
    'S7',
    'S8',
    'TT',
    'TTRS',
    'TTS',
  ],
  Baby: ['Buggy'],
  BMW: [
    'i3',
    'i8',
    'iX',
    'iX',
    'M135',
    'M2',
    'M235',
    'M3 Sedan',
    'M340',
    'M440i',
    'M5',
    'M8',
    'M850',
    'Serie 1',
    'Serie 2',
    'Serie 3',
    'Serie 4',
    'Serie 5',
    'Serie 6',
    'Serie 7',
    'Serie 8',
    'Serie M',
    'X1',
    'X2',
    'X2 M35',
    'X3',
    'X3 M',
    'X4',
    'X4 M',
    'X5',
    'X5 M',
    'X6',
    'X6 M',
    'X7',
    'Z3',
    'Z4',
    'Z4 M40',
    'Z8',
  ],
  BRM: ['Buggy'],
  Bugre: ['Buggy'],
  BYD: ['D1', 'eT3', 'HAN', 'TAN'],
  Cadillac: ['Deville', 'Seville'],
  Chana: ['Cargo', 'Family', 'Utility'],
  Changan: ['Mini Star', 'Star Family', 'Star Utility'],
  Chery: [
    'Arrizo 5',
    'Arrizo 5e',
    'Arrizo 6',
    'Celer',
    'Cielo',
    'Face',
    'iCar',
    'QQ',
    'S-18',
    'Tiggo',
    'Tiggo 2',
    'Tiggo 3X',
    'Tiggo 5X',
    'Tiggo 7',
    'Tiggo 8',
  ],
  Chevrolet: [
    'A10',
    'Agile',
    'Astra',
    'Astra Sedan',
    'Blazer',
    'Bolt',
    'Bonanza',
    'Brasinca',
    'C-10',
    'C-20',
    'Calibra',
    'Camaro',
    'Camaro Conversível',
    'Caprice',
    'Captiva',
    'Caravan',
    'Cavalier',
    'Celta',
    'Chevette',
    'Chevy 500',
    'Cheyenne',
    'Classic',
    'Cobalt',
    'Corsa',
    'Corsa Pick-Up',
    'Corsa Sedan',
    'Corsa Wagon',
    'Corvette',
    'Cruze',
    'Cruze Sport',
    'D-10',
    'D-20',
    'Equinox',
    'Grand Blazer',
    'Ipanema',
    'Joy Hatch',
    'Joy Plus',
    'Kadett',
    'Lumina',
    'Malibu',
    'Marajo',
    'Meriva',
    'Montana',
    'Monza',
    'Omega',
    'Onix',
    'Onix Plus',
    'Opala',
    'Prisma',
    'S10',
    'Saturn',
    'Sierra',
    'Silverado',
    'Sonic',
    'Sonoma',
    'Space Van',
    'Spin',
    'Suburban',
    'Suprema',
    'Syclone',
    'Tigra',
    'Tracker',
    'Trafic',
    'Trailblazer',
    'Vectra',
    'Vectra GT',
    'Vectra GT-X',
    'Veraneio',
    'Zafira',
  ],
  Chrysler: [
    '300 C',
    '300 M',
    'Caravan',
    'Cirrus',
    'Grand Caravan',
    'Le Baron',
    'Neon',
    'PT Cruiser',
    'Sebring',
    'Stratus',
    'Town & Country',
    'Vision',
  ],
  Citroën: [
    'Aircross',
    'AX',
    'Berlingo',
    'BX',
    'C3',
    'C3 Picasso',
    'C4',
    'C4 Cactus',
    'C4 Lounge',
    'C4 Pallas',
    'C4 Picasso',
    'C5',
    'C5 Break',
    'C5 Tourer',
    'C6',
    'C8',
    'DS3',
    'DS4',
    'DS5',
    'Evasion',
    'Grand C4 Picasso',
    'Jumper',
    'Jumpy',
    'Xantia',
    'Xm',
    'Xsara',
    'Xsara Picasso',
    'ZX',
  ],
  Daewoo: [
    'Espero',
    'Lanos',
    'Leganza',
    'Nubira',
    'Prince Ace',
    'Racer',
    'Super Salon',
    'Tico',
  ],
  Daihatsu: ['Applause', 'Charade', 'Cuore', 'Feroza', 'Move', 'Terios'],
  Dodge: [
    'Avenger',
    'Dakota',
    'Durango',
    'Intrepid',
    'Journey',
    'Ram',
    'Ram 2500',
    'Stealth',
  ],
  Effa: [
    'K01 Pick-up',
    'K02 Pick-up',
    'M 100',
    'Plutus',
    'Start',
    'ULC Furgao',
    'ULC Picape',
    'V21 Pick-up',
    'V22 Pick-up',
    'V25 Furgão',
  ],
  Engesa: ['Engesa'],
  Envemo: ['Camper', 'Master'],
  Ferrari: [
    '348',
    '355',
    '360',
    '456',
    '458',
    '488',
    '550',
    '575M',
    '599',
    '612',
    '812',
    'California',
    'F12',
    'F430',
    'F8',
    'FF',
    'GTC4',
    'Portofino',
    'Roma',
    'SF90 Spider',
    'SF90 Stradale',
  ],
  Fiat: [
    '147',
    '500',
    'Argo',
    'Brava',
    'Bravo',
    'Cinquecento',
    'Coupe',
    'Cronos',
    'Doblo',
    'Doblo Cargo',
    'Ducato',
    'Duna',
    'Elba',
    'Fastback',
    'Fiorino',
    'Freemont',
    'Grand Siena',
    'Idea',
    'Linea',
    'Marea',
    'Marea Weekend',
    'Mobi',
    'Oggi',
    'Palio',
    'Palio Adventure',
    'Palio Weekend',
    'Panorama',
    'Premio',
    'Pulse',
    'Punto',
    'Scudo',
    'Siena',
    'Stilo',
    'Strada',
    'Tempra',
    'Tipo',
    'Toro',
    'Uno',
    'Uno Furgao',
    'Uno mille',
    'Weekend',
  ],
  Fibravan: ['Buggy Off Road', 'Buggy Plus', 'Buggy Vip'],
  Ford: [
    'Aerostar',
    'Aspire',
    'Belina',
    'Bronco',
    'Club Wagon',
    'Contour',
    'Corcel',
    'Courier',
    'Courier Van',
    'Crown',
    'Del Rey',
    'Ecosport',
    'Edge',
    'Escort',
    'Expedition',
    'Explorer',
    'F - 100',
    'F-1000',
    'F-150',
    'F-250',
    'Fiesta',
    'Fiesta Sedan',
    'Focus',
    'Focus Sedan',
    'Furglaine',
    'Fusion',
    'Ibiza',
    'Ka',
    'Ka+',
    'Maverick',
    'Mondeo',
    'Mustang',
    'Pampa',
    'Probe',
    'Ranger',
    'Royale',
    'Taurus',
    'Territory',
    'Thunderbird',
    'Transit',
    'Transit Minibus',
    'Transit Van',
    'Verona',
    'Versailles',
    'Windstar',
  ],
  Fyber: ['Buggy'],
  Geely: ['EC7', 'GC2'],
  Gurgel: ['BR-800', 'Carajas'],
  Hafei: [
    'Towner Furgão',
    'Towner Junior',
    'Towner Passageiro',
    'Towner Pick UP',
  ],
  Honda: [
    'Accord',
    'City',
    'City Hatchback',
    'Civic',
    'CR-V',
    'Fit',
    'HR-V',
    'Odyssey',
    'Passport',
    'Prelude',
    'WR-V',
  ],
  Hyundai: [
    'Accent',
    'Atos',
    'Azera',
    'Coupê',
    'Creta',
    'Elantra',
    'Equus',
    'Excel',
    'Galloper',
    'Genesis',
    'Grand Santa Fe',
    'H1',
    'H100',
    'H100 Furgao',
    'HB20',
    'HB20S',
    'HB20X',
    'HR',
    'i30',
    'I30 CW',
    'IX35',
    'Matrix',
    'Porter',
    'S Coupê',
    'Santa Fe',
    'Sonata',
    'Terracan',
    'Trajet',
    'Tucson',
    'Veloster',
    'Vera Cruz',
  ],
  Isuzu: ['Amigo', 'Hombre', 'Rodeo'],
  Jac: [
    'E-J7',
    'e-JS1',
    'e-JS4',
    'iEV 20',
    'iEV 330P',
    'iEV 350T',
    'iEV 40',
    'iEV 750V',
    'J2',
    'J3',
    'J3 Turin',
    'J5',
    'J6',
    'T40',
    'T5',
    'T50',
    'T6',
    'T60',
    'T8',
    'T80',
    'V260',
  ],
  Jaguar: [
    'Daimler',
    'E-pace',
    'F-Pace',
    'F-Type',
    'F-Type Cabriolet',
    'I-Pace',
    'S-Type',
    'Sovereign',
    'X-Type',
    'XE',
    'XF',
    'XFR',
    'XJ',
    'XJ-12',
    'XJ-8',
    'XJ6',
    'XJR',
    'XJS',
    'XK-8',
    'XKR',
  ],
  Jeep: [
    'Cherokee',
    'Commander',
    'Compass',
    'Gladiator',
    'Grand Cherokee',
    'Renegade',
    'Wrangler',
  ],
  Jinbei: ['Topic Escolar', 'Topic Furgão', 'Topic Van', 'VKN Van'],
  JPX: ['Jipe Montez', 'Picape Montez'],
  Lada: ['Laika', 'Niva', 'Samara'],
  Lamborghini: ['Aventador', 'Gallardo', 'Huracan', 'Urus'],
  Lexus: ['CT200h', 'ES', 'GS', 'IS', 'LS', 'NX', 'RX', 'SC', 'UX'],
  Lifan: ['320', '530', '620', 'Foison', 'X60', 'X80'],
  Lobini: ['H1'],
  Lotus: ['Elan', 'Esprit'],
  Mahindra: ['Pick Up', 'Scorpio', 'Suv'],
  Maserati: [
    '034031-6',
    '222',
    '228',
    '3200 GT',
    '430',
    'Coupe',
    'Ghibli',
    'Gran Turismo',
    'GranCabrio',
    'GranSport',
    'Levante',
    'Quattroporte',
    'Shamal',
    'Spyder',
  ],
  Matra: ['Pick-Up', 'Pick-Up CD'],
  Mazda: [
    '323',
    '626',
    '929',
    'B 2500',
    'B2200',
    'Millenia',
    'MPV',
    'MX3',
    'MX5',
    'Navajo',
    'Protege',
    'RX7',
  ],
  Mclaren: ['540', '570', '600', '720S', '765', 'GT Coupé'],
  Mercury: ['Mystique', 'Sable'],
  MG: ['550', 'MG6'],
  MINI: [
    'Cabrio',
    'Clubman',
    'Cooper',
    'Cooper Coupe',
    'Cooper Roadster',
    'Cooper S',
    'Cooper SE',
    'Countryman',
    'One',
    'Paceman',
  ],
  Mitsubishi: [
    '3000 GT',
    'Airtrek',
    'ASX',
    'Colt',
    'Diamant',
    'Eclipse',
    'Eclipse Cross',
    'Expo',
    'Galant',
    'Grandis',
    'L200',
    'L300',
    'Lancer',
    'Mirage',
    'Montero',
    'Outlander',
    'Pajero',
    'Pajero Dakar',
    'Pajero Full',
    'Pajero Sport',
    'Pajero TR4',
    'Space Wagon',
  ],
  Miura: ['Picape BG-Truck'],
  Nissan: [
    '350Z',
    'Altima',
    'AX',
    'Frontier',
    'GT-R',
    'Infiniti',
    'Kicks',
    'King Cab',
    'Leaf',
    'Livina',
    'Livina X-GEAR',
    'March',
    'Maxima',
    'Micra',
    'Murano',
    'NX',
    'Pathfinder',
    'Pick-Up',
    'Primera',
    'Quest',
    'Sentra',
    'Stanza',
    'SX',
    'Terrano',
    'Tiida',
    'Tiida Sedan',
    'Versa',
    'X-Terra',
    'X-Trail',
    'ZX',
  ],
  Peugeot: [
    '106',
    '2008',
    '205',
    '206',
    '206 CC',
    '206 SW',
    '207',
    '207 Passion',
    '207 SW',
    '208',
    '3008',
    '306',
    '307',
    '307 CC',
    '307 SW',
    '308',
    '405',
    '406',
    '407',
    '407 SW',
    '408',
    '5008',
    '504',
    '505',
    '508',
    '605',
    '607',
    '806',
    '807',
    'Boxer Cargo',
    'Boxer Furgao',
    'Boxer Minibus',
    'e-208',
    'E-Expert Cargo',
    'Expert',
    'Hoggar',
    'Partner',
    'Partner Furgao',
    'RCZ',
  ],
  Plymouth: ['Gran Voyager', 'Sundance'],
  Pontiac: ['Trans'],
  Porsche: [
    '718',
    '718 Cayman',
    '911',
    '911 Targa',
    '928',
    '968',
    'Boxster',
    'Cayenne',
    'Cayman',
    'Macan',
    'Panamera',
    'Taycan',
  ],
  RAM: ['1500', '2500', '3500'],
  Rely: ['Link', 'Pick-Up', 'Van'],
  Renault: [
    '19',
    '21',
    'Captur',
    'Clio',
    'Clio Sedan',
    'Duster',
    'Duster Oroch',
    'Express',
    'Fluence',
    'Grand Tour',
    'Kangoo',
    'Kangoo Express',
    'Kwid',
    'Laguna',
    'Logan',
    'Master',
    'Megane',
    'Megane Grand Tour',
    'Megane Sedan',
    'Safrane',
    'Sandero',
    'Sandero Stepway',
    'Scenic',
    'Symbol',
    'Trafic',
    'Twingo',
    'ZOE',
  ],
  Rover: ['Mini Cooper'],
  Saab: ['9000'],
  Saturn: ['SL-2'],
  Seat: ['Cordoba', 'Ibiza', 'Inca'],
  Shineray: ['A7', 'A9', 'Sy1020', 'X30'],
  smart: ['fortwo'],
  Ssangyong: [
    'Actyon',
    'Chairman',
    'Istana',
    'Korando',
    'Kyron',
    'Musso',
    'Rexton',
    'Tivoli',
    'XLV',
  ],
  Subaru: [
    'Forester',
    'Impreza',
    'Legacy',
    'Legacy SW',
    'Outback',
    'SVX',
    'Tribeca',
    'Vivio',
    'XV',
  ],
  Suzuki: [
    'Baleno',
    'Grand Vitara',
    'Ignis',
    'Jimny',
    'Jimny Canvas',
    'Jimny Sierra',
    'Jimny Wide',
    'S-Cross',
    'Samurai',
    'Sidekick',
    'Super Carry Van',
    'Swift',
    'SX4',
    'Vitara',
    'Wagon',
  ],
  TAC: ['Stark'],
  Toyota: [
    'Avalon',
    'Bandeirante',
    'Camry',
    'Celica',
    'Corolla',
    'Corolla Cross',
    'Corona',
    'Etios',
    'Etios Cross',
    'Etios Sedán',
    'Fielder',
    'Hilux',
    'Hilux SW4',
    'Land Cruiser',
    'MR-2',
    'Paseo',
    'Previa',
    'Prius',
    'RAV4',
    'Supra',
    'T-100',
    'YARIS',
    'YARIS Sedan',
  ],
  Troller: ['Pantanal', 'RF Sport', 'T-4'],
  Volkswagen: [
    'Amarok',
    'Apolo',
    'Bora',
    'Caravelle',
    'Corrado',
    'Crossfox',
    'Delivery Express+',
    'Eos',
    'Eurovan',
    'Fox',
    'Fusca',
    'Gol G1',
    'Gol G2',
    'Gol G3',
    'Gol G4',
    'Gol G5',
    'Gol G6',
    'Gol G7',
    'Gol G8',
    'Golf',
    'Golf Variant',
    'Jetta',
    'Jetta Variant',
    'Kombi',
    'Logus',
    'New Beetle',
    'Nivus',
    'Parati',
    'Passat',
    'Passat CC',
    'Passat Variant',
    'Pointer',
    'Polo',
    'Polo Sedan',
    'Quantum',
    'Santana',
    'Saveiro',
    'Space Cross',
    'Spacefox',
    'T-Cross',
    'TAOS',
    'Tiguan',
    'Touareg',
    'Up!',
    'Van',
    'Virtus',
    'Voyage',
  ],
  Volvo: [
    '440',
    '460',
    '850',
    '940',
    '960',
    'C30',
    'C40',
    'C70',
    'S40',
    'S60',
    'S70',
    'S80',
    'S90',
    'V40',
    'V40 Cross Country',
    'V50',
    'V60',
    'V70',
    'XC40',
    'XC60',
    'XC90',
  ],
  Wake: ['Cross', 'Street', 'Way'],
  Walk: ['Buggy Walk'],
};

async function main() {
  for (const maker of makers) {
    // await prisma.maker.create({
    //   data: {
    //     name: maker,
    //   },
    // });

    const makerSelected = await prisma.maker.findFirst({
      where: {
        name: maker,
      },
    });

    for (const model of models[makerSelected?.name]) {
      console.log(models[makerSelected?.name], model)
      await prisma.model.create({
        data: {
          name: model,
          makerId: makerSelected?.id,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
