/*  -------------------------------------------------------------------------------------
                                  DECORATORS

    -   Decorators are functions that can be used to modify the behavior of a class, method,
    property, or parameter. Decorators are applied by placing them above the declaration
    to be decorated. Decorators are applied to classes, methods, accessors, properties,
    and parameters.

    -   Decorators are functions that are called at design time, when the class is defined,
    not at runtime. Decorators are applied to the class constructor returned by the class
    declaration, not to the class declaration itself.
    ------------------------------------------------------------------------------------- */

// In the acutal version of TypeScript and JavaScript, decorators are an experimental
// feature. To enable them, you must enable the experimentalDecorators compiler option
// either on the command line or in your tsconfig.json.

// Execute the following command line in the terminal:
//  tsc --target ES5 --experimentalDecorators

// Change the following configuration option in your config file:
/*
    {
	    "compilerOptions": {
		    "target": "ES5",
		    "experimentalDecorators": true
	    }
    }
*/

// To use decorators, you must import the @types/core-decorators package from npm.
// This package contains type definitions for the core-decorators library.

/*  -------------------------------------------------------------------------------------
                              DECORATORS AS CONSTRUCTORS 
                            
    -   Decorators are functions that are called at design time, when the class is defined,
    not at runtime. Decorators are applied to the class constructor returned by the class
    declaration, not to the class declaration itself.
    ------------------------------------------------------------------------------------- */

// The following example shows how to use a decorator to modify the behavior of a class
// constructor.

function Log(constructor: Function) {
  console.log(`New: ${constructor.name}`);
}

@Log
class Person {
  constructor(public name: string) {}
}

const classObject = new Person("ChickenFace");

// The following example shows how to use a decorator to modify the behavior of a class
// constructor.
// Whenever a new instance of the class is created, the decorator function is called. The
// decorator function can then modify the behavior of the class constructor. In this case,
// the decorator function logs proprety name of the class to the console.

// If i have a new class for example: Student, the decorator function will be called when
// a new instance of the Student class is created.

@Log
class Student {
  constructor(public name: string) {}
}

const studentObject = new Student("StudentFace");
// Output: New: Student

/*  -------------------------------------------------------------------------------------
                              DECORATORS AS PARAMETERS

    -   Decorators can be applied to parameters of a class constructor. In this case, the
    decorator is applied to the constructor function itself. The decorator function is
    passed the constructor function as an argument.
    ------------------------------------------------------------------------------------- */
