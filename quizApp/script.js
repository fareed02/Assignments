function registerForm(){
    event.preventDefault();
    var fullName =document.getElementById("fullName");
    var email =document.getElementById("email");
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var mobileNumber =document.getElementById("mobileNumber");
    var mobileRegex = /^(\+92|0|92)(3[0-9]{9}|[3456789][0-9]{8})$/;
    var password =document.getElementById("password");
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    var cpassword =document.getElementById("cpassword"); 

    if(fullName.value.trim()=== "") {
        Swal.fire({
            icon: 'error',
            title: 'Full name should not be empty',
          })} 

    else if (!emailRegex.test(email.value)) {
        Swal.fire({
            icon: 'error',
            title: `Email must be 
            Uppercase and lowercase letters (A-Z and a-z)
            Numeric characters (0-9)
            Special characters - ! # $ % & @ ' * + - / = ? ^ _  { | } ~`,
          })} 

          else if (!mobileRegex.test(mobileNumber.value)) {
            Swal.fire({
                icon: 'error',
                title: `Mobile number must be
                        Allow any integer at beginning 92 | +92 | 0092 | 0
                        Must be having 3
                        Allow any integers between 0-9 but of length 9`,
              })} 

              else if (!passwordRegex.test(password.value)) {
                Swal.fire({
                    icon: 'error',
                    title: `At least one uppercase letter (A-Z).
                            At least one lowercase letter (a-z).
                            At least one digit (0-9).
                            At least one special character from the set [@$!%*?&].
                            Minimum length of 8 characters.`,
                  })} 

                  else if (cpassword.value!== password.value) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Password should be same or not be empty',
                      })
                    } 

    else {
        Swal.fire({
            icon: 'success',
            title: `${fullName.value} registered successfully`,
            showConfirmButton: true,
          })   


          var userData = {
            fullName : fullName.value,
            email : email.value,
            mobileNumber : mobileNumber.value,
            password : password.value,
            confirmPassword : cpassword.value,
        }
    
        localStorage.setItem("userData", JSON.stringify(userData));

        setTimeout(() => {
        window.location.href = "./login.html"
            
        }, 1500);
        }

  

var getData = JSON.parse(localStorage.getItem("userData"));

console.log(getData);
}
 
registerForm();

function logIn() {
    event.preventDefault();
    var email =document.getElementById("email");
    var password =document.getElementById("password");
    var logInData = JSON.parse(localStorage.getItem("userData"));

    if(!logInData) {
        Swal.fire({
            icon: 'error',
            title: 'No user found.',
          })

          setTimeout(() => {
            window.location.href = "./form.html"
                
            }, 2000);
    }

    if(logInData.email !== email.value) {
        Swal.fire({
            icon: 'error',
            title: 'Invalid email.',
          })
    } 

    else if(logInData.password !== password.value) {
        Swal.fire({
            icon: 'error',
            title: 'Wrong password.',
          })
    }

    else {
        Swal.fire({
            icon: 'success',
            title: `${logInData.fullName} login successfully`,
            showConfirmButton: true,
          })  

          setTimeout(() => {
            window.location.href = "./index.html"
                
            }, 1500);
    }


}