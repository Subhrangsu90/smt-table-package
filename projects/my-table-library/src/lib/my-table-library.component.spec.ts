import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableLibraryComponent } from './my-table-library.component';

describe('MyTableLibraryComponent', () => {
  let component: MyTableLibraryComponent;
  let fixture: ComponentFixture<MyTableLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTableLibraryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTableLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
