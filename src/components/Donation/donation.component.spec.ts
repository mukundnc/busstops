import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CalculatePipe } from '../../models/calculatepipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from '../Error';
import { DonationComponent } from '.';
import { MyService } from '../../services/myservice';
import { MockService } from '../../services/myservice.mock';

describe('BusStopsComponent', () => {
  let component: DonationComponent;
  let fixture: ComponentFixture<DonationComponent>;
  let de: DebugElement;
  let service: MyService;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule
      ],
      declarations: [
        DonationComponent,
        ErrorComponent,
        CalculatePipe
      ],
      providers: [
        { provide: MyService, useClass: MockService }
      ]
    }).createComponent(DonationComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`component should be truthy`, () => {
    expect(component.serviceUp).toEqual(true);
    expect(component.donation).toBeDefined();
    expect(component.stop).toBeUndefined();
    expect(component.calculate).toBeTruthy();
    expect(component.card).toBeDefined();
  });

});