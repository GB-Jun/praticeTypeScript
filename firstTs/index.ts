const message = 'Hello World';

function say(something: string): void {
    console.log(something)
}

say(message)


// const message2 = 'Hello World';
// console.log(message2.touppercase());
// TSC會幫忙檢測出不相符的功能或用法, 這邊是拼寫錯誤造成func參照錯誤而產生(touppercase 應該是 toUpperCase)
// 使用tsc去執行轉換他也會提醒錯誤, 但不會阻止轉換

