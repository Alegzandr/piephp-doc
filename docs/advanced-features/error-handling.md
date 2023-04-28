---
sidebar_position: 3
title: Error Handling
description: Learn how to gracefully handle errors and exceptions within your application.
---

# Error Handling

Errors and exceptions are an unavoidable part of software development, and our framework has been designed to handle them gracefully. If an error occurs within your application, our framework will automatically generate an error page with a user-friendly message.

If you want to customize the error page, you can use the `ErrorController` class. This class allows you to specify the type of error (e.g. 404, 500, etc.) and provides a method for displaying a custom error page.

To use the ErrorController class, simply instantiate it with the appropriate error code and call the `show()` method. For example:

```php
$error_controller = new ErrorController(404);
$error_controller->show();
```

This will display a custom error page for a 404 error. The name of the error will be automatically included in the title of the page, so you can easily distinguish between different types of errors.

By using the `ErrorController`, you can provide a more tailored and user-friendly error page for your users.
