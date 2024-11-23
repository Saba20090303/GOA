// დავალება_1
// import React from 'react';

// const fruits = ["Apple", "Banana", "Cherry"];
// const FruitList = () => {
//   return (
//     <ul>
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// };

// export default FruitList;

// // დავალება_2
// import React from 'react';

// const isLoggedIn = true;
// const ConditionalRendering = () => {
//   return (
//     <div>
//       {isLoggedIn ? <h1>Welcome</h1> : <h1>Please log in</h1>}
//     </div>
//   );
// };

// export default ConditionalRendering;

// // დავალება_3
// import React from 'react';

// const imageProps = {
//   src: "https://via.placeholder.com/150",
//   alt: "Placeholder Image"
// };
// const DynamicImage = () => {
//   return (
//     <img {...imageProps} />
//   );
// };

// export default DynamicImage;

// // დავალება_4
// import React from 'react';

// const backgroundColor = "lightblue";

// const InlineStyle = () => {
//   const divStyle = {
//     backgroundColor: backgroundColor,
//     padding: '20px',
//     borderRadius: '5px'
//   };

//   return <div style={divStyle}>This is a styled div</div>;
// };

// export default InlineStyle;

// // დავალება_5
// import React from 'react';

// const renderMessage = () => {
//   return <h1>Hello, world!</h1>;
// };
// const MessageComponent = () => {
//   return (
//     <div>
//       {renderMessage()}
//     </div>
//   );
// };

// export default MessageComponent;

// // დავალება_6
// import React from 'react';

// const name = "John";
// const age = 30;
// const TemplateString = () => {
//   return (
//     <div>
//       {`${name} is ${age} years old.`}
//     </div>
//   );
// };

// export default TemplateString;

// // დავალება_7
// import React from 'react';

// const dynamicTag = 'h1';
// const DynamicTag = () => {
//   return React.createElement(dynamicTag, null, 'This is dynamic!');
// };

// export default DynamicTag;

// // დავალება_8
// import React from 'react';

// const categories = [
//   { name: 'Fruits', items: ['Apple', 'Banana', 'Cherry'] },
//   { name: 'Vegetables', items: ['Carrot', 'Broccoli', 'Spinach'] }
// ];
// const NestedMapRendering = () => {
//   return (
//     <div>
//       {categories.map((category, index) => (
//         <div key={index}>
//           <h3>{category.name}</h3>
//           <ul>
//             {category.items.map((item, index) => (
//               <li key={index}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NestedMapRendering;

// // დავალება_9
// import React from 'react';

// const users = [
//   { name: 'John', age: 25 },
//   { name: 'Jane', age: 28 },
//   { name: 'Jack', age: 22 }
// ];
// const UserTable = () => {
//   return (
//     <table border="1">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//         </tr>
//       </thead>
//       <tbody>
//         {users.map((user, index) => (
//           <tr key={index}>
//             <td>{user.name}</td>
//             <td>{user.age}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default UserTable;

// // დავალება_10
// import React from 'react';

// const greeting = "Hello";
// const name = "Alice";

// const StringInterpolation = () => {
//   return (
//     <div>
//       {`${greeting}, ${name}!`}
//     </div>
//   );
// };

// export default StringInterpolation;