import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Services } from './services/services';
import { Features } from './features/features';
import { Testimonials } from './testimonials/testimonials';
import { Pricing } from './pricing/pricing';
import { Contact } from './contact/contact';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [
    Hero,
    About,
    Services,
    Features,
    Testimonials,
    Pricing,
    Contact,
    Navbar,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
