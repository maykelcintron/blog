const Data1 = () => {
    return (
      <>
      <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>1. Campo: </span>
          Un campo es la unidad más básica de almacenamiento de datos en un sistema. Representa un único dato o atributo dentro de un registro.
          Ejemplo: En un registro de clientes, los campos podrían ser:
          Nombre, Dirección, Teléfono, Correo electrónico.
          <br />
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white'>Características clave: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Cada campo tiene un tipo de dato (texto, numérico, fecha, booleano, etc.).
          Puede tener restricciones como tamaño, valores permitidos, o ser obligatorio.</span>
          </li>
        </p>
      <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>2. Registro: </span>
          Un registro es un conjunto de campos relacionados que representan una entidad completa o un objeto en el sistema.
          Ejemplo: Un registro de cliente podría contener:   Nombre: Juan Pérez , Dirección: Av. Principal 123 , Teléfono: +123456789 , Correo electrónico: juanperez@email.com
          <br />
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Características clave: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Cada registro representa una instancia específica de una entidad (p. ej., un cliente, un producto, etc.).
          En una base de datos, los registros corresponden a filas en una tabla.</span>
          </li>
        </p>
      <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>3. Archivo: </span>
          Un archivo es un conjunto de registros relacionados almacenados como una unidad en el sistema de archivos de un computador.
          Ejemplo: Un archivo de texto o CSV que contiene una lista de clientes.
          Cada línea del archivo representa un registro.
          <br />
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Características clave: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Es el nivel lógico intermedio entre registros individuales y bases de datos.
          Los archivos pueden estar estructurados (como CSV) o no estructurados (como documentos de texto libre).</span>
          </li>
        </p>
      <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>4. Base de datos: </span>
          Una base de datos es una colección organizada de archivos o tablas que contienen datos relacionados y que son gestionados por un sistema de gestión de bases de datos (DBMS).
          <br />
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Características clave: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Permite almacenar grandes volúmenes de datos de forma estructurada.
          Facilita la consulta, actualización y gestión de datos a través de lenguajes como SQL.
          Puede manejar relaciones entre tablas o entidades (en bases de datos relacionales).</span>
          </li>
      </p>
      </>
    )
}

const Data2 = () => {
    return (
      <>
        <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>1. Técnicas de Diseño de Archivos y Bases de Datos: </span>
          <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>El diseño de archivos y bases de datos implica estructurar los datos para garantizar eficiencia, consistencia e integridad. Estas son algunas técnicas:</span>
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>a) Diseño de Archivos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Se enfoca en cómo se almacenan los datos a nivel de sistema operativo.
          Técnicas comunes:</span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Archivos secuenciales: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Los datos se almacenan en un orden específico (por ejemplo, por clave primaria). Ideal para procesos de lotes.</span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Archivos indexados: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Incorporan índices para permitir acceso directo a los registros, mejorando el tiempo de búsqueda.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Archivos de acceso directo: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Permiten acceder a un registro directamente mediante una clave hash.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Archivos delimitados: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Como archivos CSV, en los que los campos se separan por delimitadores como comas o tabuladores.
            </span>
          </li>
        </p>
  
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>b) Diseño de Bases de Datos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Se centra en la organización de los datos dentro de un sistema de gestión de bases de datos (DBMS).
        Principales técnicas:</span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Modelo relacional: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Utiliza tablas relacionadas para almacenar datos.</span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Modelo jerárquico: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Los datos se estructuran en forma de árbol, con relaciones padre-hijo.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Modelo de red: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Similar al jerárquico, pero permite relaciones más complejas (múltiples padres para un nodo).
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Modelo orientado a objetos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Combina datos y operaciones en objetos, integrando técnicas de programación orientada a objetos.
            </span>
          </li>
        </p>
  
        <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>2. Ingeniería Inversa de Bases de Datos: </span>
          <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Es el proceso de analizar una base de datos existente para entender su diseño, estructura y relaciones, a menudo cuando la documentación original está ausente.</span>
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>a) Objetivos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Comprender cómo se estructuran los datos.</span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Generar diagramas de entidad-relación (ER) o esquemas lógicos.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Identificar problemas de diseño para optimización o migración.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Como archivos CSV, en los que los campos se separan por delimitadores como comas o tabuladores.
            </span>
          </li> 
        </p>
  
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>b) Pasos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
        </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Exploración de la base de datos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Identificar tablas, relaciones, claves primarias y foráneas.</span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Generación del modelo conceptual: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>  Crear un diagrama ER para visualizar entidades, atributos y relaciones.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Análisis de dependencias: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Revisar las dependencias entre campos para evaluar la necesidad de normalización.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Documentación: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Crear reportes detallados del diseño de la base de datos.
            </span>
          </li>
        </p>
  
  
        <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>3. Normalización </span>
          <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>La normalización es un proceso que organiza los datos para reducir la redundancia y mejorar la integridad de la base de datos.</span>
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Principales Formas Normales:<span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Primera forma normal (1FN):<span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Asegura que cada campo contenga un único valor (datos atómicos), elimina columnas repetitivas.</span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Segunda forma normal (2FN): <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Cada campo no clave debe depender completamente de la clave primaria, elimina dependencias parciales.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Tercera forma normal (3FN): <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Ningún campo no clave debe depender de otro campo no clave, elimina dependencias transitivas.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Forma normal de Boyce-Codd (BCNF): <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Refinamiento de la 3FN, eliminando anomalías en ciertas dependencias complejas.
            </span>
          </li> 
        </p>
  
        <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>4. Lineamientos para el Diseño de Relación Archivo Maestro/Base de Datos: </span>
          <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Diseñar una relación eficaz entre un archivo maestro y una base de datos requiere seguir estos principios:</span>
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>a) Archivo Maestro: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Es la principal fuente de información sobre una entidad (p. ej., clientes, empleados, productos).</span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Contiene datos estáticos o poco cambiantes.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Es la base para generar archivos secundarios o transaccionales.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Refinamiento de la 3FN, eliminando anomalías en ciertas dependencias complejas.
            </span>
          </li> 
        </p>
  
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>b) Relación con Base de Datos <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Clave única:<span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>  Asegurar que el archivo maestro tenga una clave primaria que lo identifique de manera única.</span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Estandarización de campos:<span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Los campos en el archivo maestro deben coincidir en tipo y formato con los datos relacionados en otras tablas o archivos.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Indices:<span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Usar índices para acelerar la búsqueda y mantener integridad referencial.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Integridad referencial:<span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Asegurar que las relaciones con otras tablas de la base de datos respeten las restricciones de clave foránea.
            </span>
          </li> 
        </p>
      </>
    )
}

