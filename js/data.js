/**
 * CÓMO AGREGAR O EDITAR ESTE PROYECTO:
 * 1. Subir las imágenes a Cloudinary  y copiar las URLs.
 * 2. Reemplaza "imagenes" con esas URLs en las lineas de codigo comentado que esta como muestra para generar una nueva tarjeta.
 *    (Cabe recalcar que la cantidad de las imagenes no importa, ya que esas van a mostrar los proyectos)
 * 3. Reemplaza "visores3D" con uno o mas enlaces reales de SketchUp / Revit / Tekla.
 * 4. Guarda el archivo y recarga la página (Live Server refresca solo, se recomienda visualizar primero antes de realizar el commit).
 */

const proyectosArquitectura = [
  {
    codigo: "A-01",
    nombre: "Portafolio Arquitectónico Referencial",
    ubicacion: "Portafolio Corporativo",
    software: "SketchUp y Revit",

    descripcion:
      "Proyectos arquitectónicos desarrollados para visualizar cada detalle antes de construir: fachadas, interiores y espacios diseñados para transformar ideas en experiencias reales.",

    imagenes: [

      // PORTADA
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784081985/7_buwsqc.jpg",

      // GALERÍA
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079419/1_xbsvrj.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079420/2_rrg0fw.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079402/4_iwtf1n.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079402/5_xjrms1.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079389/6_rjgikq.jpg"
    ],

    visores3D: [
      {
        nombre: "Modelo Arquitectónico 01",
        url: "https://app.sketchup.com/share/tc/northAmerica/6VpgGjZRa3M?source=desktop&stoken=bspCjbCBob3emVc9Ja2xxiwDmicjyXx9PF0NrfKs5E6ggs0k1xRbiL8CNNf10GZ5"
      },
      {
        nombre: "Modelo Arquitectónico 02",
        url: "https://app.sketchup.com/share/tc/northAmerica/5DfVlxI3C1I?source=desktop&stoken=4owgmgYdSpT5F0rylfGe6ulSwH1nOamGyhyXioNHqbz2e1ojZiasGrBpkdcXa9I4"
      },
      {
        nombre: "Modelo Arquitectónico 03",
        url: "https://app.sketchup.com/share/tc/northAmerica/M-GNk6ijork?source=desktop&stoken=hM5Hcm_RQFeGSGGYF3WSdwY9nl4KGHSHmhNiDA92t4IuXfGfc6zpxKpGjeDu7cW1"
      },
      {
        nombre: "Modelo Arquitectónico 04",
        url: "https://app.sketchup.com/share/tc/northAmerica/6Y3HKlBezqA?source=desktop&stoken=6rIWPTSh-TZiSfuTVG1D94MwrDaD5iST_HOZYoQuA__tSEQR5CwwbVxm3fa1DziP"
      },
      {
        nombre: "Modelo Arquitectónico 05",
        url: "https://app.sketchup.com/share/tc/northAmerica/xrMcWUiB4ic?source=desktop&stoken=m4GtTWfSE5RDiFeMOPmsn6Q4d409nAsBjJD_EDUTUG6S-OgPmQUUPBqeeL3Hz9nV"
      }
    ]
  }/*------------------------------------------------------------------------------
    PLANTILLA PARA NUEVOS PROYECTOS (GUIA)
  ,{
    codigo: "A-01",
    nombre: "Portafolio Arquitectónico Referencial",
    ubicacion: "Portafolio Corporativo",
    software: "SketchUp y Revit",

    descripcion:
      "Muestra de capacidades de diseño arquitectónico, modelado 3D y visualización de espacios interiores y exteriores mediante herramientas BIM y representación digital.",

    imagenes: [

      // PORTADA
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784081985/7_buwsqc.jpg",

      // GALERÍA
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079419/1_xbsvrj.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079420/2_rrg0fw.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079402/4_iwtf1n.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079402/5_xjrms1.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1784079389/6_rjgikq.jpg"
    ],

    visores3D: [
      {
        nombre: "Modelo Arquitectónico 01",
        url: "PEGAR_AQUI_ENLACE_SKETCHUP_01"
      },
      {
        nombre: "Modelo Arquitectónico 02",
        url: "PEGAR_AQUI_ENLACE_SKETCHUP_02"
      }
    ]
  }*/
];

const proyectosEstructuras = [
  {
    codigo: "B-01",
    nombre: "Modelo Estructural Referencial",
    ubicacion: "Portafolio Corporativo",
    software: "Revit BIM",
    descripcion:
      "Modelado estructural desarrollado para demostrar capacidades de diseño, coordinación y detallado técnico, permitiendo visualizar con precisión cómo se integra cada elemento antes de su ejecución en obra.",

    imagenes: [
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992292/7_xsobpc.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992281/4_bjlcx0.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992276/9_yjnh6s.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992270/3_ystz0b.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992258/5_i5oy5f.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992241/6_ktw3vj.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992237/8_archro.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992227/2_ydiq6g.jpg",
      "https://res.cloudinary.com/ddqe5f2br/image/upload/v1783992222/1_su87xw.jpg"
    ],

    visores3D: [
      {
        nombre: "Modelo Estructural 01",
        url: "https://autode.sk/3QCfVbh"
      },
      {
        nombre: "Modelo Estructural 02",
        url: "https://autode.sk/43Q9swr"
      }
    ]
  },
];
