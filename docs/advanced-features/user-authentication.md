---
sidebar_position: 1
title: User Authentication
description: Information on the framework's basic user authentication functionality.
---

# Basic User Authentication

The framework comes with built-in user authentication functionality that enables users to register and log in to your application. Out of the box, the user authentication feature includes two fields: **email** and **password**.

-   To **register a new user**, simply navigate to the URL `/user/register` and fill in the required fields. Passwords are secured by `BCRYPT`, but you can change the encryption algorithm in the file located at `Core/Security.php` if desired.

-   To **log in**, navigate to the URL `/user/login` and enter your email and password. Upon successful authentication, the user will be redirected to the default application page.

-   By default, the user profile only displays the email address. However, you can easily add **additional fields** to the user profile by modifying the code. To view the user's profile, navigate to the URL `/user/show/{id}` where `{id}` is the user ID. The user's email address and any additional profile fields will be displayed if they have been added.

Overall, the framework's basic user authentication feature provides a simple and secure way to manage user accounts in your application.
