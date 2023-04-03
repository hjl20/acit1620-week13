
const studentArr = []

const body = document.body;

const clickHandler = e => {
    if (e.target.nodeName == "BUTTON") {
        btn = e.target
        if (btn.id == "submit-btn") {
            
            const fNameInput = document.querySelector("#firstname")
            const lNameInput = document.querySelector("#lastname")
            const pNameInput = document.querySelector("#progname")

            isDuplicate = false
            for (s of studentArr) {
                if (s.firstName == fNameInput.value && s.lastName == lNameInput.value && s.progName == pNameInput.value) {
                    isDuplicate = true
                    console.log("DUPLICATE FOUND")
                    break
                }
            }
            
            if (!isDuplicate) {
                student = createStudent(fNameInput.value, lNameInput.value, pNameInput.value)
                studentArr.push(student)
                addStudentToList(student)
            } 

            fNameInput.value = ''
            lNameInput.value = ''
            pNameInput.value = ''


        }
        else if (btn.id == "changebgcolor-btn") {
            console.log("fads")
        }
    }
}

body.addEventListener("click", clickHandler)

const createStudent = (fName, lName, pName) => {

        student = {
            firstName: fName,
            lastName: lName,
            progName: pName
        }
    return student
}

const addStudentToList = newStudent => {
    newLi = document.createElement("li")
    newLi.appendChild(document.createTextNode(`${newStudent.firstName} ${newStudent.lastName}`))

    if (newStudent.progName.toUpperCase() == "CIT") {
        ul = document.querySelector("#cit-ul")
    }
    else if (newStudent.progName.toUpperCase() == "CST") {
        ul = document.querySelector("#cst-ul")
    }
    else {
        return -1
    }
    ul.appendChild(newLi)
}