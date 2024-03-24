import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useEffect } from 'react';
import axios from "axios"

export default function LoginForm() {

    const handleLogin = (event) =>{
        event.preventDefault();
        const data = {
            email:"newtesting@gmail.com",
            password:"testing1234@"
        }
        axios.post("https://e514-49-0-41-62.ngrok-free.app/api/login",data).then(response=>
        {
            console.log(response.data)
        }).catch(e=>{
            console.log(e)
        })
    }
  return (
    <>
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleLogin}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com"  />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password"  />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit" >Submit</Button>
    </form>
    </>
  );
}
