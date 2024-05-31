
describe('Pruebas en <DemoComponent/>', () => { 

    test('Esta prueba no debe fallar',() => {

        //1. Inicialización
      const message1 = 'Hola mundo';
      
        //2. Estimulo
      const message2 = message1.trim();
      
        //3. Observar el comportamiento... esperado
      expect (message1).toBe(message2);
      
      })
 })

 describe('Pruebas en <DemoComponent2/>', () => { 

    test('Esta prueba no debe fallar',() => {

        //1. Inicialización
      const message1 = 'Hola mundo';
      
        //2. Estimulo
      const message2 = message1.trim();
      
        //3. Observar el comportamiento... esperado
      expect (message1).toBe(message2);
      
      })
 })
