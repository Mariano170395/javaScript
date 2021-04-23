     //Comment
     console.log('hello world');
     
     //variables store data on computers memory, 
     //ls is like var but its best pracice to use let 
     //a ls cannot start with a number
     //cannot contain a space or hyphen
     //are case sensitive

     let name = 'mariano';
     console.log (name);

     //declare multiple variables

     let firstName = 'Mariano';
     let lastName = 'Estrada';
     console.log(firstName,lastName);

     //Constants

     const interestRate = 0.3;
     console.log(interestRate);
     //you cant change the value of a constant

     //Primitive types

     let name1 = 'Mariano'; //String Literal
     let age = 26; // number literal
     let isApproved = true; //Boolean Literal; can also be false
     let firstName1 = null; //Used to clear the value of the variable
     let lastName1 = undefined; //the variable has no value yet

     //Reference types

     //objects
          //curly braces indicate an object literal  
     let person = {
          name2: 'Mariano',
          age: 30
     };

     //Dot notation
     person.name2 ='Juan';

     //Bracket Notation
     person['name2'] = 'Mary';

     console.log(person.name2);

     //arrays
     //arrays are dynamic
     //array is an object

     let selectedColors = ['red','blue'];
     selectedColors[2] = 1;
     console.log(selectedColors.length);

     //functions
     
     //Performing a task
     function greet(quien, apellido){
        console.log('Hello ' + quien+''+apellido);  
     }

     greet('Juanito ', 'Silva');
     greet('Juanita ', 'Rios');

     //Calculating a value
     function square(number){
         return number * number
     }

   let number = square(2);
   console.log(square(2));





