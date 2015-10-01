/* 1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.*/

// var movies = new Array("Big Trouble in Little China", "Zorro, the Gay Blade", "Persuasion", "Up", "Big Business");
// console.log(movies[1]);


/*2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total //movies in your array. Then, use the console to display the first movie in your array.*/

// var movies = [];
//        movies[0] = "Big Trouble in Little China";
//        movies[1] = "Zorro, the Gay Blade";
//        movies[2] = "Persuasion";
//        movies[3] = "Up";
//        movies[4] = "Big Business";
// console.log(movies[0]);


/*3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You //should now have 6 total movies stored in the array.*/

// var movies = new Array("Big Trouble in Little China", "Zorro, the Gay Blade", "Persuasion", "Up", "Big Business");
//        movies[3]="Star Wars";
//        movies[5]="Persuasion";
//        movies[movies.length];
// console.log(movies.length);


/*4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.*/

// var movies = new Array;
//        movies[0] = "Big Trouble in Little China";
//        movies[1] = "Zorro, the Gay Blade";
//        movies[2] = "Persuasion";
//        movies[3] = "Up";
//        movies[4] = "Big Business";
//delete movies[0];
//    console.log(movies);


/*5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.*/

// var movies = new Array();
//        movies[0] = "Big Trouble in Little China";
//        movies[1] = "Zorro, the Gay Blade";
//        movies[2] = "Persuasion";
//        movies[3] = "Up";
//        movies[4] = "Big Business";
//        movies[5] = "Star Wars";
//        movies[6] = "Finding Nemo";
//        movies.forEach(function(movies){
//    console.log(movies);
//        });


/*6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.*/

//var movies = ["Big Trouble in Little China", "Zorro, the Gay Blade", "Persuasion", "Up", "Big Business", "Star Wars", "Finding Nemo" ]; 
//			for( var index in movies){
//			console.log(movies);
//			}


/*7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.*/

//  var movies = ["Big Trouble in Little China", "Zorro, the Gay Blade", "Persuasion", "Up", "Big Business", "Star Wars", "Finding Nemo" ]; 
//			var x = movies.sort();
//			for( var index in movies){
//			console.log(movies);
//			}


/*8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):*/

//	var movies = ["Big Trouble in Little China", "Zorro, the Gay Blade", "Up"]; 
//			var leastFavMovies = ["Holly Moses", "Pyscho", "Mame"];
//			console.log("Movies I like:");
//            console.log(" ");
//			movies.forEach(function(movies){
//			console.log(movies);
//			});
//			console.log("...");
//            console.log(" ");
//			console.log("Movies I regret watching");
//            console.log(" ");
//			leastFavMovies.forEach(function(leastFavMovies){
//			console.log(leastFavMovies);
//			});

/*9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.*/

//var movies = ["Big Trouble in Little China", "Zorro, the Gay Blade", "Up"]; 
//			var leastFavMovies = ["Holly Moses", "Pyscho", "Mame"];
//			movies = movies.concat(leastFavMovies);
//            movies = movies.reverse();
//            console.log(movies);

/*10.	Return just the last item in the array and display it within the console window.*/

//var movies = ["Big Trouble in Little China", "Zorro, the Gay Blade", "Up"]; 
//			var leastFavMovies = ["Holly Moses", "Pyscho", "Mame"];
//			movies = movies.concat(leastFavMovies);
//            movies = movies.reverse();
//            lastMovie = movies.pop();
//            console.log(lastMovie);

/*11.	Remove the previous method and this time return just the first item in the array and display it within the console window.*/

//var movies = ["Big Trouble in Little China", "Zorro, the Gay Blade", "Up"]; 
//			var leastFavMovies = ["Holly Moses", "Pyscho", "Mame"];
//			movies = movies.concat(leastFavMovies);
//            movies = movies.reverse();
//            lastMovie = movies.shift();
//            console.log(lastMovie);


/*12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. */

//var movies = ["Big Trouble in Little China", "Zorro, the Gay Blade", "Up", "Holly Moses", "Pyscho", "Mame"]; 
//			console.log(movies.indexOf("Holly Moses"));
//            console.log(movies.indexOf("Pyscho"));
//            console.log(movies.indexOf("Mame"));
//            movies.splice(3, 5, "Galaxy Quest", "Stardust", "Princess Bride");
//            console.log(movies);


/*13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window.*/

//       var employee1 = [];
//            employee1["id"] = 123;
//            employee1["name"] = "Michael";
//            employee1["title"] = "Vice-President";
//            employee1["department"] = "Marketing";
//            employee1["isCurrent"] = true;
//            
//            var employee2 = [];
//            employee2["id"] = 258;
//            employee2["name"] = "Debbie";
//            employee2["title"] = "Admin. Asst.";
//            employee2["department"] = "Sales";
//            employee2["isCurrent"] = true;
//                      
//            var employees = [employee1, employee2];
//            console.log(employees[1]["name"]);


/*14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.*/

//        var employee1 = [];
//            employee1["iD"] = 123;
//            employee1["name"] = "Michael";
//            employee1["title"] = "Vice-President";
//            employee1["department"] = "Marketing";
//            employee1["isCurrent"] = true;
//            
//            var employee2 = [];
//            employee2["iD"] = 258;
//            employee2["name"] = "Debbie";
//            employee2["title"] = "Admin. Asst.";
//            employee2["department"] = "Sales";
//            employee2["isCurrent"] = true;
//             var employees = [employee1, employee2];  
//            
//            for (var x in employees){
//            console.log(employees[x]["name"]);
//            }

