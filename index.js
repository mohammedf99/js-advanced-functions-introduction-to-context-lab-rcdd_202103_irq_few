<<<<<<< HEAD
function createEmployeeRecord(employeeArray){
  const newEmployee = {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  }

  return newEmployee;
}

function createEmployeeRecords(recordArray){
  let newEmployeeList = [];
  recordArray.forEach(record=>{
    newEmployeeList.push(createEmployeeRecord(record));
  });
  return newEmployeeList;
}

function createTimeInEvent(employeeRecord, date){
  date = date.split(" ");
  let newTimeIn = {
    type: "TimeIn",
    hour: parseInt(date[1]),
    date: date[0],
  }
  employeeRecord.timeInEvents.push(newTimeIn);
  return employeeRecord;
}

function createTimeOutEvent(employeeRecord, date){
  date = date.split(" ");
  let newTimeOut = {
    type: "TimeOut",
    hour: parseInt(date[1]),
    date: date[0],
  }
  employeeRecord.timeOutEvents.push(newTimeOut);
  return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date){
  const foundTimeOut = employeeRecord.timeOutEvents.find(timeOut => timeOut.date == date);
  const foundTimeIn = employeeRecord.timeInEvents.find(timeOut => timeOut.date == date);
  const workedHours = (foundTimeOut.hour - foundTimeIn.hour)/100;
  return workedHours;
}

function wagesEarnedOnDate(employeeRecord, date){
  return hoursWorkedOnDate(employeeRecord, date)*employeeRecord.payPerHour;
}

function allWagesFor(employeeRecord){
  let sumOfWages = 0;
  employeeRecord.timeInEvents.forEach(event=>{
    sumOfWages += wagesEarnedOnDate(employeeRecord, event.date);
  });
  return sumOfWages;
}

function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(employeeRecord => {
    if(employeeRecord.firstName == firstName) return true;
  })
}

function calculatePayroll(array){
  let sumOfPay = 0;
  array.forEach(employeeRecord => {
    sumOfPay += allWagesFor(employeeRecord);
  })
  return sumOfPay;
}
=======
// Your code here

function createEmployeeRecord(arrOfEmp) {
  
  const newEmployee = {
    firstName: arrOfEmp[0],
    familyName: arrOfEmp[1],
    title: arrOfEmp[2],
    payPerHour: arrOfEmp[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  
  return newEmployee;
}

function createEmployeeRecords(arrOfEmp){
  
  let newEmpList = [];
  arrOfEmp.forEach(newEmp => newEmpList.push(createEmployeeRecord(newEmp)));
  
  return newEmpList;
}

function createTimeInEvent(employeeRecord, date){
  date = date.split(" ");
  let newTimeIn = {
    type: "TimeIn",
    hour: parseInt(date[1]),
    date: date[0],
  }
  employeeRecord.timeInEvents.push(newTimeIn);
  return employeeRecord;
}

function createTimeOutEvent(employeeRecord, date){
  date = date.split(" ");
  let newTimeOut = {
    type: "TimeOut",
    hour: parseInt(date[1]),
    date: date[0],
  }
  employeeRecord.timeOutEvents.push(newTimeOut);
  return employeeRecord;
}

function hoursWorkedOnDate(employeeRecord, date){
  const foundTimeOut = employeeRecord.timeOutEvents.find(timeOut => timeOut.date == date);
  const foundTimeIn = employeeRecord.timeInEvents.find(timeOut => timeOut.date == date);
  const workedHours = (foundTimeOut.hour - foundTimeIn.hour)/100;
  return workedHours;
}

function wagesEarnedOnDate(employeeRecord, date){
  return hoursWorkedOnDate(employeeRecord, date)*employeeRecord.payPerHour;
}

function allWagesFor(employeeRecord){
  let sumOfWages = 0;
  employeeRecord.timeInEvents.forEach(event=>{
    sumOfWages += wagesEarnedOnDate(employeeRecord, event.date);
  });
  return sumOfWages;
}

function findEmployeeByFirstName(srcArray, firstName){
  return srcArray.find(employeeRecord => {
    if(employeeRecord.firstName == firstName) return true;
  })
}

function calculatePayroll(array){
  let sumOfPay = 0;
  array.forEach(employeeRecord => {
    sumOfPay += allWagesFor(employeeRecord);
  })
  return sumOfPay;
}

function createTimeOutEvent(empRecord, date) {
  
  let [date, time] = date.split(" ");
  
  const newTimeOut = {
    type: "TimeOut",
    date: dateTime[0],
    hour: parseInt(time)
  }
  
  empRecord.timeOutEvents.push(newTimeOut);
  return empRecord;

}


>>>>>>> d290b83b98f30c9b8f48a33291123c101f4d6353
