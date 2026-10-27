const bonus = 5000;

function calculateSalary(isPermanent) {
  const salary = 40000;
  const totalSalary = isPermanent ? salary + bonus : salary;
  console.log(`Permanent: ${isPermanent}; total salary: ${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains: ${bonus}`);
