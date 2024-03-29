import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have as title 'angular-example-app'", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("angular-example-app");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(".content span")?.textContent).toContain("angular-example-app app is running!");
  });

  it("should render toolbar text \"Dev-ops-kurssin harjoitusprojekti\"", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const toolbarText = compiled.querySelector(".toolbar")?.textContent;
    expect(toolbarText).toContain("Dev-ops-kurssin harjoitusprojekti");
  });

});

describe("PagenotfoundComponent", () => {
  let fixture: ComponentFixture<PagenotfoundComponent>;
  let component: PagenotfoundComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagenotfoundComponent],
    });

    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
  });

  it("should create the PagenotfoundComponent", () => {
    expect(component).toBeTruthy();
  });


});
