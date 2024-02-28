var container=document.createElement("div");
container.className="container";

var row_1=document.createElement("div");
row_1.className="row";

var col_1=document.createElement("div");
col_1.className="col-md-4";

var head_1=document.createElement("h2");
head_1.innerHTML="Form Submission:";

var form=document.createElement("form");
form.id="myForm"

function label_create(tagname,attrname,attrvalue,content){
var label=document.createElement(tagname);
label.setAttribute(attrname,attrvalue);
label.innerHTML=content;
return (label);
}

function break_create(tagname){
    var break_cr=document.createElement(tagname);
    return (break_cr);
}

function input_create(tagname,attrname,attrvalue,attr1name,attr1value,attr2name,attr2value){
    var input=document.createElement(tagname);
    input.setAttribute(attrname,attrvalue);
    input.setAttribute(attr1name,attr1value);
    input.setAttribute(attr2name,attr2value);
    return (input);
}

function input_create_2(tagname,attrname,attrvalue,attr1name,attr1value,attr2name,attr2value,attr3name,attr3value){
    var input=document.createElement(tagname);
    input.setAttribute(attrname,attrvalue);
    input.setAttribute(attr1name,attr1value);
    input.setAttribute(attr2name,attr2value);
    input.setAttribute(attr3name,attr3value);
    return (input);
}

function button_create(tagname,attr1name,attr1value,attr2name,attr2value,content1,content2){
    var button = document.createElement(tagname);
    button.setAttribute(attr1name,attr1value);
    button.setAttribute(attr2name,attr2value);
    button.className=content1;
    button.innerHTML=content2;
    return button;
}

var firstname_label=label_create("label","for","firstname","First Name:");
var firstname_label_break=break_create("br");
var firstname_input=input_create("input","type","text","id","firstname","placeholder","First Name");
var firstname_input_break=break_create("br");

var lastname_label=label_create("label","for","lastname","Last Name:");
var lastname_label_break=break_create("br");
var lastname_input=input_create("input","type","text","id","lastname","placeholder","Last Name");
var lastname_input_break=break_create("br");

var address_line_1=label_create("label","for","addressline1","Address Line 1:");
var address_line_1_break=break_create("br");
var address_line_1_input=input_create("input","type","text","id","addressline1","placeholder","Address Line 1");
var address_line_1_input_break=break_create("br");

var address_line_2=label_create("label","for","addressline2","Address Line 2:");
var address_line_2_break=break_create("br");
var address_line_2_input=input_create("input","type","text","id","addressline2","placeholder","Address Line 2");
var address_line_2_input_break=break_create("br");

var pin=label_create("label","for","pin","Pincode:");
var pin_label_break=break_create("br");
var pin_input=input_create("input","type","number","id","pin","placeholder","Pincode");
var pin_input_break=break_create("br");

var gender=label_create("label","for","gender","Gender:");
var gender_label_break=break_create("br");

var male_input=input_create_2("input","type","radio","id","male","name","gender","value","Male");
var male=label_create("label","for","male","Male");

var female_input=input_create_2("input","type","radio","id","female","name","gender","value","Female");
var female=label_create("label","for","female","Female");
var female_input_break=break_create("br");

var food=label_create("label","for","food","Choice of Food <span>(Must choose atleast 2 out of 5 options)</span>");
var food_label_break=break_create("br");

var northindian_input=input_create_2("input","type","checkbox","id","northindian","name","Food","value","northindian");
var northindian_label=label_create("label","for","northindian","North Indian");
var northindian_input_break=break_create("br");

var southindian_input=input_create_2("input","type","checkbox","id","southindian","name","Food","value","southindian");
var southindian_label=label_create("label","for","southindian","South Indian");
var southindian_input_break=break_create("br");

var chinese_input=input_create_2("input","type","checkbox","id","chinese","name","Food","value","chinese");
var chinese_label=label_create("label","for","chinese","Chinese");
var chinese_input_break=break_create("br");

var japanese_input=input_create_2("input","type","checkbox","id","japanese","name","Food","value","japanese");
var japanese_label=label_create("label","for","japanese","Japanese");
var japanese_input_break=break_create("br");

