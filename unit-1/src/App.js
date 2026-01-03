// import {Route, Routes} from "react-router-dom";

// <Routes>
// <Route path="/about" element={<About/>}/>
// </Routes>


// 29.12.2025



// import {Link, Route, Routes} from "react-router-dom";
// import About from "path/About"
// import Products from "path/Products"
// import NotFound from "path/NotFound"
// import Home from "path/Home"

// <Routes>
// <Route path="/about" element={<About/>}/>
// <Route path="/about" element={<About/>}/>
// <Route path="/about" element={<About/>}/>
// <Route path="/about" element={<About/>}/>
// <Route path="*" element={NotFound} />
// </Routes>;




// import {Link, Route, Routes} from "react-router-dom";
// import About from "path/About"
// import Products from "path/Products"
// import NotFound from "path/NotFound"
// import Home from "path/Home"
// import ProductDetails from "path/ProductDetails"

// export const App = () => {
//     return(
//         <div>
//         <Navlink>
//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/products">Products</Link>
//         </Navlink>
// 
//         <Routes>
//             <Route path="/" element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="/products" element={<Products/>}/>
//             <Route path="/products/:productId" element={<ProductDetails/>}/>
//             <Route path="*" element={<NotFound/>}/>
//         </Routes>
//         </div>
//     )
// }


import Navigation from "./components/Navigation";
import { Outlet } from "react-router-dom";

function App(){
    return(
    <>    
    <Navigation/>
    <Outlet/>
    </>
    )
    
}

export default App