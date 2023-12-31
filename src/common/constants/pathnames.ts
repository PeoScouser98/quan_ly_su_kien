export const Paths = {
   HOME: '/',
   /** Auth routes */
   SIGNIN: '/signin',
   SIGNUP: '/signup',
   RECOVER_PASSOWRD: '/forgot-password',

   /** Auth middleware route */
   REDIRECT: '/',

   /** Error routes */
   NOT_FOUND: '/404',
   PERMISSION_DENIED: '/403',

   /** Manager routes */
   MANAGER: '/manager',
   MANAGER_DASHBOARD: '/manager/dashboard',
   EVENTS_LIST: '/manager/events',
   EVENTS_CREATE: '/manager/event/create',
   EVENTS_UPDATE: '/manager/events/:id/update',
   EVENT_STATISTICS_DETAILS: '/manager/events/:id',
   STAFFS_LIST: '/manager/participants',
   STUDENTS_LIST: '/manager/student-list',
   NOTIFICATION_SETTINGS: '/manager/notification-settings',

   /** Student routes */
   EVENTS_BOARD: '/student/events',
   EVENTS_DETAILS: '/student/events/:id',
   MY_EVENTS: '/student/my-events'
} as const
