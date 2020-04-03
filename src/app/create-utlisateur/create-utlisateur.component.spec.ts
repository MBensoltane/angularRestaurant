import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUtlisateurComponent } from './create-utlisateur.component';

describe('CreateUtlisateurComponent', () => {
  let component: CreateUtlisateurComponent;
  let fixture: ComponentFixture<CreateUtlisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateUtlisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUtlisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
