from django.contrib import admin
from .models import Category, Recipe

class RecipeInline(admin.TabularInline):
    model = Recipe
    extra = 0

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    inlines = [RecipeInline]

@admin.register(Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ['title', 'category']
    list_filter = ['category']
    search_fields = ['title', 'ingredients']

