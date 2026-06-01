import { useState } from 'react'
import { FaLock, FaTowerCell, FaUser } from 'react-icons/fa6'

function Login({ onLogin }) {
  const [email, setEmail] = useState('admin@telecom.local')
  const [password, setPassword] = useState('admin123')
  const submit = (event) => {
    event.preventDefault()
    if (email && password) onLogin()
  }
  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo"><FaTowerCell /></div>
        <p className="eyebrow">Secure access</p>
        <h1>Telecom Ops Dashboard</h1>
        <p className="muted">Use the demo credentials below or enter any email and password to open the dashboard.</p>
        <form onSubmit={submit}>
          <label><FaUser /> Email</label>
          <input className="input-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label><FaLock /> Password</label>
          <input className="input-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="primary-btn w-100" type="submit">Login</button>
        </form>
      </section>
    </main>
  )
}
export default Login
