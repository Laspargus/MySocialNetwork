import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiProfile } from "./../../Api/ProfileApi";

const Profile = () => {
  const token = useSelector((state) => state.authentification.token);
  const { profileSlug } = useParams();

  const [loading, SetLoading] = useState(true);
  const [email, SetEmail] = useState();
  const [username, SetUsername] = useState();

  const loadProfile = async () => {
    const profile = await getApiProfile(profileSlug, token);
    SetEmail(profile.email);
    SetUsername(profile.username);
    SetLoading(false);
  };

  useEffect(() => {
    SetLoading(true);
    loadProfile();
  }, []);

  return (
    <>
      {!loading && (
        <ul>
          <li>username : {username}</li>
          <li>email : {email}</li>
        </ul>
      )}
    </>
  );
};

export default Profile;
