import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API } from './api/api';
import Cards from './components/Cards/Cards'
import Modal from './components/Modal/Modal';
import Navbar from './components/Navbar/Navbar'
import Preloader from './components/Preloader/Preloader';
import Search from './components/Search/Search'

function App() {
  const isLoading = useSelector(state=>state.movies.isLoading)
  const isModal = useSelector(state=>state.movies.isModalShow)
  const searchError = useSelector(state=>state.movies.searchError)

  const dispatch = useDispatch()
    useEffect(()=>{
      API.getFilms(dispatch)
      },[])
  
  

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <Search/>
        {isLoading && <Preloader/>}
        {isLoading && searchError ? <h3>Nothing found</h3> : null } 
        {!isLoading && <Cards />}
      </div>
      {isModal && <Modal />}
    </div>
  );
}

export default App;
