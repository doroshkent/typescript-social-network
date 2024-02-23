import React from 'react';
import userImg from "assets/img/avatars/user.png"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { UserType } from "redux/usersReducer";

type UsersPropsType = {
  users: UserType[]
  totalUsersCount: number
  pageSize: number
  currentPage: number
  follow: (id: number) => void
  unfollow: (id: number) => void
  onPageChanged: (pageNumber: number) => void
}

export const Users = ({
                        users,
                        totalUsersCount,
                        pageSize,
                        currentPage,
                        follow,
                        unfollow,
                        onPageChanged
                      }: UsersPropsType) => {

  return (
    <div>
      <Stack spacing={ 2 }>
        <Pagination count={ Math.ceil( totalUsersCount / pageSize ) }
                    page={ currentPage }
                    onChange={ (e, value) => onPageChanged( value ) }
                    size="small"
                    hidePrevButton hideNextButton showFirstButton showLastButton />
      </Stack>
      { users.map( u => (
        <div key={ u.id }>
          <div>
            <div>
              <img src={ u.photos.small || userImg } style={ { width: "50px" } } alt={ "alt" } />
            </div>
            <div>
              <div>{ u.name }</div>
              <div>{ u.status }</div>
              { u.followed ? (
                <button onClick={ () => unfollow( u.id ) }>
                  Unfollow
                </button>
              ) : (
                <button onClick={ () => follow( u.id ) }>
                  Follow
                </button>
              ) }
            </div>
          </div>
        </div>
      ) ) }
    </div>
  );
}
