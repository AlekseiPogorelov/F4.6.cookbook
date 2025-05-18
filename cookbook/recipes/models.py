from django.db import models

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class Recipe(models.Model):
    category = models.ForeignKey(Category, related_name='recipes', on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='recipes/', blank=True, null=True)
    ingredients = models.TextField(help_text="Каждый ингредиент с новой строки")
    instructions = models.TextField()
    source_url = models.URLField(blank=True)
    cook_time = models.PositiveIntegerField(null=True)

    def __str__(self):
        return self.title

