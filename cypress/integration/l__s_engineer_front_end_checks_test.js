describe('L & S Engineer Front End Checks', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('./actionwords.js').Actionwords);
  });

  it('Check Register User/Customer from Register Page', function () {
    // Tags: Deployment_Run
    // Given URL L&S Engineer
    this.actionwords.uRLLSEngineer();
    // When User Visit the Register User page by clicking on Account icon
    this.actionwords.userVisitTheRegisterUserPageByClickingOnAccountIcon();
    // Then User click on "Register" option in the dropdown
    this.actionwords.userClickOnP1OptionInTheDropdown("Register");
    // Then User should be able to see the Log In page loading properly
    this.actionwords.userShouldBeAbleToSeeTheLogInPageLoadingProperly();
    // And User should be able to enter the user details in all the required fields on the register user form
    this.actionwords.userShouldBeAbleToEnterTheUserDetailsInAllTheRequiredFieldsOnTheRegisterUserForm();
    // Then User Click on the checkbox to confirm Recaptcha working
    this.actionwords.userClickOnTheCheckboxToConfirmRecaptchaWorking();
    // And User Click on 'Please tick this box to indicate you have read our privacy policy' acceptance check box
    this.actionwords.userClickOnPleaseTickThisBoxToIndicateYouHaveReadOurPrivacyPolicyAcceptanceCheckBox();
    // And User Click on 'Create Account' Button
    this.actionwords.userClickOnCreateAccountButton();
    // Then User is redirected to Account Dashboard with Success Message
    this.actionwords.userIsRedirectedToAccountDashboardWithSuccessMessage();
  });

  it('Check Register User from LogIn Page', function () {
    // Tags: LiveTest15Dec
    // Given URL L&S Engineer
    this.actionwords.uRLLSEngineer();
    // When User Visit the Register User page by clicking on Account icon
    this.actionwords.userVisitTheRegisterUserPageByClickingOnAccountIcon();
    // Then User click on "Log In" option in the dropdown
    this.actionwords.userClickOnP1OptionInTheDropdown("Log In");
    // Then User should be able to see the Log In page loading properly
    this.actionwords.userShouldBeAbleToSeeTheLogInPageLoadingProperly();
    // And User should be able to Click on 'CREATE AN ACCOUNT' Button
    this.actionwords.userShouldBeAbleToClickOnCREATEANACCOUNTButton();
    // Then User Should be Redirected to 'Register Page'
    this.actionwords.userShouldBeRedirectedToRegisterPage();
    // And User should be able to enter the user details in all the required fields on the register user form
    this.actionwords.userShouldBeAbleToEnterTheUserDetailsInAllTheRequiredFieldsOnTheRegisterUserForm();
    // Then User Click on the checkbox to confirm Recaptcha working
    this.actionwords.userClickOnTheCheckboxToConfirmRecaptchaWorking();
    // And User Click on 'I am a trade customer' acceptance check box (Click if reuired to create Trade User)
    this.actionwords.userClickOnIAmATradeCustomerAcceptanceCheckBoxClickIfReuiredToCreateTradeUser();
    // And User Click on 'Please tick this box to indicate you have read our privacy policy' acceptance check box
    this.actionwords.userClickOnPleaseTickThisBoxToIndicateYouHaveReadOurPrivacyPolicyAcceptanceCheckBox();
    // And User Click on 'Create Account' Button
    this.actionwords.userClickOnCreateAccountButton();
    // Then User is redirected to Account Dashboard with Success Message
    this.actionwords.userIsRedirectedToAccountDashboardWithSuccessMessage();
  });

  it('Check Login User', function () {
    // Tags: LiveTest15Dec
    // Given URL L&S Engineer
    this.actionwords.uRLLSEngineer();
    // When User Visit the Login User page by clicking on Account icon
    this.actionwords.userVisitTheLoginUserPageByClickingOnAccountIcon();
    // Then User click on "Log In" option in the dropdown
    this.actionwords.userClickOnP1OptionInTheDropdown("Log In");
    // Then User should be able to see the Log In page loading properly
    this.actionwords.userShouldBeAbleToSeeTheLogInPageLoadingProperly();
    // And User should be able to enter the valid user details in all the required fields on the Log In form
    this.actionwords.userShouldBeAbleToEnterTheValidUserDetailsInAllTheRequiredFieldsOnTheLogInForm();
    // Then User Click on the checkbox to confirm Recaptcha working
    this.actionwords.userClickOnTheCheckboxToConfirmRecaptchaWorking();
    // And Click on LogIn Button
    this.actionwords.clickOnLogInButton();
    // Then User is redirected to Account Dashboard with Success Message
    this.actionwords.userIsRedirectedToAccountDashboardWithSuccessMessage();
  });

  it('Check Register TRADE User from Register Page', function () {
    // Given URL L&S Engineer
    this.actionwords.uRLLSEngineer();
    // When User Visit the Register User page by clicking on Account icon
    this.actionwords.userVisitTheRegisterUserPageByClickingOnAccountIcon();
    // Then User click on "Register" option in the dropdown
    this.actionwords.userClickOnP1OptionInTheDropdown("Register");
    // Then User should be able to see the Log In page loading properly
    this.actionwords.userShouldBeAbleToSeeTheLogInPageLoadingProperly();
    // And User should be able to enter the user details in all the required fields on the register user form
    this.actionwords.userShouldBeAbleToEnterTheUserDetailsInAllTheRequiredFieldsOnTheRegisterUserForm();
    // Then User Click on the checkbox to confirm Recaptcha working
    this.actionwords.userClickOnTheCheckboxToConfirmRecaptchaWorking();
    // And User Click on 'I am a trade customer' acceptance check box
    this.actionwords.userClickOnIAmATradeCustomerAcceptanceCheckBox();
    // And User Click on 'Please tick this box to indicate you have read our privacy policy' acceptance check box
    this.actionwords.userClickOnPleaseTickThisBoxToIndicateYouHaveReadOurPrivacyPolicyAcceptanceCheckBox();
    // And User Click on 'Create Account' Button
    this.actionwords.userClickOnCreateAccountButton();
    // Then User is redirected to Account Dashboard with Success Message
    this.actionwords.userIsRedirectedToAccountDashboardWithSuccessMessage();
    // And User is able to see the updated store Logo with L&S TRADE
    this.actionwords.userIsAbleToSeeTheUpdatedStoreLogoWithLSTRADE();
  });

  it('User can change the password', function () {
    // Given I have accessed the site as a logged-in user
    this.actionwords.iHaveAccessedTheSiteAsALoggedinUser();
    // And I click on the change password link on the account dashboard
    this.actionwords.iClickOnTheChangePasswordLinkOnTheAccountDashboard();
    // And I have entered all the required details
    this.actionwords.iHaveEnteredAllTheRequiredDetails();
    // And I click on the submit button
    this.actionwords.iClickOnTheSubmitButton();
    // Then the user’s password should get changed
    this.actionwords.theUsersPasswordShouldGetChanged();
  });

  it('User should be able to login to the site after changing password', function () {
    // Given I have changed my password from the account dashboard
    this.actionwords.iHaveChangedMyPasswordFromTheAccountDashboard();
    // Given I have accessed the site as a guest user
    this.actionwords.iHaveAccessedTheSiteAsAGuestUser();
    // And I click on the login/register button
    this.actionwords.iClickOnTheLoginregisterButton();
    // And I have entered the correct data
    this.actionwords.iHaveEnteredTheCorrectData();
    // And I click on the sign-in button
    this.actionwords.iClickOnTheSigninButton();
    // Then I should get logged in to the site
    this.actionwords.iShouldGetLoggedInToTheSite();
  });

  it('User can reset the password', function () {
    // Given I have accessed the site
    this.actionwords.iHaveAccessedTheSite();
    // And I click on the login/register button
    this.actionwords.iClickOnTheLoginregisterButton();
    // And I click on the forgot password link
    this.actionwords.iClickOnTheForgotPasswordLink();
    // And I click on the reset password button obtained from the mail
    this.actionwords.iClickOnTheResetPasswordButtonObtainedFromTheMail();
    // And I have entered the correct data
    this.actionwords.iHaveEnteredTheCorrectData();
    // And I click on the submit button
    this.actionwords.iClickOnTheSubmitButton();
    // Then the user password should get changed
    this.actionwords.theUserPasswordShouldGetChanged();
  });

  it('User should be able to login to the site after resetting the password', function () {
    // Given I have reset my password
    this.actionwords.iHaveResetMyPassword();
    // Given I have accessed the site as a guest user
    this.actionwords.iHaveAccessedTheSiteAsAGuestUser();
    // And I click on the login/register button
    this.actionwords.iClickOnTheLoginregisterButton();
    // And I have entered the correct data
    this.actionwords.iHaveEnteredTheCorrectData();
    // And I click on the sign-in button
    this.actionwords.iClickOnTheSigninButton();
    // Then I should get logged in to the site
    this.actionwords.iShouldGetLoggedInToTheSite();
  });

  it('User should be able to edit an existing address', function () {
    // Given I have accessed the site as a logged-in user
    this.actionwords.iHaveAccessedTheSiteAsALoggedinUser();
    // And I click on the edit address link on the account dashboard
    this.actionwords.iClickOnTheEditAddressLinkOnTheAccountDashboard();
    // And I have entered all the details that are needed to change
    this.actionwords.iHaveEnteredAllTheDetailsThatAreNeededToChange();
    // And I click on the submit button
    this.actionwords.iClickOnTheSubmitButton();
    // Then the user’s address should get changed
    this.actionwords.theUsersAddressShouldGetChanged();
  });

  it('User should be able to view previous orders', function () {
    // Tags: LiveTest15Dec
    // Given I have accessed the site as a logged-in user
    this.actionwords.iHaveAccessedTheSiteAsALoggedinUser();
    // Given I have placed orders previously
    this.actionwords.iHavePlacedOrdersPreviously();
    // And I click on my order link
    this.actionwords.iClickOnMyOrderLink();
    // And I click on the view order
    this.actionwords.iClickOnTheViewOrder();
    // Then the order details should be visible
    this.actionwords.theOrderDetailsShouldBeVisible();
  });

  it('Unable to progress if required fields are not entered on the login page', function () {
    // Tags: LiveTest15Dec
    // Given I have accessed the site
    this.actionwords.iHaveAccessedTheSite();
    // And I click on the login/register button
    this.actionwords.iClickOnTheLoginregisterButton();
    // And I click on the sign-in button, without filling in the required field details.
    this.actionwords.iClickOnTheSigninButtonWithoutFillingInTheRequiredFieldDetails();
    // Then I should get an error message that fields are required
    this.actionwords.iShouldGetAnErrorMessageThatFieldsAreRequired();
  });

  it('User can log out from the site', function () {
    // Tags: LiveTest15Dec
    // Given I have accessed the site as a logged-in user
    this.actionwords.iHaveAccessedTheSiteAsALoggedinUser();
    // And I click on the sign out button
    this.actionwords.iClickOnTheSignOutButton();
    // Then I should get log out from the site
    this.actionwords.iShouldGetLogOutFromTheSite();
    // And I should redirect to the homepage
    this.actionwords.iShouldRedirectToTheHomepage();
  });

  it('Check Forget Password', function () {
    // Given URL L&S Engineer
    this.actionwords.uRLLSEngineer();
    // When User Visit the Login User page by clicking on Account icon
    this.actionwords.userVisitTheLoginUserPageByClickingOnAccountIcon();
    // Then User click on "Log In" option in the dropdown
    this.actionwords.userClickOnP1OptionInTheDropdown("Log In");
    // Then User should be able to see and Click the 'Forgot your password?' link on the Log In page and page should load properly
    this.actionwords.userShouldBeAbleToSeeAndClickTheForgotYourPasswordLinkOnTheLogInPageAndPageShouldLoadProperly();
    // Then User should be Redirected to 'Forgot Password' Page with and page should load properly
    this.actionwords.userShouldBeRedirectedToForgotPasswordPageWithAndPageShouldLoadProperly();
    // And User should be able to enter the user details in the required fields on the Forgot Password form
    this.actionwords.userShouldBeAbleToEnterTheUserDetailsInTheRequiredFieldsOnTheForgotPasswordForm();
    // And User Click on 'LOG IN' Button
    this.actionwords.userClickOnLOGINButton();
  });

  it('Add Product to Cart from Search result/ Product Listing PLP Page', function () {
    // Tags: LiveTest15Dec
    // Given URL L&S Engineer
    this.actionwords.uRLLSEngineer();
    // When User click and provide input to Search box
    this.actionwords.userClickAndProvideInputToSearchBox();
    // Then Search Result should be visible with Product listing page visible properly
    this.actionwords.searchResultShouldBeVisibleWithProductListingPageVisibleProperly();
    // Then User should be able to see Add Button
    this.actionwords.userShouldBeAbleToSeeAddButton();
    // And User Click on Add Button
    this.actionwords.userClickOnAddButton();
    // Then User is able to see Success message of product added to cart with link to redirec on Shopping Cart Page
    this.actionwords.userIsAbleToSeeSuccessMessageOfProductAddedToCartWithLinkToRedirecOnShoppingCartPage();
    // Then Product is visible in the cart
    this.actionwords.productIsVisibleInTheCart();
    // And Cart Page visible and functioning Properly with updating QTY, Applying promo code, Clear basket etc
    this.actionwords.cartPageVisibleAndFunctioningProperlyWithUpdatingQTYApplyingPromoCodeClearBasketEtc();
    // And user click on Proceed to Checkout Button
    this.actionwords.userClickOnProceedToCheckoutButton();
  });

  it('Add Product to Cart from Category/Product Description (PDP) Page', function () {
    // Tags: LiveTest15Dec
    // Given URL L&S Engineer
    this.actionwords.uRLLSEngineer();
    // When User click and navigate to any Category
    this.actionwords.userClickAndNavigateToAnyCategory();
    // Then Category Page with Product listing page visible properly
    this.actionwords.categoryPageWithProductListingPageVisibleProperly();
    // Then User should be able to see Product blocks on the PLP
    this.actionwords.userShouldBeAbleToSeeProductBlocksOnThePLP();
    // And User Click on Product block from Product Listing Page (PLP) Page
    this.actionwords.userClickOnProductBlockFromProductListingPagePLPPage();
    // Then User navigate to Product Descriptioan validate on the frontend after import.n (PDP) Page
    this.actionwords.userNavigateToProductDescriptioanValidateOnTheFrontendAfterImportnPDPPage();
    // Then PDP Page should be visible properly with information blocks, product images, QTY Dropdown and Add to Cart button
    this.actionwords.pDPPageShouldBeVisibleProperlyWithInformationBlocksProductImagesQTYDropdownAndAddToCartButton();
    // And User Click on Add To Basket Button
    this.actionwords.userClickOnAddToBasketButton();
    // Then User is able to see Success message of product added to cart with link to redirec on Shopping Cart Page
    this.actionwords.userIsAbleToSeeSuccessMessageOfProductAddedToCartWithLinkToRedirecOnShoppingCartPage();
    // Then Product is visible in the cart
    this.actionwords.productIsVisibleInTheCart();
    // And Cart Page visible and functioning Properly with updating QTY, Applying promo code, Clear basket etc
    this.actionwords.cartPageVisibleAndFunctioningProperlyWithUpdatingQTYApplyingPromoCodeClearBasketEtc();
    // And user click on Proceed to Checkout Button
    this.actionwords.userClickOnProceedToCheckoutButton();
    // Then User should be redirecting to Onestep checkout page which should be visible properly
    this.actionwords.userShouldBeRedirectingToOnestepCheckoutPageWhichShouldBeVisibleProperly();
    // Then User should be able to enter values in Shipping Address
    this.actionwords.userShouldBeAbleToEnterValuesInShippingAddress();
    // Then User should be able to enter values in placeholder within Shipping Page
    this.actionwords.userShouldBeAbleToEnterValuesInPlaceholderWithinShippingPage();
    // Then User Click on checkbox 'My billing and shipping address are the same' if user dont want to add different address for billing
    this.actionwords.userClickOnCheckboxMyBillingAndShippingAddressAreTheSameIfUserDontWantToAddDifferentAddressForBilling();
    // Then User should be able to see and select any of the Shipping method from Shipping Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfTheShippingMethodFromShippingMethod();
    // Then User can add any note  or instruction in the placeholder below shipping methods
    this.actionwords.userCanAddAnyNoteOrInstructionInThePlaceholderBelowShippingMethods();
    // Then User should be able to see and select any of the payment option from Payment Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfThePaymentOptionFromPaymentMethod();
    // And User click on the Place Order Button
    this.actionwords.userClickOnThePlaceOrderButton();
    // Then User should be Redirected to Order Success Page with Order details
    this.actionwords.userShouldBeRedirectedToOrderSuccessPageWithOrderDetails();
  });

  it('User performing Checkout as Guest', function () {
    // Given User should be on Checkout page URL of L&S Engineer
    this.actionwords.userShouldBeOnCheckoutPageURLOfLSEngineer();
    // And The Onestep Checkout page hould be visible properly with all section and placeholders
    this.actionwords.theOnestepCheckoutPageHouldBeVisibleProperlyWithAllSectionAndPlaceholders();
    // Then Search Result should be visible with Product listing page visible properly
    this.actionwords.searchResultShouldBeVisibleWithProductListingPageVisibleProperly();
    // Then User should be able to enter values in Shipping Address
    this.actionwords.userShouldBeAbleToEnterValuesInShippingAddress();
    // Then User should be able to enter values in placeholder within Shipping Page
    this.actionwords.userShouldBeAbleToEnterValuesInPlaceholderWithinShippingPage();
    // And User Click on checkbox 'My billing and shipping address are the same' to select option, the user dont see any options to add different address for billing
    this.actionwords.userClickOnCheckboxMyBillingAndShippingAddressAreTheSameToSelectOptionTheUserDontSeeAnyOptionsToAddDifferentAddressForBilling();
    // And User Click on Checkbox 'My billing and shipping address are the same' to not select checkbox
    this.actionwords.userClickOnCheckboxMyBillingAndShippingAddressAreTheSameToNotSelectCheckbox();
    // Then Billing Address block appears to enter the address as Billing address
    this.actionwords.billingAddressBlockAppearsToEnterTheAddressAsBillingAddress();
    // Then User should be able to see and select any of the Shipping method from Shipping Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfTheShippingMethodFromShippingMethod();
    // Then User can add any note  or instruction in the placeholder below shipping methods
    this.actionwords.userCanAddAnyNoteOrInstructionInThePlaceholderBelowShippingMethods();
    // Then User should be able to see and select any of the payment option from Payment Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfThePaymentOptionFromPaymentMethod();
    // And User click on the Place Order Button
    this.actionwords.userClickOnThePlaceOrderButton();
    // Then User should be Redirected to Order Success Page with Order details
    this.actionwords.userShouldBeRedirectedToOrderSuccessPageWithOrderDetails();
  });

  it('User performing Checkout as Register User from Checkout Page', function () {
    // Tags: LiveTest15Dec
    // Given User is on Checkout page URL of L&S Engineer as GUEST USER having checkout page visible properly
    this.actionwords.userIsOnCheckoutPageURLOfLSEngineerAsGUESTUSERHavingCheckoutPageVisibleProperly();
    // Then on right hand corner'Already have an account? Login here' link should be visible and clickable
    this.actionwords.onRightHandCornerAlreadyHaveAnAccountLoginHereLinkShouldBeVisibleAndClickable();
    // And user click on the 'Already have an account? Login here' link to login
    this.actionwords.userClickOnTheAlreadyHaveAnAccountLoginHereLinkToLogin();
    // Then The "Sign In" pop-up appears to be accepting valid login credentials
    this.actionwords.theP1PopupAppearsToBeAcceptingValidLoginCredentials("Sign In");
    // Then User provide Valid Login credentials and click on "SIGN IN" Button
    this.actionwords.userProvideValidLoginCredentialsAndClickOnP1Button("SIGN IN");
    // Then User redirected to Checkout Page with already saved address in Shipping Address block
    this.actionwords.userRedirectedToCheckoutPageWithAlreadySavedAddressInShippingAddressBlock();
    // And Click on the NEW ADDRESS button should be visible to add new shipping address
    this.actionwords.clickOnTheNEWADDRESSButtonShouldBeVisibleToAddNewShippingAddress();
    // Then The Shipping address pop-up appears to add new address with "CANCEL" and "SHIP HERE" Button
    this.actionwords.theShippingAddressPopupAppearsToAddNewAddressWithP1AndP2Button("CANCEL", "SHIP HERE");
    // And User Click on checkbox 'My billing and shipping address are the same' to select option, the user dont see any options to add different address for billing
    this.actionwords.userClickOnCheckboxMyBillingAndShippingAddressAreTheSameToSelectOptionTheUserDontSeeAnyOptionsToAddDifferentAddressForBilling();
    // And User Click on Checkbox 'My billing and shipping address are the same' to not select checkbox
    this.actionwords.userClickOnCheckboxMyBillingAndShippingAddressAreTheSameToNotSelectCheckbox();
    // Then Billing Address block appears to enter the address as Billing address
    this.actionwords.billingAddressBlockAppearsToEnterTheAddressAsBillingAddress();
    // Then User should be able to see and select any of the Shipping method from Shipping Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfTheShippingMethodFromShippingMethod();
    // Then User can add any note  or instruction in the placeholder below shipping methods
    this.actionwords.userCanAddAnyNoteOrInstructionInThePlaceholderBelowShippingMethods();
    // Then User should be able to see and selean validate on the frontend after import.ct any of the payment option from Payment Method
    this.actionwords.userShouldBeAbleToSeeAndSeleanValidateOnTheFrontendAfterImportctAnyOfThePaymentOptionFromPaymentMethod();
    // And User click on the Place Order Button
    this.actionwords.userClickOnThePlaceOrderButton();
    // Then User should be Redirected to Order Success Page with Order details
    this.actionwords.userShouldBeRedirectedToOrderSuccessPageWithOrderDetails();
  });

  it('User performing Checkout as Register User', function () {
    // Tags: LiveTest15Dec
    // Given User is on Checkout page URL of L&S Engineer as REGISTERED USER having checkout page visible properly
    this.actionwords.userIsOnCheckoutPageURLOfLSEngineerAsREGISTEREDUSERHavingCheckoutPageVisibleProperly();
    // Then User redirected to Checkout Page with already saved address in Shipping Address block
    this.actionwords.userRedirectedToCheckoutPageWithAlreadySavedAddressInShippingAddressBlock();
    // And Click on the NEW ADDRESS button should be visible to add new shipping address
    this.actionwords.clickOnTheNEWADDRESSButtonShouldBeVisibleToAddNewShippingAddress();
    // Then The Shipping address pop-up appears to add new address with "CANCEL" and "SHIP HERE" Button
    this.actionwords.theShippingAddressPopupAppearsToAddNewAddressWithP1AndP2Button("CANCEL", "SHIP HERE");
    // And User Click on checkbox 'My billing and shipping address are the same' to select option, the user dont see any options to add different address for billing
    this.actionwords.userClickOnCheckboxMyBillingAndShippingAddressAreTheSameToSelectOptionTheUserDontSeeAnyOptionsToAddDifferentAddressForBilling();
    // And User Click on Checkbox 'My billing and shipping address are the same' to not select checkbox
    this.actionwords.userClickOnCheckboxMyBillingAndShippingAddressAreTheSameToNotSelectCheckbox();
    // Then Billing Address block appears to enter the address as Billing address
    this.actionwords.billingAddressBlockAppearsToEnterTheAddressAsBillingAddress();
    // Then User should be able to see and select any of the Shipping method from Shipping Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfTheShippingMethodFromShippingMethod();
    // Then User can add any note  or instruction in the placeholder below shipping methods
    this.actionwords.userCanAddAnyNoteOrInstructionInThePlaceholderBelowShippingMethods();
    // Then User should be able to see and select any of the payment option from Payment Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfThePaymentOptionFromPaymentMethod();
    // And User click on the Place Order Button
    this.actionwords.userClickOnThePlaceOrderButton();
    // Then User should be Redirected to Order Success Page with Order details
    this.actionwords.userShouldBeRedirectedToOrderSuccessPageWithOrderDetails();
  });

  it('The search suggestion is displayed if the user tries to enter any keyword on the search bar', function () {
    // Tags: LiveTest15Dec
    // Given User have accessed the site
    this.actionwords.userHaveAccessedTheSite();
    // And User enter any keyword on the search bar
    this.actionwords.userEnterAnyKeywordOnTheSearchBar();
    // Then the search suggestion should be  displayed
    this.actionwords.theSearchSuggestionShouldBeDisplayed();
  });

  it('The page redirects to the product page if users click on the product present on the search suggestion', function () {
    // Given User have accessed the site
    this.actionwords.userHaveAccessedTheSite();
    // And User enter any keyword on the search bar
    this.actionwords.userEnterAnyKeywordOnTheSearchBar();
    // And User click on any product
    this.actionwords.userClickOnAnyProduct();
    // Then the page redirects to the product page
    this.actionwords.thePageRedirectsToTheProductPage();
  });

  it('The page redirects to the search result page if users enter any keyword and click on the search icon', function () {
    // Given User have accessed the site
    this.actionwords.userHaveAccessedTheSite();
    // And User enter any keyword on the search bar
    this.actionwords.userEnterAnyKeywordOnTheSearchBar();
    // And User click on the search icon
    this.actionwords.userClickOnTheSearchIcon();
    // Then the page redirects to the search result page
    this.actionwords.thePageRedirectsToTheSearchResultPage();
  });

  it('The categories are present on the search result page', function () {
    // Given User is on the search result page
    this.actionwords.userIsOnTheSearchResultPage();
    // Then the categories should be visible on the search result page
    this.actionwords.theCategoriesShouldBeVisibleOnTheSearchResultPage();
    // And the Category Image, Left Navigation list to redirect on specific Category should be present on the product
    this.actionwords.theCategoryImageLeftNavigationListToRedirectOnSpecificCategoryShouldBePresentOnTheProduct();
  });

  it('The page redirects product page, clicking on the Category visible on the Search Result Page', function () {
    // Given User is on the search result page
    this.actionwords.userIsOnTheSearchResultPage();
    // And User click on the Category in Left Nav/Result listing
    this.actionwords.userClickOnTheCategoryInLeftNavResultListing();
    // Then the page should get redirected to the Next Category listing/product listing page
    this.actionwords.thePageShouldGetRedirectedToTheNextCategoryListingproductListingPage();
  });

  it('User can Filter the search result page', function () {
    // Tags: LiveTest15Dec
    // Given User is on the search result page
    this.actionwords.userIsOnTheSearchResultPage();
    // And User select any option from the Left Navigation section
    this.actionwords.userSelectAnyOptionFromTheLeftNavigationSection();
    // Then the search result page should get updated as per the selected filter option
    this.actionwords.theSearchResultPageShouldGetUpdatedAsPerTheSelectedFilterOption();
  });

  it('The category description is present on the product listing page  with image of the category', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // Then the category description should be visible on the product listing page
    this.actionwords.theCategoryDescriptionShouldBeVisibleOnTheProductListingPage();
  });

  it('The products are present on the product listing page', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // Then the product should be visible on the product listing page
    this.actionwords.theProductShouldBeVisibleOnTheProductListingPage();
    // And the product Image, name, price, view product/add to basket button should be present on the product
    this.actionwords.theProductImageNamePriceViewProductaddToBasketButtonShouldBePresentOnTheProduct();
  });

  it('The page redirects product page, clicking on the Product Image/Name', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // And User click on the view button
    this.actionwords.userClickOnTheViewButton();
    // Then the page should get redirected to the product page
    this.actionwords.thePageShouldGetRedirectedToTheProductPage();
  });

  it('User should be able to add simple products from the product listing page', function () {
    // Given User is on the product listing page which has a simple product
    this.actionwords.userIsOnTheProductListingPageWhichHasASimpleProduct();
    // Then the ‘ADD‘ button should be visible for the simple product
    this.actionwords.theADDButtonShouldBeVisibleForTheSimpleProduct();
    // And the product should get added if I click on the ‘ADD‘ button
    this.actionwords.theProductShouldGetAddedIfIClickOnTheADDButton();
  });

  it('User can sort the product listing page', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // And User select any option from the sort section
    this.actionwords.userSelectAnyOptionFromTheSortSection();
    // Then the product listing page should get updated as per the selected sort option
    this.actionwords.theProductListingPageShouldGetUpdatedAsPerTheSelectedSortOption();
  });

  it('User can filter the product listing page', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // And User select any filter option from the sidebar
    this.actionwords.userSelectAnyFilterOptionFromTheSidebar();
    // Then the product listing page should get updated as per the selected filter option
    this.actionwords.theProductListingPageShouldGetUpdatedAsPerTheSelectedFilterOption();
  });

  it('User can change the ‘view per page’ present on the product listing page', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // And User select any ‘view per page’  option
    this.actionwords.userSelectAnyViewPerPageOption();
    // Then the number of products present on the product listing page should show as per the selected ‘view per page ‘
    this.actionwords.theNumberOfProductsPresentOnTheProductListingPageShouldShowAsPerTheSelectedViewPerPage();
  });

  it('The paginations are visible if the products are more than the ‘view per page’', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // And the products on the product listing page are more than the ‘view per page’
    this.actionwords.theProductsOnTheProductListingPageAreMoreThanTheViewPerPage();
    // Then the pagination should be visible if the products are more than the ‘view per page’
    this.actionwords.thePaginationShouldBeVisibleIfTheProductsAreMoreThanTheViewPerPage();
  });

  it('The page can get redirect to selected pagination', function () {
    // Given User is on the product listing page
    this.actionwords.userIsOnTheProductListingPage();
    // Given the products on the product listing page are more than the ‘view per page’
    this.actionwords.theProductsOnTheProductListingPageAreMoreThanTheViewPerPage();
    // And User select a pagination
    this.actionwords.userSelectAPagination();
    // Then the page should get redirected as per the selected pagination
    this.actionwords.thePageShouldGetRedirectedAsPerTheSelectedPagination();
  });

  it('The category description is present on the category listing page with image of the category', function () {
    // Given User is on the category listing page
    this.actionwords.userIsOnTheCategoryListingPage();
    // Then the category description with sub-categories to redirect should be visible on the category listing page
    this.actionwords.theCategoryDescriptionWithSubcategoriesToRedirectShouldBeVisibleOnTheCategoryListingPage();
  });

  it('The sub-categories are present on the category listing page', function () {
    // Given User is  on the category listing page
    this.actionwords.userIsOnTheCategoryListingPage();
    // Then the sub-categories with list of more sub-categories should be visible on the category listing page
    this.actionwords.theSubcategoriesWithListOfMoreSubcategoriesShouldBeVisibleOnTheCategoryListingPage();
    // And the Category Image, name, list of sub-categories should be present on the product
    this.actionwords.theCategoryImageNameListOfSubcategoriesShouldBePresentOnTheProduct();
  });

  it('Items are visible on mini cart', function () {
    // Tags: LiveTest15Dec
    // Given User is on a product listing page
    this.actionwords.userIsOnAProductListingPage();
    // And User click 'ADD' button to get product added to cart
    this.actionwords.userClickADDButtonToGetProductAddedToCart();
    // When User open the minicart
    this.actionwords.userOpenTheMinicart();
    // Then the product added is visible
    this.actionwords.theProductAddedIsVisible();
  });

  it('Items Items can be updated from the mini cart', function () {
    // Given User is on a product page
    this.actionwords.userIsOnAProductPage();
    // And User open the mini-cart
    this.actionwords.userOpenTheMinicart();
    // When click the increment/decrement button or update the Qty in mini cart
    this.actionwords.clickTheIncrementdecrementButtonOrUpdateTheQtyInMiniCart();
    // Then the Mini Cart is updating with latest updated data
    this.actionwords.theMiniCartIsUpdatingWithLatestUpdatedData();
  });

  it('Items can be removed from the mini cart', function () {
    // Tags: LiveTest15Dec
    // Given User is on a simple product page
    this.actionwords.userIsOnASimpleProductPage();
    // And User open the mini-cart
    this.actionwords.userOpenTheMinicart();
    // When click the bin icon beside a product
    this.actionwords.clickTheBinIconBesideAProduct();
    // Then the product is removed from the cart
    this.actionwords.theProductIsRemovedFromTheCart();
  });

  it('User can be redirected to Basket Page from the mini cart', function () {
    // Tags: LiveTest15Dec
    // Given User is on a simple product page
    this.actionwords.userIsOnASimpleProductPage();
    // And User open the mini-cart
    this.actionwords.userOpenTheMinicart();
    // When click the 'View Basket' button
    this.actionwords.clickTheViewBasketButton();
    // Then the user redirects to the Cart Page
    this.actionwords.theUserRedirectsToTheCartPage();
  });

  it('Items can be redirected to Checkout Page from the mini cart', function () {
    // Given User is on a simple product page
    this.actionwords.userIsOnASimpleProductPage();
    // And User open the mini-cart
    this.actionwords.userOpenTheMinicart();
    // When click the 'Go to Checkout' button
    this.actionwords.clickTheGoToCheckoutButton();
    // Then the user redirects to the Checkout Page
    this.actionwords.theUserRedirectsToTheCheckoutPage();
  });

  it('Items are visible on cart page', function () {
    // Tags: LiveTest15Dec
    // Given User is on a simple product page
    this.actionwords.userIsOnASimpleProductPage();
    // And User click 'Add to Cart'
    this.actionwords.userClickAddToCart();
    // When User navigate to the cart page
    this.actionwords.userNavigateToTheCartPage();
    // Then User can see the added product
    this.actionwords.userCanSeeTheAddedProduct();
  });

  it('Items can be removed from the cart', function () {
    // Given User is on a simple product page
    this.actionwords.userIsOnASimpleProductPage();
    // And User click 'Add to Cart'
    this.actionwords.userClickAddToCart();
    // When User navigate to the cart page
    this.actionwords.userNavigateToTheCartPage();
    // And click the bin icon beside a product
    this.actionwords.clickTheBinIconBesideAProduct();
    // Then the product is removed from the cart
    this.actionwords.theProductIsRemovedFromTheCart();
  });

  it('User should be able to Submit Contact Us form', function () {
    // Given I have accessed the Contact us page on the site
    this.actionwords.iHaveAccessedTheContactUsPageOnTheSite();
    // And Fill in the form with all required details
    this.actionwords.fillInTheFormWithAllRequiredDetails();
    // And Clicked on Submit Button
    this.actionwords.clickedOnSubmitButton();
    // Then contact us form should get submitted succesfully
    this.actionwords.contactUsFormShouldGetSubmittedSuccesfully();
  });

  it('User should be able to View Blog Pages', function () {
    // Given I have accessed the Blog page on the site
    this.actionwords.iHaveAccessedTheBlogPageOnTheSite();
    // And navigate to any Blog
    this.actionwords.navigateToAnyBlog();
    // Then Blog Page should be displaying fine on the front-end
    this.actionwords.blogPageShouldBeDisplayingFineOnTheFrontend();
  });

  it('User performing Checkout with Purchase Order (For GUEST/ REGISTERED/ TRADE User)', function () {
    // Given User is on Checkout page URL of L&S Engineer having checkout page visible properly
    this.actionwords.userIsOnCheckoutPageURLOfLSEngineerHavingCheckoutPageVisibleProperly();
    // Then User should be able to see Shipping/Billing Address, Shipping Method, Payment Method, Order Summary block with Place Order button
    this.actionwords.userShouldBeAbleToSeeShippingBillingAddressShippingMethodPaymentMethodOrderSummaryBlockWithPlaceOrderButton();
    // Then User should be able to see and select any of the Shipping method from Shipping Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfTheShippingMethodFromShippingMethod();
    // Then User can add any note  or instruction in the placeholder below shipping methods
    this.actionwords.userCanAddAnyNoteOrInstructionInThePlaceholderBelowShippingMethods();
    // Then User should be able to see and select purchsae Order Payment Method
    this.actionwords.userShouldBeAbleToSeeAndSelectPurchsaeOrderPaymentMethod();
    // And User click on the Place Order Button
    this.actionwords.userClickOnThePlaceOrderButton();
    // Then User should be Redirected to Order Success Page
    this.actionwords.userShouldBeRedirectedToOrderSuccessPage();
  });

  it('User performing Checkout with Credit Card (For GUEST/ REGISTERED/ TRADE User)', function () {
    // Tags: LiveTest15Dec
    // Given User is on Checkout page URL of L&S Engineer having checkout page visible properly
    this.actionwords.userIsOnCheckoutPageURLOfLSEngineerHavingCheckoutPageVisibleProperly();
    // Then User should be able to see Shipping/Billing Address, Shipping Method, Payment Method, Order Summary block with Place Order button
    this.actionwords.userShouldBeAbleToSeeShippingBillingAddressShippingMethodPaymentMethodOrderSummaryBlockWithPlaceOrderButton();
    // Then User should be able to see and select any of the Shipping method from Shipping Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfTheShippingMethodFromShippingMethod();
    // Then User can add any note  or instruction in the placeholder below shipping methods
    this.actionwords.userCanAddAnyNoteOrInstructionInThePlaceholderBelowShippingMethods();
    // Then User should be able to see and select Credit Card Payment Method
    this.actionwords.userShouldBeAbleToSeeAndSelectCreditCardPaymentMethod();
    // And User click on the Place Order Button
    this.actionwords.userClickOnThePlaceOrderButton();
    // Then User needs to enter the 3DS Authentications to validate payment details successfully
    this.actionwords.userNeedsToEnterThe3DSAuthenticationsToValidatePaymentDetailsSuccessfully();
    // Then User should be Redirected to Order Success Page with Order details
    this.actionwords.userShouldBeRedirectedToOrderSuccessPageWithOrderDetails();
  });

  it('User performing Checkout with PAYPAL (For GUEST/ REGISTERED/ TRADE User)', function () {
    // Given User is on Checkout page URL of L&S Engineer having checkout page visible properly
    this.actionwords.userIsOnCheckoutPageURLOfLSEngineerHavingCheckoutPageVisibleProperly();
    // Then User should be able to see Shipping/Billing Address, Shipping Method, Payment Method, Order Summary block with Place Order button
    this.actionwords.userShouldBeAbleToSeeShippingBillingAddressShippingMethodPaymentMethodOrderSummaryBlockWithPlaceOrderButton();
    // Then User should be able to see and select any of the Shipping method from Shipping Method
    this.actionwords.userShouldBeAbleToSeeAndSelectAnyOfTheShippingMethodFromShippingMethod();
    // Then User can add any note  or instruction in the placeholder below shipping methods
    this.actionwords.userCanAddAnyNoteOrInstructionInThePlaceholderBelowShippingMethods();
    // Then User should be able to see and select PAYPAL Payment Method
    this.actionwords.userShouldBeAbleToSeeAndSelectPAYPALPaymentMethod();
    // And User click on the Place Order Button
    this.actionwords.userClickOnThePlaceOrderButton();
    // Then User should be Redirected to Order Success Page with Order details
    this.actionwords.userShouldBeRedirectedToOrderSuccessPageWithOrderDetails();
  });
});
