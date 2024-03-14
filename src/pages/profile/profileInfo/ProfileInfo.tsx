import React from 'react';
import user from "assets/img/avatars/user.png"
import styled from "styled-components";
import { ProfileProps } from "pages/profile/ProfileContainer";
import { Spin } from "antd";
import { isAbsoluteURL } from "utils/isAbsoluteUrl";
import { isNotNull } from "utils/isNotNull";

export const ProfileInfo = ({ profileInfo }: ProfileProps) => {
  if (!profileInfo) {
    return <Spin size='large' />;
  }

  const { aboutMe, fullName, lookingForAJobDescription, lookingForAJob, photos, contacts } = profileInfo

  const filteredContacts = Object.entries( contacts ).filter( isNotNull )

  return (
    <Description>
      <MainInfo>
        <img src={ photos.large || user } alt='user' />
        <h1>{ fullName }</h1>
      </MainInfo>

      { aboutMe && (
        <>
          <h2>About me:</h2>
          <p>{ aboutMe }</p>
        </>
      ) }
      { lookingForAJob && (
        <>
          <h2>Looking for a job:</h2>
          <p>{ lookingForAJobDescription }</p>
        </>
      ) }
      { filteredContacts.length > 0 && (
        <>
          <h2>Contacts:</h2>
          <div>
            { filteredContacts.map( ([ socialMedia, link ]) => (
              <li key={ socialMedia }>
                { socialMedia }:{ " " }
                <a
                  href={ isAbsoluteURL( link ) ? link : `https://${ link }` }
                  target="_blank"
                  rel="noreferrer"
                >
                  { link }
                </a>
              </li>
            ) ) }
          </div>
        </>
      ) }
    </Description>
  );
};

const Description = styled.section`
  img {
    height: 200px;
  }
`

const MainInfo = styled.div`

`
