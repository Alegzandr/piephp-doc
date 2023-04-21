---
sidebar_position: 3
title: Configuration
description: Guidelines for configuring the framework to suit your needs.
---

# Configuration

Before starting this, make sure you created an empty MySQL database.

You can automatically configure and import default database running:

```bash
./console/exec install
```

or go at the root, manually copy `config.json.example` to `config.json`.
To customize the configuration, simply edit it using a text editor of your choice.

Here is an overview of the configuration options:

-   `host` The hostname or IP address of the server hosting the database.

-   `port` The port number on which the database server is listening.

-   `user` The username used to connect to the database.

-   `password` The password used to connect to the database.
