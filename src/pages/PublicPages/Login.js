import React,{useState,useEffect} from 'react';


  
import { Magic } from 'magic-sdk';

// Create client-side Magic instance
const createMagic = (key) => typeof window != 'undefined' && new Magic(key);

 export const magic = createMagic('pk_live_07AEB06910FC35BA');

 const Login = () => {
  const [disabled, setDisabled] = useState(false);
  // const [user, setUser] = useContext(UserContext);

  // Redirect logged in users to /profile if trying to visit login page
  useEffect(() => {
    handleLoginWithEmail('testantier92@gmail.com')
  
  }, []);

  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      let didToken = await magic.auth.loginWithMagicLink({ email });
      console.log('didToken',didToken)

      // Validate didToken with server
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + didToken,
        },
      });

      if (res.status === 200) {
        let data = await res.json();
        // setUser(data.user);
        // Router.push('/profile');
      }
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  return(

    <>
  
    </>
  )
};


export default  Login;