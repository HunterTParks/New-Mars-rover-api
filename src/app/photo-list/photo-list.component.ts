import { Component, Input } from '@angular/core';
import { PhotoService } from '../photo.service';
import { Photo } from '../photo.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css'],
  providers: [ PhotoService]

})
export class PhotoListComponent {
  @Input() childPhotos;
  constructor() { }

}