function Data3() {
  return (
    <>
    <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>1. Uso de la Base de Datos: </span>
          <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'></span>
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Aplicaciones comunes: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Gestión de información empresarial: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Manejo de clientes, ventas, inventarios, etc.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Soporte a decisiones: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Soporte a decisiones: Bases de datos estructuradas para análisis de datos.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Sistemas transaccionales: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Para registrar operaciones, como compras o transferencias.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Interacción con usuarios: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Aplicaciones móviles y web que utilizan bases de datos para almacenar y mostrar información.
            </span>
          </li> 
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Funciones principales de una base de datos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Almacenamiento seguro: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Protección de datos contra pérdida o acceso no autorizado.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Consulta y recuperación:  <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Permite búsquedas rápidas mediante SQL u otros lenguajes de consulta.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Actualización:  <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Permite agregar, modificar o eliminar registros.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Mantenimiento de integridad: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Asegura que los datos cumplan con reglas predefinidas (como claves primarias y foráneas).
            </span>
          </li> 
        </p>


    <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>2. Almacenes de Datos (Data Warehouses): </span>
          <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Un almacén de datos es un sistema diseñado para almacenar grandes volúmenes de datos históricos provenientes de múltiples fuentes con fines de análisis y toma de decisiones.</span>
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Características principales: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Orientación al análisis:  <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Diseñado para consultas complejas, no para transacciones rápidas.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Datos integrados: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Combina datos de distintas fuentes (bases de datos operativas, archivos, etc.).
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Históricos:  <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Almacena información acumulada en el tiempo.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Organización en temas:  <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Estructurado por áreas como ventas, marketing, finanzas, etc.
            </span>
          </li> 
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Técnicas de almacenamiento en almacenes de datos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>ETL (Extract, Transform, Load): <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Proceso para extraer datos de fuentes operativas, transformarlos según reglas específicas y cargarlos en el almacén.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Cubos OLAP (Online Analytical Processing): <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>Estructuras multidimensionales para analizar datos desde diversas perspectivas.
            </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Particionamiento:  <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> División de datos en fragmentos manejables (por fechas, regiones, etc.).
            </span>
          </li>          
        </p>

    <p className="text-justify text-black dark:text-gray-400 mt-10"><span className='font-bold text-xl dark:text-white'>3. Publicación de Bases de Datos para Web: </span>
          <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>La publicación de una base de datos en la web implica habilitar su acceso a través de aplicaciones o servicios en línea. Es clave para sitios web dinámicos y aplicaciones interactivas.</span>
        </p>
        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Pasos para la publicación de una base de datos en la web: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Diseño del modelo de datos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Crear un modelo lógico que refleje las relaciones y necesidades de acceso. Usar un DBMS adecuado para el entorno web, como MySQL, PostgreSQL o MongoDB.
          </span>
          </li>
        </p>

        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Conexión con la aplicación web: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Lenguajes de servidor: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> PHP, Python, Node.js, Java, etc.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Librerías/Frameworks: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Django, Flask, Express.js, Laravel.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Conectar la base de datos <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Con la aplicación mediante controladores (p. ej., PDO para PHP o SQLAlchemy para Python).
          </span>
          </li>
        </p>

        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>API de consulta de datos: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Crear APIs REST o GraphQL para que los datos puedan ser accedidos de manera estructurada desde la web.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Usar JSON o XML para intercambiar datos entre el cliente (frontend) y el servidor.
          </span>
          </li>
        </p>

        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Seguridad: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Implementar autenticación y autorización para proteger la base de datos.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Usar conexiones seguras (HTTPS).
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Prevenir ataques como inyección SQL.
          </span>
          </li>
        </p>

        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Alojamiento: <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Alojar la base de datos en un servidor local, en la nube (p. ej., AWS, Azure) o en un servicio específico para bases de datos (p. ej., Firebase, Supabase).
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Configurar accesos remotos si se requiere.
          </span>
          </li>
        </p>

        <p className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'>Interfaces Web <span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'>
          </span>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Crear interfaces de usuario dinámicas con frameworks como React, Angular o Vue.js.
          </span>
          </li>
          <li className='ml-10 font-bold text-xl text-start mt-3 dark:text-white text-[17px]'><span className='dark:text-gray-400  text-black font-normal text-justify text-[16px]'> Mostrar los datos recuperados de la base de datos en tiempo real.
          </span>
          </li>
        </p>
    </>
  )
}

export { Data1, Data2, Data3 }
