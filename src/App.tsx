import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <>
      {/* I'd reccomend making a navbar component and sticking it here so that it will render on every page */}
      <Outlet />
    </>
  )
}

export default App
