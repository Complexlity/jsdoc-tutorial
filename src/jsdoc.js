
/*
================================================
Adding descriptionn to a block of code
================================================
*/

/** The programming language JSDoc was written for*/
const language = "JavaScript"


/*
================================================
Adding types to values
================================================
*/

/**
 * This represents the writer of this blog
 * @type {string}
 */
const username = "Elijah"


/*
================================================
Adding types to arrays
================================================
*/

/**
* @type {Array<string>}
*/
const colours = ['red', 'blue', 'green']

/**
 * @type {number[]}
 */
const primeNumbers = [1, 2, 3, 5, 7]


/*
================================================
Adding types to objects
================================================
*/

/**
 * * @typedef {Object} User - A user schema
 * @property {number} id
 * @property {string} username
 * @property {string} email
 * @property {Array<number>} postLikes
 * @property {string[]} friends
 */


/**@type {User} */
const person1 = {
  id: 847,
  username: "Elijah",
  email: "elijah@user.com",
  postLikes: [44, 22, 24, 39],
  friends: ['fede', 'Elijah']
}

/** @type {User} */
const person2 = {
id: 424,
username: "Winston",
email: "winston@user.com",
postLike: [18, 53, 98],
friends: ['Favour', 'Jane']
}

/*
================================================
Typing Functions (parameters and return types)
================================================
*/

/**
 * Divide two numbers.
 * @param {number} dividend - The number to be divided.
 * @param {number} divisor - The number to divide by.
 * @returns {number} The result of the division.
 */
function divideNumbers(dividend, divisor) {
    return dividend/divisor;
}


/*
================================================
Typing Functions (adding expected error types)
================================================
*/

/**
 * Divide two numbers.
 * @param {number} dividend - The number to be divided.
 * @param {number} divisor - The number to divide by.
 * @returns {number} The result of the division.
 * @throws {ZeroDivisionError} Argument divisor must be non-zero
 */
function divideNumbersWithError(dividend, divisor) {
    if (divisor === 0) {
        throw new DivisionByZeroError('Cannot Divide by zero')
    }
    return dividend/divisor;
}

/**
 * Custom error for division by zero.
 */
class DivisionByZeroError extends Error {
    constructor(message = "Cannot Divide By Zero") {
        super(message);
      this.name = "DivisionByZeroError";
    }
}


/*
================================================
Typing Full Classes (description, constructor, methods, values)
================================================
*/
/**
 * @class
 * @classdec A four-sided polygon with opposite sides of equal length and four right angles
 */
class Rectangle {
  /**
   * Initialiing a Rectangle object.
   * @param {number} length - The length of the rectangle.
   * @param {number} width - The width of the rectangle.
   */
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  /**
   * Calculate the area of the rectangle.
   * @returns {number} The area of the rectangle.
   */
  calculateArea() {
    return this.length * this.width;
  }

  /**
   * Calculate the perimeter of the rectangle.
   * @returns {number} The perimeter of the rectangle.
   */
  calculatePerimeter() {
    return 2 * (this.length + this.width);
  }
}

/*
================================================
|                                              |
|        Improving Code Documentation          |
|                                              |
================================================
*/


/*
================================================
Adding Code Authors
================================================
*/

/**
     * Possible title for this article with author's link
    * @type {string}
    * @author Elijah <https://github.com/Complexlity>
    */
const articleTitle = "Demystifying JSDoc"


/*
================================================
Showing example usage
================================================
*/

/**
 * Sums of the square of two numbers a**2 + b**2
 * @example <caption>How to use the sumSquares function</caption>
 * // returns 13
 * sumSquares(2, 3)
 * @example
 * // returns 41
 * sumSquares(4, 5)
 * // Typing the function
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {Number} Returns the sum of the squares
 * */
const sumSquares = function(a, b){
    return a**2 + b**2
}


/*
================================================
Adding Version numbers
================================================
*/

/**
 * @version 1.0.0
 * @type {number}
 * */
const meaningOfLife = 42


/*
================================================
Adding tutorial and other links
================================================
*/

/**
 * How to use the link tags
 * Also see the {@link https://jsdoc.app/tags-inline-link.html official docs} for more information
 * @tutorial getting-started
 * */
function myFunction (){
}