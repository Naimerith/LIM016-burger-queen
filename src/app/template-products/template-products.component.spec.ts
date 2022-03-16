import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateProductsComponent } from './template-products.component';

describe('TemplateProductsComponent', () => {
  let component: TemplateProductsComponent;
  let fixture: ComponentFixture<TemplateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
