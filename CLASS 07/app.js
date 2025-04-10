// Chapter 35-38

//   Function


function DateTime() {
    var now = new Date();
    document.write("<h1>Q 01</h1><h4>Current Date & Time:</h4>");
    document.write(now.toLocaleString() + "<br><br>");
  }
  DateTime();
  


//   Q 02


function User(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    document.write("<h1>Q 01</h1><h3>Greeting:</h3>");
    document.write("Hello, " + fullName + "!<br/><br/>");
  }
  User("Ali", "Ahmed");
  

// Q 03


function addTwoNumbers(num1, num2) {
    return num1 + num2;
  }
  var number1 = parseFloat(prompt("Enter the first number for addition:"));
  var number2 = parseFloat(prompt("Enter the second number for addition:"));
  document.write("<h1>Q 01</h1><h3>Sum of Two Numbers:</h3>");
  document.write("Sum: " + addTwoNumbers(number1, number2) + "<br/><br/>");
  
  

//   Q 04


function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
      default:
        result = "Invalid operator";
    }
    return result;
  }
  var calcNum1 = parseFloat(prompt("Enter the first number for the calculator:"));
  var calcNum2 = parseFloat(prompt("Enter the second number for the calculator:"));
  var calcOperator = prompt("Enter an operator (+, -, *, /):");
  document.write("<h1>Q 04 </h1><h3>Calculator Result:</h3>");
  document.write("Result: " + calculator(calcNum1, calcNum2, calcOperator) + "<br/><br/>");
  



//   Q 05

  
  function square(x) {
  return x * x;
}
document.write("<h1>Q 05</h1><h3>Square Function:</h3>");
document.write("Square of 5 is: " + square(5) + "<br/><br/>");




// Q 07


function displayCounting(start, end) {
    document.write("<h3>Counting:</h3>");
    for (var i = start; i <= end; i++) {
      document.write(i + " ");
    }
    document.write("<br/><br/>");
  }
  var countStart = parseInt(prompt("Enter the starting number for counting:"), 10);
  var countEnd = parseInt(prompt("Enter the ending number for counting:"), 10);
  displayCounting(countStart, countEnd);
  
  


//   Q 08



  function calculateHypotenuse() {
    function calculateSquare(a) {
      return a * a;
    }
    
    var base = parseFloat(prompt("Enter the base of the triangle:"));
    var perpendicular = parseFloat(prompt("Enter the perpendicular of the triangle:"));
    
    var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    
    document.write("<h3>Hypotenuse Calculation:</h3>");
    document.write("The hypotenuse of the triangle is: " + hypotenuse.toFixed(2) + "<br/><br/>");
  }
  calculateHypotenuse();



//   Q 09


function rectangleAreaValue(width, height) {
    return width * height;
  }
  console.log("Rectangle Area (Value Arguments):", rectangleAreaValue(5, 10)); 
  
  function rectangleAreaVariable(width, height) {
    return width * height;
  }
  var  myWidth = 7;
  var  myHeight = 3;
  console.log("Rectangle Area (Variable Arguments):", rectangleAreaVariable(myWidth, myHeight)); // 21
  
  


//   Q 10


function isPalindrome(str) {

    var processedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    var reversedStr = processedStr.split("").reverse().join("");
    return processedStr === reversedStr;
  }
  
  var testString1 = "madam";
  console.log(`Is "${testString1}" a palindrome?`, isPalindrome(testString1));  
  
  var testString2 = "hello";
  console.log(`Is "${testString2}" a palindrome?`, isPalindrome(testString2));  
  
  
  
  //Q 11
  function toTitleCase(str) {
  
    return str
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
  var exampleString = "the quick brown fox";
  console.log("Title Case:", toTitleCase(exampleString));
  


//   Q 12


function findLongestWord(str) {
    var words = str.split(" ");
    var longest = words.reduce((max, word) => (word.length > max.length ? word : max), "");
    return longest;
  }
  
  var stringForLongest = "Web Development Tutorial";
  console.log("Longest Word:", findLongestWord(stringForLongest)); 
  
  
  
// Q 13

  function countLetter(str, letter) {
   
    var lowerStr = str.toLowerCase();
    var lowerLetter = letter.toLowerCase();
    var count = 0;

  
        count++;
      
    
    return count;
  }
  
  var sampleString = "JSResourceS.com";
  var sampleLetter = "o";
  console.log(`Number of occurrences of "${sampleLetter}" in "${sampleString}":`, countLetter(sampleString, sampleLetter));
  
  
  
//  Q 14  

  function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius;
    return circumference.toFixed(2);
  }
  
  function calcArea(radius) {
    var area = Math.PI * Math.pow(radius, 2);
    return area.toFixed(2);
  }
  
  var circleRadius = 5;
  console.log("The circumference is " + calcCircumference(circleRadius));
  console.log("The area is " + calcArea(circleRadius));
  



// //   FUNCTIONS, SWITCH  STATEMENTS, WHILE... DO- WHILELOOPS



// Chapter 38-40



// Q 01


function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
      result *= a;
    }
    return result;
  }


// Q 02



  function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    }
    return false;
  }
  
  


