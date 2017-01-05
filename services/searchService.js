angular.module('pokemon25')
    .service('searchService', function($http, $q){

        this.getPokemon = function(num){
            this.num = num;
            var deferred = $q.defer();
            console.log(num);
            $http.get('https://pokeapi.co/api/v1/pokemon/' + num+'/')
            .then(function(response){
                var pokemonData = response.data;
                console.log("from service", pokemonData);

                deferred.resolve(pokemonData);
                })
            return deferred.promise;
        }

        this.getPokeImages = function(){
            return $http.get('../imageData/pokemonImages.json')
        }

        //  this.next = function(){
        //      return $http({
        //          method: 'GET',
        //          url:''

        //      })
        //  }
             
             
    })
