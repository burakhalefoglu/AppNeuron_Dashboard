

function On_MouseOver(id) {
                   
    Swal.fire({
    html: '<p id="messageid" style="color: white;"> white color <p>',  
    backdrop: false,
    showConfirmButton:false,
    background: '#3b3f5c',
    });

    Message(id);
}




function On_MouseOut() {

Swal.close()	

}



function Message(id){


    if(id=="Regression"){

        document.getElementById("messageid").innerHTML="id: Regression"

    }

    else if(id=="ZorlukDadagilimi"){
        
        document.getElementById("messageid").innerHTML="id: ZorlukDadagilimi"

    }
    else if(id=="zorlukDonut"){
        
        document.getElementById("messageid").innerHTML="id: zorlukDonut"

    }
    else if(id=="ZorlukReklam"){
        
        document.getElementById("messageid").innerHTML="id: ZorlukReklam"

    }
    else if(id=="Zorlukguc"){
        
        document.getElementById("messageid").innerHTML="id: Zorlukguc"

    }
    else if(id=="ZorlukOlme"){
        
        document.getElementById("messageid").innerHTML="id: ZorlukOlme"

    }
    else if(id=="zorlukBasarma"){
        
        document.getElementById("messageid").innerHTML="id: zorlukBasarma"

    }
    else if(id=="Churn"){
        
        document.getElementById("messageid").innerHTML="id: Churn"

    }
    else if(id=="oynamasuresi"){
        
        document.getElementById("messageid").innerHTML="id: oynamasuresi"

    }
    else if(id=="OrtalamaPuan"){
        
        document.getElementById("messageid").innerHTML="id: OrtalamaPuan"

    }


}