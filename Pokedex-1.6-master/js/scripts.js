var pokemonRepository = (function (){
var repo = [
   {
   name: 'Bulbasaur',
   height: 0.7,
   type: ['grass']
                   },
 {
   name: "Charmander",
   height: 0.6,
   type: ['fire']
 },
 {
   name: "Golbat",
   height: 1.4,
   type: ['poison']
 },
 {
   name: "Alakazam",
   height: 1.5,
   type: ['psychic']
 },
]


    function addList(pokemon){
      var $list = document.createElement('li');
      var $button = document.createElement('button');
      $button.innerHTML = pokemon.name;
      $button.classList.add('button');
      $list.appendChild($button);
      $pokemonList.appendChild($list);
    }

  function add(pokemon) {
    repo.unshift(pokemon);
    }

     function getAll() {
      return repo;
    }
    function remove(pokemon){
      repo.pop(pokemon);
    }
return{
  add:add,
  getAll:getAll,
  remove:remove,
  addList:addList
}
})();


var $pokemonList = document.querySelector('.pokemon-list')


  pokemonRepository.getAll().forEach(function(i) {
  var size;

    if (i.height > 1){
       size = "wow that's big"
    }else {
       size = "it's small"
    }

   var result;
     if(i.type == 'grass'){
      result ='<span style="color:MediumVioletRed;">'

     }else if (i.type == 'fire'){
          result ='<span style="color:red;">'
     }else if (i.type == 'poison'){
          result = '<span style="color:blue;">'
     }else if (i.type == 'psychic'){
          result = '<span style="color:MediumAquamarine	;">'
   }
    
pokemonRepository.addList(i)
    //console.log(pokemonRepository.addList(i))
    //console.log(pokemonRepository.add({name: 'Pikachu'}))
   // console.log(pokemonRepository.getAll())
//console.log(pokemonRepository.remove())

});


console.log(pokemonRepository.getAll())










































