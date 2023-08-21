import endToEndClass  from "../pageObjects/endToEndObjects.cy"
const endToEndObject = new endToEndClass()


describe('End to end test cases', () => {

  it("Scenario 1 --- Login on the app ", function()
  {
     cy.visit('auth/login')
      endToEndObject.typeFunction("user name" , this.userData.userName)
      endToEndObject.typeFunction("password" , this.userData.password)
      endToEndObject.clickFunction("submit")
      endToEndObject.validation("login successful")
  })
  

  it('Scenario 2 --- My Info Page test case', function() {
    endToEndObject.clickFunction("My Info")
    endToEndObject.validation("Dob is default")
    endToEndObject.enterDob(this.userData.year , this.userData.month , this.userData.date ) 
    endToEndObject.validation("Dob is prefilled") 
    
  })


  it("Scenario 3 --- Logout the application" ,function()
  {
    endToEndObject.clickFunction("dropdown")
    endToEndObject.clickFunction("Logout")
    endToEndObject.validation("logout successful")
  })
})