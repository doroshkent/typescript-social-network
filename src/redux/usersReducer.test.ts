import { follow, setUsers, unfollow, usersReducer, UsersStateType, UserType } from "redux/usersReducer";

const initialState: UsersStateType = {
  users: [
    {
      id: "user1",
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
      id: "user2",
      fullName: "Maria",
      photoUrl: "https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200",
      isFollowed: false,
      status: "any",
      location: {
        country: "Belarus",
        city: "Minsk"
      }
    } ]
}

test( 'user becomes followed', () => {
  const action = follow( "user2" );
  const endState = usersReducer( initialState, action );

  expect( endState.users[1].isFollowed ).toBeTruthy()
} )

test( 'user becomes unfollowed', () => {
  const action = unfollow( "user1" );
  const endState = usersReducer( initialState, action );

  expect( endState.users[1].isFollowed ).toBeFalsy()
} )

test( 'users are set', () => {
  const newUsers: UserType[] = [
    { id: "1", fullName: "fullName", photoUrl: "", isFollowed: false, status: "hey", location: { country: "country", city: "city" } },
    { id: "2", fullName: "fullName", photoUrl: "", isFollowed: false, status: "hey", location: { country: "country", city: "city" } }
  ]
  const action = setUsers( newUsers);
  const endState = usersReducer( initialState, action );

  expect(endState.users.length).toBe(4)
  expect(endState.users[0].id).toBe("user1")
  expect( endState.users[2].id ).toBe("1")
  expect( endState.users[3].id ).toBe("2")
} )
