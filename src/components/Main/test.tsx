import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
    it('should render the headling ',   () => {

        const { container } = render(<Main />)

       expect(
        screen.getAllByRole('heading', { name: /Teste/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()

    })

})