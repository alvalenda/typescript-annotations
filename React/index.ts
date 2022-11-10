/*  -------------------------------------------------------------------------------------
                                REACT AND TYPESCRIPT

    -   React is a JavaScript library for building user interfaces.  It is maintained by
    Facebook and a community of individual developers and companies.
    -   React is used to build single page applications.  It is the V in the MVC pattern.
    -   React is a library, not a framework.  It is not opinionated about how you should
    structure your code.  It is not opinionated about which libraries you should use for
    routing, state management, etc. It is not opinionated about which build tool you
    should use.
    -   React is a library for building user interfaces.  It is not a complete application
    framework.  It is not a complete solution for building a single page application.
    -   React is a library for building user interfaces.  It is not a complete application
    framework.  It is not a complete solution for building a single page application.
    React\index.ts
    ------------------------------------------------------------------------------------- */

// You could use React without TypeScript, and it is recommended.
// One way to use React with TypeScript is to use the create-react-app tool.  This tool
// creates a React application with TypeScript support.  It also creates a development
// server and a production build.
//
// To start new Create React App project, we must run the following command:
// npx create-react-app my-app --template typescript
//
// Then we must go to the react-typescript folder and run the application:
// npm start

// We can also create a React App in Vite. Vite is a build tool for modern web projects.
// It is a build tool for modern web projects.  It is a build tool for modern web projects.
// To start new Vite project, we must run the following command:
// npm init @vitejs/app react-typescript --template react-ts

// Then we must go to the react-typescript folder and run the application:
// npm run dev

// Now we can see the application running in the browser =)

/*  -------------------------------------------------------------------------------------
                                REACT COMPONENTS IN TYPESCRIPT

    -   A React component is a function or a class that accepts input and returns a React
    element.
    ------------------------------------------------------------------------------------- */

// Now we will create a new component and after import him in the App.tsx file.  We will
// create a new component called "HelloWorld".  This component will receive a name property
// and will return a React element.

/*  -------------------------------------------------------------------------------------
                                            HelloWorld.tsx 
    ------------------------------------------------------------------------------------- 

    import React from 'react';

    const HelloWorld = (props: { name: string }) => {
        return <div>Hello {props.name}</div>;
    };

    export default HelloWorld;

    --------------------------------------------------------------------------------------    */

// Now we will use this component in the App.tsx file.  We will use the HelloWorld component
// in the App function.

/*  -------------------------------------------------------------------------------------
                                            App.tsx 
    -------------------------------------------------------------------------------------

    import React from 'react';
    import HelloWorld from './HelloWorld';

    const App = () => {
        return <HelloWorld name="React" />;
    };

    export default App;

    --------------------------------------------------------------------------------------    */

// Good nonofficial documentation about React and TypeScript:
// https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

/*  -------------------------------------------------------------------------------------
                                    Old way to create components
                                
    -   In the previous example, we used a function to create a component.  We can also
    create a component using a class.  The class must extend
    React.Component<props, state>.  The props are the properties that the component
    receives.  The state is the internal state of the component.
    ------------------------------------------------------------------------------------- */

/*  -------------------------------------------------------------------------------------
                                        OldHelloWorld.tsx
        
        import React from 'react';

        const OldHelloWorld: React.FC<{ name: string }> = (props) => {
            return <div>Hello {props.name}</div>;
        };

        export default OldHelloWorld;

    -------------------------------------------------------------------------------------- */

/*  -------------------------------------------------------------------------------------
                                    Props with TypeScript

    -   We can define the props of a component using an interface.  The interface must have
    the same name of the component.  The interface must extend React.Props.
    ------------------------------------------------------------------------------------- */

/*  -------------------------------------------------------------------------------------
                                        HelloWorld.tsx

        interface HelloWorldProps {
        name: string;
        }

        export const HelloWorld = ({ name }: HelloWorldProps): JSX.Element => {
            return <div>Hi {name}</div>;
        };

    -------------------------------------------------------------------------------------- */
//  We can also export the component inline =)

/*  -------------------------------------------------------------------------------------
                            Let's write a more complex component

        -   We will create a component called "ShppingList".  This component will receive a
        list of items and will return a React element.
        -   We will use the ShoppingList component in the App function.
        -   The ShoppingList component will render a bunch of li's and also a form.  The
        form will have an input and a button.  The input will be used to add new items to
        the list.
        -   Propably we will need to use the useState hook to manage the state of the
        component.
    ------------------------------------------------------------------------------------- */

/*  -------------------------------------------------------------------------------------
                                        ShoppingList.tsx    

        import React, { useState, useRef } from 'react';

        interface Item {
            id: number;
            product: string;
            quantity: number;
        }

        interface ShoppingListProps {
            items: Item[];
        }

        export const ShoppingList = ({ items }: ShoppingListProps): JSX.Element => {

            const inputRef = useRef<HTMLInputElement>(null);

            const [shoppingList, setShoppingList] = useState<Item[]>(() => items);

            cont handleSubmit = (event: React.FormEvent) => {
                event.preventDefault();

                const itemIndex = shoppingList.findIndex(
                    (item) => item.product === inputRef.current.value
                );

                if (itemIndex === -1) {
                    const newItem = {
                        id: shoppingList.length + 1,
                        product: inputRef.current.value,
                        quantity: 1,
                    };

                    setShoppingList(() => [...shoppingList, newItem]);
                    return;
                }
                
                const newShoppingList = [...shoppingList];
                newShoppingList[itemIndex].quantity += 1;
                setShoppingList(() => newShoppingList);
            };


            return (
                <div>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>{item.name} - {item.quantity} </li>
                        ))}
                    </ul>
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Product Name" ref={inputRef} />
                        <button>Add</button>
                    </form>
                </div>
            );
        };

    -------------------------------------------------------------------------------------- */
// Now that we have the ShoppingList component, we can use it in the App function.
// Let's import the ShoppingList component in the App.tsx file.
// Then we create a new array of items and pass it to the ShoppingList component.
/*  -------------------------------------------------------------------------------------
                                        App.tsx

        import React from 'react';
        import { ShoppingList } from './ShoppingList';

        const App = () => {
            const items = [
                { id: 1, product: 'Milk', quantity: 2 },
                { id: 2, product: 'Bread', quantity: 1 },
                { id: 3, product: 'Eggs', quantity: 12 },
            ];

            return <ShoppingList items={items} />;
        };

        export default App;

    -------------------------------------------------------------------------------------- */
