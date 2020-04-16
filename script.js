var size=5;

$(document).ready(function(){
    generateTable(1, size);

    $("#add").click(function(){
        size++;
        generateTable(size, size);
    });

    $("#reset").click(function(){
        size=5;
        window.location.reload();
    });

    $("#calc").click(function(){
       
    });
});

function generateTable(low, high){
    for(var i=low;i<=high;i++){
        $("tbody").append("<tr id =" +i + "></tr>");
        $("#" + i).append("<td>" + i + "</td>");
        $("#" + i).append("<td> <input type='number' min='0' step='any'> </td>");
        $("#" + i).append("<td> <input type='number' min='0' step='any'> </td>");
    }
}

function compute(){
    for(var i=0;i<size;i++){
        var grade=$("#" + i).children(".grade").text();
        var weight=$("#" + i).children(".weight").text();

        console.log(grade);
        console.log(weight);
    }
}
