Feature: L & S Engineer Admin Checks


  @LiveTest15Dec
  Scenario: To check User can access admin
    Given User have accessed the admin URL
    And User have added login credentials
    Then User can access the admin area

  @Orders @LiveTest15Dec
  Scenario: User can view the existing orders
    Given User have accessed the admin site
    And User navigate to sales > order > edit/view order
    Then User can view the particular order details page

  Scenario: User can create a new order
    Given User have accessed the admin site
    And User navigate to sales > order
    And User click on the create new order button
    And User select a customer
    And User add a product to the order
    And User add billing and shipping details
    And User add payment and shipping method
    And User click on the submit order buttonAdd Shop by diagram tests
    Then User can create a new order in the admin

  Scenario: User can reorder
    Given User have accessed the admin site
    And User navigate to sales > order > edit/view order
    And User click on the reorder button at the top
    And User add billing and shipping details
    And User add payment and shipping method
    And User click on the submit order button
    Then User can reorder in the admin

  @LiveTest15Dec
  Scenario: Orders are in 'Processing' status if payment is done (i.e invoice generated)
    Given User have placed an order ( with online payment methods)
    Given User have accessed the admin site
    And User navigate to sales > order
    Then the order should be in the 'Processing'  status

  Scenario: User can view the generated Invoice
    Given User have placed an order ( with online payment methods)
    Given User have accessed the admin site
    And User navigate to sales > order > edit/view order > Invoices > view
    Then User can the order Invoice details

  Scenario: User can generate the shipment for the order
    Given User have placed an order ( with online payment methods)
    Given User have accessed the admin site
    And User navigate to sales > order > edit/view order
    And User click on the ship button at the top
    And User click on the submit shipment on the shipment page
    Then User can see the success message “ The shipment has been created.”
    And the order should be in the ‘Complete’ status

  Scenario: User can view the generated shipment
    Given User have placed an order ( with online payment methods)
    Given User have accessed the admin site
    Given the order is in the ‘Complete’ status
    And User navigate to sales > order > edit/view order > shipment > view
    Then User can the order shipment details

  Scenario: User can generate the Credit Memo for the order
    Given User have placed an order ( with online payment methods)
    Given User have accessed the admin site
    And User navigate to sales > order > edit/view order > Invoices > view
    And User click on the Credit Memo button at the top
    And User click on the ‘Refund’ on the New Memo page
    Then User can see the success message “ You created the credit memo..”
    And the order should be in the ‘Closed’ status

  Scenario: User can view the Credit Memo
    Given User have placed an order ( with online payment methods)
    Given User have accessed the admin site
    Given order is in the ‘Closed’ status
    And User navigate to sales > order > edit/view order > credit memos > view
    Then User can the credit memo details

  Scenario: User can create a new customer
    Given User have accessed the admin site
    And User navigate to customer > all customer
    And User click on the add new customer button
    And User add the account information details
    Then User can create a new customer in the admin

  Scenario: User can view the customer
    Given User have accessed the admin site
    And User navigate to customer > all customer > view/edit customer
    Then User can see the customer details

  Scenario: User can create a customer service user
    Given User have accessed the admin site
    And User navigate to system > customer service > users
    And User click on the add new customer button
    And User add the account information details
    Then User can create a customer service user in the admin

  Scenario: User can view the customer service user
    Given User have accessed the admin site
    And User navigate to system > customer service > users > view/edit customer
    Then User can see the customer details

  Scenario: User can add a new product
    Given User have accessed the admin site
    And User navigate to catalog > product > add product
    And User enter all the required product details
    And User click on the save button
    Then User can add a new product in the admin

  Scenario: User can edit a product
    Given User have accessed the admin site
    And User navigate to catalog > product > edit product
    And User enter all the product details to change
    And User click on the save button
    Then User can edit a product in the admin

  Scenario: User can add a new category
    Given User have accessed the admin site
    And User navigate to catalog > categories > add subcategory
    And User enter all the required details
    And User click on the save button
    Then User can add a new category in the admin

  Scenario: User can edit a category
    Given User have accessed the admin site
    And User navigate to catalog > categories > select a category
    And User enter all the details that need to change
    And User click on the save button
    Then User can edit a category in the admin

  Scenario: User can add a new block
    Given User have accessed the admin site
    And User navigate to content > block > add new block
    And User enter all the required details
    And User click on the save button
    Then User can add a new block in the admin

  Scenario: User can edit a block
    Given User have accessed the admin site
    And User navigate to content > block > edit block
    And User enter all the details that need to change
    And User click on the save button
    Then User can edit a block in the admin

  Scenario: User can add a new page
    Given User have accessed the admin site
    And User navigate to content > page > add new page
    And User enter all the required details
    And User click on the save button
    Then User can add a new page in the admin

  Scenario: User can edit a page
    Given User have accessed the admin site
    And User navigate to content > page > edit page
    And User enter all the details that need to change
    And User click on the save button
    Then User can edit a page in the admin

  Scenario: User can add a cart price rule
    Given User have accessed the admin site
    And User navigate to marketing > cart price rule  > add new rule
    And User enter all the required details
    And User click on the save button
    Then User can add a new  cart price rule  in the admin

  Scenario: User can edit a cart price rule
    Given User have accessed the admin site
    And User navigate to marketing > cart price rule  > edit
    And User enter all the details that need to change
    And User click on the save button
    Then User can edit a cart price rule in the admin
