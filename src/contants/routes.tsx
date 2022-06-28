import Login from 'views/Login'
import ChangePassword from 'views/ChangePassword'
import Dashboard from 'pages/dashboard'

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
export const DashboardRoute = {
  component: Dashboard,
  path: '/dashboard',
  exact: true,
  restricted: false,
}

const ROUTES = [LoginRoute, ForgetPasswordRoute, DashboardRoute]

export default ROUTES
