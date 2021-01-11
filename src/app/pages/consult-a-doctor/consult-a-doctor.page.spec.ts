import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultADoctorPage } from './consult-a-doctor.page';

describe('ConsultADoctorPage', () => {
  let component: ConsultADoctorPage;
  let fixture: ComponentFixture<ConsultADoctorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultADoctorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultADoctorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
