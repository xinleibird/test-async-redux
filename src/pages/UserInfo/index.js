import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { queryUserInfo } from '../../actions/user';

const UserInfo = () => {
  const { username } = useParams();
  const dispatch = useDispatch();

  const userInfo = useSelector(({ user }) => {
    return user.userInfo;
  });

  useEffect(() => {
    if (username) {
      dispatch(queryUserInfo(username));
    }
  }, [dispatch, username]);

  return (
    <>
      <p>
        {userInfo?.data?.list?.[0]?.id}
        {userInfo?.data?.list?.[0]?.username}
      </p>
    </>
  );
};

export default UserInfo;
