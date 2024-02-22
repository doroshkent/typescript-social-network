import React from 'react';
import { v4 } from "uuid";
import { UsersPropsType } from "pages/users/UsersContainer";

export const Users = ({users, follow, unfollow, setUsers}: UsersPropsType) => {
  if (users.length === 0 ) {
    setUsers([
      {
        id: v4(),
        fullName: "Anastasiya",
        photoUrl: "https://static.displate.com/857x1200/displate/2023-07-07/36564f7949ef83fec3743ccd3bbcabc2_20665b5530dd3d5737abad41cda98d27.jpg",
        isFollowed: true,
        status: "creating my own future",
        location: {
          country: "Poland",
          city: "Poznan"
        }
      },
      {
        id: v4(),
        fullName: "Maria",
        photoUrl: "https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200",
        isFollowed: false,
        status: "any",
        location: {
          country: "Belarus",
          city: "Minsk"
        }
      } ])
  }
  return (
    <div>
      {users.map(u => (
        <div>
          <div>
            <div>
                <img src={u.photoUrl} style={{width: "50px"}} alt={"alt"} />
            </div>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
              {u.isFollowed ? (
                <button
                  onClick={() => unfollow(u.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => follow(u.id)}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
