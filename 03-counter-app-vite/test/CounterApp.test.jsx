import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";



describe('Pruebas en <CounterApp />', () => { 

    const initialValue = 10;

    test('Debe hacer match con el Snapshot', () => { 

        const { container } = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();

     });

     test('Debe mostrar el valor inicial de 100 <CounterApp value={100}>', () => { 

        render(<CounterApp value={100} />);
        expect(screen.getByText(100)).toBeTruthy();

      });

      test('Debe incrementar con el botón +1', () => { 

        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
       });

       test('Debe decrementar con el botón -1', () => { 

        render(<CounterApp value={initialValue} />);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('9')).toBeTruthy();
       });

       test('Debe funcionar el botón de reset', () => { 

        render(<CounterApp value={355} />);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('Reset'));
        screen.debug();
        // fireEvent.click(screen.getByRole('button', { name: 'btn-reset'}));
        // expect(screen.getByText(355)).toBeTruthy();
       });
 });