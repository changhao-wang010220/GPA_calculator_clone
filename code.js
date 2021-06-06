index = 0;
numOfRows = 0
a = [];
const grades = '<option value="4">A+(90-100)</option>'
        +'<option value="4">A(85-89)</option>'
        +'<option value="3.7">A-(80-84)</option>'
        +'<option value="3.3">B+(77-79)</option>'
        +'<option value="3.0">B(73-76)</option>'
        +'<option value="2.7">B-(70-72)</option>'
        +'<option value="2.3">C+(67-69)</option>'
        +'<option value="2.0">C(63-66)</option>'
        +'<option value="1.7">C-(60-62)</option>'
        +'<option value="1.3">D+(57-59)</option>'
        +'<option value="1.0">D+(53-56)</option>'
        +'<option value="0.7">D-(50-52)</option>'
        +'<option value="0">F(0-49)</option>';




(function(){
    let chart = document.querySelector(".chart");
    window.onload = () => {

        function createRow(){
            "use strict";
            
            let chart = document.querySelector(".chart");
            let row = document.createElement('div');
            let course = document.createElement('div');
            let weight = document.createElement('div');
            let grade = document.createElement('div');
            let del = document.createElement('button');
            let clear = document.createElement('button');
        
            let courseIpt = document.createElement('input');
            let weightIpt = document.createElement('input');
            let gradeIpt = document.createElement('select');
        
            row.setAttribute("class", "row");
            row.setAttribute("id", "row"+index);
        
            courseIpt.setAttribute("id", "courseIpt"+index);
            course.setAttribute("class", "course");
            courseIpt.setAttribute("placeholder", "Course Name");
            weightIpt.setAttribute("id", "weightIpt"+index);
            weight.setAttribute("class", "weight");
            weightIpt.setAttribute("value", "0.5");
            gradeIpt.setAttribute("id", "gradeIpt"+index);
            grade.setAttribute("class", "grade");
            gradeIpt.innerHTML = grades;
            del.setAttribute("class", "smallBtn");
            clear.setAttribute("class", "smallBtn");
            del.setAttribute("id", "del"+index);
            clear.setAttribute("id", "cl"+index);
        
            del.innerHTML = "D";
            clear.innerHTML = "C";
        
            course.appendChild(courseIpt);
            weight.appendChild(weightIpt);
            grade.appendChild(gradeIpt);
        
            row.appendChild(course);
            row.appendChild(weight);
            row.appendChild(grade);
            
            row.appendChild(clear);
            row.appendChild(del);
            chart.appendChild(row);
            a.push(row);
        
            numOfRows++;
            index++;
        
            del.addEventListener("click", () => {
                row.remove();
                numOfRows--;
            });
            clear.addEventListener("click", () => {
                courseIpt.value = "";
                weightIpt.value = "0.5";
            });
            
            
        }
        
        // function deleteArow(id){
        //     let elm = document.querySelector("#"+id);
        //     let del = elm.parentNode;
        //     // let perent = del.parentNode;
        //     // perent.removeChild(del);
        //     del.remove();
        //     numOfRows--;
        // }

        document.querySelector("#add").addEventListener("click", () => {
            createRow();
        })
        document.querySelector("#calculate").addEventListener("click", () => {
            let sum = 0;
            let weightCount = 0;
            for(i = 0; i < index; i++) {
                if(document.querySelector("#gradeIpt"+i) == null){
                    continue;
                }else {
                    weightCount += Number(document.querySelector("#weightIpt"+i).value) * 2;
                    sum = sum + Number(document.querySelector("#weightIpt"+i).value) * Number(document.querySelector("#gradeIpt"+i).value) * 2;
                }
            }
            if(weightCount == 0){
                document.querySelector("#ans").innerHTML = "0.00";
            }else{
                document.querySelector("#ans").innerHTML = ((sum / weightCount).toFixed(2));
            }
            
        })
        document.querySelector("#clear").addEventListener("click", () => {
            for(i = 0; i < index; i++){
                a[i].remove();
                numOfRows--;
            }
        })
    }
}())

// (function(){
//     window.onload = () => {
//         document.querySelector("#clear").addEventListener("click", () => {
//             alert("aaaa");
//         })
//     }
// }())
