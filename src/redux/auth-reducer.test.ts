import { authReducer, setAuthUserData, setIsAuth } from "redux/auth-reducer";

describe('auth reducer', () => {

  const initialState = {
    id: 0,
    login: '',
    email: '',
    isAuth: true
  };

  it('should set user data', () => {
    const newUserData = { id: 1, login: 'Test', email: 'testuser@example.com' };

    const endState = authReducer(initialState, setAuthUserData(newUserData));

    expect(endState).toEqual(newUserData);
  });

  it('should set isAuth', () => {
    const endState = authReducer(initialState, setIsAuth(true));

    expect(endState).toBeTruthy();
  });
});
