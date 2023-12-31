/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/auth/jwt/login": {
    /** Auth:Jwt.Login */
    post: operations["auth_jwt_login_auth_jwt_login_post"];
  };
  "/auth/jwt/logout": {
    /** Auth:Jwt.Logout */
    post: operations["auth_jwt_logout_auth_jwt_logout_post"];
  };
  "/auth/register": {
    /** Register:Register */
    post: operations["register_register_auth_register_post"];
  };
  "/auth/forgot-password": {
    /** Reset:Forgot Password */
    post: operations["reset_forgot_password_auth_forgot_password_post"];
  };
  "/auth/reset-password": {
    /** Reset:Reset Password */
    post: operations["reset_reset_password_auth_reset_password_post"];
  };
  "/auth/request-verify-token": {
    /** Verify:Request-Token */
    post: operations["verify_request_token_auth_request_verify_token_post"];
  };
  "/auth/verify": {
    /** Verify:Verify */
    post: operations["verify_verify_auth_verify_post"];
  };
  "/users/me": {
    /** Users:Current User */
    get: operations["users_current_user_users_me_get"];
    /** Users:Patch Current User */
    patch: operations["users_patch_current_user_users_me_patch"];
  };
  "/users/{id}": {
    /** Users:User */
    get: operations["users_user_users__id__get"];
    /** Users:Delete User */
    delete: operations["users_delete_user_users__id__delete"];
    /** Users:Patch User */
    patch: operations["users_patch_user_users__id__patch"];
  };
  "/courses/": {
    /** Get Courses */
    get: operations["get_courses_courses__get"];
  };
  "/courses/search-by-code/": {
    /** Search Courses By Code */
    get: operations["search_courses_by_code_courses_search_by_code__get"];
  };
  "/courses/search-by-name/": {
    /** Search Courses By Name */
    get: operations["search_courses_by_name_courses_search_by_name__get"];
  };
  "/courses/search-by-instructor/": {
    /** Search Courses By Instructor */
    get: operations["search_courses_by_instructor_courses_search_by_instructor__get"];
  };
  "/courses/enroll-course/{course_id}": {
    /** Enroll Course */
    post: operations["enroll_course_courses_enroll_course__course_id__post"];
  };
  "/courses/drop-course/{course_id}": {
    /** Drop Course */
    post: operations["drop_course_courses_drop_course__course_id__post"];
  };
  "/courses/search/": {
    /** Search Courses */
    get: operations["search_courses_courses_search__get"];
  };
  "/courses/my-courses": {
    /** Get Current User Courses */
    get: operations["get_current_user_courses_courses_my_courses_get"];
  };
  "/courses/my-available-courses": {
    /** Get Current User Courses Available */
    get: operations["get_current_user_courses_available_courses_my_available_courses_get"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    /** BearerResponse */
    BearerResponse: {
      /** Access Token */
      access_token: string;
      /** Token Type */
      token_type: string;
    };
    /** Body_auth_jwt_login_auth_jwt_login_post */
    Body_auth_jwt_login_auth_jwt_login_post: {
      /** Grant Type */
      grant_type?: string | null;
      /** Username */
      username: string;
      /** Password */
      password: string;
      /**
       * Scope
       * @default
       */
      scope?: string;
      /** Client Id */
      client_id?: string | null;
      /** Client Secret */
      client_secret?: string | null;
    };
    /** Body_reset_forgot_password_auth_forgot_password_post */
    Body_reset_forgot_password_auth_forgot_password_post: {
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /** Body_reset_reset_password_auth_reset_password_post */
    Body_reset_reset_password_auth_reset_password_post: {
      /** Token */
      token: string;
      /** Password */
      password: string;
    };
    /** Body_verify_request_token_auth_request_verify_token_post */
    Body_verify_request_token_auth_request_verify_token_post: {
      /**
       * Email
       * Format: email
       */
      email: string;
    };
    /** Body_verify_verify_auth_verify_post */
    Body_verify_verify_auth_verify_post: {
      /** Token */
      token: string;
    };
    /** CourseRead */
    CourseRead: {
      /** Id */
      id: number;
      /** Code */
      code: string;
      /** Name */
      name: string;
      /** Section */
      section: string;
      /** Instructor */
      instructor: string | null;
      /** Location */
      location: string | null;
      /** Schedule */
      schedule: string | null;
      /** Semester */
      semester: string | null;
      /** Notes */
      notes: string | null;
      /** Credits */
      credits: number;
      /** Prerequisites */
      prerequisites: string | null;
      /** Available */
      available: number;
    };
    /** ErrorModel */
    ErrorModel: {
      /** Detail */
      detail: string | {
        [key: string]: string;
      };
    };
    /** HTTPValidationError */
    HTTPValidationError: {
      /** Detail */
      detail?: components["schemas"]["ValidationError"][];
    };
    /** Page[CourseRead] */
    Page_CourseRead_: {
      /** Items */
      items: components["schemas"]["CourseRead"][];
      /** Total */
      total: number | null;
      /** Page */
      page: number | null;
      /** Size */
      size: number | null;
      /** Pages */
      pages?: number | null;
    };
    /** UserCreate */
    UserCreate: {
      /**
       * Email
       * Format: email
       */
      email: string;
      /** Password */
      password: string;
      /**
       * Is Active
       * @default true
       */
      is_active?: boolean | null;
      /**
       * Is Superuser
       * @default false
       */
      is_superuser?: boolean | null;
      /**
       * Is Verified
       * @default false
       */
      is_verified?: boolean | null;
    };
    /** UserRead */
    UserRead: {
      /** Id */
      id: number;
      /**
       * Email
       * Format: email
       */
      email: string;
      /**
       * Is Active
       * @default true
       */
      is_active?: boolean;
      /**
       * Is Superuser
       * @default false
       */
      is_superuser?: boolean;
      /**
       * Is Verified
       * @default false
       */
      is_verified?: boolean;
      /**
       * Courses
       * @default []
       */
      courses?: components["schemas"]["CourseRead"][];
    };
    /** UserUpdate */
    UserUpdate: {
      /** Password */
      password?: string | null;
      /** Email */
      email?: string | null;
      /** Is Active */
      is_active?: boolean | null;
      /** Is Superuser */
      is_superuser?: boolean | null;
      /** Is Verified */
      is_verified?: boolean | null;
    };
    /** ValidationError */
    ValidationError: {
      /** Location */
      loc: (string | number)[];
      /** Message */
      msg: string;
      /** Error Type */
      type: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** Auth:Jwt.Login */
  auth_jwt_login_auth_jwt_login_post: {
    requestBody: {
      content: {
        "application/x-www-form-urlencoded": components["schemas"]["Body_auth_jwt_login_auth_jwt_login_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["BearerResponse"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Auth:Jwt.Logout */
  auth_jwt_logout_auth_jwt_logout_post: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Missing token or inactive user. */
      401: {
        content: never;
      };
    };
  };
  /** Register:Register */
  register_register_auth_register_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserCreate"];
      };
    };
    responses: {
      /** @description Successful Response */
      201: {
        content: {
          "application/json": components["schemas"]["UserRead"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Reset:Forgot Password */
  reset_forgot_password_auth_forgot_password_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_reset_forgot_password_auth_forgot_password_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      202: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Reset:Reset Password */
  reset_reset_password_auth_reset_password_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_reset_reset_password_auth_reset_password_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Verify:Request-Token */
  verify_request_token_auth_request_verify_token_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_verify_request_token_auth_request_verify_token_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      202: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Verify:Verify */
  verify_verify_auth_verify_post: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["Body_verify_verify_auth_verify_post"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UserRead"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Users:Current User */
  users_current_user_users_me_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UserRead"];
        };
      };
      /** @description Missing token or inactive user. */
      401: {
        content: never;
      };
    };
  };
  /** Users:Patch Current User */
  users_patch_current_user_users_me_patch: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserUpdate"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UserRead"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Missing token or inactive user. */
      401: {
        content: never;
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Users:User */
  users_user_users__id__get: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UserRead"];
        };
      };
      /** @description Missing token or inactive user. */
      401: {
        content: never;
      };
      /** @description Not a superuser. */
      403: {
        content: never;
      };
      /** @description The user does not exist. */
      404: {
        content: never;
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Users:Delete User */
  users_delete_user_users__id__delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      /** @description Successful Response */
      204: {
        content: never;
      };
      /** @description Missing token or inactive user. */
      401: {
        content: never;
      };
      /** @description Not a superuser. */
      403: {
        content: never;
      };
      /** @description The user does not exist. */
      404: {
        content: never;
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Users:Patch User */
  users_patch_user_users__id__patch: {
    parameters: {
      path: {
        id: string;
      };
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserUpdate"];
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["UserRead"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["ErrorModel"];
        };
      };
      /** @description Missing token or inactive user. */
      401: {
        content: never;
      };
      /** @description Not a superuser. */
      403: {
        content: never;
      };
      /** @description The user does not exist. */
      404: {
        content: never;
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Get Courses */
  get_courses_courses__get: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Page size */
        size?: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Page_CourseRead_"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Search Courses By Code */
  search_courses_by_code_courses_search_by_code__get: {
    parameters: {
      query: {
        code: string;
        /** @description Page number */
        page?: number;
        /** @description Page size */
        size?: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Page_CourseRead_"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Search Courses By Name */
  search_courses_by_name_courses_search_by_name__get: {
    parameters: {
      query: {
        name: string;
        /** @description Page number */
        page?: number;
        /** @description Page size */
        size?: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Page_CourseRead_"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Search Courses By Instructor */
  search_courses_by_instructor_courses_search_by_instructor__get: {
    parameters: {
      query: {
        instructor: string;
        /** @description Page number */
        page?: number;
        /** @description Page size */
        size?: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Page_CourseRead_"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Enroll Course */
  enroll_course_courses_enroll_course__course_id__post: {
    parameters: {
      path: {
        course_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Drop Course */
  drop_course_courses_drop_course__course_id__post: {
    parameters: {
      path: {
        course_id: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": unknown;
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Search Courses */
  search_courses_courses_search__get: {
    parameters: {
      query?: {
        code?: string | null;
        name?: string | null;
        instructor?: string | null;
        /** @description Page number */
        page?: number;
        /** @description Page size */
        size?: number;
      };
    };
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["Page_CourseRead_"];
        };
      };
      /** @description Validation Error */
      422: {
        content: {
          "application/json": components["schemas"]["HTTPValidationError"];
        };
      };
    };
  };
  /** Get Current User Courses */
  get_current_user_courses_courses_my_courses_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["CourseRead"][];
        };
      };
    };
  };
  /** Get Current User Courses Available */
  get_current_user_courses_available_courses_my_available_courses_get: {
    responses: {
      /** @description Successful Response */
      200: {
        content: {
          "application/json": components["schemas"]["CourseRead"][];
        };
      };
    };
  };
}
