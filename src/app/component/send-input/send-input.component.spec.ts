import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendInputComponent } from './send-input.component';

describe('SendInputComponent', () => {
  let component: SendInputComponent;
  let fixture: ComponentFixture<SendInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
