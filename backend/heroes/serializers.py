from rest_framework import serializers
from .models import Heroes


class HeroesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Heroes
        fields = ("name", "primary_attr", "attack_type", "roles")