import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaCampanhaComponent } from './nova-campanha.component';

describe('NovaCampanhaComponent', () => {
  let component: NovaCampanhaComponent;
  let fixture: ComponentFixture<NovaCampanhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaCampanhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
