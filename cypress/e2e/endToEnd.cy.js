import endToEndClass  from "../pageObjects/endToEndObjects.cy"
const endToEndObject = new endToEndClass()


describe('End to end test cases', () => {

  it("Scenario 1 --- Login on the app ", function()
  {
     cy.visit('auth/login')
      endToEndObject.typeFunction("user name" , "admin")
      endToEndObject.typeFunction("password" , "admin123")
      endToEndObject.clickFunction("submit")
      endToEndObject.validation("login successful")
  })
  

  it('Scenario 2 --- My Info Page test case', () => {
    endToEndObject.clickFunction("My Info")
    endToEndObject.enterDob("1995" , "October" , "26" )  
  })


  it("Scenario 3 --- Logout the application" , () =>
  {
    endToEndObject.clickFunction("dropdown")
    endToEndObject.clickFunction("Logout")
    endToEndObject.validation("logout successful")
  })
})