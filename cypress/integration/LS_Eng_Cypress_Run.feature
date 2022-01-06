Feature: LS_Eng_Cypress_Run


  Scenario: Check Simple Login Functionality - Rahul
    Given User logins in with given creds
    When User Checks the Welcome Text
    Then User should be able to see their Full Name
