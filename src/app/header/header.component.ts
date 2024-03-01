import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScreenSmall = false;
  isOpen = false;

  constructor (private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(value => this.isOpen = false);

    this.updateNav();
  }

  @HostListener('window:resize') updateNav() {
    if (window.innerWidth <= 1200) {
      this.isScreenSmall = true;
    } else {
      this.isScreenSmall = false;
    }

    if (window.innerWidth > 1200) {
      this.isOpen = false;
    }
  }

  toggleNav() {
    this.isOpen = !this.isOpen;
  }
}
