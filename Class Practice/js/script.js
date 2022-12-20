console.log("Connected");
/*Step-1*/ 
class City
{
    constructor(city)
    {
        this.city=city;
    }
}
class User extends City{
    constructor(city,name,technology,experience,designation)
    {
        super(city);
        this.name=name;
        this.technology=technology;
        this.experience=experience;
        this.designation=designation;
    }
}
/*Step-2*/ 

document.addEventListener('DOMContentLoaded',()=>
{
    document.getElementById('Add').addEventListener('click', addUser);
    document.getElementById('Display').addEventListener('click',displayTable);
});

/*Step-4*/

function validate(city,name,technology,experience,designation)
{
    var regName=/^[a-zA-Z]+$/;
    if(city==""||name==""||technology==""||experience==""||designation=="")
    {
        alert("Please enter all values");
        return false;
    }
    else if(!regName.test(name))   /*The test() method tests for a match in a string. If it finds a match, it returns true, otherwise it returns false.*/ 
    {
        alert("Please enter a valid name");
        return false;
    }
    else if(experience<=0)
    {
        alert("Please enter a valid experience");
        return false;
    }
    else{
        return true;
    }
}

/*Step-5*/
function resetForm(params)
{
    document.getElementById('city').value="";
    document.getElementById('name').value="";
    document.getElementById('technology').value="";
    document.getElementById('experience').value="";
    document.getElementById('designation').value="";
}

var users=[];

/*Step-3*/ 
const addUser=(ev)=>{
    ev.preventDefault();
    var city=document.getElementById('city').value;
    var name=document.getElementById('name').value;
    var technology=document.getElementById('technology').value;
    var experience=document.getElementById('experience').value;
    var designation=document.getElementById('designation').value;
    console.log(city,name,technology,experience,designation);

    if(validate(city,name,technology,experience,designation))
    {
        const u=new User(city,name,technology,experience,designation);
        users.push(u);
        console.log(users);
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
    for(var i=0;i<users.length;i++)
    {
       var row=`<tr>
            <td>${users[i].city}</td>
            <td>${users[i].name}</td>
            <td>${users[i].technology}</td>
            <td>${users[i].experience}</td>
            <td>${users[i].designation}</td>
       </tr>
       `
       table.innerHTML+=row
    }
}