import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Formulario() {
  const [no, setNombre] = useState("");
  const [ap, setApellido] = useState("");
  const [doc, setDni] = useState("");
  const [co, setCorreo] = useState("");

  const datosLocalStorage = JSON.parse(localStorage.getItem("listaDatos"))||[];

  const [lista, setLista] = useState(datosLocalStorage);

  useEffect(()=>{
    localStorage.setItem("listaDatos",JSON.stringify(lista));
  },[lista]);

  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let dni = document.getElementById("dni");
  let correo = document.getElementById("mail");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      validarTexto(nombre.value, 2, 50) &&
      validarTexto(apellido.value, 2, 50) &&
      validarDni(dni.value) &&
      validarCorreo(correo.value)
    ) {
      const user = {
        Nombre: nombre.value,
        Apellido: apellido.value,
        DNI: dni.value,
        Correo: correo.value,
      };

      setLista([...lista,user]);

      alert("datos ingresados correctamente");
    } else {
      alert("dato/s ingresado/s erroneo/s");
    }

    setNombre("");
    setApellido("");
    setDni("");
    setCorreo("");
  };

  const validarTexto = (texto, min, max) => {
    if (texto.length < min && texto.length > max) {
      return false;
    } else {
      return true;
    }
  };

  const validarDni = (dni) => {
    if (dni.length < 8 || dni.length > 9) {
      return false;
    } else {
      const regex = /^[0-9]*$/;
      if (regex.test(dni)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const validarCorreo = (correo) => {
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (correo.length === 0) {
      return false;
    } else {
      if (regex.test(correo)) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <div className="row d-flex justify-content-center">
      <Form
        className="borderForm p-5 col-lg-8 col-md-8 col-sm-12 col-12"
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group md="4">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              id="nombre"
              minLength={2}
              placeholder="Ej: Sergio"
              value={no}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="4">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              id="apellido"
              minLength={2}
              placeholder="Ej: Ruiz"
              value={ap}
              onChange={(e) => setApellido(e.target.value)}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="6">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              type="text"
              id="dni"
              minLength={8}
              maxLength={9}
              placeholder="(Numeros sin puntos) Ej: 12345678"
              value={doc}
              onChange={(e) => setDni(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group md="6">
            <Form.Label>Mail</Form.Label>
            <Form.Control
              type="email"
              id="mail"
              placeholder="Ej: correo@correo.com"
              value={co}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-center">
          <Button type="submit" className="col-lg-3">
            Cargar
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Formulario;
