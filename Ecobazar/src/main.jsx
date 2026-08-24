import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"; //test
import { SearchProvider } from "./context/SearchContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <App />
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
);

// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CategoryPage from './pages/CategoryPage';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Dynamic Route setup */}
//         <Route path="/category/:categorySlug" element={<CategoryPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// import React from 'react';
// import { useParams } from 'react-router-dom';

// const CategoryPage = () => {
//   const { categorySlug } = useParams(); // URL dynamic param পাবে

//   return (
//     <div className="p-8">
//       <h1 className="text-2xl font-bold">Category: {categorySlug}</h1>
//       {/* এখানে categorySlug দিয়ে API Call করে সেই ক্যাটাগরির প্রোডাক্ট লোড করবেন */}
//     </div>
//   );
// };

// export default CategoryPage;
