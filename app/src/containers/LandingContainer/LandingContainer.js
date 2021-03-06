import { connect } from 'react-redux'
import { loginRequest, logoutSuccess } from '../../actions/auth'
import { Landing } from '../../components'
import { hashHistory } from 'react-router'
import { checkLogin } from '../../actions/auth'

const mapStateToProps = (state) => {
  const { isAuthenticated, profile, error } = state.auth
  return {
    isAuthenticated,
    profile,
    error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     onLoginClick: () => {
      dispatch(loginRequest())
    },
    onLogoutClick: () => {
      dispatch(logoutSuccess())
      hashHistory.push('/')
      location.reload()
    },
    checkLogin: () => {
      dispatch(checkLogin())}
  }
}

const LandingContainer = connect(mapStateToProps, mapDispatchToProps)(Landing)

export default LandingContainer
