from django.urls import path
from .views import ListHeroesView

urlpatterns = [
    path('', ListHeroesView.as_view(), name="heroes-all")
]