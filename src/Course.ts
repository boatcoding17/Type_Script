// Course.ts
export class Course {
  name: string;
  grade: number;

  constructor(name: string, grade: number) {
    if (!name || name.trim() === "") {
      throw new Error("Course name cannot be empty");
    }
    if (grade < 0 || grade > 100) {
      throw new Error("Grade must be between 0 and 100");
    }

    this.name = name;
    this.grade = grade;
  }
}
