const getters = {
  token: state => state.user.token,
  nickname: state => state.user.nickname,
  useruuid: state => state.user.useruuid,
  routes: state => state.permission.routes,
  checked: state => state.permission.checked,
  closed: state => state.app.sidebar.closed,
  appTitle: state => state.app.title
}
export default getters
