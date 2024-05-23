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

## NPM package manager 

    -> npm i bootstrap jquery popper --save -> Bootstrap v4 
    -> Bootstrap 5 
    npm i bootstrap popper --save 
    package.json 

    DO NOT MISS THIS STEP 
        update angular.json 
        RESTART your application

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
## Templates in Angular components 

1. whenever we generate a component 
    - 4 files 
        - template file ( .html )
        - style.css ( stylesheet)
        - class (component.ts file )
        - spec ( unit test file)

2. This is totally based on the choice at installing Angular app 
    - if you selected scss, it is ended with .scss
    - if you selected css, it is ended with .css
        style.css 

3. <comp_name>.component.html 
    - It works!

4. <comp_name>.component.ts file 

5. Decorator it gives definitinion and meaning to the 
    @ - it has prefix of @

6. by default Angular will add "app" as prefix 
    - selector -> "app-leads-listing" 
    - unique identifier to identify this component 
    - <app-leads-listing> 

        -> Can you change the default "app" prefix? 
            -> YES - we can change it throughout the app 
                -> "app" -> "arc-tutorials"
                -> angular.json -> change prefix 
        -> what will happen if i change? 
            -? Nothing happenns. Only thing you change, make sure you update with latest info
        -> will your app work or will it crash? 
            -> If you have updated the necessary components with latest prefix 

7. Templates in Components 

    - Two ways of using templates in Components 
        - templateUrl 
            - link the html file 

        - template 

    - templateUrl 
        -> is always 1 single html file 

    - template 
        -> we will pass the template itself instead of a html file 
        -> we just the HTML code that we want the component to display 
        -> we will use "backtick" and NOT single quote 
            backtick key can be found on left top side ` [~ this key press with shift]
8. stylesURL 
    -> is an array 
    -> it can take multple stylesheets as input 
    -> it can be one or more stylesheets 

9. Hands-on examples 
    Profile -> Modules 
        list-profile -> component 
## Directives 

1. Directive is a way to extend our HTML including both view as well as behaviour
2. Directives are used to extend the power of HTML 
3. Mainly 3 types of directives 

    Component Directive 

    Structural Directive 
        ngIf
        ngFor
        ngSwitch

    Attribute Directive 
        ngClass
        ngStyle 

4. Examples 
    AppComponent -> Componnt Directive 

5. Custom Directives 

    ng g directive highlight

    - This is an advanced topic 
    - We will revisit this topic again once we have our foundations better 

## Structrual Directives 

1. Structrual Directives will help us in extending, adding or removing elements from the HTML page 

2. DOM Mainupulation 

3. 3 types of Structrual Directives

    ngIf
    ngFor
    ngSwitch 

4. asterisk (*) means its a built in Structrual directive 

E.g ngIf 
    <div *ngIf="<condition>"> Value 1</div> 

 ## ngIf 

1. It will always have * astrisk symobl 
2. Built in structural directive 
3. The ngIf condition will evaluate the expression and result true or false 
4. We can use OR (||), And ( &&) and we can also use NOT(!) operators inside ngIf
5. We can have multiple use cases 

    - ngIf -> done
        -> logical opeartors 
            OR (||)
            AND (&&)
            NOT (!)
    - ngIf else -> 
    - ngIf then e

## ngStyle 

1. ngStyle is a built in directive used to set style/css properties 

2. [ngStyle] 

3. Any/All css properties using ngStyle 

4. more than 1 property on any DOM element 

5. We can also pass dynamic values to ngStyle 

6. ngStyle - hands-on examples 

    6.1 basic use case of ngStyle - setting a value using ngStyle 
    6.2 dynamic value from component 
    6.3 ngStyle with conditional operators 

7. Common mistakes 
    - Not giving correct {} curly-braces 
    - Not putting correct double/single qoutes where it is required 
    - Spelling mistakes in defining the css properties 
    - DO NOT put qoutes for the variables - it will become strings

## ngClass 

1. ngClass is a directive used for setting the class name of DOM elements 

2. we can provide more than 1 class names using ngClass 
    -> we can re-use the code for multiple DOM elements 

3. We can pass strings

4. we can pass array values

5. we can pass objects 

6. Common mistakes 
    - Not writing in correct qoutes 
    - not putting ngClass in square brackets 
    - using quotes for variables

hands-on examples:

1. <div [ngClass]="'c1'">This is ngClass example</div>

2. <div [ngClass]="'c1 c2 c3 c4'">This is ngClass Multiple classes example</div>

3. <div [ngClass]="styleClsProp">This is ngClass using dynamic variable example</div>

4. <div [ngClass]="conditionClsProp === 'c4'? 'c4' : 'c5'">This is ngClass using conditional check example</div>

5. <div [ngClass]="{c4: true, c5: false}">This is ngClass using Object example</div>
 ## For Reat API

 <!-- install  -->
 npm i angular-in-memory-web-api

 => npm install --save-dev @fortawesome/fontawesome-free
 update on angularjson file 
              "./node_modules/@fortawesome/fontawesome-free/css/all.css"


