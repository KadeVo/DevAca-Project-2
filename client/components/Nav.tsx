import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

import { useAuth0 } from '@auth0/auth0-react'
import Zombies from './Zombies.tsx'

function Nav() {
  const { user, loginWithRedirect, logout } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <div>
        <IfAuthenticated>
          <button className="logBtn" onClick={handleSignOut}>
            Sign out
          </button>
          {user && <p>Signed in as: {user?.nickname}</p>}
          <Zombies />
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className="logBtn" onClick={handleSignIn}>
            Sign in
          </button>
          <p>You can login means you are still a human</p>
          <img className="map-img" src="../client/images/map.jpg" alt="map" />
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Nav
