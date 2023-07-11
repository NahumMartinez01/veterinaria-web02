import Swal from "sweetalert2";

const ENDPOINT = "http://localhost:8000/api";

export default function registerCustomer({
  name,
  lastname,
  dui,
  birthday,
  phone,
  email,
  password,
}) {
  return fetch(`${ENDPOINT}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      lastname,
      dui,
      birthday,
      phone,
      email,
      password,
    }),
  })
    .then((res) => {
      if (!res.status === 200) {
        throw new Error("Login failed");
      }

      Swal.fire({
        title: "Successfully",
        text: "Cliente agregada con exito",
        icon: "success",
      });

      return res.json();
    })
    .catch((err) => {
      return Swal.fire({
        title: "Error!",
        text: "Revise que los campos esten llenos",
        icon: "error",
      });
      console.log(err);
    });
}
