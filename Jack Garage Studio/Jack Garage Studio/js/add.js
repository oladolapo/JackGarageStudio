// let garage=[];

console.log("Connected");
/*Step-1*/ 
class Vehicle
{
    constructor(vehicle)
    {
        this.vehicle=vehicle;
    }
}
class Garage extends Vehicle{
    
    constructor(vehicle,reg_no,vehicle_make,vehicle_model,year)
    {
        super(vehicle);
        this.reg_no=this.reg_no;
        this.vehicle_make=vehicle_make;
        this.model=vehicle_model;
        this.year=year;
    }
}
/*Step-2*/ 

document.addEventListener('DOMContentLoaded',()=>
{
    document.getElementById('Add').addEventListener('click', addGarage);//adduser
    document.getElementById('Display').addEventListener('click',displayTable);//displaytable
});

/*Step-4*/

function validate(vehicle,reg_no,make,_model,year)
{
    var regName=/^[a-zA-Z]+$/;
    if(vehicle==""||reg_no==""||vehicle_make==""||vehicle_model==""||year=="")
    {
        alert("Please enter all values");
        return false;
    }
    else if(!regName.test(reg_no))   
    {
        alert("Please enter a valid number");
        return false;
    }
    else if(make<=0)
    {
        alert("Please enter a valid make");
        return false;
    }
    else{
        return true;
    }
}

/*Step-5*/
function resetForm(_params)
{
    document.getElementById('vehicle').value="";
    document.getElementById('reg_no').value="";
    document.getElementById('vehicle_make').value="";
    document.getElementById('vehicle_model').value="";
    document.getElementById('year').value="";
}

let Garage=[];

/*Step-3*/ 
const addGarage=(ev)=>{
    ev.preventDefault();
    var vehicle=document.getElementById('vehicle').value;
    var reg_no=document.getElementById('reg_no').value;
    var vehicle_model=document.getElementById('vehicle_make').value;
    var vehicle_model=document.getElementById('vehicle_model').value;
    var year=document.getElementById('year').value;
    console.log(vehicle,reg_no,vehicle_make,vehicle_model,year);

    if(validate(vehicle,reg_no,vehicle_make,vehicle_model,year))
    {
        const u=new Garage(vehicle,reg_no,vehicle_make,vehicle_model,year);
        users.push(u);
        console.log(Garage);
        resetForm();
    }
}

/*Step-6*/

const displayTable=(ev)=>
{
    ev.preventDefault();
    var tableParent=document.getElementById('table');
    tableParent.innerHTML="";
    var table=document.createElement('table');
    table.border="1";

    tableParent.appendChild(table);
    for(var i=0;i<garage.length;i++)
    {
       var row=`<tr>
            <td>${users[i].vehicle}</td>
            <td>${users[i].reg_no}</td>
            <td>${users[i].vehicle_make}</td>
            <td>${users[i].vehicle_model}</td>
            <td>${users[i].year}</td>
       </tr>
       `
       table.innerHTML+=row
    }
}