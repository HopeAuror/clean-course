(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Malos
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea DONE
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in d ays
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const numberOfFilesInDirectory = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxClassesPerStudent = 6;



    // NOMBRES SEGUN EL TIPO DE DATO

    // ARREGLOS
    // malo
    const fruit = ['manzana', 'platano', 'fresa'];

    // regular
    const fruitList = ['manzana', 'platano', 'fresa'];

    // bueno 
    const fruits = ['manzana', 'platano', 'fresa'];

    // mejor
    const fruitNames = ['manzana', 'platano', 'fresa'];


    // BOLEANOS
    // mal
    const open = true;
    const write = true;
    const fruit1 = true;
    const active = false;
    const noValues = true;
    const notEmpty = true;

    // mejor
    const isOpen = true;
    const canWrite = true;
    const hasFruit = true;
    const isActive = false;
    const hasValues = false;
    const isEmpty = false;


    // NUMEROS
    // mal
    const fruits2 = 3;
    const cars = 10;

    // mejor
    const maxFruits = 5;
    const minFruits = 1;
    const totalFruits = 3;
    const totalOfCars = 5;

    // FUNCIONES
    // mal
    function createUserIfNotExists(){};
    function updateUserIfNotEmpty(){};
    function sendEmailIfFieldsValid(){};

    //mejor
    function createUser(){};
    function updateUser(){};
    function sendEmail(){};

    // NOTA: Para nombrar una function lo ideal es primero el verbo seguido del sustantivo como se realiza en los mejores ejemplos


    // CLASES
    // *El nombre es lo mas importante de la clase pues segun su nombre sera su responsabilidad
    // *Formados por un sustantivo o frases de sustantivo
    // *No deben de ser muy genericos.
    // *Usar UpperCamelCase

    // Preguntarse:
    // ¿Qué exactamente hace la clase?
    // Cómo exactamente esta clase realiza cierta tarea?
    // Hay algo específico sobre su ubicacion?

    // malos
    class Manager {};
    class Data {};
    class Info {};
    class Individual {};
    class Processor {};
    class SpecialMonsterView {};

    


})();



