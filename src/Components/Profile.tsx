import { useContext } from "react";
import AppContext from "../Hooks/AppContext";

function Profile() {
  const context = useContext(AppContext);

  // Ensure the context is not undefined
  if (!context) {
    throw new Error("Profile must be used within an AppContextProvider");
  }

  const { user, setUser } = context;

  const handleUpdateName = () => {
    setUser({ name: "Jane Doe" });
  };

  return (
    <div className="container mx-auto py-4 lg:px-4">
      <h1>Profile: {user.name}</h1>
      <button className="rounded bg-blue-300 px-2" onClick={handleUpdateName}>Update Name</button>
    </div>
  );
}

export default Profile;
 