/// <reference types='cypress' />

describe( "L & S simple test cases", () => {

    beforeEach( () => {
        try{
        cy.fixture("lasTestData.json").then(lasTestData => {
            const siteURL = lasTestData.url+"customer/account/login/"
            cy.intercept({
                method:'GET',
                url: '/customer/account/login'
            }).as('loginWait')
            cy.visit(siteURL);
            cy.wait('@loginWait').then( (interception) => {
                assert.equal(interception.response.statusCode, 200)
            } );
            const username = lasTestData.email
            cy.get("input#email").type(username);
            const password = lasTestData.pwd
            cy.get("input#pass[name='login[password]']").type(password);
            cy.intercept({
                method:'GET',
                url: '/customer/account'
            }).as('account')
        })
            cy.get("button#send2.primary").click();
            cy.wait('@account').then((interception) => {
                assert.equal(interception.response.statusCode, 200)
            } )
            
    }catch(err){
        console.log(err);
    }
    } )
    
    it("simple login check", () => {
        try{
            cy.on('uncaught:exception', (err, runnable) => {
                return false
              });
        cy.fixture("lasTestData.json").then(lasTestData => {
            const testName = lasTestData.name;
            cy.get("p.welcome-message__name").should("have.text", "Hello "+testName);
        })
    }catch(err){console.log(err);}
    })

    it("homepage navigation check", () => {
        try{
            cy.on('uncaught:exception', (err, runnable) => {
                return false
              });
        cy.get("a.logo").click();
        cy.get("section.home-catalog-main h2").should("be.visible");
        }catch(err){console.log(err);}
    } )

    it("pdp navigation from homepage", () => {
        try{
            cy.on('uncaught:exception', (err, runnable) => {
                return false
              });
        cy.get("a.logo").click();
        cy.xpath("//a[contains(text(),'CMR6H')]").click();
        cy.fixture("lasTestProducts.json").then(lasProductData => {
            let productName = lasProductData.productName;
            cy.get('span.base').then(($span) => {
                let productSiteName= $span.text();
                expect(productSiteName).to.include(productName);
            } )
        } )
        cy.wait(100);
        }catch(err){console.log(err);} 
    } )

    it("add to cart", () => {
        try{
            cy.on('uncaught:exception', (err, runnable) => {
                return false
              });
        cy.get("a.logo").click();
        cy.xpath("//a[contains(text(),'CMR6H')]").click();
        cy.get("button#product-addtocart-button").click();
        cy.get('.message-success > div').should('be.visible');
        
    }catch(err){console.log(err)}
    } )

} )