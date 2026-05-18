import { render, screen, fireEvent } from '@testing-library/react'
import Collapse from './Collapse'

describe('Collapse', () => {
  it('affiche le titre passé en prop', () => {
    render(<Collapse titre="Fiabilité" contenu="Le texte" />)
    expect(screen.getByText('Fiabilité')).toBeInTheDocument()
  })

  it('affiche le contenu quand on clique', () => {
    render(<Collapse titre="Fiabilité" contenu="Le texte" />)
    fireEvent.click(screen.getByRole('button'))
    expect(screen.getByText('Le texte')).toBeInTheDocument()
  })
})