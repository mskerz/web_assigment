
// global variables
var loginAttempts = 3; // โอกาสในการ login ที่เราสามารถ login ได้อีก คือ 3 ครั้ง

        function LoginValidateForm() {
            //สร้างตัวแปร email , password เพื่อเก็บ อีเมลล์กับรหัสผ่าน  จาก ตัวselector ใน ฟอร์ม
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;

      
            // เช็ค email password ถูกต้องหรือไม่ userMail@gmail.com -userPassword
            if (email === "admin@user" && password === "1234") {
                 
                alert("Login Successful!");
                // เก็บค่า email ลง ใน session เพื่อแสดงผลในหน้าเว็บของ MainForm.html
                sessionStorage.setItem("email", email);
                return true;
            } else {
                // Failed login attempt
                    //ถ้าใส่ผิด โอกาสในการ login  จะลดลงทีละ 1 ครั้ง 
                loginAttempts--;

                if (loginAttempts > 0) { //เช็คว่า เราจะเหลือโอกาสในการ login อีกกี่ครั้ง (ที่มากกว่า 0 )
                    
                    alert("You have left " + loginAttempts + " attempt ");

                } else { // ถ้าหมดโอกาสในการ login (เหลือ 0 ครั้ง )  
                        // โดยช่อง Email และ password  และ  ปุ่ม log in จะถูกปิดการใช้งาน  ไม่สามารถใช้ได้
                    alert("Login failed! No more attempts left. Please Reload for Log In again.");
                    document.getElementById("email").disabled = true;
                    document.getElementById("password").disabled = true;
                    document.getElementById('login-btn').disabled = true;

                     
                    
                }
            }

            //ฟังก์ชันจะคืนค่า false เพื่อป้องกันการส่งฟอร์ม
            return false;
        }