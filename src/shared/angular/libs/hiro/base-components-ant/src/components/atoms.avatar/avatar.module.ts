import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { UserOutline } from '@ant-design/icons-angular/icons';
import Avatar from './avatar.component';

const icons: IconDefinition[] = [UserOutline];

@NgModule({
  declarations: [Avatar],
  exports: [Avatar],
  imports: [CommonModule, NzIconModule.forChild(icons), NzAvatarModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AvatarModule {}
