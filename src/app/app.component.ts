import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent {
  title = 'Restaurt';
  items: any;
  scroll: number;
  ngOnInit(): void {
    window.scroll(0, 0);
    this.items = [
      {
        label: 'HOME',
        routerLink: ['/home'],
      },
      {
        label: 'PAGES',
        items: [
          {
            label: 'About Us',
          },
          {
            label: 'Our Team',
          },
          {
            label: 'Faq',
          },
          {
            label: 'Our Services',
            items: [
              {
                label: 'Services Grid',
              },
              {
                label: 'Services List',
              },
              {
                label: 'Services Single',
              },
            ],
          },
          {
            label: 'Shop',
            items: [
              {
                label: 'Cart',
              },
              {
                label: 'Checkout',
              },
              {
                label: 'My Account',
              },
            ],
          },
        ],
      },
      {
        label: 'MENU',
        items: [
          {
            label: 'Reservation Form',
            routerLink: ['/reservation/reservation'],
          },
          {
            label: 'Reservation Form 2',
          },
          {
            label: 'Our Menus',
            items: [
              {
                label: 'Menu',
              },
              {
                label: 'Menu list 2',
              },
              {
                label: 'Menu Tabs',
              },
            ],
          },
        ],
      },
      {
        label: 'PORTFOLIO',
        items: [
          {
            label: 'Portfolio Grid',
            items: [
              {
                label: 'Portfolio 2 Columns',
              },
              {
                label: 'Portfolio 3 Columns',
              },
              {
                label: 'Portfolio 4 Columns',
              },
              {
                label: 'Portfolio No Gutter',
              },
            ],
          },
          {
            label: 'Portfolio Masonry',
          },
          {
            label: 'Portfolio Slider',
          },
          {
            label: 'Portfolio Slider 2',
          },
          {
            label: 'Portfolio Single',
          },
        ],
      },
      {
        label: 'BLOG',
        items: [
          {
            label: 'Blog Grid',

            items: [
              {
                label: 'Blog Grid 2 Columns',
              },
              {
                label: 'Blog Grid 3 Columns',
              },
              {
                label: 'Blog Grid 4 Columns',
              },
            ],
          },
          {
            label: 'Blog Grid Overlay',
          },
          {
            label: 'Blog List',
          },
          {
            label: 'Blog Single',
          },
        ],
      },
      {
        label: 'CONTACT US',
        routerLink: ['/reservation/contactus'],
      },
      {
        icon: 'pi pi-fw pi-search',
      },
    ];
  }
  // ngAfterViewChecked() {
  //   this.scroll = window.pageYOffset;
  // }
  ngDoCheck() {
    this.scroll = window.pageYOffset;
  }

  // ngAfterContentChecked() {
  //   this.scroll = window.pageYOffset;
  // }
}
