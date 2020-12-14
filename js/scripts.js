//declaring array over multiple objects
let pokemonList= [
    {
        name: 'Pikachu',
        height: 2,
        type: 'grass',
    },
    {
        name: 'Bulbasaur',
        height: 3,
        type: 'fire',
    },
    {
        name: 'Chikadex',
        height: 7,
        type: 'water',
    }
];
  //this piece of code is when I just want to print the names of the pokemons on the document with their heights
  // for( let i=0; i<pokemonList.length; i++){
       // if(i<=2){
       //  document.write('My name is  ' + pokemonList[i].name + ' and I am '  + pokemonList[i].height + ' metres tall. ' 
      //  }
  // }


  //this piece of code is with conditional which checks the heights of the pokemons and prints "wow thst's big" on the side of the tallest pokemon's name.
   
   for( let i=0; i<pokemonList.length; i++){
       if(pokemonList[i].height>0 && pokemonList[i].height<5){
        document.write('My name is  ' + pokemonList[i].name + ' and I am '  + pokemonList[i].height + ' metres tall. '); 
       }
       
       else{
        document.write('My name is  ' + pokemonList[i].name + ' and I am '  + pokemonList[i].height + ' metres tall. ' + " *Wow that's big!");
    }
}