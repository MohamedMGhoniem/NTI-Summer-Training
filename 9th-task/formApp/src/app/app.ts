import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  product = this.resetForm();
  products: {
    name: string;
    description: string;
    price: number;
    category: string;
    available: boolean;
  }[] = [];

  isEditing = false;
  editingIndex: number | null = null;
  searchTerm = '';
  selectedCategory = '';

  categories = ['Electronics', 'Books', 'Clothing', 'Home Appliances'];

  resetForm() {
    return {
      name: '',
      description: '',
      price: 0,
      category: '',
      available: false,
    };
  }

  addOrUpdateProduct() {
    if (!this.validateForm()) return;

    if (this.isEditing && this.editingIndex !== null) {
      this.products[this.editingIndex] = { ...this.product };
      this.isEditing = false;
      this.editingIndex = null;
    } else {
      this.products.push({ ...this.product });
    }

    this.product = this.resetForm();
  }

  validateForm(): boolean {
    const { name, description, price, category } = this.product;
    if (!name.trim() || !description.trim() || price <= 0 || !category) {
      alert('Please fill in all required fields with valid data.');
      return false;
    }
    return true;
  }

  editProduct(index: number) {
    this.product = { ...this.products[index] };
    this.isEditing = true;
    this.editingIndex = index;
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
  }

  get filteredProducts() {
    return this.products.filter((p) => {
      const matchesSearch =
        this.searchTerm === '' ||
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory =
        this.selectedCategory === '' || p.category === this.selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }
}
