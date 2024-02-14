import { follow, setUsers, unfollow, usersReducer, UsersStateType, UserType } from "redux/usersReducer";

const initialState: UsersStateType = {
  users: [
    {
      id: "user1",
      fullName: "Anastasiya",
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
    { id: "1", fullName: "fullName", isFollowed: false, status: "hey", location: { country: "country", city: "city" } },
    { id: "2", fullName: "fullName", isFollowed: false, status: "hey", location: { country: "country", city: "city" } }
  ]
  const action = setUsers( newUsers);
  const endState = usersReducer( initialState, action );

  expect(endState.users.length).toBe(4)
  expect(endState.users[0].id).toBe("user1")
  expect( endState.users[2].id ).toBe("1")
  expect( endState.users[3].id ).toBe("2")
} )
