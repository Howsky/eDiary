import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ediary-img-uploader',
  templateUrl: './img-uploader.component.html',
  styleUrls: ['./img-uploader.component.scss']
})
export class ImgUploaderComponent implements OnInit {

  image = null;
  previewLoaded = false;

  @Output() fileSelected = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onFileSelected(event) {
    console.log(event.target.files);
    const fileSize = event.target.files[0].size / 1024 / 1024;
    if (event.target.files && event.target.files[0] && fileSize < 4) {

      const reader = new FileReader();
      reader.onload = (ev: any) => {
        this.image = ev.target.result;
        // this.mainPhoto = event.target.files[0];
        this.fileSelected.emit(event.target.files[0]);
      };
      reader.readAsDataURL(event.target.files[0]);
      this.previewLoaded = true;
    } else if (fileSize >= 4) {
      console.log('size too big');
    }
  }


}
