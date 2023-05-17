import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgNotFoundComponent } from './pg-not-found.component';

describe('PgNotFoundComponent', () => {
  let component: PgNotFoundComponent;
  let fixture: ComponentFixture<PgNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgNotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
