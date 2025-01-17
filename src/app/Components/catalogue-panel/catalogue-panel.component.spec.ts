import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CataloguePanelComponent } from './catalogue-panel.component';

describe('CataloguePanelComponent', () => {
  let component: CataloguePanelComponent;
  let fixture: ComponentFixture<CataloguePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CataloguePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CataloguePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
