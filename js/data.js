/**
 * CÓMO AGREGAR O EDITAR ESTE PROYECTO:
 * 1. Subir las imágenes a Cloudinary  y copiar las URLs.
 * 2. Colocar enlaces de imagenes y seguir la estructura de la tarjeta para generar una nueva tarjeta.
 *    (Cabe recalcar que la cantidad de las imagenes no importa, ya que esas van a mostrar los proyectos)
 * 3. Colocar enlace "visores3D" con uno o mas enlaces reales de SketchUp / Revit / Tekla.
 * 4. Guarda el archivo y recarga la página (Live Server refresca solo, se recomienda visualizar primero antes de realizar el commit).
 */

const proyectosArquitectura = [
  {
    codigo: "A-01",

    nombre: "Proyecto Residencial Pacheco",

    ubicacion: "Santiago de Surco, Lima",

    software: "SketchUp",

    descripcion:
      "Proyecto arquitectónico multifamiliar desarrollado en SketchUp para la visualización integral de fachadas, distribución de espacios y volumetría del edificio ubicado en la urbanización Chama, distrito de Santiago de Surco.",

    imagenes: [
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784414590/1_vlcujb.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784414581/6_blcul4.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784414580/4_bf54bo.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784414579/2_pjcsj3.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784414578/5_pyuzxs.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784414578/3_dgpcur.png"
    ],

    visores3D: [
      {
        nombre: "Modelo Arquitectónico",
        url: "https://app.sketchup.com/share/tc/northAmerica/6VpgGjZRa3M?source=desktop&stoken=bspCjbCBob3emVc9Ja2xxiwDmicjyXx9PF0NrfKs5E6ggs0k1xRbiL8CNNf10GZ5"
      }
    ]
  },
  {
    codigo: "A-02",

    nombre: "Señor de los Milagros",

    ubicacion: "Ventanilla, Callao",

    software: "SketchUp",

    descripcion:
      "Proyecto arquitectónico desarrollado en SketchUp para la visualización de fachadas, distribución espacial y volumetría general de la edificación ubicada en el sector Pachacútec, distrito de Ventanilla.",

    imagenes: [

      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784415400/1_geverw.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784415397/4_g8j9j6.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784415397/2_mkigi1.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784415395/5_m0dmr6.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784415399/3_o47mru.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784416619/6_qefzoq.png"

    ],

    visores3D: [
      {
        nombre: "Modelo Arquitectónico",
        url: "https://app.sketchup.com/share/tc/northAmerica/5DfVlxI3C1I?source=desktop&stoken=4owgmgYdSpT5F0rylfGe6ulSwH1nOamGyhyXioNHqbz2e1ojZiasGrBpkdcXa9I4"
      }
    ]
  },
  {
    codigo: "A-03",

    nombre: "Residencial Aliaga",

    ubicacion: "Pueblo Libre, Lima",

    software: "SketchUp",

    descripcion:
      "Proyecto arquitectónico desarrollado en SketchUp para la visualización de fachadas, distribución de ambientes y representación volumétrica de la edificación residencial ubicada en el distrito de Pueblo Libre.",

    imagenes: [

      // PORTADA
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784416087/5_yykv9t.png",

      // GALERÍA
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784416089/1_g3jgpt.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784416092/2_yajxct.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784416086/6_un41ms.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784416084/4_kbiqqp.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784416093/3_alynby.png"

    ],

    visores3D: [
      {
        nombre: "Modelo Arquitectónico",
        url: "https://app.sketchup.com/share/tc/northAmerica/M-GNk6ijork?source=desktop&stoken=hM5Hcm_RQFeGSGGYF3WSdwY9nl4KGHSHmhNiDA92t4IuXfGfc6zpxKpGjeDu7cW1"
      }
    ]
  },

  {
    codigo: "A-04",

    nombre: "Proyecto el Edén",

    ubicacion: "Comas, Lima",

    software: "SketchUp",

    descripcion:
      "Proyecto arquitectónico desarrollado en SketchUp para la visualización integral de fachadas, distribución de ambientes (que incluyen salas de reuniones y múltiples dormitorios) y recorrido espacial de la edificación ubicada en el distrito de Comas, Lima.",

    imagenes: [

      // PORTADA
      "https://res.cloudinary.com/qn9splvu/image/upload/v1787282545/1_imagen.png",

      // GALERÍA
      "https://res.cloudinary.com/qn9splvu/image/upload/v1787282545/2_imagen.png",
      "https://res.cloudinary.com/qn9splvu/image/upload/v1787282550/3_imagen.png",
      "https://res.cloudinary.com/qn9splvu/image/upload/v1787282547/4__imagen.png",
      "https://res.cloudinary.com/qn9splvu/image/upload/v1787282546/5_imagen.png",
      "https://res.cloudinary.com/qn9splvu/image/upload/v1787282548/6_imagen.png",
      "https://res.cloudinary.com/qn9splvu/image/upload/v1787282549/7_imagen.png",
    ],

    visores3D: [
      {
        nombre: "Modelo Arquitectónico",
        url: "https://app.sketchup.com/share/tc/northAmerica/kGAooIyUdvM?source=desktop&stoken=2leQPB7VMThSN8DgOKqS60Uvmtv7U6yZUqBjPk15Zuc9Z0sSv4MvorJJu1E1kgdZ"
      }
    ]
  },
];


