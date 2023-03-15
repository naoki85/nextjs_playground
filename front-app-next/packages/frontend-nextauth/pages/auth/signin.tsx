import {NextPage} from "next";
import styles from './signin.module.scss';
import {FormEventHandler, useState} from "react";
import {signIn} from "next-auth/react";

interface Props {
}

const SignIn: NextPage = (props) => {
  const [userInfo, setUserInfo] = useState({email: '', password: ''});

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const res = await signIn('credentials', {
      email: userInfo.email, password: userInfo.password, redirect: false
    });
    console.log(res);
  }

  return (
    <div className={styles["sign-in-form"]}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type={"email"} value={userInfo.email}
               onChange={({target}) => setUserInfo({...userInfo, email: target.value})} placeholder={"email"}/>
        <input type={"password"} value={userInfo.password}
               onChange={({target}) => setUserInfo({...userInfo, password: target.value})} placeholder={"*******"}/>
        <input type={"submit"} placeholder={"Login"}/>
      </form>
    </div>
  )
}

export default SignIn