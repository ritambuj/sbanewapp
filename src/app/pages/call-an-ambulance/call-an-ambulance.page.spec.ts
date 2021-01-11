import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CallAnAmbulancePage } from './call-an-ambulance.page';

describe('CallAnAmbulancePage', () => {
  let component: CallAnAmbulancePage;
  let fixture: ComponentFixture<CallAnAmbulancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallAnAmbulancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CallAnAmbulancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
