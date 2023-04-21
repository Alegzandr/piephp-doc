---
sidebar_position: 2
title: Security
description: Information on how to secure your framework and protect against common security threats.
---

# Security

The security of your web application is paramount, and the framework provides a number of built-in security features to help you protect your users' data. In particular, the framework uses password hashing to protect user passwords, and takes steps to avoid SQL injection attacks.

### Password Hashing

To protect user passwords, the framework uses a secure, salted hashing algorithm to store passwords in the database. The **default algorithm** used is `bcrypt`, with a cost factor of 12. However, you can easily change this by modifying the `encryptPassword` method in the `Core/Security.php` file. Simply adjust the options passed to the `password_hash` function to suit your needs.

For example, to increase the cost factor to 14, you could modify the `encryptPassword` method as follows:

```php
public static function encryptPassword($password)
{
    $options = [
        "cost" => 14
    ];

    return password_hash($password, PASSWORD_BCRYPT, $options);
}
```

### SQL Injection Prevention

The framework takes care to prevent SQL injection attacks by using prepared statements and parameter binding when interacting with the database. All database requests made through the ORM are automatically prepared and executed using the `bindParam` method, which helps to prevent SQL injection attacks.

In addition, the framework **sanitizes** all user input to help prevent against XSS attacks and other forms of injection attacks. For example, in controllers, the email parameter is sanitized before being used in a query:

```php
$email = filter_var($this->queryParameters["email"], FILTER_SANITIZE_EMAIL);
```

By following best practices and utilizing the framework's built-in security features, you can help ensure that your web application is as secure as possible.
