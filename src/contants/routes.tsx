import Login from 'views/Login'
import ChangePassword from 'views/ChangePassword'
import Connections from 'views/Dashboard/Connections'

export const LoginRoute = {
  component: Login,
  path: '/',
  exact: true,
  restricted: false,
}

export const ForgetPasswordRoute = {
  component: ChangePassword,
  path: '/forgetpassword',
  exact: true,
  restricted: false,
}
export const ConnectionsRoute = {
  component: Connections,
  path: '/connections',
  exact: true,
  restricted: false,
}

const ROUTES = [LoginRoute, ForgetPasswordRoute, ConnectionsRoute]

export default ROUTES
