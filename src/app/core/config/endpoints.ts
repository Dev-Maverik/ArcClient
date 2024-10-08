export const API_ENDPOINTS = {
    BASE_URL: 'http://172.16.0.42:5039/api',
    // BASE_URL: 'https://172.16.0.42:44347/api',
    AUTH: {
      LOGIN: '/Auth/login',
      VALIDATE_TOKEN: '/Auth/validatetoken',
    },
    DEVICE: {
      ADD: '/Device/add',
      GET: '/Device/get',
      UPDATE: '/Device/update',
      DELETE: '/Device/delete',
      GETNAMELIST: '/Device/devicecomponent',
    },
    DEVICECOMPONENT: {
      GETBYDEVICE: '/Component/get/byDevice',
    },
    STREAMPROFILE: {
      GETBYCOMPONENT: '/Component/getStreamProfiles/byComponent',
      UPDATE: '/Component/addUpdateStreamProfile',
    },
    GETWEBRTCURL : '/GetWebRTCURL',
  };