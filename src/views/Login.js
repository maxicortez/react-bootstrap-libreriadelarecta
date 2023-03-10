import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import { login } from "../functions/auth";

const Login = () => {
    const [_usuario, setUsuario] = useState("");
    const [_clave, setClave] = useState("");
    const { user, iniciarSession } = useContext(UserContext);

    if (user != null) {
        return <Navigate to="/" />;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userLogin = await login(_usuario, _clave);
        if (userLogin.error) {
            if (userLogin.error.response) {
                Swal.fire("Opps!", userLogin.error.response.data.message, "error");
                return;
            }
            Swal.fire("Opps!", userLogin.error.message, "error");
            return;
        }
        iniciarSession(userLogin.data);

        // let request = {
        //     username: _usuario,
        //     password: _clave,
        // };

        // fetch("api/session/Login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json;charset=utf-8",
        //     },
        //     body: JSON.stringify(request),
        // })
        //     .then((response) => {
        //         return response.ok ? response.json() : Promise.reject(response);
        //     })
        //     .then((dataJson) => {
        //         if (dataJson.idUsuario == 0) {
        //             Swal.fire("Opps!", "No se encontro el usuario", "error");
        //         } else {
        //             iniciarSession(dataJson);
        //         }
        //     })
        //     .catch((error) => {
        //         Swal.fire("Opps!", "No se pudo iniciar sessión", "error");
        //     });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-12 col-md-9">
                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4">Bienvenido</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-user"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Nombre de usuario"
                                                    value={_usuario}
                                                    onChange={(e) => setUsuario(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="password" className="form-control form-control-user" placeholder="Contraseña" value={_clave} onChange={(e) => setClave(e.target.value)} />
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-user btn-block">
                                                {" "}
                                                Ingresar{" "}
                                            </button>
                                        </form>
                                        <hr></hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
