import { test, expect } from '@playwright/test';



test.describe('Group1',()=>{
test('tes', async ({ page }) =>{

  


  await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login');
  
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('venkatasai250@gmail.com');
  
  await page.getByRole('textbox', { name: 'Password' }).fill('8897624308');
  await page.locator('//*[@id="content"]/div/div[2]/div/form/input').click();
 
  
  
  await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible();

 

})

test('radi', async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/register")
    const radio = await page.locator('//*[@id="content"]/form/div/div/input[1]')
    await radio.click();
    await expect(radio).toBeChecked();

})
})
test.describe('Group2',() =>{
test('homepage', async({page})=>{
await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
await page.locator('//*[@id="input-email"]').fill("venkatasai250@gmail.com")
await page.locator('//*[@id="input-password"]').fill("8897624308")
await page.waitForTimeout(3000)
await page.click('//*[@id="content"]/div/div[2]/div/form/input')
const logutlink = await page.locator('//*[@id="column-right"]/div/a[13]')
await page.waitForTimeout(3000)
await expect(logutlink).toBeVisible
})
test('enabled', async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=account/login")
    const enabl = await page.locator('//*[@id="search"]/input')
    await expect(enabl).toBeEnabled()
})
})

test.describe('Group3',()=>{
test('en', async({page})=>{
   await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
   await page.screenshot({path:'tests/screenshots/'+Date.now()+'loginpage.png'})
})
test('e', async({page})=>{
   await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
   await page.screenshot({path:'tests/screenshots/'+Date.now()+'loginpage.png',fullPage:true})
})
test('sc',async({page})=>{
     await page.goto('https://tutorialsninja.com/demo/index.php?route=product/search&search=mac')
     await page.locator('//*[@id="content"]/div[3]/div[1]').screenshot({path:'tests/screenshots/'+Date.now()+'next.png'})
})
})