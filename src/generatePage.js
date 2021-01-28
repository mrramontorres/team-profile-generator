const index = require('index');

function generatePage(employeeList){
    if (typeof employeeList === 'object' && employeeList !== null) {
        return "success!"
    } else {
    return "fail"
    }
}

module.exports = generatePage