import { Link, useNavigate } from "react-router-dom";
import { validationloginSchema } from "../Schemas";
import { useFormik } from "formik";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/slices/Auth";
import { saveUserAndToken } from "../redux/slices/User";

interface initialValuestype {
  email: string;
  password: string;
}
const initialValues: initialValuestype = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const [
    newuser,
    { data: loginData, isError: isLoginError, isSuccess: isLoginSuccess },
  ] = useLoginMutation();

  useEffect(() => {
    if (isLoginError) {
      alert("Wrong Credentials");
    }

    if (isLoginSuccess) {
      console.log("user logged in successfully frontend");

      dispatch(saveUserAndToken(loginData));
      alert("User Logged In Successfully");
    }
  }, [isLoginSuccess, isLoginError]);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: validationloginSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        await newuser(values);
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm"></div>
      <div className="md:w-1/3 max-w-sm">
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Email Address"
          />
          <div className="text-red-500 text-xs mt-1">
            {errors.email && touched.email ? <p>{errors.email}</p> : null}
          </div>
          <input
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
          />

          <div className="text-red-500 text-xs mt-1">
            {errors.password && touched.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>
          <div className="text-center md:text-left">
            <button
              className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Already have an account?{" "}
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4"
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
