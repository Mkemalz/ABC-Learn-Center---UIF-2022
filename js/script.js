const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        Phone = document.getElementById('Phone').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase() &&
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if (!exist) {
        formData.unshift({ fname, lname, email, Phone });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
        document.location.href = "thankspage.html"
    }
    else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}
const signadd = e => {
    let fname = document.getElementById('fname1').value,
        lname = document.getElementById('lname1').value,
        email = document.getElementById('email1').value,
        Phone = document.getElementById('Phone1').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.fname.toLowerCase() == fname.toLowerCase() &&
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if (!exist) {
        formData.unshift({ fname, lname, email, Phone });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
       
    }
    else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already sigjned up");
    }
    e.preventDefault();
}





//////
$(document).ready(function () {
    let data = JSON.parse(localStorage.getItem("formData")) || [];
    function buildTable(data) {
        for (let i = 0; i < data.length; i++) {
            let row = `
                    <tr>
                        <td>${i + 1}</td>
                        <td class=\'data\'>${data[i].fname}</td>
                        <td class=\'data\'>${data[i].email}</td>
                        <td class=\'data\'>${data[i].lname}</td>
                        <td class=\'data\'>${data[i].Phone}</td>
                        <td>
                            <a class=\'edit\' href=\'${i}\'><i class="fa fa-edit" style="font-size:30px;color:green"></i></a>
                        </td>
                        <td>
                            <a class=\'delete\' href=\'${i}\'><i class="fa fa-trash-o" style="font-size:30px;color:red"></i></i></a>
                        </td>
                    </tr>
                `;


            $('#FormData').append(row);
        }
    }

    buildTable(data);

    $('.add').click(function(e){
        $('.card-content3').show();
        e.preventDefault();

       
    })
    $('.close').click(function(e){
        $('.card-content3').hide();
        e.preventDefault();
    })
   

    //Edit the data
    $('.edit').click(function (e) {
        e.preventDefault();
        let index = $(this).attr('href');
        let data = getCrudData();
        document.getElementById('fname').value = data[index].fname;
        document.getElementById('email').value = data[index].email;
        document.getElementById('lname').value = data[index].lname;
        document.getElementById('Phone').value = data[index].Phone;


        $('#formx').submit(function (e) {


            data[index].fname = $('#fname').val();
            data[index].email = $('#email').val();
            data[index].lname = $('#lname').val();
            data[index].Phone = $('#Phone').val();

            localStorage.setItem('formData', JSON.stringify(data));
            e.preventDefault();
            location.reload();

        })
    })
    function getCrudData() {
        let data = JSON.parse(localStorage.getItem("formData"));
        return data;
    }



    // delete Data

    $('.delete').click(function (e) {


        let conf = confirm("Are you sure want to delete this data?");
        let index = $(this).attr('href');


        if (conf === true) {
            data.splice(index, 1);
            localStorage.setItem('formData', JSON.stringify(data));
            $(this).removeAttr("href");
            e.preventDefault();
            location.reload();
        }
        else {
            e.preventDefault();
        }

    });

});
