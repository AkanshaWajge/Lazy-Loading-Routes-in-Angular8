# Lazy-Loading-Routes-in-Angular8
With lazy loaded modules in Angular, it’s easy to have features loaded only when the user navigates to their routes for the first time. This can be a huge help for your app’s performance and reducing the initial bundle size. loadChildren expects a function that uses the dynamic import syntax to import your lazy-loaded module only when it’s needed.

#Run command : ng serve

#Tutorials Steps: 

#Step1: create a new feature module
        > ng g module shop

#Step2: Create 3 components inside our shop feature module
        > ng g c shop/cart
        > ng g c shop/checkout
        > ng g c shop/confirm

    Don't import feature modules that should be lazy loaded in your app module, otherwise they'll be eager loaded.

#Step3: loadChildren in Main Route Configuration
loadChildren expects a function that uses the dynamic import syntax to import your lazy-loaded module only when it’s needed. the dynamic import is promise-based and gives access to the module, where the module’s class can be called.

#Step4: Route Config in Feature Module
In shop/shop.routing.ts configure routes specific to the feature module

#Step5: Include routes with RouterModule’s forChild method instead of forRoot in shop/shop.module.ts

#Verify that lazy loading works in DevTools by seeing if a new chunk is loaded when navigating to a route on the lazy loaded module
reference- alligator.io
