import './index.css'

const Login = props => {
  const {login} = props
  console.log(login)

  return (
    <button type="button" className="login-button" onClick={login}>
      Login
    </button>
  )
}

export default Login
