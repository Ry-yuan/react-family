export const GET_USER_INFO_REQUEST = "userInfo/GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "userInfo/GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAIL = "userInfo/GET_USER_INFO_FAIL";

function getUserInfoRequest() {
  return {
    type: GET_USER_INFO_REQUEST
  }
}

function getUserInfoSuccess(userInfo) {
  return {
    type: GET_USER_INFO_SUCCESS,
    userInfo: userInfo
  }
}

function getUserInfoFail() {
  return {
    type: GET_USER_INFO_FAIL
  }
}
/**
 *  请求action集中处理 
 *  redux为了处理这种action， 需要引入中间件redux-thunk
 *  这种action不是返回一个描述对象，而是一个函数
 */
export function getUserInfo() {
  return function (dispatch) {
    dispatch(getUserInfoRequest());
    return fetch('http://localhost:8080/api/user.json').then((res) => {
      return res.json()
    }).then(json => {
      dispatch(getUserInfoSuccess(json));
    }).catch(() => {
      dispatch(getUserInfoFail());
    })
  }
}