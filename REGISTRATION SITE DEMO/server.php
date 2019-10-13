<?php

session_start();

//initializing variable

$username = "";
$email = "";

//connect to db

$db = mysqli_connect('localhost','root','','practice') or die("could not connect to database");

//register users
$username = mysqli_real_escape_string($db, $_POST['username']);
$email = mysqli_real_escape_string($db, $_POST['email']);
$password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
$password_2 = mysqli_real_escape_string($db, $_POST['password_2']);

//form validation

if(empty($username) {array_push($errors, "Username is recqiuired")});
if(empty($email) {array_push($errors, "Email is recqiuired")});
if(empty($password_1) {array_push($errors, "password is recqiuired")});
if(empty($password_1 != $password_2) {array_push($errors, "Pasword does not match")});

//check db for existing user with same user name

$user_check_query = "SELECT * FROM user WHERE username = '$username or email = '$email' LIMIT 1;";  
$results = mysqli_query($db, $user_check_query);
$user = mysqli_fetch_assoc($result);

if($user) {
    if($user['userrname'] === $username){array_push(errors, "Username Already Exists");}
    if($user['email'] === $email){array_push(errors, "This email id has a registered username");}    
}
// register the user if no error

IF(count(errors)==0){
    $password = md5(password_1);// this will encrpt password
    $$query = "INSERT INTO user(username, email,password) VALUES ('$username', '$email', '$password')";
    mysqli_query($db,$query);
    
    $_SESSION['username'] = $username;
    $_SESSION['success'] = "you are now logged on";
    header('location: index.php');
}


//LOGIN USER

if(isset($_POST['login_user'])){
    
    $username = mysqli_real_escape_string($db, $_POST['username']);
     $password = mysqli_real_escape_string($db, $_POST['password_1']);
    
    if(empty($username)){
        
        array_push($errors, "Username is recquired");
    }
    if(empty($password)){
        
        array_push($errors, "Password is recquired");
}

if(count($errors) == 0) {
    
    $password = md5($password);
    
    $query ="SELECT * FROM user WHERE username ='$username' AND password='$password'";
    $results= mysqli_query($db, $query);
    
    if(mysqli_num_results($results)) {
    
    $_SESSION['username'] = $username;
    $_SESSION['success'] = "Login succesful";
    header('location: index.php');   
    }else{
        array_push($error, "Wrong username or password combination. please try again")
    }
    
}
    
}

?>
//@RICKSWORDFIRE2023