//   Q 03


  function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
  }
  
  function calculateTriangleArea(a, b, c) {
    var A = calculateSemiPerimeter(a, b, c);
    var area = Math.sqrt(A * (A - a) * (A - b) * (A - c));
    return area;
  }
  
  


//  Q 04



  function calculateAverage(mark1, mark2, mark3) {
    return (mark1 + mark2 + mark3) / 3;
  }
  
  function calculatePercentage(mark1, mark2, mark3) {
    const totalObtained = mark1 + mark2 + mark3;
    const totalMarks = 300; // 3 subjects * 100
    return (totalObtained / totalMarks) * 100;
  }
  
  function mainMarksFunction() {
 
    var subject1 = 85;
    var subject2 = 78;
    var subject3 = 92;
    
    var avg = calculateAverage(subject1, subject2, subject3).toFixed(2);
    var perc = calculatePercentage(subject1, subject2, subject3).toFixed(2);
    
    console.log("Student Marks Report:");
    console.log("Average Marks: " + avg);
    console.log("Percentage: " + perc + "%");
  }
  
// Q 05



  function customIndexOf(str, searchChar) {
    for (var i = 0; i < str.length; i++) {
      if (str[i] === searchChar) {
        return i;
      }
    }
    return -1;
  }
  
//   Q 06
  
  function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, "");
  }
  
  
  
  
// Q 07


  function countSuccessiveVowels(text) {
    var count = 0;
    
    for (var i = 0; i < text.length - 1; i++) {
      var first = text[i].toLowerCase();
      var second = text[i + 1].toLowerCase();
      
      switch (first) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          
          switch (second) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
              count++;
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    }
    
    return count;
  }
  



//  Q 08

function convertToMeters(km) {
    return km * 1000;
  }
  
  function convertToFeet(km) {
    return km * 3280.84;
  }
  
  function convertToInches(km) {
    return km * 39370.08; 
  }
  
  function convertToCentimeters(km) {
    return km * 100000; 
  }
  
  var kmInput = parseFloat(prompt("Problem 8:\nEnter the distance between the two cities in kilometers:"));
  
  if (!isNaN(kmInput)) {
    console.log("Distance Conversions:");
    console.log("Meters: " + convertToMeters(kmInput).toFixed(2));
    console.log("Feet: " + convertToFeet(kmInput).toFixed(2));
    console.log("Inches: " + convertToInches(kmInput).toFixed(2));
    console.log("Centimeters: " + convertToCentimeters(kmInput).toFixed(2));
  } else {
    console.error("Invalid distance input!");
  }
  

//  Q 09


  
  function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.0;
    if (hoursWorked > regularHours) {
      let overtimeHours = hoursWorked - regularHours;
      return overtimeHours * overtimeRate;
    } else {
      return 0;
    }
  }
  
  var hoursWorked = parseInt(prompt("Problem 9:\nEnter the number of hours worked by the employee:"), 10);
  
  if (!isNaN(hoursWorked)) {
    var overtimePay = calculateOvertimePay(hoursWorked);
    console.log("\nOvertime Calculation:");
    console.log("Overtime Pay: Rs. " + overtimePay.toFixed(2));
  } else {
    console.error("Invalid hours input!");
  }




//   Q 10



  function calculateCurrencyNotes(amount) {
   
    var notes100 = Math.floor(amount / 100);
    var remainder = amount % 100;
    var notes50 = Math.floor(remainder / 50);
    remainder = remainder % 50;
    var notes10 = Math.floor(remainder / 10);
    remainder = remainder % 10; 
  
    return {
      notes100: notes100,
      notes50: notes50,
      notes10: notes10,
      remainder: remainder
    };
  }
  
  var withdrawAmount = parseInt(prompt("Problem 10:\nEnter the withdrawal amount (in rupees, typically in hundreds):"), 10);
  
  if (!isNaN(withdrawAmount)) {
    var notes = calculateCurrencyNotes(withdrawAmount);
    console.log("\nCurrency Notes Distribution:");
    console.log("100 rupee notes: " + notes.notes100);
    console.log("50 rupee notes: " + notes.notes50);
    console.log("10 rupee notes: " + notes.notes10);
    if (notes.remainder !== 0) {
      console.log("Remaining amount which cannot be dispensed (not in available denominations): " + notes.remainder);
    }
  } else {
    console.error("Invalid amount input!");
  }
  


// EVENTS


// Chapter 43-48


//  Q 01


function showAlert() {
    alert("You clicked the link!");
  }



//   Q 02


function showAlert(message) {
    alert(message);
  }

  var images = document.querySelectorAll("img");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      showAlert("You clicked on " + image.alt);
    });
  });


//    Q 03

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }


//    Q 04



function changeImage() {
    document.getElementById("myImage").src = "https://via.placeholder.com/300x200.png?text=New+Image";
  }

  function resetImage() {
    document.getElementById("myImage").src = "https://via.placeholder.com/300x200.png?text=Original+Image";
  }


//   Q 05


var count = 0;

function updateDisplay() {
  document.getElementById("counter").innerText = count;
}

function increase() {
  count++;
  updateDisplay();
}

function decrease() {
  count--;
  updateDisplay();
}