import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalculatePipe } from '../../models/calculatepipe';
import { ErrorComponent } from '../Error';
import { BusStopsComponent } from '.';
import { MyService } from '../../services/myservice';
import { MockService } from '../../services/myservice.mock';
import { environment } from 'src/environments/environment';

describe('BusStopsComponent', () => {
  let component: BusStopsComponent;
  let fixture: ComponentFixture<BusStopsComponent>;
  let de: DebugElement;

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
        BusStopsComponent,
        ErrorComponent,
        CalculatePipe
      ],
      providers: [
        { provide: MyService, useClass: MockService }
      ]
    }).createComponent(BusStopsComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`component should be truthy`, () => {
    expect(component.searchText).toEqual('');
    expect(component.busstops).toBeUndefined();
    expect(component.targetAmount).toEqual(environment.targetAmount);
    expect(component.serviceUp).toEqual(true);
  });

});