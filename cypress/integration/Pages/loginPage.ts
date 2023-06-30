export class homePage{

    elements = {
        buttonLogin: () => cy.get('.shop-menu > .nav > :nth-child(4) > a'),
        usernameInput: () => cy.get('.login-form > form > [type="email"]'),
        passwordInput: () => cy.get('[type="password"]'),
        clickButton: () => cy.get('.login-form > form > .btn'),
        getTitle: () => cy.get('.features_items > .title'),
        getlabel: () => cy.get('.login-form > form > p')
    }

    clickLogin(){
        this.elements.buttonLogin().click();
    }

    typeUsername(user){
        this.elements.usernameInput().type(user).should('not.equal', '');
    }

    typePassword(pass){
        this.elements.passwordInput().type(pass).should('not.equal', '');
    }

    clickButton(){
        this.elements.clickButton().click();
    }

    titlePage(){
        console.log('Ingrese al login');
        this.elements.getTitle().should('contain','Features Items');
    }

    titlePageNoLogin(){
        console.log('Ingrese al login');
        this.elements.getlabel().should('contain','Your email or password is incorrect!');
    }
}