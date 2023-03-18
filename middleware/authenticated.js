export default function ({ app, store, redirect, route, error }) {
  // If user is not logged in
  if (!store.getters.isLoggedIn) {
    return redirect('/');
  }
}
