
// 基本型別(Primitive Types):          number, string, boolean, undefined, null, ES6 的symbol, 在函式中的 void
// 物件型別(Object Types):
//          基礎物件:                  Object, Array, JSON, Class, Instance
//          TSC擴充物件:               Enum, Tuple
//          函式型別(Function Types):  (Input) => {output}
// 明文型別(Literal Types):            一個值本身是一個型別, 常見的是Object Literal Type
// 通用型別(Generic Types):
// 其他                  :             any, never, unknown,
// 複合                                union, intersection( | 和 & )

let myString = 'NameInUse';
let myNumber = 20;
let myBoolean = true;
let myNothing = undefined;
let myNothingLiterally = null;

myString;
myNumber;
myBoolean;
myNothing;
myNothingLiterally;
// 此時滑鼠移上去tsc已經會顯示某些型別, 這邊是tsc的型別推論(Type Inference), 一直到myNothing, myNothingLiterally(Nullable Types)時會出現any

myString = 20;
myNothing = "special";
myNothingLiterally = false;
// 當有被型別推論的變數被定義到其他型別時會開始有提醒, 但被推論成any的變數可以任意地去轉換

let delaymessage;
delaymessage = 'untilNow';
// 這種js常用的指定變數的方法Delayed Initialization 也會變成any, 因為這種方法其實在一開始就是把變數定義成undefined了, 所以當然也成了any

let absoluteNothing: undefined = undefined;
let literallyAbsoluteNothing: null = null;

absoluteNothing = 33;
literallyAbsoluteNothing = 'hello';
// 在這邊指定型別為undefined和null 就不會是any, 所以tsc也會限制提醒這些變數不能被改變成其他型別

let canNullableString: string;

let testString = canNullableString;

canNullableString = 'Hi';
canNullableString = '';
canNullableString = undefined;
canNullableString = null;

// 被定義成string後就不能被指定成undefined和null, 且在變數被指定類型後未被指定值就被使用tsc會提出疑問, 類似Temporal Dead Zone(TDZ)的問題出現

let eitherNullOrString: null | string = null;

eitherNullOrString = 'hi';
eitherNullOrString = null;
eitherNullOrString = 'hi2';
eitherNullOrString = undefined;

// 如果真的要同時使用多個型別, 最好一開始定義時就都給他, 這樣才不會有問題

