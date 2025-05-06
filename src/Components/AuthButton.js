const AuthButton = () => {
  // TODO: Haal loginWithRedirect, logout en isAuthenticated op

  const handleLogin = () => {
    // TODO: roep loginWithRedirect aan
  };

  const handleLogout = () => {
    // TODO: roep logout aan met returnTo: window.location.origin
  };

  return (
    <div>
      {
        // TODO: Toon "Log In" of "Log Out" knop afhankelijk van isAuthenticated
      }
    </div>
  );
};

export default AuthButton;
