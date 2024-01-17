# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## for the reference gothrough this github link - https://github.com/arctutorials

## Added the Bootstrap CSS link & JS link in index.js & commented it

## Install bootstrap jquery popper

npm install bootstrap jquery popper --save
If you don't give the save it goes to global reference we use save it comes to the local node-modules reference is good


## Update angular.json file

 "styles": [
              "src/styles.scss",
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.min.js",
              "./node_modules/popper/index.js",
              "./node_modules/jquery/dist/jquery.min.js"
            ]

## Install Angular Material

ng add @angular/material

## Angular CLI - Command Line Interface 

    - schematics -> angular.json / package.json 
        ng serve 
        ng build
        ng test 
        ng lint 
        ng e2e 
    - commands 

        ng new <project_name>

        ng generate component <component_name>
        ng generate module <module_name>
        ng generate pipe <pipe_name>
        ng generate directive 
    
    angular.json 

        demo 
            ng serve 
            ng test 
                - test and run all our unit test scripts 

            ng e2e 
                - test and run all our end to end tests 

            ng lint 

            ng build 
                -> build your app and make it ready for production env deployment
                 -> dist <simpleCRM>
                    vendor.js
                    main.js 
                    style.css

            ng generate 
            ng g 
                components 
                pipes
                modules 
                services 
                directives 
                applications 

## CRM Application 

    src 
        contacts -> Module
            add-contact -> components inside module 
            edit-contact -> components inside module 
            delete-contact -> components inside module 
            view-contact -> components inside module 
        users
            add-user -> components inside module 
        orders
        leads
        reports
        settings
        profile

        shared
            auth
            tokens

        services -> HTTP/ Resuable code
            contact-service.ts 
            user-service.ts

        assets
            images
            mock-data 

        pipes 
            highlight-pipe 

## Angular Modules 

1. Angular is a modular-based architecture 
    - There are lot of modules which are built-in 
    - Examples 
        - BrowserModule
        - BrowserAnimationsModule

    - Angular Material Library
        - MatButtonModule
        - MatDropDownModule 

2. All the code and functionality is grouped in a module 

3. Whenever you see a @ symbol - it's a decorator 

4. What modules consist
    - declarations
        - this is where we will add all the components of the module 
    - imports 
        - we can import modules inside a module 
    
    - providers 
        - services that we need will be injected here 
    
    - Bootstrap 
        - what is the first component, the module should load 

    - exports   
        - is to export and expose the component outside of the module  

5. Every Angular application should have atleast 1 module 

6. By default, the Angular framework provides us with AppModule 

7. The AppModule will have a component by the name 
    - AppComponent 
    
8. Whenever we are building Angular applications 
    - We will always think of Modules first 

    E.g     
        Contacts
        Users 
        Leads
        Opportunites
        Settings 
        Profile 
        Authenctication

    Free User 
        Contacts
        Users 
    Premium User 
        Contacts
        Users 
        Leads
        Opportunites
    Enterprise Users 
        Contacts
        Users 
        Leads
        Opportunites
        Settings 
        Profile 
        Authenctication

9. Feature Modules 
    - You can turn on or off the modules based on conditions 

10. Modules - Grouping 
    - components 
    - services 
    - pipes
    - directives 

11. Create a custom Module 
    ng generate module contacts
    ng generate module leads
    ng generate module settings
    ng generate module Opportunites
    ng generate module authentication 

## Angular Components 

1. Components are the most important and basic building blocks of Angular apps 

2. Authentication Module 
    - new-user 
    - login 
    - forgot-password
    - reset-password 

3. Component is a smallest functionality that you will implement in your application 

4. When we group multiple Components it becomes a module 

5. We can have paren-child relationship of components 

6. We can have components inside components 

7. Tree-herirachy of components 

    Dashboard 
        display-contact-list 
            contact-grid
                contact-import 
                contact-export  
            contact-options
            
