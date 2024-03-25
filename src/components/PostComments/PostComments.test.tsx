import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';


describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<Post/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('teste dois comentarios',() => {
        render(<PostComment/>);

        fireEvent.change(screen.getByTestId('área-do-comentário'),{
            target: {
                value: 'primeiro comentário adicionado testes',
            }
        });
        fireEvent.click(screen.getByTestId('button-do-comentário'));
        
        fireEvent.change(screen.getByTestId('área-do-comentário'),{
            target:{
                value:'segundo comentário ara o teste',
            }
        });
        fireEvent.click(screen.getByTestId('button-do-comentário'));

        
        expect(screen.getAllByTestId('comentários')).toHaveLength(2);
    })
});