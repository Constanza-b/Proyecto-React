import { render, screen } from "@testing-library/react"
import { MultipleCustomHook } from "../../src/03-examples/MultipleCustomHook"
import { useFetch } from "../../src/hooks";

jest.mock('../../src/hooks/useFetch');


describe('Pruebas en <MultipleCustomHook', () => { 

    test('Debe mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });
        
        render(<MultipleCustomHook/>);
        
        expect(screen.getByText('Cargando'));
        expect(screen.getByText('Información de Pokémon'));

        const nextButton = screen.getByRole('button',{name:'Anterior'});
    //    console.log(nextButton.disabled);
        expect(nextButton.disabled).toBeTruthy();
   
        // screen.debug();
    });

    // test('Debe mostrar un PokemonCard', () => { 

    //     useFetch.mockReturnValue({
    //         data: [{author: 'Cony'}],
    //         isLoading: false,
    //         hasError: null
    //     });

    //     render(<MultipleCustomHook/>);
    //     expect( screen.getByText('Cony')).toBeTruthy();
    //  })


 })