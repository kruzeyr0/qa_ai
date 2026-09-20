import type { Locator, Page } from '@playwright/test';

export class GaragePage {
  readonly guestLoginButton: Locator;
  readonly garageHeading: Locator;
  readonly addCarButton: Locator;
  readonly addCarDialog: Locator;
  readonly brandSelect: Locator;
  readonly modelSelect: Locator;
  readonly mileageInput: Locator;
  readonly addButton: Locator;
  readonly editCarDialog: Locator;
  readonly createdAtDateInput: Locator;
  readonly removeCarButton: Locator;
  readonly removeCarDialog: Locator;
  readonly confirmRemoveButton: Locator;
  readonly profileButton: Locator;
  readonly logoutButton: Locator;

  constructor(private readonly page: Page) {
    this.guestLoginButton = page.getByRole('button', { name: 'Guest log in' });
    this.garageHeading = page.getByRole('heading', { name: 'Garage' });
    this.addCarButton = page.getByRole('button', { name: 'Add car' });
    this.addCarDialog = page.getByRole('dialog');
    this.brandSelect = this.addCarDialog.getByRole('combobox', { name: 'Brand' });
    this.modelSelect = this.addCarDialog.getByRole('combobox', { name: 'Model' });
    this.mileageInput = this.addCarDialog.getByRole('spinbutton', { name: 'Mileage' });
    this.addButton = this.addCarDialog.getByRole('button', { name: 'Add' });
    this.editCarDialog = page.getByRole('dialog');
    this.createdAtDateInput = this.editCarDialog.getByRole('textbox', { name: 'Created at date' });
    this.removeCarButton = this.editCarDialog.getByRole('button', { name: 'Remove car' });
    this.removeCarDialog = page.getByRole('dialog');
    this.confirmRemoveButton = this.removeCarDialog.getByRole('button', { name: 'Remove' });
    this.profileButton = page.getByRole('button', { name: /my profile/i });
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
  }

  carCard(brand: string, model: string): Locator {
    return this.page.getByRole('listitem').filter({ hasText: `${brand} ${model}` });
  }

  editCarButton(carCard: Locator): Locator {
    return carCard.locator('button.car_edit');
  }

  carMileageInput(carCard: Locator): Locator {
    return carCard.getByRole('spinbutton');
  }

  selectedOption(select: Locator, name: string): Locator {
    return select.getByRole('option', { name, selected: true });
  }

  async loginAsGuest(): Promise<void> {
    await this.guestLoginButton.click();
  }

  async openAddCar(): Promise<void> {
    await this.addCarButton.click();
  }

  async addCar(mileage: string): Promise<void> {
    await this.mileageInput.fill(mileage);
    await this.addButton.click();
  }

  async openCarEditor(carCard: Locator): Promise<void> {
    await this.editCarButton(carCard).click();
  }

  async removeCar(): Promise<void> {
    await this.removeCarButton.click();
    await this.confirmRemoveButton.click();
  }

  async logout(): Promise<void> {
    await this.profileButton.click();
    await this.logoutButton.click();
  }
}
