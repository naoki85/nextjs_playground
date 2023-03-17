import {useForm, SubmitHandler} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {signUp, User} from "../../../api";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<User>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<User> = async (data) => {
    await signUp(data);
    navigate("/home");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="firstName">
          性
          <input
            id="firstName"
            type="text"
            {...register("firstName", {required: true})}
          />
        </label>
        <p> {errors.firstName && "文字が入力されていません"}</p>
        <label htmlFor="lastName">名</label>
        <input
          id="lastName"
          type="text"
          {...register("lastName", {required: true})}
        />
        <p> {errors.lastName && "文字が入力されていません"}</p>
        <label htmlFor="email_register">Eメール</label>
        <input
          id="email_register"
          type="email"
          {...register("email", {required: true})}
        />
        <p> {errors.email && "文字が入力されていません"}</p>
        <label htmlFor="password_register">パスワード</label>
        <input
          id="password_register"
          type="password"
          {...register("password", {required: true})}
        />
        <p> {errors.password && "文字が入力されていません"}</p>
        <button type="submit">新規登録</button>
      </form>
    </div>
  )
}

export default Signup;
