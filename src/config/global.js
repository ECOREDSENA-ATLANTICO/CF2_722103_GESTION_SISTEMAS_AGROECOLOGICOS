export default {
  global: {
    componenteFormativo: 'Bases conceptuales de la agroecología',
    descripcionCurso:
      'Este componente proporciona la información necesaria para comprender la evolución del pensamiento agroecológico, las metodologías, componentes, determinantes, recursos, procesos, estructura y funcionamiento de los agroecosistemas; así como los enfoques de la agroecología como factores preponderantes para lograr establecer prácticas agrícolas sostenibles en diferentes ecosistemas.',
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.svg'),
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/images/header/interno.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/images/header/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/images/header/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/images/header/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/images/header/4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Bases conceptuales de la agroecología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Evolución del pensamiento agroecológico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Metodologías y prácticas de la agroecología',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Componentes, determinantes, recursos, procesos y estructura de los agroecosistemas ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Funcionamiento de los agroecosistemas',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Enfoques de la agroecología',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Enfoque multifuncional y multidimensional',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Relación entre sostenibilidad, capacidad de carga, huella ecológica y cambio climático',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'La agroecología como enfoque principal para una agricultura sostenible',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Altieri, M. (1999). Bases científicas para una agricultura sustentable. Nordan Comunidad.',
      link:
        'http://agroeco.org/wp-content/uploads/2010/10/Libro-Agroecologia.pdf ',
    },
    {
      referencia:
        'Briggs, D., & Courtney, M. (1985). <i>Agriculture and Environment. Longman.</i>',
    },
    {
      referencia:
        'Rodríguez, B., M. (2019). Nuestro planeta, nuestro futuro. Penguin Random House Grupo Editorial.',
    },
    {
      referencia:
        'Castiblanco, C. (s. f.).  Indicadores de sustentabilidad opciones de adaptación y mitigación Aspectos Distributivos del cambio climático. Cepal. ',
      link:
        'https://www.cepal.org/sites/default/files/courses/files/presentacion_carmenza_castiblanco.pdf',
    },
    {
      referencia:
        'Casimiro, L. (2016). Bases metodológicas para la resiliencia socioecológica de fincas familiares en Cuba. [Tesis de doctorado en agroecología]. Universidad de Antioquia. Medellín, Colombia. n',
      link:
        'https://bibliotecadigital.udea.edu.co/bitstream/10495/6112/1/RodriguezL_2016_BasesMetodol%C3%B3gicasResiliencia.pdf ',
    },
    {
      referencia:
        'Rodríguez M., y Espinoza, G. (2002). Gestión ambiental en América Latina y el Caribe Evolución, tendencias y principales prácticas. David Wilk.',
    },
    {
      referencia:
        'Sarandón, S. (2020). Cuadernos de la transformación: El papel de la agricultura en la transformación social-ecológica de América Latina. Friedrich-Ebert-Stiftung.',
      link: 'http://library.fes.de/pdf-files/bueros/mexiko/16550.pdf',
    },
    {
      referencia:
        'Sarandón, S. (2002). La agricultura como actividad transformadora del ambiente. El Impacto de la Agricultura intensiva de la Revolución Verde. En S. J., Sarandón (Ed.). Agroecología: el camino hacia una agricultura sustentable, (pp. 23-48). Ediciones Científicas Americanas.',
    },
    {
      referencia:
        'Sarandón, S. (2009). Biodiversidad, agrobiodiversidad y agricultura sustentable: análisis del Convenio sobre Diversidad Biológica. En M. A. Altieri (Ed). Vertientes del pensamiento agroecológico: fundamentos y aplicaciones. Sociedad Científica Latinoamericana de Agroecología. Socla',
      link:
        'https://www.agroecologia.net/wp-content/uploads/2020/12/biodiversidad-agroecologia-santiago-sarandon.pdf',
    },
    {
      referencia:
        'Sarandón, S., y Flores, C. (2014). Agroecología: bases teóricas para el diseño y manejo de agroecosistemas sustentables.',
      link:
        'https://libros.unlp.edu.ar/index.php/unlp/catalog/view/72/54/181-1 ',
    },
    {
      referencia:
        'Shiva, V. (1991). <i>“Miracle seeds” and the destruction of genetic diversity. In: The violence of the green revolution. Third World Agriculture, Ecology and Politics. (pp. 61-102). Third World Network.</i> ',
    },
    {
      referencia:
        'Shiva, V. (2014). <i>The GMO Emperor Has No Clothes - Genetic Engineering Is a Failed Technology. En V. Shiva, The Vandana Shiva Reader (pp. 277 - 297).  The University Press of Kentucky.</i>',
    },
  ],
  glosario: [
    {
      termino: 'Cultivo secano',
      significado:
        'la agricultura de secano es un método de cultivo en el que se emplea con exclusividad el agua de lluvia, sin intervención del riego artificial implantado (agricultura de regadío), y que se aplica directamente a la superficie cultivada y se almacena en el perfil del suelo para su absorción inmediata por los cultivos (riego por inundación) o bien se almacena en un embalse para su uso productivo en el futuro como riego complementario.',
    },
    {
      termino: 'Especie',
      significado:
        'conjunto de organismos que responden a las mismas características enunciadas para la población, pero sin tener en cuenta las restricciones temporales y geográficas que separan a estas.',
    },
    {
      termino: 'Nicho ecológico',
      significado:
        'estrategia de supervivencia utilizada por una especie, que incluye la forma de alimentarse, de competir con otras, de cazar, de evitar ser cazada. ',
    },
    {
      termino: 'Población',
      significado:
        'conjunto de organismos de una misma especie que comparten un mismo hábitat.',
    },
    {
      termino: 'Unidad funcional',
      significado:
        'consiste en un conjunto de máquinas, bienes o productos que le permitirán desarrollar una actividad generadora de ingresos ya sea por producción, venta, alquiler o prestación de servicios haciendo una mínima inversión inicial y con un bajo costo operativo. Las unidades productivas son una oportunidad para generar espíritu emprendedor y empresarial a nivel de la población rural. Su perfeccionamiento apunta a desarrollar la cultura empresarial en comunidades ubicadas en el campo.',
    },
  ],
  complementario: [
    {
      tema: '1.1	Evolución del pensamiento agroecológico.',
      referencia:
        'Semillas de Identidad Colombia. (2020). ¿Qué agroecología necesitamos? [Video]. YouTube. ',
      tipo: 'Video ',
      link:
        'https://www.youtube.com/watch?v=xGC5B_-Nj-Y&ab_channel=SemillasdeIdentidadColombia',
    },
    {
      tema: '1.1.	Evolución del pensamiento agroecológico',
      referencia:
        'Puma, R., D. (2020). ¿Cómo se llega a la agroecología? TEDx Talks. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=U9ZH-d9c5qc&ab_channel=TEDxTalks',
    },
    {
      tema: '1.1 Evolución del pensamiento agroecológico',
      referencia:
        'Armbrecht. (2017). Agroecología y respeto por la biodiversidad. TEDx Talks. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-pg0ldOnUyA&ab_channel=TEDxTalks',
    },
    {
      tema: '1.2 Metodologías y prácticas de la agroecología.',
      referencia:
        'Wezel, A., Gemmill Herren, B., Bezner Kerr, R., Barrios, E., Rodrigues Gonçalves, A. L., y Sinclair, F. (2020). Principios y elementos agroecológicos y sus implicaciones para la transición a sistemas alimentarios sostenibles. <i>Agronomy for Sustainable Development</i>. ',
      tipo: 'Artículo',
      link:
        'http://www.alimentosargentinos.gob.ar/HomeAlimentos/organicos/documentos/Principios-agroecologicos-Wezel-2020.pdf',
    },
    {
      tema: '1.2 Metodologías y prácticas de la agroecología.',
      referencia:
        'PNUD Costa Rica. (2022). CONUBI - Los 7 principios de la agroecologia. [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=cZwVQuvxohg&ab_channel=PNUDCostaRic',
    },
    {
      tema:
        '2.3 La agroecología como enfoque principal para una agricultura sostenible.',
      referencia:
        '<i>Food and Agriculture Organization of the United Nations.</i> (2021). Agroecología, un enfoque para alcanzar sistemas agroalimentarios más sostenibles y resilientes. [Video]. YouTube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=e_wOOOOZNrQ&ab_channel=FoodandAgricultureOrganizationoftheUnitedNations',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de Diseño Instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ingrid Natalia Lozano Muñoz',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Paola Alexandra Moya Peralta',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología  - Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología - Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Rey',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de Gestión de Repositorio',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
