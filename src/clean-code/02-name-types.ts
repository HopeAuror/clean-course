(() => {

    // arreglo de temperaturas celsius
    const temperaturesCelsius = [33.6, 12.34];

    // Direcci�n ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    const userEmails = users.map( user => user.email );

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos despu�s
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksbyURL( url: string) {
        throw new Error('Function not implemented.');
    }
    
    // obtiene el �rea de un cuadrado basado en sus lados
    function getSquareArea( side: number ) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();

