import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutiqueComponentComponent } from './boutique-component.component';

describe('BoutiqueComponentComponent', () => {
  let component: BoutiqueComponentComponent;
  let fixture: ComponentFixture<BoutiqueComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoutiqueComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoutiqueComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
