import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'
interface Props {
    children: React.ReactNode;
}
const AuthChecker = ({ children } : Props ) => {
    const navigate = useNavigate();
    //This will just check to see if the user is logged in, if so, it returns the children
    //(which are passed as props - it's just whatever component is either protected
    //or not)
    //otherwise it sends them to the login route
    useEffect(() => {
        if (auth.currentUser) {
            navigate('../');
            signInWithPopup(auth, Providers.google);
        }
    }, [])
    //If empty array is not passed as a second argument in then UseEffect will happen constantly
    //every time that any component that has this AuthChecker renders
    //it will run and try to log them in, this makes it run only once
  return (
    <>{ children }</>
  )
}
export default AuthChecker