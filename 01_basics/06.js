//datatypes in js classification

/*
 Primitive:
 7 types: String, Number, Boolean, Null, undefined, symbol, BigInt
 allocates the copy from the memory
 Reference/ Non-Primitive:
 array, objects, functions

 javascript is a dynamically defined lanuage beacuse we do not need 
 to declare the datatype of any variable explicitly
 */

 //use of symbol datatype

 const id = Symbol("123")
 const id_two= Symbol("123")
 console.log(id==id_two) //gives false
 
 //Memories
 /* Stack (Primitive) - copy 
    Heap(Non-Primitive) - Reference
 */