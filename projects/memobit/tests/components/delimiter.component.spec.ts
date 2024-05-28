import { DelimiterComponent } from '../../src/components/delimiter/delimiter.component';

describe('DelimiterComponent', () => {
  let component: DelimiterComponent;

  beforeEach(() => {
    component = new DelimiterComponent();
  });

  it('should add "delimiter-with-vertical-margins" class when hasVerticalMargins is true', () => {
    component.hasVerticalMargins = true;
    component.ngOnInit();
    expect(component.cssClasses).toContain('delimiter-with-vertical-margins');
  });

  it('should not add "delimiter-with-vertical-margins" class when hasVerticalMargins is false', () => {
    component.hasVerticalMargins = false;
    component.ngOnInit();
    expect(component.cssClasses).not.toContain('delimiter-with-vertical-margins');
  });

  // Add similar test cases for hasTopMargin, hasBottomMargin, and hasCanceledHorizontalMargins

  it('should add "delimiter-top-margin" class when hasTopMargin is true', () => {
    component.hasTopMargin = true;
    component.ngOnInit();
    expect(component.cssClasses).toContain('delimiter-top-margin');
  });

  it('should add "delimiter-bottom-margin" class when hasBottomMargin is true', () => {
    component.hasBottomMargin = true;
    component.ngOnInit();
    expect(component.cssClasses).toContain('delimiter-bottom-margin');
  });

  it('should add "delimiter-cancel-horizontal-margins" class when hasCanceledHorizontalMargins is true', () => {
    component.hasCanceledHorizontalMargins = true;
    component.ngOnInit();
    expect(component.cssClasses).toContain('delimiter-cancel-horizontal-margins');
  });
});