/*15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.*/

//  		var employee1 = [];
//            employee1["id"] = 123;
//            employee1["name"] = "Michael Brumley";
//            employee1["title"] = "Vice-President";
//            employee1["department"] = "Marketing";
//            employee1["isCurrent"] = true;
//            
//            var employee2 = [];
//            employee2["id"] = 258;
//            employee2["name"] = "Debbie McGee";
//            employee2["title"] = "Admin. Asst.";
//            employee2["department"] = "Sales";
//            employee2["isCurrent"] = true;
//            
//            var employee3 = [];
//            employee3["id"] = 625;
//            employee3["name"] = "Kim Henry";
//            employee3["title"] = "Vice-President";
//            employee3["department"] = "Marketing";
//            employee3["isCurrent"] = false;
//            
//			var employeeList = [employee1, employee2, employee3];
//			for (var x in employeeList) {    
//    		if (employeeList[x]["isCurrent"]===true) 
//			console.log(employeeList[x]["name"]);
//			}
	
             

/*16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.*/


/*Practice with Functions*/
/*1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.*/

//function displayMessage(a){
//		console.log(a);
//	}
//		
//	displayMessage("I think I might understand functions, maybe.");

/*2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.*/

//function calculate(a, b){
//		console.log(a % b);
//	}
//	calculate(20, 7);


/*3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:*/

//var employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
//			function showEmployees(){
//				console.log("Employees:");
//				console.log("  ");
//				for (var x in employees){
//				console.log(employees[x]);
//				}}
//				
//			showEmployees(employees);




/*Assignment 3, Part 2*/

/*Rock, paper, scissors*/

//var userChoice = prompt("Please pick either rock, paper, scissors.");
//var newAnswer = userChoice.toLowerCase();
//			alert(newAnswer);
//var computerChoice = Math.random();
//		alert(computerChoice);
//
//		if(computerChoice <= 0.33){
//			var newComputerChoice = "rock";
//			alert(newComputerChoice);
//		} else if (computerChoice >0.34 && computerChoice <=0.66){
//			var newComputerChoice = "paper";
//			alert(newComputerChoice);
//		} else {
//			var newComputerChoice = "scissors";
//			alert(newComputerChoice);
//		}
//		
//			if (newAnswer === "rock" && newComputerChoice === "scissors"){
//			alert("You win.");
//			} else if (newAnswer === "paper" && newComputerChoice === "rock"){
//		  	alert("You win.");
//		    } else if (newAnswer === "scissors" && newComputerChoice === "paper"){
//		  	alert("You win.");
//		    } else if (newAnswer === "rock" && newComputerChoice === "paper"){
//		  	alert("Computer wins.");
//		    } else if (newAnswer === "paper" && newComputerChoice === "scissors"){
//		  	alert("Computer wins.");
//		    } else if (newAnswer === "scissors" && newComputerChoice === "rock") {
//		  	alert("Computer wins.");
//		    } else {
//			alert("We have a tie, let's play again");
//			location.reload();
//			}

/*Basic calculator*/

//var num1=prompt("Please pick a number.");
//var num2=prompt("Please pick another number.");
//var method = prompt("Please pick add, subtract, multiply or divide.");
//var x = parseInt(num1);
//var y = parseInt(num2);
//			
//function calculate(x, y, method){	
//switch(method){
//		case "add":
//		alert(x + y);
//		break;
//		case "subtract":
//		alert(x - y);
//		break;
//		case "multiply":
//		alert(x * y);
//		break;
//		default:
//			alert(x / y);
//	}}
//calculate(x,y,method);

/*Death by Javascript*/

/*1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.*/

//function alphaOrder(word){
//	return word.split("").sort().join("");
//	} 
//		alert(alphaOrder("javascript")); 


/*2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.*/

//function uppercase(letters){
//  var separateLetters = letters.split(' ');
//  var newList = [];
//    
//  for(var x = 0; x < separateLetters.length; x++){
//      newList.push(separateLetters[x].charAt(0).toUpperCase()+separateLetters[x].slice(1));
//  }
//  return newList.join(' ');
//}
//console.log(uppercase("the quick brown fox"));


/*3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.*/

//function vowel_count(letters){  
//  var vowels = 'aeiouAEIOU';  
//  var numVowels = 0;  
//    
//  for(var x = 0; x < letters.length ; x++){  
//    if (vowels.indexOf(letters[x]) !== -1){  
//      numVowels += 1;  
//    }  
//  }  
//  return numVowels;  
//}  
//console.log(vowel_count("The quick brown fox")); 


/*4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.*/

//function passWord(create){
//var text = "";
//var listOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//for(var i=0; i < create; i++ )
//{  
//text += listOptions.charAt(Math.floor(Math.random() * listOptions.length));
//}
//return text;
//}
//console.log(passWord(8));


/*5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.*/
 
//function longestName(countryNames){
//  return countryNames.reduce(function(namelength, country) 
//  {
//    return namelength.length > country.length ? namelength : country;
//  }, "");}
//
//console.log(longestName(["Mexico", "Japan", "Norway", "Venezuela", "Saudi Arabia"]));