import axios from "axios";
import { useState } from "react";

const baseURL = "http://localhost:3333/usuarios";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(baseURL, {
        nombre: nombre,
        correo: correo,
        contraseña: contraseña
      });
      console.log("Usuario registrado:", response.data);
      
    } catch (error) {
      console.error("Error al registrar usuario:", error);
    }
  };

  return (
    <>
      <div className="bg-gray-200 flex min-h-screen">
        <div className="flex items-center">
          <div className="bg-white rounded-2xl border-stroke dark:border-white h-100 w-95 ml-40">
            <div className="xl:p-9.5">
              <h2 className="text-2xl text-center xl:h-15">Registrar User</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="w-full rounded-2xl border my-1 border-stroke dark:bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-input dark:focus:border-primary"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Correo"
                      className="w-full rounded-2xl border border-stroke dark:bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-input dark:focus:border-primary"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      className="w-full rounded-2xl border my-1 border-stroke dark:bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-input dark:focus:border-primary"
                      value={contraseña}
                      onChange={(e) => setContraseña(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Registrar"
                    className="w-full cursor-pointer rounded-3xl border bg-[#09AF37] p-3 text-white transition hover:opacity-90 my-3"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
