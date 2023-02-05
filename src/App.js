import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Post from "./components/Post/Post";
import Comments from "./components/Comments/Comments";

function App() {
  return (
    <BrowserRouter>
      <Routes >
         <Route path='/' element={<Home/>}>
            <Route index element={<Post/>  }>
            </Route>
               <Route path='comments/:postId' element={<Comments/> }/>
         </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
