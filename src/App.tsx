import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from './helpers/classNames/classNames'
import AboutPageAsync from './pages/About/AboutPageAsync'
import MainPageAsync from './pages/MainPage/MainPageAsync'
import './styles/index.scss'
import { useTheme } from './theme/useTheme'


const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}/>
          <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
