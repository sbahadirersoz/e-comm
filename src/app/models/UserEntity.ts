export class UserEntity
{
  username: String;
  password:String;
  firstName:String;
  lastName:String;
  email : String;
  constructor(username: String, password: String, firstname:String, lastname:String, email:String)
  {
    this.username = username;
    this.password = password;
    this.firstName = firstname;
    this.lastName = lastname;
    this.email = email;
  }
}
