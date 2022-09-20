import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LobyPage } from './loby.page';

describe('LobyPage', () => {
  let component: LobyPage;
  let fixture: ComponentFixture<LobyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LobyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
