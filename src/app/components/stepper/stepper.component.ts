import { Component } from '@angular/core';
import { NbMenuItem, NbMenuModule, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [NbSidebarService]
})
export class StepperComponent {
  constructor(private sidebarService: NbSidebarService) {
  }

  isClicked = false;

  items: NbMenuItem[] = [
    {
      title: 'Profile',
      expanded: true,
      badge: {
        text: '30',
        status: 'primary',
      },
      children: [
        {
          title: 'Messages',
          badge: {
            text: '99+',
            status: 'danger',
          },
        },
        {
          title: 'Notifications',
          badge: {
            dotMode: true,
            status: 'warning',
          },
        },
        {
          title: 'Emails',
          badge: {
            text: 'new',
            status: 'success',
          },
        },
      ],
    },
  ];

  compact()  {
    this.isClicked = !this.isClicked;
    console.log(this.isClicked);
    
    if(!this.isClicked){
      this.sidebarService.compact();
      }
      else{
        this.sidebarService.expand();
      }
  }
}
