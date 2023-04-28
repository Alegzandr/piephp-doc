---
sidebar_position: 4
title: Deployment
description: Information on deploying your framework to a production environment.
---

# Deployment

When you're ready to deploy your PHP application built with our framework to a production environment, there are a few key steps you'll need to follow.

1. **Apache Configuration**

    First, make sure that your Apache web server is installed and running on your server.
    Next, configure Apache to point to the root directory of your application. This can typically be done by setting the DocumentRoot in your Apache configuration file.
    Finally, enable the Apache rewrite module to allow for clean URLs. This can be done by running the command `a2enmod rewrite` on Debian-based systems or by uncommenting the appropriate line in your Apache configuration file on other systems.

2. **Database Configuration**

    Before deploying your application, be sure to update the database credentials in the `config.json` file to match your production environment.
    You should also make sure that your MySQL database is properly set up and running on your server.

3. **Copying Files**

    You can easily copy your application files to your production server using Git or a similar **version control system**. Simply clone your repository onto your server, or use `git pull` to **update** an existing clone with the latest changes.

Once you've completed these steps, your **PHP application** should be up and running on your production server!
