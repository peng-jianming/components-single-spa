import axios from 'axios';

export const getAllUser = ({
  query = {},
  config = { loading: false }
} = {}) => {
  return axios.request({
    params: query,
    url: '/api/user/all',
    method: 'get',
    ...config
  });
};

export const patchUserPermission = ({
  params = {},
  data = {},
  config = { loading: false }
} = {}) => {
  return axios.request({
    data,
    url: `/api/admin/permission/${params.userId}`,
    method: 'patch',
    ...config
  });
};

export const getPermission = ({ config = { loading: false } } = {}) =>
  axios.request({
    url: '/api/admin/permission',
    method: 'get',
    ...config
  });

export const getSearchUser = ({
  query = {},
  config = { loading: false, debounce: false }
} = {}) => {
  return axios.request({
    params: query,
    url: '/api/user/search',
    method: 'get',
    ...config
  });
};
