import { Component } from '@angular/core';

@Component({
  selector: 'app-api-key',
  standalone: false,
  
  templateUrl: './api-key.component.html',
  styleUrl: './api-key.component.scss'
})
export class ApiKeyComponent {

  apiKey = '';

  generateApiKey(){
    // 

  }
}
