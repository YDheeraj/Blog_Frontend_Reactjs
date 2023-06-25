import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Error from './components/Error';
import Blog from './components/Blog';
import Favourite from './components/Favourite';

function App() {
  return (
   <>
   <div className='container px-10 mx-auto font-sans'>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout></Layout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="posts/:postId" element={<Blog></Blog>} />
        <Route path='/favourite' element={<Favourite></Favourite>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Route>
     </Routes>
     </BrowserRouter>
     </div>
   </>
  );
}

export default App;
