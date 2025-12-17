import { test, expect } from '@playwright/test';
import { assert } from 'console';
import { ECDH } from 'crypto';
test.describe('two tests', () => {
 test('Loginpage@smoke', async({page})=>{
await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
await page.locator('//*[@id="input-email"]').fill('venkatasai250@gmail.com')
await page.locator('//*[@id="input-password"]').fill('8897624308')
await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
const St = await page.locator('//*[@id="content"]/h2[1]')
await expect(St).toBeVisible('My Account')
await page.close();
})
test('failedtest @smoke',async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
await page.locator('//*[@id="input-password"]').fill('889764308')
await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
const pag = await page.locator('//*[@id="account-login"]/div[1]');
await expect(pag).toBeVisible('Warning: No match for E-Mail Address and/or Password.')

} )

test('failedtest2 @smoke',async({page})=>{
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
await page.locator('//*[@id="input-password"]').fill('889764308')
await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
const pag = await page.locator('//*[@id="account-login"]/div[1]');
await expect(pag).toBeVisible('Warning: No match for E-Mail Address and/or Password.')


})
  });

test.describe('resisterfunctionality',()=>{
test('register functionality', async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    await page.locator('//*[@id="input-firstname"]').fill('lakkakula');
    await page.locator('//*[@id="input-lastname"]').fill('venkata');
    await page.locator('//*[@id="input-email"]').fill('lakkakulavenkatasai72@gmail.com');
    await page.locator('//*[@id="input-telephone"]').fill('7397449070');
    await page.locator('//*[@id="input-password"]').fill('8897624308Aa@#');
    await page.locator('//*[@id="input-confirm"]').fill('8897624308Aa@#');
    await page.locator('//*[@id="content"]/form/fieldset[3]/div/div/label[1]/input').click();
    await page.locator('//*[@id="content"]/form/div/div/input[1]').click();
    await page.locator('//*[@id="content"]/form/div/div/input[2]').click();

})
test('validating the same data', async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    await page.locator('//*[@id="input-firstname"]').fill('lakkakula');
    await page.locator('//*[@id="input-lastname"]').fill('venkata');
    await page.locator('//*[@id="input-email"]').fill('lakkakulavenkatasai72@gmail.com');
    await page.locator('//*[@id="input-telephone"]').fill('7397449070');
    await page.locator('//*[@id="input-password"]').fill('8897624308Aa@#');
    await page.locator('//*[@id="input-confirm"]').fill('8897624308Aa@#');
    await page.locator('//*[@id="content"]/form/fieldset[3]/div/div/label[1]/input').click();
    await page.locator('//*[@id="content"]/form/div/div/input[1]').click();
    await page.locator('//*[@id="content"]/form/div/div/input[2]').click();
    await expect(await page.locator('//*[@id="account-register"]/div[1]')).toBeVisible('Warning: E-Mail Address is already registered!')
})
test('incorrect password', async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    await page.locator('//*[@id="input-firstname"]').fill('lakkakula');
    await page.locator('//*[@id="input-lastname"]').fill('venkata');
    await page.locator('//*[@id="input-email"]').fill('lakkakulavenkatasai72@gmail.com');
    await page.locator('//*[@id="input-telephone"]').fill('7397449070');
    await page.locator('//*[@id="input-password"]').fill('8897624308Aa@#');
    await page.locator('//*[@id="input-confirm"]').fill('8897624308Aa');
    await page.locator('//*[@id="content"]/form/fieldset[3]/div/div/label[1]/input').click();
    await page.locator('//*[@id="content"]/form/div/div/input[1]').click();
    await page.locator('//*[@id="content"]/form/div/div/input[2]').click();
    const str = await page.locator('//*[@id="content"]/form/fieldset[2]/div[2]/div/div');
    await expect(str).toBeVisible('//*[@id="content"]/form/fieldset[2]/div[2]/div/div');
})
test('incorrectpassword', async ({ page }) => {    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');
    await page.locator('//*[@id="input-firstname"]').fill('lakkakula');
    await page.locator('//*[@id="input-lastname"]').fill('venkata');
    await page.locator('//*[@id="input-email"]').fill('lakkakulavenkatasai72@gmail.com');
    await page.locator('//*[@id="input-telephone"]').fill('7397449070');
    await page.locator('//*[@id="input-password"]').fill('8897624308Aa@#');
    await page.locator('//*[@id="input-confirm"]').fill('8897624308Aa');
    await page.locator('//*[@id="content"]/form/fieldset[3]/div/div/label[1]/input').click();
    await page.locator('//*[@id="content"]/form/div/div/input[1]').click();
    await page.locator('//*[@id="content"]/form/div/div/input[2]').click();
    const str = await page.locator('//*[@id="content"]/form/fieldset[2]/div[2]/div/div');
    await expect(str).toBeVisible('//*[@id="content"]/form/fieldset[2]/div[2]/div/div');
})
})
test.describe('searchfunctonality',()=>{
    test('Verify search with a single valid keyword.',async({page})=>{
        await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
        const results = await page.locator('//*[@id="search"]/input')
        await expect(results).toBeVisible();
        results.fill('mac');
        await results.press('Enter');
        const finalresult = await page.locator('//*[@id="content"]/h1');
        await expect(finalresult).toContainText('Search - mac');

    })
    test('Verify search with an empty query.',async({page})=>{
     await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
     const search = await page.locator('//*[@id="search"]/input');
     await expect(search).toBeVisible();
     await search.press('Enter')
     const finalresult = await page.locator('//*[@id="content"]/p[2]');
     await expect(finalresult).toContainText('There is no product that matches the search criteria.')
    })
    test('Verify search with special characters.', async({page})=>{
             await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
                  const search = await page.locator('//*[@id="search"]/input')
        await search.fill('C++');
                await search.press('Enter');
                const finalresult = await page.locator('//*[@id="content"]/p[2]');
     await expect(finalresult).toContainText('There is no product that matches the search criteria.')
    

    })
    test ('Verify search with no matching results.', async({page})=>{
                     await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
                  const search = await page.locator('//*[@id="search"]/input')
                          await search.fill('asdfghjkl');
                          await search.press('Enter');
   const finalresult = await page.locator('//*[@id="content"]/p[2]');
     await expect(finalresult).toContainText('There is no product that matches the search criteria.')

    })
    test('Verify search with case sensitivity.',async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
    const search = await page.locator('//*[@id="search"]/input')
     await search.fill('apple');
     await search.press('Enter');
     const Lowerresults = await page.locator('//*[@id="content"]/div[3]/div/div/div[2]/div[1]/h4/a')
     await expect(Lowerresults).toBeVisible();
     const lower = Lowerresults.allInnerTexts();
      await search.fill('Apple');
     await search.press('Enter');
     const Upperresults = await page.locator('//*[@id="content"]/div[3]/div/div/div[2]/div[1]/h4/a');
     await expect(Upperresults).toBeVisible();
     const Upper = Upperresults.allInnerTexts();
        if (JSON.stringify(Upper) === JSON.stringify(lower)) {
    console.log('is correct');
  } else {
    console.log('incorrect');
  }
    })
})
test.describe('addtocart',()=>{
   test('Add a single product to the cart',async({page})=>{
        await page.goto('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40');
        const addtocart = await page.locator('#button-cart')
        await expect(addtocart).toBeVisible();
        await addtocart.click();
        const successpage = page.locator('#product-product > div.alert.alert-success.alert-dismissible');
        await expect(successpage).toBeVisible();
        const messsagetext = await successpage.innerText();
        expect(messsagetext).toContain('Success: You have added iPhone to your shopping cart!')
        const count = await page.locator('#input-quantity');
        await expect(count).toBeVisible();
        const text = await count.inputValue();
        await expect(text).toBe('1')
    })
    test.skip('Add different products to the cart',async({page})=>{
        await page.goto('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40');
    await page.waitForTimeout(3000);
    const A = await page.locator('//*[@id="button-cart"]');
    await A.click();
    const resultA = await page.locator('#product-product > div.alert.alert-success.alert-dismissible');
    await page.waitForTimeout(3000);
     const final = await resultA.innerText();   // ✅ use innerText instead of inputValue
  expect(final).toContain('Success: You have added');  
     await page.goto('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43&search=mac');
     const B = await page.locator('//*[@id="button-cart"]')
     await B.click();
     const resultB = await page.locator('#product-product > div.alert.alert-success.alert-dismissible');
     const semi = await resultB.innerText();
     await expect(semi).toContain('Success: You have added');
     const Cart = await page.locator('//*[@id="cart-total"]')
     await expect(Cart).toBeVisible();
     const addtocart = await Cart.innerText();
     await expect(addtocart).toContain('2');
     await page.click('#cart > button');
     await page.click('#cart > ul > li:nth-child(2) > div > p > a:nth-child(1) > strong');

    })
    test('Verify behavior when adding an out-of-stock product to the cart',async({page})=>{
        await page.goto('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=30');
        const addtocart = await page.locator('//*[@id="button-cart"]');
        addtocart.click();
        await expect(addtocart).toBeVisible();
        if(addtocart.isDisabled()){
            console.log('is disabled')
        }else{
            console.log('is avaliable')
        }
     
    })
    test('Verify cart is empty after successful order placement', async({page})=>{
        await page.goto('https://tutorialsninja.com/demo/index.php?route=checkout/cart');
        await page.click('#content > div.row > div:nth-child(1) > div > div.button-group > button:nth-child(1) > span')
        await page.click('#cart > button');
        await page.click('//*[@id="cart"]/ul/li[2]/div/p/a[1]/strong');
        const cartItems = await page.$$('table.table tbody tr');
        expect(cartItems.length).toBeGreaterThan(0);
        await page.click('//*[@id="content"]/div[3]/div[2]/a');

    })
    test.only('Verify cart is empty after removing all items', async ({ page }) => {
  // Start from home page
  await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');

  // Add product (MacBook)
  await page.click('text=MacBook');
  await page.click('#button-cart');

  // Go to cart
  await page.click('a[title="Shopping Cart"]');

  

  // Remove items
  let removeButtons = await page.locator('button.btn-danger');
while (removeButtons.length > 0) {
  await removeButtons[0].click();
  await page.waitForTimeout(1000);
  removeButtons = await page.$$('button.btn-danger'); // refresh list
}


  // Verify empty cart message
  const emptyCartMessage = await page.locator('#content p');
  await expect(emptyCartMessage).toContainText('Your shopping cart is empty!');
});
test('Verify Proceed button works correctly', async({page})=>{
    await page.locator('https://tutorialsninja.com/demo/index.php?route=common/home')
    await page.locator('//*[@id="content"]/div[2]/div[1]/div/div[2]/h4/a').click();
    await page.click('//*[@id="button-cart"]');
    
})
})


