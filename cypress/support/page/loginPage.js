class loginPage{
    getUsername(usernme){
       return  cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    };
   getPassword(password){
       return  cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(this.data.passWord)
   };
   clickLoginBtn(){
            cy.get('.oxd-button').click()
   };
   getInvalidPassword(){
             return   cy.get('.oxd-alert-content > .oxd-text').should("have.text", "Invalid credentials")
   };
   getDashboardPageLogo(){
            return cy.get('.oxd-brand-banner > img')
   };
   login(username, password){
    this.getUsername().type(username);
    this.getPassword().type(password);
    this.clickLoginBtn().click();
   }
    
}
export default loginPage;