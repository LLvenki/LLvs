import { test, expect } from '@playwright/test';
test('findElements', async({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=product/search&search=mac")
const links = await page.$$('a');
for(const link of links){
    const linktext =  await link.textContent();
    console.log(linktext);
}
})
test('findElement', async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=product/search&search=mac")
    const product = await page.$$('//*[@id="content"]/div[3]')
    for(const p of product){
       const productname = await p.textContent();
       console.log(productname);
    }
})
test('built', async({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=product/product&product_id=40");
 const logo = await page.getByAltText('iPhone')
 await expect(logo).toBeVisible
})
test('placeholder', async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
    await page.getByPlaceholder('E-Mail Address').fill("venkatasai250@gmail.com")
    await page.getByPlaceholder('Password').fill("8897624308")
    const acc = await page.locator('//*[@id="content"]/h2[1]')
    await expect(await page.getByText(acc)).toBeVisible
})
test('assertions', async({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=account/login")
})
test('Assert', async({page})=>{
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
      await expect(page).toHaveTitle('Account Login')

})
test('visible', async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
    const visi = await page.locator('//*[@id="content"]/div/div[2]/div/h2')
     await expect(visi).toBeVisible();

})
test('enabled', async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
    const enabl = await page.locator('//*[@id="search"]/input')
    await expect(enabl).toBeEnabled()
})
test('radi', async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")
    const radio = await page.locator('//*[@id="content"]/form/div/div/input[1]')
    await radio.click();
    await expect(radio).toBeChecked();

})
test('radio', async({page})=>{
        await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")

})