@tag 
Feature: My Machines


  Scenario: Adding a product to 'My Machines'
    Given I am logged in to the site as a customer
    When I have purchased a product that has the attribute: *'Unique to a particular machine'* set to *'Yes'*
    And navigate to 'My Machines' in my customer account
    Then the machine should be visible in the list

  Scenario: 'My Machines' Homepage Widget
    Given I am logged in to the site as a customer
    And I have a product in 'My Machines'
    When I navigate to the Homepage
    Then I should see a 'My Machines' widget
    And it displays recommendations for my machine

  Scenario: Product Page - 'this part fits your [machine]' message
    Given I am logged in to the site as a customer
    And I have a product in 'My Machines'
    When I navigate to a product that is also associated with my machine
    Then I should see the following message 'this part fits your [machine]'

  Scenario: Removing machine from 'My Machines'
    Given I am logged in to the site as a customer
    And I have a product in 'My Machines'
    When I navigate to 'My Machines' in my customer account
    And I remove the product by clicking 'Delete'
    Then the product should no longer be visible in the list
    And the homepage widget should no longer be visible
    And the 'this part fits your [machine]' message should no longer be visible on product pages
