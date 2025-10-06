// import React from "react";
// import Boxx from "./component/Boxx";
// // import Productss from "./component/Productss";
// // import Form from "./component/Form";

// const App = () => {
//   // const time = 20

//   // const timeChecker = ()=> {
//   //   if(time < 10) {
//   //     return <div className='text-6xl font-semibold'>Less than 10</div>
//   //   }
//   //   else if(time === 10) {
//   //     return <div className='text-6xl font-semibold'>Equal to 10</div>
//   //   }
//   //   else {
//   //     return <div className='text-6xl font-semibold'>Greater than 10</div>
//   //   }
//   // }

//   return (
//     <div className="flex flex-col gap-5 items-center justify-center w-full">
//       {/* <div className='text-6xl font-semibold'>Good Morning</div> */}
//       {/* {timeChecker()} */}
//       {/* <Boxx /> */}
//       {/* <Productss /> */}
//       {/* <Form /> */}
//       {/* <Form2 /> */}
//     </div>
//   );
// };

// export default App;



import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Product from './pages/Product'
import Productid from './pages/Productid'

const App = () => {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Product />} />
        <Route path='/products/:id' element={<Productid />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App