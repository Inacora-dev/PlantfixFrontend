import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { HttpTokenService } from './auth/services/http-token.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent implements OnInit {
  title = 'Plantfix';

  isOpen = signal(true);
  hideLayoutRoutes = ['login', 'register'];
  currentRoute = '';

  toggleSidebar() {
    this.isOpen.update(open => !open);
  }

  constructor(private tokenSvc: HttpTokenService, private router: Router) {
  }

  ngOnInit(): void {
    this.tokenSvc.getCsrfToken().subscribe();

  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.currentRoute = event.urlAfterRedirects.replace('/', '');
    });
};

  

}

