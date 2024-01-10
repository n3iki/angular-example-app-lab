import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { PagenotfoundComponent } from "./pagenotfound.component";

describe("PagenotfoundComponent", () => {
  let component: PagenotfoundComponent;
  let fixture: ComponentFixture<PagenotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagenotfoundComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display \"404 - Page not found\"", () => {
    fixture.detectChanges();
    const errorMessageElement = fixture.nativeElement.querySelector("h1");
    expect(errorMessageElement.textContent).toContain("404 - Page not found");
  });

  it("should display a link to home page", () => {
    fixture.detectChanges();
    const componentHTML = fixture.nativeElement;
    const anchorElement = componentHTML.querySelector("a[href=\"/home\"]");
    expect(anchorElement).toBeTruthy();
  });
});
