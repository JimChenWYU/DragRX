import { AUTH_CUSTOMIZE, AUTH_DEBUG, AUTH_DASHBOARD, AUTH_THEME_SETTINGS, AUTH_MEDIAS } from "APIs/authSlugs";
import dashboard from "mock/views/dashboard";
import meidaPage from "mock/views/meidaPage";
import notificationPage from "mock/views/notificationPage";
import notificationViewPage from "mock/views/notificationViewPage";

export default[
  {
    id:21,
    slug:'dashboard',
    name:'系统',
    indexPageId:211,
    pages:[
      {
        id:211,
        name:'分析看板',
        slug:'dashboard1',
        jsonSchema:dashboard,
      },
    ],
    auths:[
      {
        id:211,
        slug:AUTH_CUSTOMIZE,
        name:'定制系统',
      },
      {
        id:212,
        slug:AUTH_DEBUG,
        name:'调试',
      },
      {
        id:213,
        slug:AUTH_THEME_SETTINGS,
        name:'主题设置',
      },
      {
        id:214,
        slug:AUTH_DASHBOARD,
        name:'分析看板',
      }
    ]
  },
  {
    id:15,
    name:'媒体管理',
    slug:'medias',
    indexPageId:151,
    pages:[
      {
        id:151,
        name:'媒体库',
        slug:'medias',
        jsonSchema: meidaPage,
      },
    ],
    auths:[
      AUTH_MEDIAS,
    ]
  },

  {
    id:9,
    slug:'notification',
    name:'通知',
    indexPageId:91,
    pages:[
      {
        id:91,
        name:'通知列表',
        slug:'notification-list',
        jsonSchema: notificationPage,
      },
      {
        id:92,
        name:'查看通知',
        slug:'view-notification',
        jsonSchema: notificationViewPage,
      },
    ],
  },

]