---
sidebar_position: 2
title: ORM
description: Description of how the framework simplifies database interactions.
---

# ORM (Object-Relational Mapping)

The ORM (Object-Relational Mapping) in our framework is designed to simplify database interactions and improve data consistency. The ORM maps database tables to PHP classes, allowing you to interact with your data in an object-oriented way.

### Getting Started

To get started with the ORM, you'll need to create a model that extends the ORM class. Fields in your model should be protected properties.

```php
use Core\Entity;

class ArticleModel extends Entity
{
  protected $title;
  protected $content;
}
```

### Basic CRUD Operations

The ORM supports basic CRUD (Create, Read, Update, Delete) operations. To create a new record, use the create() method.

```php
$model = new ArticleModel([
  "title" => "A great title",
  "content" => "This is a wonderful blog article",
]);
$model->create();
```

To read a record by ID, use the read() method.

```php
$article = $model->read(1);
```

To update a record, use the update() method.

```php
$model = new ArticleModel([
  "title" => "A great title",
  "content" => "This is a wonderful blog article",
]);
$model->update(1);
```

To delete a record by ID, use the delete() method.

```php
$model->delete(1);
```

### Advanced Querying

The ORM also supports advanced querying with the find() method. You can pass an associative array of parameters to the find() method to customize the query. By default, the find() method returns all records in the specified table.

```php
$articles = $model->find([
  "WHERE" => "title = 'A great title'",
  "ORDER BY" => "articles.id ASC",
  "LIMIT" => "10"
]);
```

### Relations

The ORM also supports relations between tables. To define a one-to-many relation, add the addOneToMany() method to the parent constructor.

```php
use Core\Entity;

class ArticleModel extends Entity
{
  protected $title;
  protected $content;
  protected $user_id;

  public function __construct() {
    parent::__construct();
    $this->setOneToManyRelation("users");
  }
}
```

To define a many-to-many relation, add the addManyToMany() method to one of the two tables.

```php
use Core\Entity;

class ArticleModel extends Entity
{
  protected $title;
  protected $content;
  protected $user_id;

  public function __construct($data = []) {
    parent::__construct($data);
    $this->setManyToManyRelation("tags");
  }
}
```

Once the relations are defined, you can use them in your queries.

```php
$model = new UserModel();
$user_articles = $model->find([
  "WHERE" => "title = 'A great title'",
  "ORDER BY" => "articles.id ASC",
  "LIMIT" => "10"
]);
```

### Error Handling

The ORM includes error handling to help you catch and handle errors when interacting with the database. If an error occurs during a query, the ORM will throw an exception.

```php
try {
  $article_model = new ArticleModel([
    "title" => "A great title",
    "content" => "This is a wonderful blog article",
  ]);
  $article_model->create();
} catch (Exception $e) {
  echo "Error: " . $e->getMessage();
}
```

### Conclusion

In conclusion, the ORM in our framework simplifies database interactions and improves data consistency. With support for basic CRUD operations, advanced querying, and relations, the ORM is a powerful tool for managing your data in a PHP project.
