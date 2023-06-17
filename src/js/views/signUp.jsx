import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export const SignUp = () => {
  const { store, actions } = useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function getInvalidPasswordError(password) {
    if (!/(?=.*[a-z])/.test(password)) {
      return "Password should contain at least one lowercase letter.";
    }
    if (!/(?=.*[A-Z])/.test(password)) {
      return "Password should contain at least one uppercase letter.";
    }
    if (!/(?=.*\d)/.test(password)) {
      return "Password should contain at least one digit.";
    }
    if (!/(?=.*[@$!%*?&])/.test(password)) {
      return "Password should contain at least one special character.";
    }
    if (password.length < 8) {
      return "Password should have a minimum length of 8 characters.";
    }
    return null; // If no error is found, return null
  }
  const onSubmit = (data) => {
    console.log("Data", data);
    toast.success("Gracias, Tu cuenta ha sido registrada correctamente!"),
      { position: toast.POSITION.BOTTOM_CENTER };
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center bg-secondary">
      <h1 className="text-2xl font-bold">Join our caring community</h1>
      <form
        className="flex flex-col md:w-[50vw] w-full border p-6 gap-4 rounded"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-2">
          {/* ++++++++++nombre+++++++++++ */}
          <label className="label-text">Nombre</label>
          <input
            className={`input input-md input-bordered  ${
              errors.name ? "input-error" : ""
            }`}
            placeholder="Nombre"
            {...register(
              "name",
              //{ pattern: /^[A-Za-z-0-9]/i },
              //This is the validation
              {
                required: "Campo requerido.",
                maxLength: {
                  value: 20,
                  message: "El nombre no puede tener más de 20 carácteres.",
                },
              }
            )}
          />
          {errors?.name && (
            <span className="text-error">{errors.name.message}</span>
          )}

          {/* **********Cidudad********* */}
          <label className="label-text">Ciudad</label>
          <input
            className={`input input-md input-bordered  ${
              errors.city ? "input-error" : ""
            }`}
            placeholder="Cidudad"
            {...register("city", {
              required: true,
            })}
          />
          {errors.city && (
            <span className="text-error">Por favor, ingresa tu ciudad</span>
          )}

          {/* **********Email*************** */}
          <label className="label-text">Email</label>
          <input
            className={`input input-md input-bordered  ${
              errors.email ? "input-error" : ""
            }`}
            placeholder="Email"
            {...register("email", {
              //This is the validation
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          {errors.email?.type == "pattern" && (
            <span className="text-error">
              Por favor, ingresa un correo electrónico válido
            </span>
          )}
          {/* {*******password******} */}
          <label className="label-text">Contraseña</label>
          <input
            className={`input input-md input-bordered  ${
              errors.password ? "input-error" : ""
            }`}
            placeholder="Contraseña"
            {...register("password", {
              required: true,
              validate: getInvalidPasswordError,
            })}
          />
          {errors.password?.type == "validate" && (
            <span className="text-error">{errors.password.message}</span>
          )}
        </div>
        <input
          className="btn bg-primary text-white rounded w-fit place-self-center uppercase"
          type="submit"
          value="Publicar"
        />
        <ToastContainer></ToastContainer>
      </form>
    </div>
  );
};
