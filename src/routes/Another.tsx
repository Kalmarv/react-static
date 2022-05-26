import { Link } from 'react-router-dom'

const Another = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/another">Another</Link>
      <h1>I'm another Route</h1>
    </>
  )
}

export default Another
