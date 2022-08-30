"use strict";
const message = 'Hello World';
function say(something) {
    console.log(something);
}
say(message);
const message2 = 'Hello World';
console.log(message2.touppercase());
// TSC會幫忙檢測出不相符的功能或用法, 這邊是拼寫錯誤造成func參照錯誤而產生(touppercase 應該是 toUpperCase)
