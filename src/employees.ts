interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}


const employees: Employee[] = [
    { id: 1, name: "John Doe", position: "Software Engineer", salary: 60000 },
    { id: 2, name: "Jane Smith", position: "Project Manager", salary: 75000 },
    { id: 3, name: "Sam Johnson", position: "Designer", salary: 50000 }
];


function findEmployeeByName(name: string): Employee | undefined {
    for (let i = 0; i < employees.length; i++) {
        const emp = employees[i];
        if (emp.name.toLowerCase() === name.toLowerCase()) {
            return emp; // เจอแล้ว คืนค่า Employee
        }
    }
    return undefined; // ไม่เจอใคร
}


console.log("=== ข้อมูลพนักงานทั้งหมด ===");
employees.forEach(emp => {
    console.log(`ID: ${emp.id}, Name: ${emp.name}, Position: ${emp.position}, Salary: ${emp.salary}`);
});


const searchName = "Jane Smith";
const result = findEmployeeByName(searchName);
console.log(`\n=== ผลการค้นหาพนักงานชื่อ "${searchName}" ===`);
if (result) {
    console.log(`ID: ${result.id}, Name: ${result.name}, Position: ${result.position}, Salary: ${result.salary}`);
} else {
    console.log("ไม่พบพนักงาน");
}
