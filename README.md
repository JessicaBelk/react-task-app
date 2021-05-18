# I'm Incomplete :( 
    This React Task App doesn't have all the functionality it should. It's a work in progress. I'll continue to expand on it, but for now I'd like for you to fork it yourself, clone it for yourself, and have it exist in your local repository to pull this down and really see what it's doing. The first part of working on any project is understanding the codebase. Read through this code so far in order for you to understand what every function, every piece of JSX, every component is doing. Have a question about the code? Create a pull request on my code for us to start a conversation :D 

## What is React Router? 
    This gives you access to routing in React. It provides you with router components like BrowserRouter, Link, Switch, and Route. 
    
    >> BroswerRouter
        The basic route component is <Router>, and this provides the basic low-level functionalty for your router components. However, for most projects you'll see BroswerRouter, which is a higher-level Router that uses the HTML5 History API so that we can easily update our UI when the url changes

        Other routers include HashRouter, MemoryRouter, NativeRouter, and StaticRouter

    >> Switch and Route 
        These are matching components. Route takes a path and will render a specified component, and Switch will switch between those routes and render the first route that matches the url path. Order IS important when working with Switch. Make sure to render your miscellaneous routes at the end, and use the "exact" prop when exact path matching is required. 

    >> Link
        This gives you navigation by creating links that will render the components you have set up for your paths. There's two ways you can use the "to" prop to specify the location you're navigating to

        1. As a string: 
            <Link to="/tasks">Tasks</Tasks> // Just pass in your pathname

        2. As an object:
            <Link to={
                pathname: "/tasks",
                search: a string representation of query params,
                hash: a hash to put into the URL, e.g. #a-hash
                state: state to persist to the location (so if you have state that you need to pass along to the next location, you can do that here)
            }> Tasks </Link>

## How to Redirect? 
    There's a Redirect component that you can utilize to navigate to a new location. If you don't want to work with HOCs, you can utilize this to render an alternate component. e.g.:

    <Route exact path="/">
        { isLoggedIn ? <Redirect to="/dashboard"> : <LoginPage /> }
    </Route>

    So here, if the user is not logged in, they get met with the Login Page, but if they are, then they'll get redirected to the Dashboard Page

    It can be up to you what method you want to use. Personally, I like to wrap my protected routes in an HOC and use the Redirected component within that, but this gives you just the same functionality

## What is Match? 
    A match object contains information about how a <Route path> matched the URL. match objects contain the following properties:
        params - (object) Key/value pairs parsed from the URL corresponding to the dynamic segments of the path
        isExact - (boolean) true if the entire URL was matched (no trailing characters)
        path - (string) The path pattern used to match. Useful for building nested <Route>s
        url - (string) The matched portion of the URL. Useful for building nested <Link>s

    You’ll have access to match objects in various places:
        Route component as this.props.match
        Route render as ({ match }) => ()
        Route children as ({ match }) => ()
        withRouter as this.props.match
        matchPath as the return value
        useRouteMatch as the return value

    If a Route does not have a path, and therefore always matches, you’ll get the closest parent match. Same goes for withRouter.

## What is an HOC?
    A Higher Order Component is a component that wraps around another and injects it with extra functionality. Common use cases for this is to create protected routes, create some sort of a fragment component to render children components, and with the withRouter component from react-router-dom

    >> withRouter
        You can get access to the history object’s properties and the closest <Route>'s match via the withRouter higher-order component. withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.

## More on Routing
    to get a better idea on how all these components work, head over to the reactrouter site, where they have a good breakdown of everything in their documentation with examples provided: [https://reactrouter.com/web/guides/quick-start]

    
