import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import axios from 'axios'; 
import { useNavigate } from "react-router-dom";

export default function LoginForm() {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    //console.log(e);

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    const userInfo = {
      username: "kminchelle",
      password: "0lelplR"
    }

    axios.post('https://dummyjson.com/auth/login', formData)
      .then(function (response) {
        if (response.data.token) {

          localStorage.setItem('userInfo', JSON.stringify(response.data));
          navigate("/dashboard");
        }
        else{
          navigate("/login");
        }
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  {/*
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      //email: "newtesting@gmail.com",
      //password: "testing1234@"
      username: "kminchelle",
      password: "0lelplR"
    }
    axios.post("https://dummyjson.com/auth/login", data).then(response => {
      console.log(response.data)
    }).catch(e => {
      console.log(e)
    })
  }
  */}

  return (
    <>
      <form className="flex max-w-md flex-col gap-4" method='post' onSubmit={handleLogin}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput name="username" id="email1" type="username" placeholder="name@flowbite.com" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput name="password" id="password" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}
