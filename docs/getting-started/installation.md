---
sidebar_position: 2
title: Installation
description: Instructions for installing the framework on your local machine or server.
---

# Installation

### Requirements

Before installing the framework, make sure your system meets the following requirements:

-   PHP version 8.0 or later

### Installation Steps

1. Download the framework from [here](https://github.com/EpitechWebAcademiePromo2024/W-PHP-502-MLN-2-2-PiePHP-alexandre1.farrenq/archive/refs/heads/main.zip). Extract the files to your local machine.
2. Configure a Apache Virtual Host pointing to project's root.
3. Create an empty MySQL database.

    ```bash
    mysql -u username -p
    ```

    ```sql
    CREATE DATABASE piephp;
    ```

4. Run the installation script by running

    ```bash
    ./console/exec install
    ```

5. Visit the framework in your web browser to verify that it's installed correctly.

Congratulations! You've successfully installed the framework. Now, you're ready to start building your project.
