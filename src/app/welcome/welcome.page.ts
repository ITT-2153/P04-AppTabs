import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Importar router

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.routes.navigateByUrl('tabs');
    }, 3000);
  }

}
