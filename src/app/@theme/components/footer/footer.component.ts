import {Component} from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Powered by <b><a href="https://ajua.com" target="_blank">Ajua</a></b> 2020
    </span>
  `,
})
export class FooterComponent {
}
