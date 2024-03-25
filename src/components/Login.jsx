import axios from 'axios'

export default function Login() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();
  
      // Read the form data
      const form = e.target;
      const formData = new FormData(form);
  
      // You can pass formData as a fetch body directly:
      //fetch('https://e514-49-0-41-62.ngrok-free.app/api/login', { method: form.method, body: formData });
        
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    
        axios.post("https://e514-49-0-41-62.ngrok-free.app/api/login",formJson).then(response=>
        {
            console.log(response)
        }).catch(e=>{
            console.log(e)
        })

      // Or you can work with it as a plain object:
      //const formJson = Object.fromEntries(formData.entries());
      //console.log(formJson);
    }
  
    return (
      <form method="post" onSubmit={handleSubmit}>
        <label>
          Email: <input name="email" defaultValue="newtesting@gmail.com" />
        </label>
     
        <label>
          Password: <input type="password" name="password"  defaultValue="testing1234@" />
        </label> 
         
       
         
        <button type="submit">Submit form</button>
      </form>
    );
  }
  