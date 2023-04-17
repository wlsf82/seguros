const fixtureFile = Cypress.env('profissao') ? Cypress.env('profissao') : 'arquiteta'
const fixture = require(`../fixtures/${fixtureFile}`)
const { profissao, seguros, termos } = fixture

describe('Seguros ABC', () => {
  it(`seleciona a profissão "${profissao}" e verifica os seguros aplicáveis`, () => {
    // Arrange
    cy.visit('./src/index.html')

    // Act
    cy.get('#profissao').select(profissao)

    for (const [id, resultadoEsperado] of Object.entries(seguros)) {
      // Assert
      cy.get(`#${id}`).should(resultadoEsperado)
    }

    // Act
    cy.contains('button', 'Próximo').click()

    // Assert
    cy.contains('h2', 'Termos').should('be.visible')

    for (const [seguro, resultadoEsperado] of Object.entries(termos)) {
      // Assert
      cy.contains('ul li', `Seguro do tipo: ${seguro} (aplicável)`).should(resultadoEsperado)
    }
  })
})
