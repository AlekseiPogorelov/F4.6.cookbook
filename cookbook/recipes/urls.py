from django.urls import path
from .views import CategoryList, CategoryDetail, RecipeDetail

urlpatterns = [
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe-detail'),
]
