interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
}

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Assignment {
  _id: string;
  title: string;
  course: string;
  releaseDate: string;
  dueDate: string;
  points: number;
  description: string;
  displayType: string;
  assignmentGroup: string;
  submissionType: string;
  onlineEntryOption: string;
  assignTo: string;
}

interface User {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import enrollments from "./enrollments.json";

export {  courses, modules, assignments, users, enrollments };
export type { Module, Lesson, Assignment, User, Enrollment };