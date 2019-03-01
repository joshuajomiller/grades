export class GradesModel {
  classStudents: ClassGrades[];
  classTypes: string[];
}

export class ClassGrades {
  students: StudentGrade[];
  classType: string;
}

export class StudentGrade {
  fname: string;
  lname: string;
  grade: number;
  year: number;
  class?: string;
}
