import loginPage from "../support/page/loginPage"
const cypress = require("cypress")
describe('Login Module', () => {
  const loginPage = new loginPage;
  beforeEach(function(){
        cy.visit(`${cypress.env('OrangeHrmbaseURL')}/login`)
        cy.fixture('loginData').then(function(data){
          this.data= data;
        })
  })
  it('Verify user cannot login using invalid credentials', function() {
    loginPage.login(this.data.username, this.data.password)
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.username)
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.password)
    // cy.get('.oxd-button').click()
    loginPage.getInvalidPassword().should("have.text", "Invalid credentials");
    //cy.get('.oxd-alert-content > .oxd-text').should("have.text", "Invalid credentials")
  })
  it('Verify user login successfully', () => {
    loginPage.login(this.data.username, this.data.password)
    // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    // cy.get('.oxd-button').click()
    loginPage.getDashboardPageLogo().should('exist');
    //cy.get('.oxd-brand-banner > img').should('exist')
  })
})