var size=6;

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
        if(size==0){alert("Add rows to calculate your grade!")}

        else{
            var lastChild=$("#container").children().last();

            if(lastChild.text()!="Calculate Grade"){lastChild.remove();}

            var result=compute();

            var output;

            if(result==-1){
                output="All the grades and weights must be a number between 0 and 100.";
            }
            
            else{
                output="Your final grade is "+ result;
            }

            $("#container").append("<h1>"+output+"</h1>");
        }
    });
});

function generateTable(low, high){
    for(var i=low;i<=high;i++){
        $("tbody").append("<tr id =" +i + "></tr>");
        $("#" + i).append("<td>" + i + "</td>");
        $("#" + i).append("<td> <input type='number'class='grade"+i+"' min='0' step='any'> </td>");
        $("#" + i).append("<td> <input type='number'class='weight"+i+"'min='0' step='any'> </td>");
    }
}

function compute(){
    var finalGrade=0;
    var finalWeight=0;

    for(var i=1;i<=size;i++){
        var currWeight=$(".weight" +i).val();
        var currGrade=$(".grade" +i).val();

        currWeight=validate(currWeight)/100;
        currGrade=validate(currGrade);

        if(currWeight<0 || currGrade<0){return -1;}

        finalWeight+=currWeight;
        finalGrade+=currGrade*currWeight;
    }

    if(finalWeight==0){return finalGrade.toFixed(2);}

    return (finalGrade/finalWeight).toFixed(2);
}


function validate(input){
    if(Number(input)==false && input!=0){
        return -1;
    }

    if(Number(input)<0){
        return -1;
    }

    if(Number(input)>100){
        return -1;
    }

    return Number(input);
}
