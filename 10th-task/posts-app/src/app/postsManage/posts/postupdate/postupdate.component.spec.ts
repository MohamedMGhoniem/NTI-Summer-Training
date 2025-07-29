import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostupdateComponent } from './postupdate.component';

describe('PostupdateComponent', () => {
  let component: PostupdateComponent;
  let fixture: ComponentFixture<PostupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostupdateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
