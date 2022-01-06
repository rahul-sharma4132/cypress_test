@tag @tag
Feature: L & S Engineers to display 'Compatible with ' text on PDP - [LASSLA-239]


  Scenario: Admin Should be set up with values for Product and Category
    "Given: User have accessed the Admin site"
    And User navigate to Admin > Categories > Select Category (ex: TS410)
    Then The selected category should be Set to YES for attribute 'is machine' i.e, is machine = YES
    And User now change/update the value in Model Name attribute (ex: TS410 TS420)
    And User Navigate to Product from the same category
    Then User Open product to Edit
    And 'Unique to a particular machine' for the Product should be enable and set as YES
    Then User should be viewing the same Product on front-end PDP

  Scenario: Front_end checks should be followed to complete test
    "Given: User have accessed the  Front_end site as Registered User"
    And the User should have the above category in his 'MY MACHINE' section in Account dashboard
    And User should be on the PDP page from the same category
    Then User should be able to see the Compatable with text followed by Model name provided from backend on the PDP Page
