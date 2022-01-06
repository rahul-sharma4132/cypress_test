/// <reference types='cypress' />

describe("LR Direct Automated Test Cases", () => {

    beforeEach( () => {
            cy.fixture('testData.json').then( testData1 => {
                const app_url = testData1.url;
            cy.visit(app_url);
            cy.get("span.nav-toggle").click();
            cy.get("a.nav-sections-item-switch").contains("Account").click({force:true});
            cy.get("a").contains("Login").click({force:true});
            const cust_email = testData1.email;
            cy.get("input#email").type(cust_email);
            const cust_pwd = testData1.pwd;
            cy.get("input[title='Password']").type(cust_pwd);
            cy.get("button[name='send']#send2.login").click();
    } )
} )
it("Check login directly through script", () =>{
    try{
        
        cy.on('uncaught:exception', (err, runnable) => {
              return false
            });
            cy.pause();
        cy.wait(10);
        cy.fixture('testExpected.json').then( testExpected1 => {
        const accountPage_validator = testExpected1.my_account;
        cy.title().should("eq",accountPage_validator);
    }) 
    }catch(err){
        console.error(err);
    } 
})

    it("Search for Product", () => {
    try{
        cy.on('uncaught:exception', (err, runnable) => {
            return false
          }); 
        cy.get('a.logo').click();
        cy.pause();
        cy.get("input#search").type("Fuel Injector").type('{downarrow}').type('{enter}');    
        cy.get('span.product-image-container-6403211').click();
        cy.wait(100);
        cy.fixture('testExpected.json').then( testExpected1 => {
        const pdp_validator = testExpected1.part_number;
        cy.get('span.base').then(($span) => {
        const txt = $span.text();
        expect(txt).to.include(pdp_validator);
    })
    })
    }catch(err){
    console.error(err);
    }
    })

    it("Add Product to cart", () => {
        try{
            cy.on('uncaught:exception', (err, runnable) => {
                return false
              });
                cy.wait(10);
                cy.pause();
                cy.get('a.logo').click();
        cy.get("input#search").type("Fuel Injector").type('{downarrow}').type('{enter}');    
        cy.get('span.product-image-container-6403211').click();
        cy.wait(100);
                cy.get('button.tocart').click();
                cy.fixture('testExpected.json').then( testExpected1 => {
                const cart_add_validator = testExpected1.cart_add_success;
                cy.get('div.success').children('div').then(($div) => {
                const txt = $div.text();
                expect(txt).to.include(cart_add_validator);
                
            })
            })
        }catch(err){
            console.error(err);
        }
        })

        it( "Proceed with Checkout" )
})