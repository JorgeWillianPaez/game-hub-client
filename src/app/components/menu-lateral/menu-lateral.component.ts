import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent {
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
