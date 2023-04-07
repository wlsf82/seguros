const fixture = require('../fixtures/profiSeguros')

describe('Seguros ABC', () => {
  fixture.forEach(({ profissao, seguros}) => {
    it(`seleciona a profissão "${profissao}" e verifica os seguros aplicáveis`, () => {
      // Arrange
      cy.visit('./src/index.html')

      // Act
      cy.get('#profissao').select(profissao)

      for (const [id, resultadoEsperado] of Object.entries(seguros)) {
        // Assert
        cy.get(`#${id}`).should(resultadoEsperado)
      }
    })
  })
})
