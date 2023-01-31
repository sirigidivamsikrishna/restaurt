import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { product } from '../../interfaces/interface';
import { trigger, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items: MenuItem[];
  products: product[];
  images: any[];
  Menu: any[];
  persons: string[];
  time: string[];
  responsiveOptions: {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }[];
  scroll: any;
  minDate: Date;
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '480px',
        numVisible: 1,
        numScroll: 1,
      },
    ];

    this.time = ['06:00 pm', '07:00 pm', '08:00 pm', '09:00 pm', '10:00 pm'];
    this.persons = [
      '1 Persons',
      '2 Persons',
      '3 Persons',
      '4 Persons',
      '5 Persons',
      '6 Persons',
      '7 Persons',
    ];
  }

  ngOnInit(): void {
    window.scroll(0, 0);
    this.minDate = new Date();
    this.images = [
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-blog-5-1-1-pwvfstuiw6vn5wqvxsoygbgt0rn52z1omurlfl94g8.jpg',
        button: 'Recipes',
        text: 'How to Start Reasturent Business In 2022 ',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-blog-9-1-1-pwvfswo1gozi4qmshbwu5sr6sx98q2cvn8q1vf4xxk.jpg',
        button: 'Starters',
        text: 'What is the Process for Order Food Online? ',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/blog-img-pya1a69rg5uf3lsynqi4om2tyeyyuvoj4s1lfd01c8.jpg',
        button: 'Daily Menu',
        text: 'Things to Know When Choosing Foods ',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/blog-img-pya1a69rg5uf3lsynqi4om2tyeyyuvoj4s1lfd01c8.jpg',
        button: 'Daily Menu',
        text: 'Things to Know When Choosing Foods ',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-blog-4-1-1-pwvfsswopcucuas93aabvtpcfdrrv9xyaq43ybaimg.jpg',
        button: 'Food & Drinks',
        text: 'Colour Spicy to Spring in Your Table',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-blog-10-1-1-pwvfsvq79uy7t4o5mti7lazq7jdvid95b42ke56c3s.jpg',
        button: 'Healthy Food',
        text: '4 Ways to Create Extra Space in Small Tables',
      },
    ];

    this.products = [
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/team-7-1.jpg',
        name: 'Miller Ethan',
        designation: 'SENIOR CHEF',
        icon: 'https://elementor.zozothemes.com/restaurt/wp-content/themes/restaurt/assets/images/team-badge.png',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/team-1-1-1.jpg',
        name: 'Laurance Wilburn',
        designation: 'MAIN CHEFS',
        icon: 'https://elementor.zozothemes.com/restaurt/wp-content/themes/restaurt/assets/images/team-badge.png',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/team-6-1-1.jpg',
        name: 'Katie Kelley',
        designation: 'RESTAURT MANAGER',
        icon: 'https://elementor.zozothemes.com/restaurt/wp-content/themes/restaurt/assets/images/team-badge.png',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/team-5-1-1.jpg',
        name: 'Marian Widjya',
        designation: 'CLEANER HEAD',
        icon: 'https://elementor.zozothemes.com/restaurt/wp-content/themes/restaurt/assets/images/team-badge.png',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/team-3-1-1.jpg',
        name: 'Adam Smith',
        designation: 'RESTA MARKETING',
        icon: 'https://elementor.zozothemes.com/restaurt/wp-content/themes/restaurt/assets/images/team-badge.png',
      },
      {
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/2019/04/team-2-1-1.jpg',
        name: 'Daniel Matthew',
        designation: 'HEAD CHEF',
        icon: 'https://elementor.zozothemes.com/restaurt/wp-content/themes/restaurt/assets/images/team-badge.png',
      },
    ];
    this.Menu = [
      {
        text1: 'Raw Scallops from Erquy',
        text2: 'Candied Jerusalem artichokes, truffle',
        num: '$32.08',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product3-1-1-pwvfsyjjmp7xa6jg293neioggyg57yzgr9by91pc04.jpg',
      },

      {
        text1: 'Raw Scallops from Erquy',
        text2: 'Candied Jerusalem artichokes, truffle',
        num: '$32.07',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product9-1-1-pwvfszhdtj97lsi2wri9z0fx2cbifo373dzfqbnxtw.jpg',
      },

      {
        text1: 'Greek Salab',
        text2: 'Sliced cucumbers, tomatoes, green bell pepper, red onion',
        num: '$34.95',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product6-1-1-pwvfszhdtj97lsi2wri9z0fx2cbifo373dzfqbnxtw.jpg',
      },
      {
        text1: 'Greek Salab',
        text2: 'Sliced cucumbers, tomatoes, green bell pepper, red onion',
        num: '$34.95',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product15-1-1-pwvft0f80dahxegpr9wwji7dnq6vnd6xfimx7lmjno.jpg',
      },
      {
        text1: 'Tender Octopus and Fennel',
        text2: ' Citrus, wild rocket condiment',
        num: '$36.95',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product22-1-1-pwvft1d277bs90fclsbj3zyu9428v2anrnaeovl5hg.jpg',
      },

      {
        text1: 'Tender Octopus and Fennel',
        text2: ' Citrus, wild rocket condiment',
        num: '$36.95',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product26-1-1-pwvft2awe1d2kmdzgaq5ohqauhxm2ree3rxw65jrb8.jpg',
      },
      {
        text1: ' Celeriac and Truffle Ravioli',
        text2: ' Roasted langoustine, consommé',
        num: '$17.95',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product8-1-1-pwvfszhdtj97lsi2wri9z0fx2cbifo373dzfqbnxtw.jpg',
      },

      {
        text1: ' Celeriac and Truffle Ravioli',
        text2: ' Roasted langoustine, consommé',
        num: '$17.95',
        image:
          'https://elementor.zozothemes.com/restaurt/wp-content/uploads/sites/58/elementor/thumbs/r-product30-1-1-pwvft2awe1d2kmdzgaq5ohqauhxm2ree3rxw65jrb8.jpg',
      },
    ];

    this.items = [
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
          // {
          //   label: 'Portfolio Slider',
          //   icon: 'pi pi-fw pi-users',
          //   items: [
          //     {
          //       label: 'Filter',
          //       icon: 'pi pi-fw pi-filter',
          //       items: [
          //         {
          //           label: 'Print',
          //           icon: 'pi pi-fw pi-print',
          //         },
          //       ],
          //     },
          //     {
          //       icon: 'pi pi-fw pi-bars',
          //       label: 'List',
          //     },
          //   ],
          // },
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
      },
      {
        icon: 'pi pi-fw pi-search',
      },
    ];
    //  var prevScrollpos = window.pageYOffset;
    //  window.onscroll = function () {
    //    var currentScrollPos = window.pageYOffset;
    //    if (prevScrollpos > currentScrollPos) {
    //      document.getElementById('navbar').style.top = '0';
    //    } else {
    //      document.getElementById('navbar').style.top = '-50px';
    //    }
    //    prevScrollpos = currentScrollPos;
    //  };
  }
}
