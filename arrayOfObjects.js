const movies = [
    {
      title: "Drishyam",
      year: 2013,
      runtime: 160,
      genre: ["Drama", "Thriller"],
      rating: 8.4
    },
    {
      title: "Premam",
      year: 2015,
      runtime: 156,
      genre: ["Romance", "Comedy"],
      rating: 8.3
    },
    {
      title: "Bangalore Days",
      year: 2014,
      runtime: 171,
      genre: ["Romance", "Drama", "Comedy"],
      rating: 8.3
    },
    {
      title: "Kumbalangi Nights",
      year: 2019,
      runtime: 135,
      genre: ["Drama", "Comedy"],
      rating: 8.6
    },
    {
      title: "Uyare",
      year: 2019,
      runtime: 125,
      genre: ["Drama", "Thriller"],
      rating: 8.1
    },
    {
      title: "Maheshinte Prathikaaram",
      year: 2016,
      runtime: 120,
      genre: ["Comedy", "Drama"],
      rating: 8.3
    },
    {
      title: "Take Off",
      year: 2017,
      runtime: 139,
      genre: ["Drama", "Thriller"],
      rating: 8.3
    },
    {
      title: "Eeda",
      year: 2018,
      runtime: 152,
      genre: ["Romance", "Drama"],
      rating: 7.7
    },
    {
      title: "Thondimuthalum Driksakshiyum",
      year: 2017,
      runtime: 135,
      genre: ["Drama", "Crime"],
      rating: 8.2
    },
    {
      title: "Angamaly Diaries",
      year: 2017,
      runtime: 132,
      genre: ["Action", "Drama"],
      rating: 8.1
    }
  ];


//display total number of movies

// console.log(movies.length);


var allMoviesNames=movies.map((m)=>m.title)
// console.log(allMoviesNames);


//movies released after year 2014


var yearFilter=movies.filter((m)=>m.year>2014).map((m)=>m.title)
// console.log(yearFilter);


//movie with longest runtime

var lengthyMovies=movies.reduce((m1,m2)=>m1.runtime>m2.runtime?m1:m2)
// console.log(lengthyMovies);


//shortest movie

var shortestMovie=movies.reduce((m1,m2)=>m1.runtime<m2.runtime?m1:m2)
// console.log(shortestMovie);

//drama movies

var dramaMovies=movies.filter((m)=>m.genre.includes("Drama")).map((m)=>m.title)
// console.log(dramaMovies);


//movies with either genre drama or action
var actionDramaMovies=movies.filter((m)=>m.genre.includes("Thriller") ||m.genre.includes("Action")).map((m)=>m.title)
// console.log(actionDramaMovies);

movies.sort((m1,m2)=>m1.rating-m2.rating)
// console.log(movies);

//movies with longest title

var longestTitle=movies.reduce((m1,m2)=>m1.title.length>m2.title.length?m1:m2)
// console.log(longestTitle.title);


var drishyamMovie=movies.find((m)=>m.title=="Drishyam")
drishyamMovie.genre.push("Action")
// console.log(drishyamMovie);

//in which genre number of movies released

var allGenres=movies.map((m)=>m.genre).flat()
// console.log(allGenres);

var genreCount={}
for(let g of allGenres){
  if(g in genreCount){
    genreCount[g]+=1
  }
  else{
    genreCount[g]=1
  }

}
// console.log(genreCount);

var genreCountArray=Object.entries(genreCount)
genreCountArray.sort((g1,g2)=>g2[1]-g1[1])
// console.log(genreCountArray[0]);



var movieYear=movies.map(m=>m.year)
var yearCount={}
movieYear.map(y=>y in yearCount?yearCount[y]+=1:yearCount[y]=1)
// console.log(yearCount);
var yearArray=Object.entries(yearCount)
yearArray.sort((y1,y2)=>y2[1]-y1[1])
// console.log(yearArray[0]);




