angular.module('pokemon25')
    .service('searchServiceMoves', function($http, $q){


        // TODO: Do a second API pull to gather the descriptions of the three moves shown.

        this.getPokemonMove = function(num){
            var deferred = $q.defer();
            $http.get('http://pokeapi.co/api/v1/pokemon/' + num+'/'+moves.resource_uri.description)
            .then(function(response){
                var pokemonDataMove = response.data;
                console.log("move descript from service", pokemonDataMove);

                deferred.resolve(pokemonDataMove);
                })
            return deferred.promise;
        }        
    })