import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const queryResult = compiled.querySelector('h1');
    expect(queryResult?.textContent).toContain('Sharethis Buttons - Angular');
  });

  it('should render subtitles', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const h2Query = Array.from(compiled.querySelectorAll('h2'));
    const resultStr = h2Query.map((h2q) => h2q.textContent).join('');

    expect(resultStr).toContain('Inline Share Buttons');
    expect(resultStr).toContain('Inline Follow buttons');
    expect(resultStr).toContain('Inline Reaction Buttons');
  });
});
