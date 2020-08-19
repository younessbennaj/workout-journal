import React, { useState, useEffect } from 'https://cdn.skypack.dev/react@^16.13.1';
// import { ListItem } from './ListItem.js';
import { Table } from './Table.js';

const props = {
    foo: 'foo',
    bar: 'bar'
}

/*/

    Function component => a JS function that returns a React Element object.

    /!\ => Since React 16.8, function compoenent are more than "stateless components". Thanks
    to hooks we can now use local state in those components. 

/*/

const App = ({ users: data }) => {
    // We declare a "users" state variable
    const [users, setUsers] = useState([]); //We pass an empty array as initial state.

    /*/

        Function component and http request => Generate a side effect.

        Side effect: modify the state of something outside the scope of the 
        function. 

        When we use class component we put the side effect code inside the componentDidMount()
        and componentDidUpdate() lifecycle methods. 

        But, due to we want that the side effect should exectuted at the end of the 
        mounting phase and when the component update, we need to duplicate the code
        inside the two methods. This could be repetitive and hard to maintain. 

        Thanks to the rise of react hooks, we have another solution: React.useEffect() hook.

        useEffect(effect) => execute some code each time something is displayed.

        effect: a function that will be called when the DOM is updated. (act as an async callback).

        (synchronous side effect => useLayoutEffect() hook.)

        /!\ => react component still must act as pure function when it comes to props.
    
    /*/

    useEffect(() => {
        //React guarantees that this code will be executed when the render is committed to the screen

        //Also, thanks to closure, here we can acess to props values.

        data.fetch().then(users => {
            setUsers(users);
        })

        //if we return a function => React will use it to clean up the side effect
        // => unmounting phase
    }, []); //We we use an empty array as second argument, we tell to React that our effect depends neither of props of local state. So it don't need to be re executed.

    //Our JSX code will be parsed by Babel, so the function will return a React Element. 
    return (
        <div>
            <h1>Table</h1>
            <Table {...props} />
        </div>
    )
}

export { App };