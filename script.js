var size=0;

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
        $("#" + i).append("<td> <input type='text'class='grade"+i+"'> </td>");
        $("#" + i).append("<td> <input type='text'class='weight"+i+"'> </td>");
    }
}

function compute(){
    var finalGrade=0;
    var finalWeight=0;

    for(var i=1;i<=size;i++){
        var currWeight=$(".weight" +i).val();
        var currGrade=$(".grade" +i).val();

        console.log(currWeight);
        console.log(currGrade);

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
    var decimalCount=0;

    for(var i=0;i<input.length;i++){
        if(input[i]=="." && decimalCount==0){decimalCount++;}

        else if(input[i]=="." && decimalCount==1){return -1;}

        else if(!Number.isInteger(Number(input[i]))){return -1;}
    }

    if(Number(input)<0){
        return -1;
    }

    if(Number(input)>100){
        return -1;
    }

    return Number(input);
}