/*
//code1
var x=1;
for(x; x<10;x++){}
x+=x+100;
document.write(x)
//output:120  [[[....nothing in the curly braces]]]

//code2
var x=1;
for(x; x<10;x++){
x+=x+100;}
document.write(x)
//output:103   [[[..."document.write "  outside the curly braces]]]

//code 3
var x=1;
for(x; x<10;x++){
x+=x+100;
document.write(x);}
//output:102   [[["document.write"   inside the curly braces!]]]a+10doc


                /*for (var i = 0; i <= 3; i++){
                var result;
                for (var ex = 0; ex < repository.type.length)
                if (repository[i].type[ex == 'grass'){
                document.wirt(result = '<span style="color:green;"> ');
                } else if (repository[i].types[ex] == "water") {
                document.wirt( result = '<span style="color:red;"> '    )  ;
                } else if (repository[i].types[ex] == "fire") {
                document.wirt( result = '<span style="color:orange;"> ') ;
                } else if (repository[i].types[ex] == "poison") {
                document.wirt( result = '<span style="color:rgb(106, 42, 106);"> ')  ;
                } else if (repository[i].types[ex] == "water") {
                document.wirt( result = '<span style="color:blue;"> ') ;
                }
                }*/
              /*  function show() {
                var d = new Date();
                var n = d.getDay();
                document.getElementById('ex').innerHTML = n;

                }

                var x = 9.656;
                document.write(x.toFixed(0) + '<br>');
                  document.write(x.toFixed(1) + '<br>');
                document.write(x.toFixed(2) + '<br>');
                document.write(x.toFixed(4) + '<br>');
                var y = 9.656;
                document.write(y.toPrecision() + '<br>');        // returns 9.656
                document.write(y.toPrecision(3) +'<br>');       // returns 9.7
                document.write(y.toPrecision(4) + '<br>');       // returns 9.656
                //returns a string, with a number written with a specified length
                var x = Number.MIN_VALUE;

                document.write(x);

..................................... ver importent join( method , or ^,or *%$#@!~), toString(method)
                var i = 1;
                for (; i <= 10; ) {
                    document.write(i+'<br>');
                    i++;
                }
                var fruits = ["Banana", "Orange", "Apple", "Mango"];
                document.write(fruits.join('^'))  ;


                var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();
document.write(x +'<br>')
fruits.push('kiwi')
document.write(fruits +'<br>' );

fruits.pop()
document.write(fruits+'<br>' );  Mango
                                Banana,Orange,Apple,Kiwi
                                Banana,Orange,Apple it remove 1 item from the last
                nago first gone after apple
.........The push() method adds a new element to an array (at the end):

.... shift(method same as pop() but it will remove the fisrt )
fruits.shift()
document.write(fruits +'<br>' ) answer Orange,Apple,Kiwi
and if like that document.write(fruits.shift() ) the answer Banana

  fruits.unshift("Lemon"); Lemon,Banana,Orange,Apple,Kiw
  document.write(shift())  .........(unshift() .push() . shift() . pop() )
  [unsfift and push  it will retun the length if writ document.write(fruits.unshift()]

  var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";

document.write(fruits +'<br>');
fruits[fruits.length] = 'jack';
document.write(fruits)Banana,Orange,Apple,Mango,Kiwi
                      Banana,Orange,Apple,Mango,Kiwi,jack
                      ........
                      var fruits = ["Banana", "Orange", "Apple", "Mango"];
                      document.write("The first fruit is: " + fruits[0]);
                      delete fruits[0];
                      docmunet.write("The first fruit is: " + fruits[0]);
                                                         The first fruit is: Banana
                                                         The first fruit is: undefined
.,.,.,.Using delete may leave undefined holes in the array. Use pop() or shift() instead.

...var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2 , 0  , 'kiwi' ,'marcrs')   The splice( it will retuern the value been delete it when using document.write( fruits.splice()))

document.write(fruits +'<br>');Banana,Orange,kiwi,marcrs,Apple,Mango
fruits.splice(2 , 1  , 'kiwi' ,'marcrs')
document.write(fruits +'<br>')Banana,Orange,kiwi,marcrs,Mango
same examp
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2,1,'loo','lii');
document.write("Original Array:<br> " + fruits +'<br>')  Banana,Orange,loo,lii,Mango

   document.write(fruits.splice(2,2,'loo','lii'))Apple,Mango the one been removed
....................
var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];

var myChildren = arr1.concat(arr2, arr3);      {{{{pop&shift----push&unshift addelemnt           }}}}

document.write(myChildren)

.............var fruits = ["Banana", "Orange", "Lemon", "Apple"];

document.write(fruits.slice(1,2))=Orange
.............................
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.write(fruits.sort()),,,,The sort() method sorts an array alphabetically:

,,var fruits = ["Banana", "Orange", "Apple", "Mango"]
  // First sort the array
  fruits.sort();                       Apple,Banana,Mango, Orange
  // Then reverse it:
  fruits.reverse();,,,,,,,,,,,,,,,,,,,,Orange,Mango,Banana,Apple
  document.write(fruits) ;

  ............var points = [40, 100, 1, 5, 25, 10];

  ;      SORT NuMBERS,,,,,,,,,,,,,,,,
  document.write(points.sort(function(a, b){return a - b}))==1,5,10,25,40,100
                 points.sort(function(a, b){return b - a})==100,40,25,10,5,1
    <<<< When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

             If the result is negative a is sorted before b.

             If the result is positive b is sorted before a.

             If the result is 0 no changes are done with the sort order of the two values.

             Example:

             The compare function compares all the values in the array, two values at a time (a, b).

             When comparing 40 and 100, the sort() method calls the compare function(40, 100).

             The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.

             You can use this code snippet to experiment with numerically and alphabetically sorting:

             //////////////////      var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});>>>>.The highest number is 100.
document.getElementById("demo").innerHTML =points[ points.length-1];

,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value
................................................................

umeric Sort
By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".>>>>>>>>>>>>>>.>>>>>>>>>1,10,100,25,40,5
  points.sort();
  documentwrite(points)

.....................................................
  var numbers1 = ['this', 4, 9, 16, 25];

function arr(value) {
  return value;}
document.write(numbers1.map(arr)+'<br>') ;
......>>>var num = ['this', 4, 9, 16, 25];

function arr(value) {
  return value*2;}
document.write(num.map(arr)) ;>>>>>...NaN,8,18,32,50

...................var num = [45, 4, 9, 16, 25];

document.write(num.filter(arr));
                                   [[[[.map&&.filter&&]]]]
function arr(value) {
  return value > 18;  ouput====  45,25
.................................
var num = [45, 4, 9, 16, 25];

document.write(num.reduce(arr))

function arr(total, value, index, array) {
  return total + value;     <<<<<<<<<<<<<<<<<<output===99
,,,,var num = [45, 4, 9, 16, 25];

document.write(num.reduce(arr,200))

function arr(total, value) {   you can add anther parameter for reduce
  return total+value ;         it will count it with the totel


[[[[[[[[[[[[[[[[Array.forEach()
Array.map()
Array.filter() pass text
Array.reduce()
Array.reduceRight()
Array.every() pass test
Array.some() pass test
Array.indexOf()
Array.lastIndexOf()
Array.find()  pass test first value
Array.findIndex()]]]]]]]]]]]]]]]]

var numbers = [45, 4, 9, 16, 25];


document.write(numbers.every(arr))

function arr(value, index, array) { it will check if every value >3
  return value > 3;}                output===true if it was <3 will false

{{{{}}}}.some() the same way it will check if some valueover >17

..................................................
var fruits = ["Apple", "Orange", "Apple", "Mango"];   output==Mango is found in position 3
                                                              Apple is found in position 2

document.write("Mango is found in position " + fruits.indexOf("Mango")+"<br>") ;
document.write("Apple is found in position " + fruits.lastIndexOf("Apple")) ;
.....................................
var numbers = [4, 9, 16, 25, 29];
function arr(value, index, array) {
  return value > 18;
}                              ouput==== 25
document.write("First number over 18 is "+ numbers.find(arr));
.............................
var numb = [4, 9, 16, 25, 29];

document.write("First number over 18 has index " + numb.findIndex(arr) );
                                                output===First number over 18 has          index 3
function arr(value, index, array) {
  return value > 18;
.............................................................
var d = new Date(2018, 11, 24, 10, 33, 30, 0);
7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order
.................................................................

Date:::::::document.write(new Date().toUTCString()); unvirsl time cordenat
output==Sat, 17 Aug 2019 02:40:22 GMT
..........
The toDateString() method converts a date to a more readable format
output==Fri Aug 16 2019
..........................................................................
document.write(new Date().getDate()+'<br>');
document.write(new Date().getMonth()+'<br>');
document.write(new Date().getTime()+'<br>');
document.write(new Date().getFullYear()+'<br>');
document.write(new Date().getHours()+'<br>')
document.write(new Date().getMinutes()+'<br>')
document.write(new Date().getSeconds()+'<br>')
document.write(new Date().getMilliseconds()+'<br>')
The getDay() method returns the weekday of a date as a number (0-6):
17
7
1566111313657
2019
23
55
13
103
the
set () is the same only you can set it use it with an x=new Date,,x.setMonth

var s, y, result;
s = new Date();
y = new Date();
y.setFullYear(2100, 0, 14);
s.setFullYear(2050, 06, 25);

if (y < s) {
  result = "Today is before January 14, 2100.";
} else {
  result = "Today is after January 14, 2100.";
}
document.write(result)<<<>>>>compare Date()<<<<<>>
......................................................................


var a = -2;
document.write(Math.abs(a)+'<br>') ;
document.write(Math.max(a, 6)+'<br>');
document.write(Math.min(a, 6) +'<br>');
var c = 2.4, v =2.6 , m =4 ;
document.write(Math.round(c)+'<br>')
document.write(Math.round(v)+'<br>')
document.write(Math.pow(m , 2)+'<br>')
document.write(Math.sqrt(m )+'<br>')
document.write(Math.random( )+'<br>')
document.write(Math.round(Math.random( ))+'<br>')it will give from 0 to 1
document.write(Math.round(Math.random( )*20)+'<br>') it will give from 1 to 20

  */
