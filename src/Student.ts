
import { Course } from './Course'; // นำเข้า Course จากไฟล์ Course.ts

export class Student {
  studentID: string;
  name: string;
  courses: Course[];


  constructor(studentID: string, name: string) {
    this.studentID = studentID;
    this.name = name;
    this.courses = [];
  }

  
  addCourse(course: Course) {
    this.courses.push(course);
  }

  
  getAverage(): number {
    if (this.courses.length === 0) return 0; // ตรวจสอบกรณีไม่มีวิชา
    const totalGrade = this.courses.reduce((sum, course) => sum + course.grade, 0);
    return totalGrade / this.courses.length;
  }

  
  displayInfo(): void {
    console.log(`Student ID: ${this.studentID}`);
    console.log(`Name: ${this.name}`);
    console.log("Courses:");
    this.courses.forEach(course => {
      console.log(`  ${course.name}: ${course.grade}`);
    });
    console.log(`Average Grade: ${this.getAverage().toFixed(2)}`);
    console.log('---------------------------------');
  }
}
