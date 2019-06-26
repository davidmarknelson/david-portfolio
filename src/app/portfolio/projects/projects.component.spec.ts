import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProjectsComponent } from './projects.component';
import { By } from '@angular/platform-browser';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let images: Array<string>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('modals', () => {
    images  = [
      'portfolio1',
      'portfolio2',
      'air1',
      'air2',
      'air3',
      'air4',
      'poke1',
      'poke2',
      'poke3',
      'poke4'
    ];
    
    it('should be hidden when the component is created', () => {
      for (let img of images) {
        const imgModal = fixture.debugElement.query(By.css('[data-test=' + img + 'Modal]'));
        expect(imgModal.classes['is-active']).toEqual(false);
      }
    });

    it('should display when the project image is clicked', () => {
      for (let img of images) {
        const imgFigure = fixture.debugElement.query(By.css('[data-test=' + img + 'Figure]'));
        imgFigure.nativeElement.click();
        fixture.detectChanges();
        const imgModal = fixture.debugElement.query(By.css('[data-test=' + img + 'Modal]'));
        expect(imgModal.classes['is-active']).toEqual(true);
      }
    });
  });

  describe('buttons', () => {
    it('should open links in another window', () => {
      const buttons = fixture.debugElement.queryAll(By.css('.button'));
      for (let button of buttons) {
        expect(button.attributes.target).toContain('_blank');
      }
    });
  });
});