8. lets create some custom components 
    ng g component add-contact 
    ng g component edit-contact
    ng g component list-contacts
    ng g component delete-contact 
    ng g component view-contact 

9. Every component has 4 files auto-generated with it 
    - component.css -> stylesheet of the component 
    - component.html -> view or html or template file -> UI 
    - component.spec.ts -> It will have the unit test script for component  (karma test case)
    - component.ts -> it will be a class file which will have methods -> Logic 

    Practice WORK check & verify ===>     
        -> verify all the components generated and go through the code 

10. Component decorator inside the component.ts file 

    selector -> unique identifier for the component
        -> id of the component 
        -> using this selector we will use the component  
    templateUrl -> your HTML code 
        - component.html file 
    styleURLS -> for linking your component stylesheet 
        - component.css 
## Angular component lifecycle hooks
------------------------------------ 
1. ## ngOnChanges() 
-> Used in pretty much any component that has an input.
-> Called whenever an input values changes
-> Is called the first time before ngOnInit()
2. ## ngOnInit()
-> Used to initialize data in a component 
-> Called after input values are set when a component is initialized
-> Added to every component by defauls by the Angular CLI
-> Called only once
3. ## ngDoCheck()
-> Called during all change detection runs
-> A run through the view by Angular to Update/Detect changes
4. ## ngAfterContentInit()
-> Called only once after first ngDoCheck()
-> Called after the first run through of initializing contect
5. ## ngAfterContentChecked()
-> Called after every ngDoCheck()
-> Waits till after ngAfterContentInit() on first run through
6. ## ngAfterViewInit()
-> Called after Angular initializes component and child component content
-> Called only nce after view is initialized
7. ## ngAfterViewChecked()
-> Called after all the content is initialized & checked. (Conmponent & child components).
-> First call is after the ngAfterViewinit()
-> Called after every ngAfterChecked() call is completed
8. ## ngOnDestroy()
-> Used to clean up any necessary code when a component is removed from the DOM (Document Object Model).
-> Fairly often used to unsubscribe from the things like services
-> Called only once just before the component is removed from the DOM

====================================
1. By default we have ngonit lifecycle hook

2. Whichever lifecycle hooks we want to use
    1. import it in the class 
    2. Extend the implements interface 
    3. Implement the method  

3. We can have any number of lifecycle hooks implemented 

4. Its too early for us to implement all of them 

    - We will revisit this topic again component communication 

    - Component Communication 
        - Between components 
            Parent to Child 
            Child to Parent 

## Communication between various Angular components 

Contacts -> Module 

    contact-listing -> parent component 
        contact-grid -> child component 
        contact-tools -> child component 
            download-pdf -> sub-child component 
            download-excel 

Leads -> Module 

    leads-listing -> parent component 

Components are hierarchial 
Parent-child relationship 

p1
    child1
        sub-child1
    child2

p2 
    p2-child1

1. Communications between the related components 
    parent component -> child components
        @Input 
    parent Communication between various Angular components 

Contacts -> Module 

    contact-listing -> parent component 
        contact-grid -> child component 
        contact-tools -> child component 
            download-pdf -> sub-child component 
            download-excel 

Leads -> Module 

    leads-listing -> parent component 



Components are hierarchial 
Parent-child relationship 

p1
    child1
        sub-child1
    child2

p2 
    p2-child1

1. Communications between the related components 
    parent component -> child components
        @Input 
    child components ->  parent components
        @Output & EventEmmiter

    Leads Module 
        leads-listing 
            leads-grid 
            leads-tools 
                download-excel
                download-pdf

2. communication between totally unrealted components 
    Component1 -> Services <-   Component2

    services 
        is a common reusable piece of functionality shared between different components  components <- components
        @Output & EventEmmiter

    Leads Module 
        leads-listing 
            leads-grid 
            leads-tools 
                download-excel
                download-pdf

2. communication between totally unrealted components 
    Component1 -> Services <-   Component2

    services - 
        is a common reusable piece of functionality shared between different components  
