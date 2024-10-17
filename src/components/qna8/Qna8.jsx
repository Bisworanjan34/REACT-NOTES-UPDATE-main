import React from 'react'

const Qna8 = () => {
  return (
    <div>
        <dl>

        
        <dt className='borange'> what is react-router ?</dt>
                           <dd>React Router is a popular routing library for React applications. It enables client-side navigation between  different views or pages of an application.
                           </dd>
                           <dt>installation:</dt>
                           <dd>npm install react-router-dom</dd>
                           <dt>key fetures</dt>
                           <dd>
                             1. Declarative Routing: Define routes using JSX components.</dd>
                           <dd>  2. Client-Side Navigation: Handle navigation between routes without full page reloads.</dd>
                           <dd>  3. Parameter Passing: Pass parameters between routes.</dd>
                             <dd>4. Route Protection: Implement authentication and authorization checks.</dd>
                         <dd>    5. Dynamic Routing: Create dynamic routes based on user input.</dd>
                           <dd>  6. Nested Routing: Nest routes within each other.</dd>
                            <dd> 7. Redirects: Redirect users to different routes.</dd>
                          <dd>   8. History Management: Manage browser history for client-side navigation.</dd>

                     
                      <dt>react router components</dt>
                      <dd>1. BrowserRouter: Top-level component for client-side routing.</dd>
                          <dd>2. Route: Renders a specific component for a route.</dd>
                         <dd> 3. Link: Used for client-side navigation between routes.</dd>
                         <dd> 4. Switch: Renders the first matching route.</dd>
                         <dd> 5. Redirect: Redirects users to different routes.</dd>
                        <dd>  6. NavLink: A special type of Link for navigation.</dd>
                        <dt>react router hooks:</dt>
                       
                      <dd>  1. useParams: Access route parameters.</dd>
                     <dd>   2. useLocation: Access current location.</dd>
                       <dd> 3. useHistory: Access browser history.</dd>
                      <dd>  4. useRouteMatch: Access route matching.</dd>


                      
                        <dt>what is useParams ()</dt>
                        <dd>useParams is a hook in React Router that allows you to access the parameters of the current route. It returns an object of key/value pairs of URL parameters.
                        </dd>
                        <dt>use cases</dt>
                        <dd>1. Dynamic routing</dd>
                           <dd> 2. Resource-based routing (e.g., /users/:id)</dd>
                           <dd> 3. Parameterized routing (e.g., /search?q=:query)</dd>
                    
                     <dt>what is useLocation()</dt>
                     <dd>useLocation is a hook in React Router that provides access to the current location (URL) of the application. It returns an object with information about the current location.
                     </dd>
                     <dt>properties of the location object</dt>
                     <dd>1. pathname: The current URL path.</dd>
                       <dd>  2. search: The current URL query string.</dd>
                    <dd>     3. hash: The current URL hash.</dd>
                        <dd> 4. state: The current location state.</dd>
                   <dd>      5. key: A unique key for the location.
                   </dd>

                       <dt>what is useHistory()</dt>
                       <dd>useHistory is a hook in React Router that provides access to the browser's history API. It allows you to manage the browser's history, navigate between routes, and manipulate the URL.
                       </dd>
                       <dt>properties and methods</dt>
                       <dd>1. push(url): Navigates to a new URL.</dd>
                         <dd>  2. replace(url): Replaces the current URL with a new one.</dd>
                         <dd>  3. go(n): Goes back or forward in the browser's history.</dd>
                         <dd>  4. goBack(): Goes back in the browser's history.</dd>
                         <dd>  5. goForward(): Goes forward in the browser's history.</dd>
                       <dd>    6. block():: Blocks navigation.</dd>
                       
                       <dd>By using useHistory, you can easily manage the browser's history and navigate between routes in your React applications.

                         </dd>
                    
                     <dt>what is useNavigate()</dt>
                     <dd>useNavigate is a hook in React Router v6 that provides a way to navigate between routes programmatically. It replaces the useHistory hook from React Router v5.
                     </dd>
                     <dt>key fetures : </dt>
                     <dd>1. Programmatic navigation</dd>
                       <dd>  2. Replaces useHistory</dd>
                     <dd>    3. Improved API</dd>
                     <dd>    4. Better support for concurrent rendering</dd>
                      
                         <dt>use cases</dt>
                         <dd>1. Navigation buttons</dd>
                           <dd>  2. Form submissions</dd>
                            <dd> 3. Redirects</dd>
                          <dd>   4. Dynamic routing</dd>
                           
                             <dt>comparision with useHistory</dt>
                             <dd>| Feature | useHistory | useNavigate |</dd>
                                   | --- | --- | --- |
                                <dd>   | Programmatic navigation | | |</dd>
                                 <dd>  | Replace history entry | | |</dd>
                                  <dd> | Pass state | | |</dd>
                               <dd>    | Relative navigation | | |</dd>
                                  <dd> | Concurrent rendering support | | |</dd>
                                 
                                   <dd>useNavigate provides a more streamlined and efficient way to manage navigation in React Router v6 applications.</dd>
             
                <dt>what is nested routing</dt>
                <dd>
                Nested routing refers to the practice of defining routes within other routes in a web application. This allows for more complex and hierarchical routing structures, enabling developers to organize their application's navigation and content in a more logical and scalable manner.

                </dd>
                <dt>how to use nested routing</dt>
                <dd>
                    1st wrap child component inside the parent component 
                </dd>
                <dd>like this <br /> 
                    {'<Route path="/parent" element={<Parent/>}>'} <br />
                      {'<Route path={"child"} element={"<Child/>"}'}
                    {'</Route>'}
                    
                    </dd>
                    <dd>different things is when you defin the path in child component</dd>
                    <dd>remove slash '/' add path name </dd>
                    <dd>one more thing is for showing rounting when u click link</dd>
                    <dd>one predefined component called {'<Outlet/> '}</dd>
                    <dd>this component to showing your all child routes </dd>
             </dl>
    </div>
  )
}

export default Qna8