var seafood_input=input_create_2("input","type","checkbox","id","seafood","name","Food","value","seafood");
var seafood_label=label_create("label","for","seafood","Sea Food");
var seafood_input_break=break_create("br");

var state_label=label_create("label","for","state","State:");
var state_label_break=break_create("br");
var state_input=input_create("input","type","text","id","state","placeholder","State");
var state_input_break=break_create("br");

var country_label=label_create("label","for","country","Country:");
var country_label_break=break_create("br");
var country_input=input_create("input","type","text","id","country","placeholder","Country");
var country_input_break=break_create("br");

var button_input=button_create("button","type","button","onclick","foo()","btn btn-secondary","Submit");
var button_input_break=break_create("br");

form.append(head_1,firstname_label,firstname_label_break,firstname_input,firstname_input_break,lastname_label,lastname_label_break,lastname_input,lastname_input_break,address_line_1,address_line_1_break,address_line_1_input,address_line_1_input_break,address_line_2,address_line_2_break,address_line_2_input,address_line_2_input_break,pin,pin_label_break,pin_input,pin_input_break,gender,gender_label_break,male_input,male,female_input,female,female_input_break,food,food_label_break,northindian_input,northindian_label,northindian_input_break,southindian_input,southindian_label,southindian_input_break,chinese_input,chinese_label,chinese_input_break,japanese_input,japanese_label,japanese_input_break,seafood_input,seafood_label,seafood_input_break,state_label,state_label_break,state_input,state_input_break,country_label,country_label_break,country_input,country_input_break,button_input,button_input_break)

col_1.append(form)
row_1.append(col_1);
container.append(row_1);
document.body.append(container);

var col_2=document.createElement("div");
col_2.className="col-md-8"

var head_2=document.createElement("h2");
head_2.innerHTML="Temporary Database";

col_2.append(head_2)

var table=document.createElement("table");
table.className="table"

var thead=document.createElement("thead");
thead.className="thead-dark"

function row(){
var row=document.createElement("tr");
return row;
}

var th_row=row();

function th_create(tagname,attrname,attrvalue,content){
var th=document.createElement(tagname);
th.setAttribute(attrname,attrvalue);
th.innerHTML=content;
return th;
}

var th1=th_create("th","scope","col","First Name")
var th2=th_create("th","scope","col","Last Name")
var th3=th_create("th","scope","col","Address")
var th4=th_create("th","scope","col","Pincode")
var th5=th_create("th","scope","col","Gender")
var th6=th_create("th","scope","col","Food")
var th7=th_create("th","scope","col","State")
var th8=th_create("th","scope","col","Country")

th_row.append(th1,th2,th3,th4,th5,th6,th7,th8)
thead.append(th_row)
table.append(thead)

col_2.append(table)
row_1.append(col_2);
container.append(row_1);
document.body.append(container);

var tbody=document.createElement("tbody");
var body_row=row();

function foo(){
    
var td1=document.createElement("td");
td1.innerHTML=document.getElementById("firstname").value;

var td2=document.createElement("td");
td2.innerHTML=document.getElementById("lastname").value;

var td3=document.createElement("td");
var value1=document.getElementById("addressline1").value;
var value2=document.getElementById("addressline2").value;
td3.innerHTML=value1 + " " + value2;

var td4=document.createElement("td");
td4.innerHTML=document.getElementById("pin").value;

var td5=document.createElement("td");
td5.innerHTML=document.querySelector('input[name="gender"]:checked').value;

var td6=document.createElement("td");
var checkbox = document.getElementsByName("Food");
var select = [];
for (var i=0; i<checkbox.length; i++) {
    if (checkbox[i].checked) {
        select.push(checkbox[i].value);
    }
}
td6.innerHTML=select;

var td7=document.createElement("td");
td7.innerHTML=document.getElementById("state").value;

var td8=document.createElement("td");
td8.innerHTML=document.getElementById("country").value;

body_row.append(td1,td2,td3,td4,td5,td6,td7,td8);
tbody.append(body_row);
table.append(tbody)

col_2.append(table)
row_1.append(col_2);
container.append(row_1);
document.body.append(container);

document.getElementById("myForm").reset();

}