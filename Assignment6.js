function CreateCustomer() {
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer";

    //Collect Customer data from web page
    var customerid = document.getElementById("custid").value;
    var customername = document.getElementById("custname").value;

    //Create the parameter string
    var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '" }';

    //Checking for AJAX operation return
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
        }
    }
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function OperationResult(output1)
{
    if (output1.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
}

function DeleteCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url += document.getElementById("delcustid").value;

    //Checking for AJAX operation return
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var result2 = JSON.parse(objRequest.responseText);
            OperationResultDel(result2);
        }
    }
    //Start AJAX request
    objRequest.open("GET", url, true);
    //objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send();
}

function OperationResultDel(result)
{
    if (result.DeleteCustomerResult.WasSuccessful == 1) {
        document.getElementById("resultdel").innerHTML = "The operation was successful!"
    }
    else
    {
        document.getElementById("resultdel").innerHTML = "The operation was not successful!" + "<br>" + result.DeleteCustomerResult.Exception;
    }
    
}

function UpdateAddress() {
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress";

    //Collect Customer data from web page
    var ordernumber = document.getElementById("ordernum").value;
    var shippingname = document.getElementById("shipname").value;
    var shippingaddress = document.getElementById("shipaddress").value;
    var shippingcity = document.getElementById("shipcity").value;
    var shippingpostcode = document.getElementById("shippostcode").value;
            

    //Create the parameter string
    var newaddress = '{"OrderID":"' + ordernumber +  '","ShipAddress":"' + shippingaddress + '","ShipName":"' + shippingname + 
                        '","ShipCity":"' + shippingcity + '","ShipPostcode":"' + shippingpostcode + '"}';
    
    //Checking for AJAX operation return
    objRequest.onreadystatechange = function() {
        if (objRequest.readyState == 4 && objRequest.status == 200) {
            var result = JSON.parse(objRequest.responseText);
            OperationResultUp(result);
        }
    }
    //Start AJAX request
    objRequest.open("POST", url, true);
    objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    objRequest.send(newaddress);
}

function OperationResultUp(updatestatus)
{
    if (updatestatus.WasSuccessful == 1)
    {
        document.getElementById("resultupdate").innerHTML = "The operation was successful!"
    }
    else if (updatestatus.WasSuccessful == 0)
    {
        document.getElementById("resultupdate").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;
    }
    else if (updatestatus.WasSuccessful == -2)
    {
      document.getElementById("resultupdate").innerHTML = "Operation failed because the data string supplied could not be deserialized into the service object"
    }
    else (updatestatus.WasSuccessful == -3)
    {
        document.getElementById("resultupdate").innerHTML = "Operation failed because a record with the supplied Order ID could not be found"
    }
}

function ShowMe()
{
   if (selectsec.value == "0")
    {
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
    }
    
    if (selectsec.value == "1")
    {
        document.getElementById("createsec").style.visibility = 'visible';
        document.getElementById("createsec").style.display = '';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = '';
    }
    else
    {
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = '';
        
    }
    
    
    if (selectsec.value == "2")
    {
        //deletesec.style.visibility = 'visible';
        document.getElementById("deletesec").style.visibility = 'visible';
        document.getElementById("deletesec").style.display = '';
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = 'none';
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
    }
    else
    {
        //deletesec.style.visibility = 'hidden';
        //deletesec.style.display = 'none';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = '';
        
    }
    
    if (selectsec.value == "3")
    {
        document.getElementById("updatesec").style.visibility = 'visible';
        document.getElementById("updatesec").style.display = '';
        document.getElementById("createsec").style.visibility = 'hidden';
        document.getElementById("createsec").style.display = 'none';
        document.getElementById("deletesec").style.visibility = 'hidden';
        document.getElementById("deletesec").style.display = 'none';
    }
    else
    {
        document.getElementById("updatesec").style.visibility = 'hidden';
        document.getElementById("updatesec").style.display = '';
    }
}
