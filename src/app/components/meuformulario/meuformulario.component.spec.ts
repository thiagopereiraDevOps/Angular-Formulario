import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuformularioComponent } from './meuformulario.component';

describe('MeuformularioComponent', () => {
  let component: MeuformularioComponent;
  let fixture: ComponentFixture<MeuformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeuformularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeuformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
