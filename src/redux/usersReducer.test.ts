import {
  follow,
  setUsers,
  setUsersIsFetching,
  unfollow,
  usersReducer,
  UsersStateType,
  UserType
} from "redux/usersReducer";

const initialState: UsersStateType = {
  users: [
    {
      id: 1,
      name: "Anastasiya",
      photos: {
        small: "https://static.displate.com/857x1200/displate/2023-07-07/36564f7949ef83fec3743ccd3bbcabc2_20665b5530dd3d5737abad41cda98d27.jpg",
        large: null
      },
      followed: true,
      status: "creating my own future",
      uniqueUrlName: null
    },
    {
      id: 2,
      name: "Maria",
      photos: {
        small: "https://www.cnet.com/a/img/resize/20d6844768bd3f5f0df41deee97897423bcaf3c5/hub/2021/11/03/3c2a7d79-770e-4cfa-9847-66b3901fb5d7/c09.jpg?auto=webp&fit=crop&height=1200&width=1200",
        large: null
      },
      followed: false,
      status: "any",
      uniqueUrlName: null
    } ],
  totalUsersCount: 0,
  currentPage: 1,
  pageSize: 10,
  isFetching: false
}

test( 'user becomes followed', () => {
  const action = follow( 2 );
  const endState = usersReducer( initialState, action );

  expect( endState.users[1].followed ).toBeTruthy()
} )

test( 'user becomes unfollowed', () => {
  const action = unfollow( 1 );
  const endState = usersReducer( initialState, action );

  expect( endState.users[1].followed ).toBeFalsy()
} )

test( 'users are set', () => {
  const newUsers: UserType[] = [
    { id: 1, name: "fullName", photos: {small: null, large: null}, followed: false, status: "hey", uniqueUrlName: null },
    { id: 2, name: "fullName", photos: {small: null, large: null}, followed: false, status: "hey", uniqueUrlName: null }
  ]
  const action = setUsers( newUsers);
  const endState = usersReducer( initialState, action );

  expect(endState.users.length).toBe(4)
  expect(endState.users[0].id).toBe("user1")
  expect( endState.users[2].id ).toBe("1")
  expect( endState.users[3].id ).toBe("2")
} )

test( 'should set isFetching', () => {
  const endState = usersReducer( initialState, setUsersIsFetching(true) );

  expect(endState.isFetching).toBeTruthy()
} )
