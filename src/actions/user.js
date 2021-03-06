import * as mUrl from '../url';
import { showAlert } from './alert';

export const requestUserInfo = () => ({
  type: 'REQUEST_USER_INFO'
});

export const getUserInfoSuccess = (data) => ({
  type: 'GET_USER_INFO_SUCCESS',
  ...data
});

export const getUserInfoFail = () => ({
  type: 'GET_USER_INFO_FAIL'
});

export const requestModifyUserInfo = () => ({
  type: "REQUEST_MODIFY_USER_INFO"
});

export const modifyUserInfoSuccess = (data) => ({
  type: "MODIFY_USER_INFO_SUCCESS",
  ...data
});

export const fetchUserInfo = () => {
  return (dispatch) => {
    dispatch(requestUserInfo());
    fetch(mUrl.people, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      credentials: 'include'
    }).then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        if (json.code == 1) {
          dispatch(getUserInfoSuccess(json.data));
        }
      }).catch(response => { return; });
  };
};

export const modifyUserInfo = (nickname, introduction, sex, role, createtime, email, imgurl) => {
  return (dispatch) => {
    dispatch(requestModifyUserInfo());
    let data = new FormData();
    data.append("nickname", nickname);
    data.append("introduction", introduction);
    data.append("sex", sex);
    data.append("role", role);
    data.append("createtime", createtime);
    data.append("email", email);
    data.append("avater", imgurl);  // 并不是url
    fetch(mUrl.people, {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      credentials: "include",
      body: data
    })
      .then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        dispatch(modifyUserInfoSuccess(json.data));
        dispatch(showAlert(json.msg, 2000, "success"));
      }).catch(response => { return; });
  };
};