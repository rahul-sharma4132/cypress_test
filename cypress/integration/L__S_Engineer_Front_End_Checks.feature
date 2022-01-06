@l
Feature: L & S Engineer Front End Checks


  @Deployment_Run
  Scenario: Check Register User/Customer from Register Page
    Given URL L&S Engineer
    When User Visit the Register User page by clicking on Account icon
    Then User click on "Register" option in the dropdown
    Then User should be able to see the Log In page loading properly
    And User should be able to enter the user details in all the required fields on the register user form
    Then User Click on the checkbox to confirm Recaptcha working
    And User Click on 'Please tick this box to indicate you have read our privacy policy' acceptance check box
    And User Click on 'Create Account' Button
    Then User is redirected to Account Dashboard with Success Message

  @LiveTest15Dec
  Scenario: Check Register User from LogIn Page
    Given URL L&S Engineer
    When User Visit the Register User page by clicking on Account icon
    Then User click on "Log In" option in the dropdown
    Then User should be able to see the Log In page loading properly
    And User should be able to Click on 'CREATE AN ACCOUNT' Button
    Then User Should be Redirected to 'Register Page'
    And User should be able to enter the user details in all the required fields on the register user form
    Then User Click on the checkbox to confirm Recaptcha working
    And User Click on 'I am a trade customer' acceptance check box (Click if reuired to create Trade User)
    And User Click on 'Please tick this box to indicate you have read our privacy policy' acceptance check box
    And User Click on 'Create Account' Button
    Then User is redirected to Account Dashboard with Success Message

  @LiveTest15Dec
  Scenario: Check Login User
    Given URL L&S Engineer
    When User Visit the Login User page by clicking on Account icon
    Then User click on "Log In" option in the dropdown
    Then User should be able to see the Log In page loading properly
    And User should be able to enter the valid user details in all the required fields on the Log In form
    Then User Click on the checkbox to confirm Recaptcha working
    And Click on LogIn Button
    Then User is redirected to Account Dashboard with Success Message

  Scenario: Check Register TRADE User from Register Page
    Given URL L&S Engineer
    When User Visit the Register User page by clicking on Account icon
    Then User click on "Register" option in the dropdown
    Then User should be able to see the Log In page loading properly
    And User should be able to enter the user details in all the required fields on the register user form
    Then User Click on the checkbox to confirm Recaptcha working
    And User Click on 'I am a trade customer' acceptance check box
    And User Click on 'Please tick this box to indicate you have read our privacy policy' acceptance check box
    And User Click on 'Create Account' Button
    Then User is redirected to Account Dashboard with Success Message
    And User is able to see the updated store Logo with L&S TRADE

  Scenario: User can change the password
    Given I have accessed the site as a logged-in user
    And I click on the change password link on the account dashboard
    And I have entered all the required details
    And I click on the submit button
    Then the user’s password should get changed

  Scenario: User should be able to login to the site after changing password
    Given I have changed my password from the account dashboard
    Given I have accessed the site as a guest user
    And I click on the login/register button
    And I have entered the correct data
    And I click on the sign-in button
    Then I should get logged in to the site

  Scenario: User can reset the password
    Given I have accessed the site
    And I click on the login/register button
    And I click on the forgot password link
    And I click on the reset password button obtained from the mail
    And I have entered the correct data
    And I click on the submit button
    Then the user password should get changed

  Scenario: User should be able to login to the site after resetting the password
    Given I have reset my password
    Given I have accessed the site as a guest user
    And I click on the login/register button
    And I have entered the correct data
    And I click on the sign-in button
    Then I should get logged in to the site

  Scenario: User should be able to edit an existing address
    Given I have accessed the site as a logged-in user
    And I click on the edit address link on the account dashboard
    And I have entered all the details that are needed to change
    And I click on the submit button
    Then the user’s address should get changed

  @LiveTest15Dec
  Scenario: User should be able to view previous orders
    Given I have accessed the site as a logged-in user
    Given I have placed orders previously
    And I click on my order link
    And I click on the view order
    Then the order details should be visible

  @LiveTest15Dec
  Scenario: Unable to progress if required fields are not entered on the login page
    Given I have accessed the site
    And I click on the login/register button
    And I click on the sign-in button, without filling in the required field details.
    Then I should get an error message that fields are required

  @LiveTest15Dec
  Scenario: User can log out from the site
    Given I have accessed the site as a logged-in user
    And I click on the sign out button
    Then I should get log out from the site
    And I should redirect to the homepage

  Scenario: Check Forget Password
    Given URL L&S Engineer
    When User Visit the Login User page by clicking on Account icon
    Then User click on "Log In" option in the dropdown
    Then User should be able to see and Click the 'Forgot your password?' link on the Log In page and page should load properly
    Then User should be Redirected to 'Forgot Password' Page with and page should load properly
    And User should be able to enter the user details in the required fields on the Forgot Password form
    And User Click on 'LOG IN' Button

  @LiveTest15Dec
  Scenario: Add Product to Cart from Search result/ Product Listing PLP Page
    Given URL L&S Engineer
    When User click and provide input to Search box
    Then Search Result should be visible with Product listing page visible properly
    Then User should be able to see Add Button
    And User Click on Add Button
    Then User is able to see Success message of product added to cart with link to redirec on Shopping Cart Page
    Then Product is visible in the cart
    And Cart Page visible and functioning Properly with updating QTY, Applying promo code, Clear basket etc
    And user click on Proceed to Checkout Button

  @LiveTest15Dec
  Scenario: Add Product to Cart from Category/Product Description (PDP) Page
    Given URL L&S Engineer
    When User click and navigate to any Category
    Then Category Page with Product listing page visible properly
    Then User should be able to see Product blocks on the PLP
    And User Click on Product block from Product Listing Page (PLP) Page
    Then User navigate to Product Descriptioan validate on the frontend after import.n (PDP) Page
    Then PDP Page should be visible properly with information blocks, product images, QTY Dropdown and Add to Cart button
    And User Click on Add To Basket Button
    Then User is able to see Success message of product added to cart with link to redirec on Shopping Cart Page
    Then Product is visible in the cart
    And Cart Page visible and functioning Properly with updating QTY, Applying promo code, Clear basket etc
    And user click on Proceed to Checkout Button
    Then User should be redirecting to Onestep checkout page which should be visible properly
    Then User should be able to enter values in Shipping Address
    Then User should be able to enter values in placeholder within Shipping Page
    Then User Click on checkbox 'My billing and shipping address are the same' if user dont want to add different address for billing
    Then User should be able to see and select any of the Shipping method from Shipping Method
    Then User can add any note  or instruction in the placeholder below shipping methods
    Then User should be able to see and select any of the payment option from Payment Method
    And User click on the Place Order Button
    Then User should be Redirected to Order Success Page with Order details

  Scenario: User performing Checkout as Guest
    Given User should be on Checkout page URL of L&S Engineer
    And The Onestep Checkout page hould be visible properly with all section and placeholders
    Then Search Result should be visible with Product listing page visible properly
    Then User should be able to enter values in Shipping Address
    Then User should be able to enter values in placeholder within Shipping Page
    And User Click on checkbox 'My billing and shipping address are the same' to select option, the user dont see any options to add different address for billing
    And User Click on Checkbox 'My billing and shipping address are the same' to not select checkbox
    Then Billing Address block appears to enter the address as Billing address
    Then User should be able to see and select any of the Shipping method from Shipping Method
    Then User can add any note  or instruction in the placeholder below shipping methods
    Then User should be able to see and select any of the payment option from Payment Method
    And User click on the Place Order Button
    Then User should be Redirected to Order Success Page with Order details

  @LiveTest15Dec
  Scenario: User performing Checkout as Register User from Checkout Page
    Given User is on Checkout page URL of L&S Engineer as GUEST USER having checkout page visible properly
    Then on right hand corner'Already have an account? Login here' link should be visible and clickable
    And user click on the 'Already have an account? Login here' link to login
    Then The "Sign In" pop-up appears to be accepting valid login credentials
    Then User provide Valid Login credentials and click on "SIGN IN" Button
    Then User redirected to Checkout Page with already saved address in Shipping Address block
    And Click on the NEW ADDRESS button should be visible to add new shipping address
    Then The Shipping address pop-up appears to add new address with "CANCEL" and "SHIP HERE" Button
    And User Click on checkbox 'My billing and shipping address are the same' to select option, the user dont see any options to add different address for billing
    And User Click on Checkbox 'My billing and shipping address are the same' to not select checkbox
    Then Billing Address block appears to enter the address as Billing address
    Then User should be able to see and select any of the Shipping method from Shipping Method
    Then User can add any note  or instruction in the placeholder below shipping methods
    Then User should be able to see and selean validate on the frontend after import.ct any of the payment option from Payment Method
    And User click on the Place Order Button
    Then User should be Redirected to Order Success Page with Order details

  @LiveTest15Dec
  Scenario: User performing Checkout as Register User
    Given User is on Checkout page URL of L&S Engineer as REGISTERED USER having checkout page visible properly
    Then User redirected to Checkout Page with already saved address in Shipping Address block
    And Click on the NEW ADDRESS button should be visible to add new shipping address
    Then The Shipping address pop-up appears to add new address with "CANCEL" and "SHIP HERE" Button
    And User Click on checkbox 'My billing and shipping address are the same' to select option, the user dont see any options to add different address for billing
    And User Click on Checkbox 'My billing and shipping address are the same' to not select checkbox
    Then Billing Address block appears to enter the address as Billing address
    Then User should be able to see and select any of the Shipping method from Shipping Method
    Then User can add any note  or instruction in the placeholder below shipping methods
    Then User should be able to see and select any of the payment option from Payment Method
    And User click on the Place Order Button
    Then User should be Redirected to Order Success Page with Order details

  @LiveTest15Dec
  Scenario: The search suggestion is displayed if the user tries to enter any keyword on the search bar
    Given User have accessed the site
    And User enter any keyword on the search bar
    Then the search suggestion should be  displayed

  Scenario: The page redirects to the product page if users click on the product present on the search suggestion
    Given User have accessed the site
    And User enter any keyword on the search bar
    And User click on any product
    Then the page redirects to the product page

  Scenario: The page redirects to the search result page if users enter any keyword and click on the search icon
    Given User have accessed the site
    And User enter any keyword on the search bar
    And User click on the search icon
    Then the page redirects to the search result page

  Scenario: The categories are present on the search result page
    Given User is on the search result page
    Then the categories should be visible on the search result page
    And the Category Image, Left Navigation list to redirect on specific Category should be present on the product

  Scenario: The page redirects product page, clicking on the Category visible on the Search Result Page
    Given User is on the search result page
    And User click on the Category in Left Nav/Result listing
    Then the page should get redirected to the Next Category listing/product listing page

  @LiveTest15Dec
  Scenario: User can Filter the search result page
    Given User is on the search result page
    And User select any option from the Left Navigation section
    Then the search result page should get updated as per the selected filter option

  Scenario: The category description is present on the product listing page  with image of the category
    Given User is on the product listing page
    Then the category description should be visible on the product listing page

  Scenario: The products are present on the product listing page
    Given User is on the product listing page
    Then the product should be visible on the product listing page
    And the product Image, name, price, view product/add to basket button should be present on the product

  Scenario: The page redirects product page, clicking on the Product Image/Name
    Given User is on the product listing page
    And User click on the view button
    Then the page should get redirected to the product page

  Scenario: User should be able to add simple products from the product listing page
    Given User is on the product listing page which has a simple product
    Then the ‘ADD‘ button should be visible for the simple product
    And the product should get added if I click on the ‘ADD‘ button

  Scenario: User can sort the product listing page
    Given User is on the product listing page
    And User select any option from the sort section
    Then the product listing page should get updated as per the selected sort option

  Scenario: User can filter the product listing page
    Given User is on the product listing page
    And User select any filter option from the sidebar
    Then the product listing page should get updated as per the selected filter option

  Scenario: User can change the ‘view per page’ present on the product listing page
    Given User is on the product listing page
    And User select any ‘view per page’  option
    Then the number of products present on the product listing page should show as per the selected ‘view per page ‘

  Scenario: The paginations are visible if the products are more than the ‘view per page’
    Given User is on the product listing page
    And the products on the product listing page are more than the ‘view per page’
    Then the pagination should be visible if the products are more than the ‘view per page’

  Scenario: The page can get redirect to selected pagination
    Given User is on the product listing page
    Given the products on the product listing page are more than the ‘view per page’
    And User select a pagination
    Then the page should get redirected as per the selected pagination

  Scenario: The category description is present on the category listing page with image of the category
    Given User is on the category listing page
    Then the category description with sub-categories to redirect should be visible on the category listing page

  Scenario: The sub-categories are present on the category listing page
    Given User is  on the category listing page
    Then the sub-categories with list of more sub-categories should be visible on the category listing page
    And the Category Image, name, list of sub-categories should be present on the product

  @LiveTest15Dec
  Scenario: Items are visible on mini cart
    Given User is on a product listing page
    And User click 'ADD' button to get product added to cart
    When User open the minicart
    Then the product added is visible

  Scenario: Items Items can be updated from the mini cart
    Given User is on a product page
    And User open the mini-cart
    When click the increment/decrement button or update the Qty in mini cart
    Then the Mini Cart is updating with latest updated data

  @LiveTest15Dec
  Scenario: Items can be removed from the mini cart
    Given User is on a simple product page
    And User open the mini-cart
    When click the bin icon beside a product
    Then the product is removed from the cart

  @LiveTest15Dec
  Scenario: User can be redirected to Basket Page from the mini cart
    Given User is on a simple product page
    And User open the mini-cart
    When click the 'View Basket' button
    Then the user redirects to the Cart Page

  Scenario: Items can be redirected to Checkout Page from the mini cart
    Given User is on a simple product page
    And User open the mini-cart
    When click the 'Go to Checkout' button
    Then the user redirects to the Checkout Page

  @LiveTest15Dec
  Scenario: Items are visible on cart page
    Given User is on a simple product page
    And User click 'Add to Cart'
    When User navigate to the cart page
    Then User can see the added product

  Scenario: Items can be removed from the cart
    Given User is on a simple product page
    And User click 'Add to Cart'
    When User navigate to the cart page
    And click the bin icon beside a product
    Then the product is removed from the cart

  Scenario: User should be able to Submit Contact Us form
    Given I have accessed the Contact us page on the site
    And Fill in the form with all required details
    And Clicked on Submit Button
    Then contact us form should get submitted succesfully

  Scenario: User should be able to View Blog Pages
    Given I have accessed the Blog page on the site
    And navigate to any Blog
    Then Blog Page should be displaying fine on the front-end

  Scenario: User performing Checkout with Purchase Order (For GUEST/ REGISTERED/ TRADE User)
    Given User is on Checkout page URL of L&S Engineer having checkout page visible properly
    Then User should be able to see Shipping/Billing Address, Shipping Method, Payment Method, Order Summary block with Place Order button
    Then User should be able to see and select any of the Shipping method from Shipping Method
    Then User can add any note  or instruction in the placeholder below shipping methods
    Then User should be able to see and select purchsae Order Payment Method
    And User click on the Place Order Button
    Then User should be Redirected to Order Success Page

  @LiveTest15Dec
  Scenario: User performing Checkout with Credit Card (For GUEST/ REGISTERED/ TRADE User)
    Given User is on Checkout page URL of L&S Engineer having checkout page visible properly
    Then User should be able to see Shipping/Billing Address, Shipping Method, Payment Method, Order Summary block with Place Order button
    Then User should be able to see and select any of the Shipping method from Shipping Method
    Then User can add any note  or instruction in the placeholder below shipping methods
    Then User should be able to see and select Credit Card Payment Method
    And User click on the Place Order Button
    Then User needs to enter the 3DS Authentications to validate payment details successfully
    Then User should be Redirected to Order Success Page with Order details

  Scenario: User performing Checkout with PAYPAL (For GUEST/ REGISTERED/ TRADE User)
    Given User is on Checkout page URL of L&S Engineer having checkout page visible properly
    Then User should be able to see Shipping/Billing Address, Shipping Method, Payment Method, Order Summary block with Place Order button
    Then User should be able to see and select any of the Shipping method from Shipping Method
    Then User can add any note  or instruction in the placeholder below shipping methods
    Then User should be able to see and select PAYPAL Payment Method
    And User click on the Place Order Button
    Then User should be Redirected to Order Success Page with Order details
