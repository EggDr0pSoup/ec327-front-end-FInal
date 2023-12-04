import { apiPath, apiType } from "./converts";
import request from "~/utils/request";

const ENDPOINTS = {
  GET_COURSES: <apiPath>"/courses/",
  GET_COURSES_BY_NAME: <apiPath>"/courses/search-by-name/",
  GET_COURSES_BY_CODE: <apiPath>"/courses/search-by-code/",
  GET_COURSES_BY_INSTRUCTOR: <apiPath>"/courses/search-by-instructor/",
  ENROLL_COURSE: <apiPath>"/courses/enroll-course/",
  DROP_COURSE: <apiPath>"/courses/drop-course/",
  GET_MY_COURSES: <apiPath>"/courses/my-courses/",
  GET_MY_AVAILABLE_COURSES: <apiPath>"/courses/my-available-courses/",
  SEARCH_COURSES: <apiPath>"/courses/search/",
};

export function getCoursesApi() {
  return request.get<apiType["Page_CourseRead_"]>(ENDPOINTS.GET_COURSES);
}

export function getCoursesByNameApi(name: string) {
  return request.get<apiType["Page_CourseRead_"]>(
    ENDPOINTS.GET_COURSES_BY_NAME + name
  );
}

export function getCoursesByCodeApi(code: string) {
  return request.get<apiType["Page_CourseRead_"]>(
    ENDPOINTS.GET_COURSES_BY_CODE + code
  );
}

export function getCoursesByInstructorApi(instructor: string) {
  return request.get<apiType["Page_CourseRead_"]>(
    ENDPOINTS.GET_COURSES_BY_INSTRUCTOR + instructor
  );
}

export function enrollCourseApi(id: number) {
  return request.post(ENDPOINTS.ENROLL_COURSE + id);
}

export function dropCourseApi(id: number) {
  return request.post(ENDPOINTS.DROP_COURSE + id);
}

export function getMyCoursesApi() {
  return request.get<apiType["CourseRead"][]>(ENDPOINTS.GET_MY_COURSES);
}

export function getMyAvailableCoursesApi() {
  return request.get<apiType["CourseRead"][]>(
    ENDPOINTS.GET_MY_AVAILABLE_COURSES
  );
}

export function searchCoursesApi(
  name: string,
  code: string,
  instructor: string,
  page: number,
  size: number
) {
  return request.get<apiType["Page_CourseRead_"]>(
    ENDPOINTS.SEARCH_COURSES +
      "?name=" +
      name +
      "&code=" +
      code +
      "&instructor=" +
      instructor +
      "&page=" +
      page +
      "&size=" +
      size
  );
}
