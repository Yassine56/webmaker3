import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteNewComponent } from './website-new.component';

describe('WebsiteNewComponent', () => {
  let component: WebsiteNewComponent;
  let fixture: ComponentFixture<WebsiteNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
