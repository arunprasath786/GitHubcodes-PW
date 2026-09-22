import test, { expect } from "@playwright/test";

test('marathon practice decathlon',async({page})=>{
    await page.goto('https://www.decathlon.in/')
   const title= await page.title()
   await expect(page).toHaveTitle(title)
   await page.locator('//input[@type="search"]').click()
   await page.locator('//input[@type="search"]').fill('shoes')
   await page.locator('//input[@type="search"]').press('Enter')
   const title1 = await page.title()
if(title1.includes('shoes')){
    console.log('page verified');
    
}
await page.locator('//span[text()="Gender"]').click()
//await page.getByRole('button',{name:'Gender'}).click()
await page.locator('//label[@data-test-id="filter-item-gender_id_en-MEN"]').click()
//await page.getByRole('button',{name:'Sport'}).scrollIntoViewIfNeeded()
await page.locator('//span[text()="Sport"]').click()
//await page.locator('//label[@data-test-id="filter-item-sport_pratice_en-Running"]').scrollIntoViewIfNeeded()
await page.locator('//label[@data-test-id="filter-item-sport_pratice_en-Running"]').click()
//await page.getByRole('button',{name:'Size'}).click()
//await page.locator('//label[@data-test-id="filter-item-indian_size-10"]').click()
await page.locator('(//button[@aria-haspopup="listbox"])[1]').click()
await page.locator('//span[text()="Highest discount "]').click()
await page.locator('(//div[@data-test-id="product-card:product-card:title"])[1]').click()
//await page.locator('//div[@aria-label="Close"]').click()
console.log("first filtered product name is =", await page.locator('(//div[@data-test-id="product-card:product-card:title"])[1]').innerText());
const FirstProd = await page.locator('(//div[@data-test-id="product-card:product-card:title"])[1]').innerText()
/*
const DpageProd = await page.locator('//h1[@data-test-id="pdp-product-info-name"]').innerText()
console.log(DpageProd);

if(FirstProd.includes(DpageProd)){
console.log("Product text verified");
}
else{
    console.log("Don't match");
    
}*/
await page.locator('//button[@aria-label="Select size 7"]').click()
await page.getByRole('button',{name:'Add to cart'}).click()
await page.locator('//a[@data-test-id="header-desktop:cart-link"]').click()

//const cartProd = await page.locator('//span[@data-test-id="text:cart-product-name"]').innerText()
//console.log(cartProd);

   
})