const proyectosEstructuras = [
  {
    codigo: "B-01",

    nombre: "Casa La Molina",

    ubicacion: "La Molina, Lima",

    software: "Revit",

    descripcion:
      "Modelo estructural desarrollado en Revit para la representación y coordinación de elementos estructurales de una vivienda unifamiliar en el distrito de La Molina.",

    imagenes: [
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784404980/6_zhja85.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784404978/1_a0qa3i.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784404975/3_ou3edc.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784404974/2_fastdl.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784404972/5_bdftdq.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784404972/4_ohwy4o.png"
    ],

    visores3D: [
      {
        nombre: "Modelo Estructural",
        url: "https://autode.sk/4bUCfUX"
      }
    ]
  },
  {
    codigo: "B-02",

    nombre: "Proyecto Pueblo Libre",

    ubicacion: "Pueblo Libre, Lima",

    software: "Revit",

    descripcion:
      "Modelo estructural de edificio multifamiliar desarrollado en Revit, compuesto por 11 niveles y 3 sótanos, diseñado para la coordinación y visualización integral de los elementos estructurales del proyecto.",

    imagenes: [

      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784406820/6_ddbblq.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784406824/4_spskrx.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784406817/7_oocj5c.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784406817/5_exn94c.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784406817/3_t6rmkt.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784406816/1_elraup.png"
    ],

    visores3D: [
      {
        nombre: "Modelo Estructural",
        url: "https://autode.sk/4zt5fNu"
      }
    ]
  },
  {
    codigo: "B-03",

    nombre: "Proyecto Lince",

    ubicacion: "Lince, Lima",

    software: "Revit",

    descripcion:
      "Modelo estructural de edificio multifamiliar de 16 pisos y 3 sótanos, desarrollado en Revit para la coordinación, revisión y visualización integral de los elementos estructurales del proyecto.",

    imagenes: [

      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784410600/1_n1vl6e.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784410603/2_deeqb8.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784410602/4_spwbrd.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784410604/3_jcw46x.png"
    ],

    visores3D: [
      {
        nombre: "Modelo Estructural",
        url: "https://autode.sk/4gEXmgx"
      }
    ]
  },
  {
    codigo: "B-04",

    nombre: "Proyecto Erich",

    ubicacion: "Pueblo Libre, Lima",

    software: "Revit",

    descripcion:
      "Modelo estructural desarrollado en Revit para la coordinación y visualización de elementos estructurales del Proyecto Erich, ubicado en el distrito de Pueblo Libre.",

    imagenes: [

      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784411287/1_ow6w5i.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784411287/2_l7k4ss.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784411288/4_nfc44h.png",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784411286/3_it5ltd.png"
    ],

    visores3D: [
      {
        nombre: "Modelo Estructural",
        url: "https://autode.sk/3SDYHLz"
      }
    ]
  }
];
