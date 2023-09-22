import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './components/Home/Home.js'
import SingleProduct from './components/SingleProduct/SingleProduct.js'
import NewsLetter from './components/Footer/NewsLetter/NewsLetter.js'
import AppContext from './utils/context.js'
import Category from './components/Category/Category.js'

function App() {
  return (
    <BrowserRouter>
    <AppContext>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/category/:id' element={<Category />}/>
        <Route path='/product/:id' element={<SingleProduct />}/>
      </Routes>
      <NewsLetter/>
      <Footer />
    </AppContext>
    </BrowserRouter>
  );
}

export default App;
