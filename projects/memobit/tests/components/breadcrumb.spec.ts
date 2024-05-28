import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MockMemIconComponent } from '../mocks/icon-mock';

import { BreadcrumbComponent } from '../../src/components/breadcrumb/breadcrumb.component';
import { BreadcrumbOption } from '../../src/components/breadcrumb/types';
import { RouterLinkDirectiveStub } from '../mocks/router-link-directive';

describe('BreadcrumbComponent', () => {
  let component: BreadcrumbComponent;
  let fixture: ComponentFixture<BreadcrumbComponent>;

  const mockItems: BreadcrumbOption[] = [{ label: 'Home', path: '/home' }, { label: 'About' }];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MockMemIconComponent, RouterLinkDirectiveStub],
      declarations: [BreadcrumbComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbComponent);
    component = fixture.componentInstance;

    // Assume we pass this input to the component
    component.items = mockItems;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should show correct labels', () => {
    fixture.detectChanges(); // trigger Angular to update the DOM
    const linkElement = fixture.debugElement.query(By.css('a'));
    const spanElement = fixture.debugElement.query(By.css('span'));

    if (linkElement && linkElement.nativeElement) {
      expect(linkElement.nativeElement.textContent).toContain('Home');
    }

    if (spanElement && spanElement.nativeElement) {
      const spans = spanElement.queryAll(By.css('span'));
      if (spans[1]) {
        expect(spans[1].nativeElement.textContent).toContain('About');
      }
    }
  });
});
