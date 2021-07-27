// import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/users'
// https://jsonplaceholder.typicode.com/users
// https://scraping-wacor.herokuapp.com/
hoja = fetch(url,{method: 'GET'})
        .then(function(response){
            return response.json();})
        .then(function(data){
            document.write('<html lang="en">' + 
'<head>' +
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">' +
    '<title>Reporte Scraping</title>' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<link rel="icon" type="image/png" href="https://colorlib.com/etc/tb/Table_Responsive_v2/images/icons/favicon.ico">' +
    '<link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">' +
    '<link rel="stylesheet" type="text/css" href="./css/font-awesome.min.css">' +
    '<link rel="stylesheet" type="text/css" href="./css/animate.css">' +
    '<link rel="stylesheet" type="text/css" href="./css/select2.min.css">' +
    '<link rel="stylesheet" type="text/css" href="./css/perfect-scrollbar.css">' +
    '<link rel="stylesheet" type="text/css" href="./css/util.css">' +
    '<link rel="stylesheet" type="text/css" href="./css/main.css">' +
    '<meta name="robots" content="noindex, follow">' +
'</head>' +
'<body>' +
    '<div class="limiter">' +
        '<div class="container-table100">' +
            '<div class="wrap-table100">' +
                '<div class="table">' +
                    '<div class="row header">' +
                        '<div class="cell">' +
                            'Full Name' +
                        '</div>' +
                        '<div class="cell">' +
                            'User Name' +
                        '</div>' +
                        '<div class="cell">' +
                            'Email' +
                        '</div>' +
                        '<div class="cell">' +
                            'Phone Number' +
                        '</div>' +
                    '</div>')
            for (let i in data){
                document.write('<div class="row">' +
                    '<div class="cell" data-title="Full Name">' +
                    data[i]['name'] +
                    '</div>' +
                    '<div class="cell" data-title="UserName">' +
                    data[i]['username'] +
                    '</div>' +
                    '<div class="cell" data-title="Email">' +
                    data[i]['email'] +
                    '</div>' +
                    '<div class="cell" data-title="Phone">' +
                    data[i]['phone'] +
                    '</div>' +
                    '</div>')
            }
            console.log(data)
        });
