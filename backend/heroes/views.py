from rest_framework import generics
from .models import Heroes
from .serializers import HeroesSerializer


class ListHeroesView(generics.ListAPIView):
    queryset = Heroes.objects.all()
    serializer_class = HeroesSerializer
