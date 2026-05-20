import { render, screen } from '@testing-library/react'
import Banner from '../src/components/Banner'

describe('Banner', () => {
  it('affiche le titre quand on le passe en prop', () => {
    render(<Banner title="Chez vous, partout et ailleurs" />)
    expect(screen.getByText('Chez vous, partout et ailleurs')).toBeInTheDocument()
  })

  it("n'affiche pas de titre quand on ne passe pas de prop", () => {
    render(<Banner />)
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})
