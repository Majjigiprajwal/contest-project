
const arr = [{ id: 1, name: "john", age: "18", profession: "developer" }, { id: 2, name: "jack", age: "20", profession: "developer" }, { id: 3, name: "karen", age: "19", profession: "admin" },{ id: 4, name: "Rohan", age:"20",profession: "admin"}]

const professionalList = document.getElementById('profession');


function changeAction1(){
    document.getElementById('filter').setAttribute("onclick","filterDeveloper()");
}

function changeAction2(){
    document.getElementById('filter').setAttribute('onclick','filterAdmin()');
}


function toggel() {
    professionalList.className = "professional";
}

const newArr1 = arr.filter(arrItem => {
       return arrItem.profession =='developer';
});
console.log(newArr1);

const newArr2 = arr.filter(arrItem => {
    return arrItem.profession =='admin';
});
console.log(newArr1);

function filterDeveloper(){
    for(let i=0;i<newArr1.length;i++){
        document.getElementById('result1').innerHTML=newArr1[i];
    }
}

function filterAdmin(){
    for(let i=0;i<newArr2.length;i++){
        document.getElementById('result1').innerHTML=newArr2[i];
    }
}





