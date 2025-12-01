 let QarenaPage
  let TextautomationArenaPage
  let atmSimulatorPage
  let EnterPinPage
/*
  To confirm if an element exist on the browser.
    Go to the browser console and type
    document.querySelector('[data-cy="arena-dashboard-simulator-title-atm"]') to the you can locate the element
    document.quertSelector('element')

*/
describe('ATM Simulator', () => {
  before(()=>{
    //cy.viewport('iphone-xr');
    cy.fixture('ElementLocator').then((locator)=> {
       QarenaPage = locator.QarenaPage;
       TextautomationArenaPage = locator.TextautomationArenaPage;
       atmSimulatorPage = locator.atmSimulatorPage
       EnterPinPage = locator.EnterPinPage
    })
  }) 
  it('Launch ATM Simulator', ()=> {
    cy.visit('/')
    // Assert element exist on homepage
    cy.contains(QarenaPage.testAutomationArenaLocator).should('exist');
    // Click element on homepage
    cy.contains(QarenaPage.testAutomationArenaLocator).click();
    cy.contains(TextautomationArenaPage.TextAutomationHeadingsLocator).should('exist');
    cy.contains(TextautomationArenaPage.atmSimulatorTextLocator).should('exist');
    cy.getElementByCy(TextautomationArenaPage.atmSimulatorLocator).click();
    cy.contains(EnterPinPage.pinHeadingLocator && EnterPinPage.BacktoDashboardbtnLocator).should('exist');

        // Different ways to perform Enter pin : 1
    // cy.get('[data-cy="atm-key-1"]').click();
    // cy.get('[data-cy="atm-key-2"]').click();
    // cy.get('[data-cy="atm-key-3"]').click();
    // cy.get('[data-cy="atm-key-4"]').click();

        // Different ways to perform Enter pin : 2
    // cy.getElementByCy(EnterPinPage.EnterFirstPinLocator).click();
    // cy.getElementByCy(EnterPinPage.EnterSecondPinLocator).click();
    // cy.getElementByCy(EnterPinPage.EnterThirdPinLocator).click();
    // cy.getElementByCy(EnterPinPage.EnterForthPinLocator).click();
    // cy.getElementByCy(EnterPinPage.EnterbtnLocator).click();

        // Different ways to perform Enter pin : 3
    cy.ClickElementByCy(EnterPinPage.EnterFirstPinLocator);
    cy.ClickElementByCy(EnterPinPage.EnterSecondPinLocator);
    cy.ClickElementByCy(EnterPinPage.EnterThirdPinLocator);
    cy.ClickElementByCy(EnterPinPage.EnterForthPinLocator);
    cy.ClickElementByCy(EnterPinPage.EnterbtnLocator);

    cy.contains('Select Transaction').should('exist');
    cy.contains('SecureBank ATM').should('exist');



  })

})