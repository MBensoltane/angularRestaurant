import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLigneCommandesComponent } from './liste-ligne-commandes.component';

describe('ListeLigneCommandesComponent', () => {
  let component: ListeLigneCommandesComponent;
  let fixture: ComponentFixture<ListeLigneCommandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLigneCommandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLigneCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
