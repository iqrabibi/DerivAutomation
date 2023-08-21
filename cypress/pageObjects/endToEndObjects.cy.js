class endToEndClass
{
    clickFunction(option)
    {
        switch(option)
        {
            case 'My Info' :
                cy.xpath(`//span[text()='${option}']/ancestor::a`).click()
                break
            case 'dropdown' :
                cy.xpath("//*[@class='oxd-userdropdown']").click()
                break
            case 'Logout' :
                cy.xpath(`//*[@class='oxd-dropdown-menu']/li/a[text()='${option}']`).click()
                break
            case 'submit' :
                cy.xpath("//*[@type='submit']").click({multiple:true})
                break
                

        }
    }

    validation(option)
    {
        switch(option) {
            case 'logout successful':
                cy.url().should('contain', '/login')
                break;
            case 'login successful' :
                cy.url().should('contain', '/dashboard')
                break
            case 'Dob is default' :
                cy.xpath("//*[text()='Date of Birth']/../following-sibling::*/descendant::input").should('not.be.empty')
                break
            case 'Dob is prefilled' :
                cy.xpath("//*[text()='Date of Birth']/../following-sibling::*/descendant::input").should('have.value', '1995-10-25')
                break
        }
    }

    typeFunction(option , value)
    {
        switch(option)
        {
            case 'user name' :
                cy.xpath("//*[@name='username']").type(value)
                break
            case 'password' :
                cy.xpath("//*[@name='password']").type(value)
                break
        }
    }

    enterDob(year , month , date)
    {
        cy.xpath("//*[text()='Date of Birth']/../following-sibling::*/descendant::input").click()
        cy.xpath("//*[contains(@class,'oxd-date-input-calendar')]").should('be.visible')
        cy.xpath("//*[contains(@class,'oxd-calendar-selector-month')]").click({ multiple: true })
        cy.xpath(`//*[contains(@class,'oxd-calendar-selector-month')]/descendant::*[text()='${month}']`).click({ multiple: true })
        cy.xpath("//*[contains(@class,'oxd-calendar-selector-year')]").click({ multiple: true })
        cy.xpath(`//*[contains(@class,'oxd-calendar-selector-year')]/descendant::*[text()='${year}']`).click({ multiple: true })
        cy.xpath(`//*[contains(@class,'oxd-calendar-date') and text()='${date}']`).click()
    }

}

export default endToEndClass