import React from "react";
import AuthButton from "./AuthButton";

const Profile = () => {
  // TODO: Haal user en isAuthenticated op via useAuth0
  // TODO: Handel null-waarden af in de user-gegevens

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        {
          // TODO: Toon de gebruikersnaam/naam
        }
      </div>
      <div className="profile-card">
        {
          // TODO: Toon de profielfoto met fallback naar placeholder en de naam van de user
        }

        <div className="profile-info">
          {
            // TODO: Vul InfoRow componenten in met de gegevens van de gebruiker.
          }
        </div>

        <AuthButton />
      </div>
    </div>
  );
};

export default Profile;
