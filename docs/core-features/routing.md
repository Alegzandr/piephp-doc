---
sidebar_position: 1
title: Routing
description: Explanation of how the framework handles routing and URL mapping.
---

# Routing

The router is responsible for handling incoming requests and mapping them to the appropriate controller action. Our router is automatic, meaning that it requires minimal configuration to get started.

### Routing Convention

Our router follows a simple convention for mapping URLs to controller actions. The convention is as follows:

`/controller-name/action-name[/id]`

-   The **first** part of the URL represents the name of the **controller class** that will handle the request.
-   The **second** part represents the name of the **action method** within the controller that will be executed.
-   An **optional third** part can be added to the URL to pass **dynamic parameters** to the action method. This part can be named anything you want, and it will be passed to the action method as a parameter.

### Homepage

By default, the homepage of the application maps to the `AppController` and the `indexAction`. Therefore, if the URL does not include any controller or action, the router will automatically route the request to the AppController and the indexAction.

### Example

Here's an example of how the router maps a URL to a controller action:

```
URL: /blog/post/123

Controller Class: BlogController
Action Method: postAction($id)

Note: The value '123' will be passed as the $id parameter to the postAction method.
```

That's it! With this convention in place, our router can automatically handle incoming requests and route them to the appropriate controller and action, without requiring any additional configuration.
