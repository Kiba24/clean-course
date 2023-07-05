(() => {

    function getMovieById ( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    function getActorBioById( ActorId: string ) {
        console.log({ ActorId });
    }
    


    interface Movie{
        cast: string[],
        description: string,
        title: string, 
        rating: number,
    }

    function createMovie( {title,description,cast,rating} : Movie ) {
        console.log({ title, description, rating, cast });
    }

    function createActorAsync( fullName: string, birthdate: Date ): boolean {

        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


})();




