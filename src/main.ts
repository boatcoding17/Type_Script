// main.ts
import { Student } from './Student';
import { Course } from './Course';

// สร้างนักศึกษา 3 คน พร้อมรายวิชา
const student1 = new Student("S12345", "John Doe");
student1.addCourse(new Course("Mathematics", 85));
student1.addCourse(new Course("Science", 90));
student1.addCourse(new Course("History", 78));
student1.addCourse(new Course("English", 92));

const student2 = new Student("S12346", "Jane Smith");
student2.addCourse(new Course("Mathematics", 88));
student2.addCourse(new Course("Science", 80));
student2.addCourse(new Course("History", 85));
student2.addCourse(new Course("English", 95));

const student3 = new Student("S12347", "Alice Brown");
student3.addCourse(new Course("Mathematics", 91));
student3.addCourse(new Course("Science", 84));
student3.addCourse(new Course("History", 89));
student3.addCourse(new Course("English", 87));

// แสดงผลข้อมูลของนักศึกษาทั้งหมด
console.log("Before Adding New Course:");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();

// เพิ่มรายวิชาใหม่ให้กับนักศึกษาทั้ง 3 คน
student1.addCourse(new Course("Computer Science", 88));
student2.addCourse(new Course("Art", 94));
student3.addCourse(new Course("Music", 90));

// แสดงผลข้อมูลของนักศึกษาหลังจากเพิ่มรายวิชา
console.log("\nAfter Adding New Course:");
student1.displayInfo();
student2.displayInfo();
student3.displayInfo();
