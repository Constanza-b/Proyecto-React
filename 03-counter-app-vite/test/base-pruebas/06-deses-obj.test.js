import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruebas en 06-deses", () => {
  test("usContex debe retornar un objeto", () => {
    const persona = {
      nombre: "Constanza",
      edad: 30,
      clave: "Cony",
    };

    const testUsContext = ({ clave, nombre, edad, rango = "Capitán" }) => {
      return {
        nombreClave: clave,
        anios: edad,
        latlng: {
          lat: 14.1232,
          lng: -12.3232,
        },
      };
    };
    const user = usContext(persona);
    console.log(user);

    expect(testUsContext(persona)).toEqual(user);
  });
});
