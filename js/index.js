'use strict';

/**
 *
 * @param {function} howToSay
 * @param {string} whatToSay
 */
function saySomething(how, whatToSay) {
  how(whatToSay);
  console.log(whatToSay)
}

saySomething(console.log, 'WELCOME');
