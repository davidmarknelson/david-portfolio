import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let expandedMenu: boolean;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    expandedMenu = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with the expandedMenu property to be false', () => {
    expect(expandedMenu).toBeFalsy();
  });

  it('should change expandedMenu property to be true when hamburger is clicked for mobile', () => {
    const hamburger = fixture.debugElement.query(By.css('[data-target=navbarItems]'));
    spyOn(component, 'expandMenu').and.callFake(() => {
      expandedMenu = !expandedMenu;
    });
    hamburger.nativeElement.click();
    fixture.detectChanges();
    expect(expandedMenu).toBeTruthy();
  });

  it('should initialize with the menu closed for mobile', () => {
    const navbarItems = fixture.debugElement.query(By.css('#navbarItems'));
    expect(navbarItems.nativeElement.classList).not.toContain('is-active');
  });

  it('should open the menu for mobile when the hamburger is clicked', () => {
    const hamburger = fixture.debugElement.query(By.css('[data-target=navbarItems]'));
    hamburger.nativeElement.click();
    fixture.detectChanges();
    const navbarItems = fixture.debugElement.query(By.css('#navbarItems'));
    expect(navbarItems.nativeElement.classList).toContain('is-active');
  });

  it('should initialize without the background on navbarItems when menu is closed for mobile', () => {
    const navbarItems = fixture.debugElement.query(By.css('#navbarItems'));
    expect(navbarItems.nativeElement.classList).not.toContain('nav-background');
  });

  it('should add the background on navbarItems when the menu is opened on mobile', () => {
    const hamburger = fixture.debugElement.query(By.css('[data-target=navbarItems]'));
    hamburger.nativeElement.click();
    fixture.detectChanges();
    const navbarItems = fixture.debugElement.query(By.css('#navbarItems'));
    expect(navbarItems.nativeElement.classList).toContain('nav-background');
  });

  it('should call function that scrolls to the projects section when link is clicked', () => {
    const projectsBtn = fixture.debugElement.query(By.css('[data-target=projects]'));
    spyOn(component, 'scrollToElement').and.callFake(() => {});
    projectsBtn.nativeElement.click();
    fixture.detectChanges();
    expect(component.scrollToElement).toHaveBeenCalled();
  });

  it('should call function that scrolls to the skills section when link is clicked', () => {
    const projectsBtn = fixture.debugElement.query(By.css('[data-target=skills]'));
    spyOn(component, 'scrollToElement').and.callFake(() => {});
    projectsBtn.nativeElement.click();
    fixture.detectChanges();
    expect(component.scrollToElement).toHaveBeenCalled();
  });

  it('should call function that scrolls to the contact section when link is clicked', () => {
    const projectsBtn = fixture.debugElement.query(By.css('[data-target=contact]'));
    spyOn(component, 'scrollToElement').and.callFake(() => {});
    projectsBtn.nativeElement.click();
    fixture.detectChanges();
    expect(component.scrollToElement).toHaveBeenCalled();
  });
});
