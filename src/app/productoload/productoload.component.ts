import { Component } from '@angular/core';

@Component({
  selector: 'app-productoload',
  templateUrl: './productoload.component.html',
  styleUrls: ['./productoload.component.css']
})
export class ProductoloadComponent {
  selectedFile: File | null = null;

 

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;
  }
}
