import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <Container>
        <img src={user.picture} alt={user.name} className="img_class"/>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={()=> console.log(user)}>mostrar</button>
        {/* <LogoutButton/> */}
      </Container>
    )
  );
};

export default Profile;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 80vh;
    min-width: 50vw;
    padding: 0em 0em;
    margin: 0em;
    align-items: center;
    justify-content: center;
    .img_class{
      width: 15vw;
      border-radius: 50%;
    }
`;