import type { CoffeeShop } from '@/shared/types'

export const coffeeShops: CoffeeShop[] = [
  {
    name: 'La Teoría de los 6 Cafés',
    addresses: [
      {
        address: 'Camelias 763',
        district: 'San Isidro',
      },
      {
        address: 'Conquistadores 181',
        district: 'San Isidro',
      },
      {
        address: 'Mendiburu 890',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/teoriadelos6cafes',
      },
    ],
    keys: ['la teoría de los 6 cafés', 'san isidro', 'miraflores', 'teoriadelos6cafes'],
  },
  {
    name: 'Caleta Dolsa Coffee',
    addresses: [
      {
        address: 'Av. San Martín 223',
        district: 'Barranco',
      },
      {
        address: 'Av. Pardo y Aliaga 658',
        district: 'San Isidro',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/caleta.dolsacoffee',
      },
    ],
    keys: ['caleta dolsa coffee', 'barranco', 'san isidro', 'caleta.dolsacoffee'],
  },
  {
    name: 'Kaldis Specialty Coffee',
    addresses: [
      {
        address: 'Calle Gral Recavarren 598',
        district: 'Miraflores',
      },
      {
        address: 'Av. Aramburú 1147',
        district: 'San Isidro',
      },
      {
        address: 'Calle Grimaldo del Solar 247',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/kaldiscoffeetea',
      },
    ],
    keys: ['kaldis specialty coffee', 'miraflores', 'san isidro', 'kaldiscoffeetea'],
  },
  {
    name: 'The Coffee',
    addresses: [
      {
        address: 'Av. República de Colombia 729',
        district: 'San Isidro',
      },
      {
        address: 'Av. Dos de Mayo 219',
        district: 'San Isidro',
      },
      {
        address: 'Av. Javier Prado Este 4200',
        district: 'Santiago de Surco',
      },
      {
        address: 'Calle Porta 118',
        district: 'Miraflores',
      },
      {
        address: 'Av. Circunvalación del Golf los Incas 170',
        district: 'Santiago de Surco',
      },
      {
        address: 'Av. Almirante Miguel Grau 1130',
        district: 'Barranco',
      },
      {
        address: 'Boulevard Puntamar Km 42 Panamericana Sur',
        district: 'Punta Hermosa',
      },
      {
        address: 'Av. General Salaverry 2370',
        district: 'Jesús María',
      },
      {
        address: 'Av. El Sol 455',
        district: 'Barranco',
        commingSoon: true,
      },
      {
        address: 'Av. Jorge Basadre Grohmann 347',
        district: 'San Isidro',
        commingSoon: true,
      },
      {
        address: 'Av. Javier Prado Este 2010',
        district: 'San Borja',
        commingSoon: true,
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/thecoffee.pe',
      },
    ],
    keys: [
      'the coffee',
      'san isidro',
      'santiago de surco',
      'miraflores',
      'barranco',
      'punta hermosa',
      'jesús maría',
      'san borja',
      'thecoffee.pe',
    ],
  },
  {
    name: 'Don Salazar',
    addresses: [
      {
        address: 'Calle Las Camelias 185',
        district: 'San Isidro',
      },
      {
        address: 'Jr. Luis Sánchez Cerro 2098',
        district: 'Jesús María',
      },
      {
        address: 'Tottus Av. La Fontana 810',
        district: 'La Molina',
      },
      {
        address: 'Boulevard Puntamar KM 42',
        district: 'Punta Hermosa',
      },
      {
        address: 'Av. Gral Salaverry 2370',
        district: 'Jesús María',
      },
      {
        address: 'Av. Jorge Chavez 148, Cruce Av. Pardo con Comandante Espinar',
        district: 'Miraflores',
      },
      {
        address: 'Av. Javier Prado Este 4200',
        district: 'Surco',
      },
      {
        address: 'Av. de la Marina 2000',
        district: 'San Miguel',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/donsalazar_coffee',
      },
    ],
    keys: [
      'don salazar',
      'san isidro',
      'jesús maría',
      'la molina',
      'punta hermosa',
      'miraflores',
      'surco',
      'san miguel',
      'donsalazar_coffee',
    ],
  },
  {
    name: 'Café Gianfranco',
    petFriendly: true,
    addresses: [
      {
        address: 'Avenida Javier Prado Oeste 705',
        district: 'San Isidro',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/cafegianfranco',
      },
    ],
    keys: ['café gianfranco', 'san isidro', 'cafegianfranco'],
  },
  {
    name: 'Neira Café Lab',
    addresses: [
      {
        address: 'Enrique Palacios 1074',
        district: 'Miraflores',
      },
      {
        address: 'Victor Maurtua 150',
        district: 'San Isidro',
      },
      {
        address: '2 de Mayo 1230',
        district: 'San Isidro',
      },
      {
        address: 'Torre Interbank',
        district: 'La Victoria',
      },
      {
        address: 'Av Caminos del Inca 1110',
        district: 'Chacarilla',
      },
      {
        address: 'Av. República de Panamá 6017',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/neiracafelab',
      },
    ],
    keys: ['neira café lab', 'miraflores', 'san isidro', 'la victoria', 'chacarilla', 'neiracafelab'],
  },
  {
    name: 'Amarena',
    addresses: [
      {
        address: 'Av. Mariscal La Mar 438',
        district: 'Miraflores',
      },
      {
        address: 'Av. Bolognesi 506',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/amarena.___',
      },
    ],
    keys: ['amarena', 'miraflores', 'amarena.___'],
  },
  {
    name: 'Punto Café',
    addresses: [
      {
        address: 'Calle Piura 1251',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/puntocafe_pe',
      },
    ],
    keys: ['punto café', 'miraflores', 'puntocafe_pe'],
  },
  {
    name: 'Senda Cafe',
    petFriendly: true,
    addresses: [
      {
        address: 'Calle Alcanfores 348',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/sendacafe',
      },
    ],
    keys: ['senda cafe', 'miraflores', 'sendacafe'],
  },
  {
    name: 'Parque Sol Terraza Café',
    addresses: [
      {
        address: 'Calle Piura 498',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/parquesolterrazacafe',
      },
    ],
    keys: ['parque sol terraza café', 'miraflores', 'parquesolterrazacafe'],
  },
  {
    name: 'Ursa Coffee Roasters',
    addresses: [
      {
        address: 'Alcanfores 183',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/ursacoffeeperu',
      },
    ],
    keys: ['ursa coffee roasters', 'miraflores', 'ursacoffeeperu'],
  },
  {
    name: 'Taruka Coffee Roots',
    addresses: [
      {
        address: 'Grimaldo del Solar 265',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/taruka.coffee',
      },
    ],
    keys: ['taruka coffee roots', 'miraflores', 'taruka.coffee'],
  },
  {
    name: 'Artidoro Rodríguez Café',
    addresses: [
      {
        address: 'Calle Tarata 285',
        district: 'Miraflores',
      },
      {
        address: 'Av. La Mar 342',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/artidorocoffee',
      },
    ],
    keys: ['artidoro rodríguez café', 'miraflores', 'artidorocoffee'],
  },
  {
    name: 'Pache',
    addresses: [
      {
        address: 'Av. Miguel Grau 1520',
        district: 'Barranco',
      },
      {
        address: 'Av. Grimaldo del Solar 317',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/pachecafe',
      },
    ],
    keys: ['pache', 'barranco', 'miraflores', 'pachecafe'],
  },
  {
    name: 'Praga Café',
    addresses: [
      {
        address: 'Calle Jose Toribio Polo 367',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/pragacafe_pe',
      },
    ],
    keys: ['praga café', 'miraflores', 'pragacafe_pe'],
  },
  {
    name: 'Ok Café',
    addresses: [
      {
        address: 'Av. Mariscal La Mar 882',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/okcafe__________',
      },
    ],
    keys: ['ok café', 'miraflores', 'okcafe__________'],
  },
  {
    name: 'Monotono Coffee',
    addresses: [
      {
        address: 'Jr. Fedelli 103',
        district: 'Barranco',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/monotonocoffee',
      },
    ],
    keys: ['monotono coffee', 'barranco', 'monotonocoffee'],
  },
  {
    name: 'Ciclos Café',
    addresses: [
      {
        address: 'Jr. Colina 111',
        district: 'Barranco',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/cicloscafe',
      },
    ],
    keys: ['ciclos café', 'barranco', 'cicloscafe'],
  },
  {
    name: 'Origen Tostadores de Café',
    addresses: [
      {
        address: 'Av. Simón Bolívar 1199',
        district: 'Pueblo Libre',
      },
      {
        address: 'Calle Las Tiendas 295',
        district: 'Surquillo',
      },
      {
        address: 'Av. Ignacio Merino 1784',
        district: 'Lince',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/origentostadoresdecafe',
      },
    ],
    keys: ['origen tostadores de café', 'pueblo libre', 'surquillo', 'lince', 'origentostadoresdecafe'],
  },
  {
    name: 'Abisinia Café',
    addresses: [
      {
        address: 'Av. Rodriguez de Mendoza 245',
        district: 'Pueblo Libre',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/abisinia.co',
      },
    ],
    keys: ['abisinia café', 'pueblo libre', 'abisinia.co'],
  },
  {
    name: 'Barra Cafeteadora',
    addresses: [
      {
        address: 'Jr. Arrieta 127',
        district: 'Pueblo Libre',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/barracafeteadora',
      },
    ],
    keys: ['barra cafeteadora', 'pueblo libre', 'barracafeteadora'],
  },
  {
    name: 'Comadre Café',
    petFriendly: true,
    addresses: [
      {
        address: 'Av. Manuel Cipriano Dulanto 1614',
        district: 'Pueblo Libre',
      },
      {
        address: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        district: 'Miraflores',
      },
      {
        address: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        district: 'Miraflores',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/comadrecafe.pe',
      },
    ],
    keys: ['comadre café', 'pueblo libre', 'miraflores', 'comadrecafe.pe'],
  },
  {
    name: 'Cordillera 27 Café',
    addresses: [
      {
        address: 'Av. Parque el Carmen 1216',
        district: 'Pueblo Libre',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/cordillera27cafe',
      },
    ],
    keys: ['cordillera 27 café', 'pueblo libre', 'cordillera27cafe'],
  },
  {
    name: 'SinMigajas',
    addresses: [
      {
        address: 'Av. Agustín de la Rosa Toro 1128',
        district: 'San Borja',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/sinmigajasperu',
      },
    ],
    keys: ['sinmigajas', 'san borja', 'sinmigajasperu'],
  },
  {
    name: 'Violet Cafe Lab',
    addresses: [
      {
        address: 'Av. San Luis 2516',
        district: 'San Borja',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/violetcafelab_tostaduria',
      },
    ],
    keys: ['violet cafe lab', 'san borja', 'violetcafelab_tostaduria'],
  },
  {
    name: 'Clamore Café',
    addresses: [
      {
        address: 'Av. Arenales 471',
        district: 'Jesús María',
      },
      {
        address: 'Av. Arnaldo Marquez 1575',
        district: 'Jesús María',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/clamorecafe',
      },
    ],
    keys: ['clamore café', 'jesús maría', 'clamorecafe'],
  },
  {
    name: 'Yorifer Café',
    addresses: [
      {
        address: 'Av. Húsares de Junín 425',
        district: 'Jesús María',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/yorifer.cafe',
      },
    ],
    keys: ['yorifer café', 'jesús maría', 'yorifer.cafe'],
  },
  {
    name: 'Cosecha',
    addresses: [
      {
        address: 'Av. Horacio Urteaga 1180',
        district: 'Jesús María',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/cosecha.peru',
      },
    ],
    keys: ['cosecha', 'jesús maría', 'cosecha.peru'],
  },
  {
    name: 'Bocanada',
    addresses: [
      {
        address: 'El Polo 480',
        district: 'Santiago de Surco',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/bocanadaperu',
      },
    ],
    keys: ['bocanada', 'santiago de surco', 'bocanadaperu'],
  },
  {
    name: 'Cabina Lima',
    addresses: [
      {
        address: 'Av. La Encalada 398',
        district: 'Santiago de Surco',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/cabinalima_',
      },
    ],
    keys: ['cabina lima', 'santiago de surco', 'cabinalima_'],
  },
  {
    name: 'Amauta Coffee',
    addresses: [
      {
        address: 'Calle Alcanfores 323',
        district: 'Miraflores',
      },
      {
        address: 'Jr. Preciados 126 int. 32',
        district: 'Surco',
      },
      {
        address: 'Av. Aviación 4854',
        district: 'Surco',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/amautacoffee',
      },
    ],
    keys: ['amauta coffee', 'miraflores', 'surco', 'amautacoffee'],
  },
  {
    name: "D'Sala Caffè",
    addresses: [
      {
        address: 'Av. Gonzáles Prada 543',
        district: 'Surquillo',
      },
      {
        address: 'Av. Alberto del Campo 421',
        district: 'Magdalena',
      },
      {
        address: 'Calle Miguel Dasso 141',
        district: 'San Isidro',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/dsalacaffe',
      },
    ],
    keys: ["d'sala caffè", 'surquillo', 'magdalena', 'san isidro', 'dsalacaffe'],
  },
  {
    name: 'Frecuente',
    addresses: [
      {
        address: 'Jr. Leoncio Prado 490',
        district: 'Surquillo',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/frecuente.pe',
      },
    ],
    keys: ['frecuente', 'surquillo', 'frecuente.pe'],
  },
  {
    name: 'Oriunda Cafetería Organica',
    addresses: [
      {
        address: 'Av. Ricardo Palma 240',
        district: 'Surquillo',
      },
    ],
    socials: [
      {
        social: 'instagram',
        link: 'https://www.instagram.com/oriundacafeteria',
      },
    ],
    keys: ['oriunda cafetería organica', 'surquillo', 'oriundacafeteria'],
  },
]
