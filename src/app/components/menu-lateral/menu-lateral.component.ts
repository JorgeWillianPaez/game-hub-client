import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  // @Input() isExpanded: boolean = false;
  // @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  // showText = false;

  // toggleTextDisplay() {
  //   this.showText = !this.showText;
  // }

  // handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);

  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
