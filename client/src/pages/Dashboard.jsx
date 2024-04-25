import { useContext } from 'react'
import { UserContext } from '../../context/userContext'
import BlogCreate from '../components/BlogCreate'

export default function Dashboard() {
  const {user} = useContext(UserContext)
  return (
    <div>
      <div>Dashboard</div>
      {!!user && (<h2>Hi {user.name}!</h2>)}
      <BlogCreate />
    </div>
    
  )
}
