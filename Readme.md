01. What are some differences between interfaces and types in TypeScript?

Interface এবং Type alias দুটোই TypeScript-এ টাইপ ডিফাইন করার জন্য ব্যবহার করা হয়। তবে কিছু পার্থক্য আছে: 

| বিষয়                | Interface                                                | Type                                                     
| ------------------- | -------------------------------------------------------- | -------------------------------------------------------- 
| Declaration Merging | একই নামে multiple interface declare করলে merge হয়      |  type merge হয় না                                        
| Object Types        | ব্যবহার করা হয় object structure define করতে              | ব্যবহার করা যায় object, union, tuple, primitive সব টাইপে   
| Extending           | Interface extend করা যায় অন্য interface/ type দিয়ে        | Type extend করতে হয় `&` (intersection type) ব্যবহার করে  
| Syntax Flexibility  | শুধুমাত্র object বা function structure                       | আরও flexible, union, intersection, mapped types ইত্যাদি    


02. What is the use of the keyof keyword in TypeScript? Provide an example.

keyof ব্যবহার করা হয় কোনো object বা interface-এর সব key এর type পাওয়ার জন্য।

03. Explain the difference between any, unknown, and never types in TypeScript .

| Type        | ব্যাখ্যা                                                          | উদাহরণ                                                       
| ----------- | ----------------------------------------------------------------- | ------------------------------------------------------------ 
| **any**     | যেকোনো type হতে পারে, TypeScript type-checking skip করে          | `let x: any = 5; x = "hello";`                           
| **unknown** | যেকোনো type হতে পারে, কিন্তু ব্যবহার করার আগে type check প্রয়োজন    | `let x: unknown = 5; if (typeof x === "number") { x + 2 }` 
| **never**   | এমন value যা কখনও return করে না বা কখনও উপস্থিত হয় না            | `function error(): never { throw new Error("Error"); }`     


any = unsafe, সবকিছুই allowed

unknown = safer, ব্যবহার আগে type-check করতে হবে

never = কখনও value নেই, যেমন error function বা infinite loop


04. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

>> Enum ব্যবহার করা হয় named constants group করার জন্য।

05. Provide an example of using union and intersection types in TypeScript.

>> Union Type: একটি variable একাধিক type হতে পারে।

Example : 

let value: string | number;
value = "Hello";
value = 42;

>> Intersection Type: দুই বা ততোধিক type একসাথে combine করা।

Example : 

interface A { name: string }
interface B { age: number }

type C = A & B;

const obj: C = {
  name: "John",
  age: 30
};


সংক্ষেপে:

Union → OR (|), multiple possible types

Intersection → AND (&), সব type properties একসাথে