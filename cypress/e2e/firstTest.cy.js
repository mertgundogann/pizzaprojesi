describe('Formdosyasi Component', () => {
  beforeEach(() => {
    cy.visit('/siparis'); 
    cy.wait(1000); 
  });

  it('form duzgun calisiyormu?', () => {
    cy.get('h3.mainh3').should('have.text', 'Position Absolute Acı Pizza');
    cy.wait(500); 
    cy.get('span.fiyat').should('have.text', '85.50₺');
    cy.wait(500); 
    cy.get('input[name="boyut"]').should('have.length', 3); 
    cy.wait(500); 
    cy.get('input[type="text"]').should('have.value', ''); 
    cy.wait(500); 
  });

  it('- ve + butonaları düzgün çalışıyor mu ?', () => {
    cy.get('button').contains('+').click(); 
    cy.wait(1000); 
    cy.get('h4').contains('2'); 
    cy.wait(1000); 
    cy.get('.ordertext').should('contain', 'Toplam Fiyat: 171₺'); 
    cy.wait(1000); 
  
    cy.get('button').contains('-').click(); 
    cy.wait(1000); 
    cy.get('h4').contains('1'); 
    cy.wait(1000); 
    cy.get('.ordertext').should('contain', 'Toplam Fiyat: 85.5₺'); 
    cy.wait(1000); 

  });

  it('form boş iken submit edilmeye çalışılırsa hata mesajı', () => {
    cy.get('button[type="submit"]').click({ force: true }); 
    cy.get('.error').contains('İsim boş bırakılamaz!');
    cy.wait(1000); 
    cy.get('.error').contains('Boyut seçimi yapılmadı!');
    cy.wait(1000);
    cy.get('.error').contains('Hamur seçimi yapılmadı!');
    cy.wait(1000); 
  });
  
  
});
