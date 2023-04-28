---
sidebar_position: 3
title: Templating Engine
description: Overview of the framework's built-in templating engine and how to use it.
---

# Templating Engine

The templating engine in our framework is designed to make it easy to create dynamic, data-driven web pages. Here are the key features and syntax for our templating engine:

### Displaying Variables

You can display the value of a variable using the `{{ }}` syntax. Here is an example:

```php
{{ $variable }}
```

Note that you can include this syntax anywhere in your HTML to display the value of a variable.

### Conditional Statements

You can use conditional statements to display different content based on a condition. Here is an example syntax:

```php
@if(condition)
    content
@elseif(condition)
    content
@else
    content
@endif
```

Note that you can include multiple lines of content within the @if and @else blocks.

### Looping with @foreach

You can use the @foreach statement to loop through an array or collection of data. Here is an example syntax:

```php
@foreach($users as $user)
    {{ $user }}
@endforeach
```

Note that you must use `{{ }}` to display the values of variables within the loop.

### Checking for Existence with @isset and @empty

You can check whether a variable or value exists using the @isset and @empty statements. Here is an example syntax:

```php
@isset($variable)
    content
@endisset
```

```php
@empty($variable)
    content
@endempty
```

Prefer this instead of `@isset($_POST)` in case you want to display a superglobal:

```php
@if(isset($_POST))
    content
@endif
```

That's it for our templating engine! With these features, you can create dynamic, data-driven web pages that display different content based on conditions and iterate through collections of data.
