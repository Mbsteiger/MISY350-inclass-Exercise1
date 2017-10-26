console.log("hello");

//arrays
let bucket_list =["Eagles", "Browns", "Vikings", ];
console.log(bucket_list.length);
console.log(bucket_list[2])

//for loop
for (let i= 0; i< bucket_list.length; i++){

  console.log(bucket_list[i]);
}

let my_top= [
  "The Dark Knight",
  "The Avengers",
  "intersteller",
  "Inception",
  "12 Angry Men",
];

let imdb_top= [
  "The Dark Knight",
  "The Godfather",
  "The Shawshank Redemption"
];

for (let m=0; m<my_top.length; m++){
  for (let j=0; j<imdb_top.length; j++){
    if (my_top[m]== imdb_top[j]){
      console.log(my_top[m])
    }
  }
}

// while loop

let balance = 1000
let years =0

while (balance<1000000){
  balance += balance*0.03;
  years +=1;
}
console.log(years)

//iterators

my_top.forEach(movie => console.log("- " + movie));

let new_list = my_top.filter(movie =>movie.slice(0,1)=="1");
new_list.forEach(movie => console.log("- " + movie));
