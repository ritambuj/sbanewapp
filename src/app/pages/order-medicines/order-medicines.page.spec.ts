import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrderMedicinesPage } from './order-medicines.page';

describe('OrderMedicinesPage', () => {
  let component: OrderMedicinesPage;
  let fixture: ComponentFixture<OrderMedicinesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderMedicinesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrderMedicinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
