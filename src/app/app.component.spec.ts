import { ComponentFixture, TestBed, async, inject, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { AppComponent } from './app.component';
import { MainService } from './main.service';
import { HttpModule, XHRBackend, ResponseOptions, Response, RequestMethod} from '@angular/http';
import { MockBackend, MockConnection} from '@angular/http/testing';

describe('AppComponent Unit Test', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('Panel title Initilization', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const de = fixture.debugElement;
    const el = fixture.nativeElement;
    const content = el.getElementsByClassName('panel-heading');
    for (let i = 0; i < content.length; i++) {
      const item = content[i].innerText;
      expect(item).toContain('test');
    }
    expect(el.querySelector('h2').innerText).toContain('Panel');
  }));
});

describe('Methods Initialization', () => {
  let app: AppComponent;

  beforeEach(() => {
    app = new AppComponent();
  });

  it('Setting new message', () => {
    app.setMessage('Testing');
    expect(app.message).toBe('Testing');
  });

  it('Cleaning up the message', () => {
    app.clearMessage();
    expect(app.message).toBe('');
  });
});

describe('Method Intialization Unit Test', () => {
  let sv: MainService;

  beforeEach(() => {
    sv = new MainService();
  });

  it('Updating the public variables', () => {
    sv.getQuote('Testing');
    expect(sv.quote).toBe('Testing');
  });
});


describe('Component to View data-biding Unit Test', () => {
let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: []
    });

    fixture = TestBed.overrideComponent(AppComponent, {
      set: {
        template: '<span>{{message}}</span>'
      }})
      .createComponent(AppComponent);

    fixture.detectChanges();
  });

  it('Component to Template binding Unit Test', async(inject([], () => {
    fixture.componentInstance.setMessage('Test message');
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('span').innerText).toEqual('Test message');
    });
  })));

});
