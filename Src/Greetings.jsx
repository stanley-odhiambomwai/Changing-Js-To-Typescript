import React from 'react';

//   We first have to define the props type and then 
//   ensure that 'name' must be  a string
interface GreetingProps {
  name: string; 
}


//Then we define the functional component with props type
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
  };
//   The export default part has no effect
  export default Greeting;