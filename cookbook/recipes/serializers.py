from rest_framework import serializers
from .models import Category, Recipe

class RecipeSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    ingredients = serializers.SerializerMethodField()
    instructions = serializers.SerializerMethodField()

    class Meta:
        model = Recipe
        fields = [
            'id',
            'title',
            'image',
            'ingredients',
            'instructions',
            'category',
            'source_url',
            'cook_time'
        ]

    def get_ingredients(self, obj):
        return obj.ingredients.splitlines()

    def get_instructions(self, obj):
        return obj.instructions.splitlines()

class CategorySerializer(serializers.ModelSerializer):
    recipes = RecipeSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'recipes']
