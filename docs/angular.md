1. Add new project

2. Add module federation for app host
   ng add @angular-architects/module-federation --project appHost --port 3901 --type host
   ng add @angular-architects/module-federation --project appManagement --port 3902 --type remote

3. Create angular library :
   ng new angular-libs --create-application false
   cd angular-libs

4. Create angular library package :
   ng generate library base-components-ant-design
