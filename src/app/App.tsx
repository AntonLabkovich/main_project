import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from 'helpers/classNames/classNames'
import { useTheme } from './providers'
import { AboutPage } from 'pages/About'
import { MainPage } from 'pages/MainPage'

import './styles/index.scss'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О нас</Link>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}/>
          <Route path={'/'} element={<MainPage/>}/>
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
