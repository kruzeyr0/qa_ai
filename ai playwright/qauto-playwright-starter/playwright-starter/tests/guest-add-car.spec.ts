import { expect, test } from '@playwright/test';
import { GaragePage } from '../pages/garage.page';

const car = {
  brand: 'Audi',
  model: 'TT',
  mileage: '12000'
};

test('guest can add, verify, remove a car and log out', async ({ page }) => {
  const garagePage = new GaragePage(page);
  const expectedCreatedAt = new Intl.DateTimeFormat('uk-UA', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(new Date());

  await page.goto('/');
  await garagePage.loginAsGuest();

  await expect(page).toHaveURL(/panel\/garage/);
  await expect(garagePage.garageHeading).toBeVisible();

  await garagePage.openAddCar();
  await expect(garagePage.selectedOption(garagePage.brandSelect, car.brand)).toBeAttached();
  await expect(garagePage.selectedOption(garagePage.modelSelect, car.model)).toBeAttached();

  await garagePage.addCar(car.mileage);

  const carCard = garagePage.carCard(car.brand, car.model);
  await expect(carCard).toContainText(`${car.brand} ${car.model}`);
  await expect(garagePage.carMileageInput(carCard)).toHaveValue(car.mileage);

  await garagePage.openCarEditor(carCard);
  await expect(garagePage.createdAtDateInput).toHaveValue(expectedCreatedAt);

  await garagePage.removeCar();
  await expect(carCard).toHaveCount(0);

  await garagePage.logout();
});
