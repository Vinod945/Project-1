function onFormSubmit() {
    var formData = readFormData();
    insertNewRecord(formData);
    resetForm();
}
function readFormData() {
    var formData = {}
    formData.name = document.getElementById("name").value;
    formData.textdata = document.getElementById("textdata").value;
    return formData;
}
function insertNewRecord(data) {
    var table= document.getElementById("blogList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length); 
    var cell1 = newRow.insertCell(0);           
    cell1.innerHTML = data.name
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.textdata
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = "<a href='#' onclick='onDelete(this)'>Delete</a>"
}
function onDelete(obj) {
    console.log(obj);
    var row = obj.parentElement.parentElement;
    document.getEelementById("blogList").deleteRow(row.rowIndex);
}
function resetForm() {
    document.getElementById("name").value="";
    document.getElementById("textdata").value="";

}